<script>
	export default {
		name: "v-footer",
        props: {
            footerData: {
                type: Array,
                required: true
            }
        },
		render(){
			return (
                <footer>
                    <p>Mentions légales et copyright</p>
                    <a href="">Plus</a>
                    <div class="imgs">
                        {
                            this.$props["footerData"]
                            .map(_ => (
                                <div class="imgs__item">
                                    <img key={this.$ID.make(`${_.src}__${_.alt}`, true)} src={_.src} alt={_.alt}/>
                                </div>
                            ))
                        }
                    </div>
                </footer>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/vfooter/vfooter";
</style>
