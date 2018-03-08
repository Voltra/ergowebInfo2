<script>
	export default {
		name: "v-menu",
		render(){
			return (
				<div class="menu">
                    {this.$slots.default}
                </div>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/vmenu/vmenu";
</style>