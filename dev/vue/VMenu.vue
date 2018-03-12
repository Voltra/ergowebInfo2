<script>
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
		render(){
			return (
				<div class="menu">
                    <VNav current={this.$props["current"]} nav={this.$props["nav"]}/>
                    <SearchBar/>
                    <Login/>
                    {this.$slots["content"] || ""}
                </div>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/vmenu/vmenu";
</style>