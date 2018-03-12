<script>
    import ClearFloat from "./ClearFloat"
    import VMenu from "./VMenu"
    
	export default {
		name: "top-bar",
        props: {
            "logo": {
                type: String,
                required: true
            },
            "nav": {
                type: Array,
                required: true
            },
            "current": {
                type: String,
                required: true
            }
        },
		render(){
			return (
				<div class="container">
                    <div class="logo">
                        <img src={this.$props["logo"]} alt="Logo"/>
                    </div>
                    <VMenu current={this.$props["current"]} nav={this.$props["nav"]}>
                        {do{
                            if(this.$slots["menu"])
                                <div slot="content">{this.$slots["menu"]}</div>
                            else
                                ""
                        }}
                    </VMenu>
                    {this.$slots.default}
                    <ClearFloat/>
                </div>
			);
		}
	};
</script>

<style lang="scss" scoped>
    @import "~@css/_components/topbar/topbar";
</style>