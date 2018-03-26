<script>
	export default {
		name: "url",
        props: {
            url: {
                type: String,
                required: false,
                default: ""
            },
            target: {
                type: String,
                required: false,
                default: "_self"
            },
            text: {
                type: String,
                required: false,
                default: ""
            }
        },
		render(){
			return (
                <a class="link" href={this.$props["url"]} target={this.$props["target"]}>
                    {this.$props["text"]}
                </a>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/url/url";
</style>
