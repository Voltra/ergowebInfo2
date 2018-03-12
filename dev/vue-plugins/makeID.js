const plugin = {
    install(Vue){    
        Vue.prototype.$ID = {
            make(str, radix){
                const encoded = btoa(str).split("").map(e => e.charCodeAt(0)).join("");
                return parseInt(encoded, radix||10);
            }
        }
    }
};

if(typeof window != "undefined" && window.Vue)
    Vue.use(plugin);

export default plugin;