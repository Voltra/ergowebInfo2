<script>
    import NavElement from "./NavElement"
    import SubNav from "./SubNav"
    
	export default {
		name: "vnav",
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
        mounted(){
            document.title = this.$props["current"];
        },
		render(){
			return (
                <ul class="nav-menu" data-amount={this.amount}>
                    { this.$props["nav"].filter(e => e.name && typeof e.name=="string").map(navElem => {
                        const hasUrl = !!navElem.url;
                        const hasChildren = !!navElem.children;
                        
                        return (hasUrl && !hasChildren)
                            ? <NavElement current={this.$props["current"]} key={this.$ID.make(navElem.name)} elem={navElem}/>
                            : <SubNav current={this.$props["current"]} key={this.$ID.make(navElem.name)} nav={navElem}/>
//                        return <NavElement key={this.$ID.make(navElem.name)} elem={navElem}/>
                    }) }
                </ul>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/vnav/vnav";
</style>
