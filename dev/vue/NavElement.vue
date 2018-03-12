<script>
	export default {
		name: "nav-element",
        props: {
            elem: {
                validator: e=>{
                    return e instanceof Object
                    && e.url
                    && typeof e.url == "string"
                    && !e.children
                    && e.name
                    && typeof e.name == "string"
                },
                required: true
            },
            isSub: {
                type: Boolean,
                required: false
            },
            current: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                classes: {
                    elem: true,
                    "sub-elem": this.$props["isSub"],
                    current: this.isCurrent()
                },
                url: this.$props["elem"].url
            };
        },
        methods: {
            navigate(){
                if(this.isCurrent())
                    return false;
//                console.log("Going to: " + this.url);
//                debugger
                document.location.href = this.url;
            },
            isCurrent(){
                return this.$props["current"] === this.$props["elem"].name;
            }
        },
		render(){
			return (
                <li class={this.classes} on-click={ ::this.navigate }>
                    {
                        this.isCurrent()
                        ? <span>{this.$props["elem"].name}</span>
                        : <a href={this.url}>{this.$props["elem"].name}</a>
                    }
                </li>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/nav-element/nav-element";
</style>
