<script>
    import TabbedContainer from "@components/TabbedContainer"
    import Url from "@components/Url"
    import ClearFloat from "@components/ClearFloat"
    
	export default {
		name: "promo-box",
        props: {
            promo: {
                validate: function(e){
                    return e instanceof Object
                    && e.images
                    && e.images instanceof Array
                    && typeof e.url === "string"
                }
            },
            title: {
                type: String,
                required: true
            }
        },
		render(){
			return (
                <TabbedContainer classStr="promobox">
                    <span slot="title">{this.$props["title"]}</span>
                    <div slot="content">
                        <div class="images">
                            {
                                this.$props["promo"].images
                                .map(({src, alt}) => <img src={src} alt={alt}/>)
                            }
                        </div>
                        <Url text="Voir plus..." url={this.$props["promo"].url}/>
                        <ClearFloat/>
                    </div>
                </TabbedContainer>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/promo-box/promo-box";
</style>
