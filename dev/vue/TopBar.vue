<script>
	export default {
		name: "top-bar",
		render(){
			return (
				<div class="container wireframe">
                    {this.$slots.default}
                </div>
			);
		}
	};
</script>

<style lang="scss" scoped>
    @import "~@css/_components/topbar/topbar";
</style>