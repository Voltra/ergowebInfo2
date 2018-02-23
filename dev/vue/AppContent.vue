<script>
	export default {
		name: "app-content",
		render(){
			return (
				<div class="container">
                    {this.$slots.default}
                </div>
			);
		}
	};
</script>

<style lang="scss" scoped>
    @import "~@css/_components/content/content";
</style>