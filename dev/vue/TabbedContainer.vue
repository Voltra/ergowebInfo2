<script>
	export default {
		name: "tabbed-container",
        props: {
            classStr: {
                type: String,
                required: false,
                default: ""
            }
        },
        data(){
            return {
                classes: `tabbed ${this.$props["classStr"]}`
            }
        },
		render(){
			return (
                <div class={this.classes}>
                    <div class="title">
                        {this.$slots.title}
                    </div>
                    <div class="content">
                        {this.$slots.content}
                    </div>
                </div>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/tabbed-container/tabbed-container";
</style>
