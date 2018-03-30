<script>
    import TabbedContainer from "@components/TabbedContainer"
    import { Carousel, Slide } from "vue-carousel"
    
	export default {
		name: "actu-carousel",
        props: {
            title: {
                type: String,
                required: true
            },
            actus: {
                validate: function(el){
                    return el
                    && el instanceof Array
                    && el.every(e => {
                        return e
                        && e instanceof Object
                        && typeof e.src === "string"
                        && typeof e.alt === "string"
                        && typeof e.url === "string"
                    });
                },
                required: true
            }
        },
        data(){
            return {
                perPageCustom: [
                    [769, 3]
                ],
                perPage: 4
            };
        },
        /*
        <a class="title" href={url}>{alt}</a>
        */
		render(){
			return (
                <TabbedContainer classStr="actu">
                    <span slot="title">{this.$props["title"]}</span>
                    <div slot="content">
                        <Carousel perParg={this.perPage} perPageCustom={this.perPageCustom} scrollPerPag={true} navigationEnabled={true} paginationActiveColor="#3453FF" paginationColor="#3c3f41">
                            {
                                this.$props["actus"]
                                .map(({src, alt, url}) => (
                                    <Slide key={src}>
                                        <img src={src} alt={alt}/>
                                        
                                    </Slide>
                                ))
                            }
                        </Carousel>
                    </div>
                </TabbedContainer>
			);
		}
	};
</script>

<style lang="scss" slot>
	@import "~@css/_components/actu-carousel/actu-carousel";
</style>
