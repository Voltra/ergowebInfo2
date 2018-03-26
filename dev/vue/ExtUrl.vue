<script>
	export default {
		name: "ext-url",
        props: {
            url: {
                type: String,
                required: false,
                default: ""
            },
            text: {
                type: String,
                required: false,
                default: ""
            }
        },
		render(){//<i class="material-icons">&#xE89E;</i>
			return (
                <a class="link ext" href={this.$props["url"]} target="_blank">
                    {this.$props["text"]}
                    <i class="material-icons">open_in_new</i>
                </a>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/ext-url/ext-url";
</style>
