/************************\
*	Imports & functions
\************************/
const { promisify } = require("util");
const toKebabCase = require("dashify");
const { ncp } = require("ncp");
const fs = require("fs");

function grabJSON(url){
	return readFilePromise(url, "utf-8")
	//.then(data => data.replace("\n", ""))
	//.then(data => {console.log(data); return data;})
	.then(JSON.parse);
}

/************************\
*	Promisification
\************************/
const readFilePromise = promisify(fs.readFile);
const writeFilePromise = promisify(fs.writeFile);
const renamePromise = promisify(fs.rename);
const cpDir = promisify(ncp);

/************************\
*	Config
\************************/
const configFile = "makeComponent.json";
const vueTemplate = `<script>
	export default {
		name: "%name%",
		render(){
			return (
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "%stylePath%%name%/%name%";
</style>
`;
const args = process.argv.splice(process.execArgv.length + 2);


if(args.length < 1)
	throw new Error("Expects at least one argument: {call to this prgm} {component name} {? component registration name}");

const componentName = args[0];
const componentRegName = args.length >= 2 ? args[1] : toKebabCase(componentName);

grabJSON("./" + configFile)
.then(config => {
	const defaults = {
		stylesImport: "~@css/_components/"
	};
	const {stylesLocation, stylesTemplate, componentsPath, fileToRename} = config;
	const stylesImport = config.stylesImport || defaults.stylesImport;
	
	const componentStylePath = `${stylesLocation}${componentRegName}`;
	return cpDir(stylesTemplate, componentStylePath, {
		stopOnErr: true
	}).then(()=>Promise.resolve({ stylesImport, componentStylePath, fileToRename, componentsPath }));
}).then(({ stylesImport, componentStylePath, fileToRename, componentsPath })=>{
	const { extension } = fileToRename; 
	const fileName = fileToRename.name;
	const oldPath = `${componentStylePath}/${fileName}.${extension}`;
	const newPath = `${componentStylePath}/${componentRegName}.${extension}`;
	return renamePromise(oldPath, newPath)
	.then(()=>Promise.resolve({ stylesImport, componentsPath }));
}).then(({ stylesImport, componentsPath })=>{
	const content = vueTemplate
	.replace(/%name%/g, componentRegName)
	.replace(/%stylePath%/g, stylesImport);
	
	const fileName = `${componentName}.vue`;
	const filePath = `${componentsPath}${fileName}`;
	
	return writeFilePromise(filePath, content, "utf-8");
}).then(()=>{
	console.log(`Component created: ${componentName} (${componentRegName})`)
	return Promise.resolve();
}).catch(console.err);