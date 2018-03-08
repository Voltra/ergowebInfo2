<script>
    import ClearFloat from "./ClearFloat"
    
	export default {
		name: "top-bar",
        props: {
            "logo": {
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