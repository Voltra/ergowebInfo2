<script>
    import ClearFloat from "./ClearFloat"
    import VNav from "./VNav"
    import SearchBar from "./SearchBar"
    import Login from "./Login"
    
	export default {
		name: "v-menu",
        props: {
            nav: {
                type: Array,
                required: true
            },
            current: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                $app: null,
                $body: null,
                $container: null
            };
        },
        mounted(){
            this.$app = this.$("#app");
            this.$body = this.$("body");
            this.$container = this.$(this.$el);
        },
        methods: {
            toggleMenu(){
                if(window.innerWidth >= 768)
                    return;
                
                this.$container.toggleClass("opened");
                this.$app.toggleClass("opened");
                
                const overflowY = this.$container.hasClass("opened") ? "hidden" : "auto";
                this.$body.css({overflowY});
            }
        },
		render(){
			return (
                <div class="menuContainer">
                    <div class="shadow" onClick={::this.toggleMenu}></div>
                    <button class="menu-opener" onClick={::this.toggleMenu}>
                        <span class="top"></span>
                        <span class="middle"></span>
                        <span class="bottom"></span>
                    </button>
                
                    <ClearFloat/>
                
                    <div class="menu">
                        <VNav current={this.$props["current"]} nav={this.$props["nav"]}/>
                        <SearchBar/>
                        <Login/>
                        {this.$slots["content"] || ""}
                    </div>
                </div>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/vmenu/vmenu";
</style>