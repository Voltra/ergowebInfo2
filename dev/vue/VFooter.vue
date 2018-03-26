<script>
    import Url from "@components/Url"
    import ExtUrl from "@components/ExtUrl"
    
	export default {
		name: "v-footer",
        props: {
            footerData: {
                type: Array,
                required: true
            }
        },
        data(){
            return {
                linkText: "Plus"
            }
        },
		render(){
            //<a href="">Plus</a>
			return (
                <footer>
                    <p>Mentions légales et copyright</p>
                    <ExtUrl text={this.linkText}/>
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
