<script>
    import NavElement from "./NavElement"
    import debounce from "lodash.debounce"
    
	export default {
		name: "sub-nav",
        props: {
            nav: {
                validator: e=>{ 
                    return e instanceof Object
                    && !e.url
                    && e.children
                    && e.children instanceof Array
                    && e.name
                    && typeof e.name == "string"
                },
                required: true
            },
            current: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                $ul: null,
                slideOptions: {duration: 300, queue: true},
                delayOptions: {leading: true, trailing: true},
                classes: {
                    elem: true,
                    current: this.isCurrent()
                }
            }
        },
        mounted(){
            this.$ul = this.$(this.$el).children("ul.sub-nav").eq(0)
        },
        methods: {            
//            $ul(){ return this.$(this.$el).children("ul.subn-nav").eq(0); },
//            slideOptions(){ return {duration: 300, queue: false}; },
            slideUp(){
                this.$ul.css("zIndex", 1);
                this.$ul.slideUp(this.slideOptions);
            },
            slideDown(){
                this.$ul.css("zIndex", 8);
                this.$ul.slideDown(this.slideOptions);
            },
            toggleSlide(){
                this.$ul.slideToggle(this.slideOptions);
            },
            isCurrent(){
                const { children } = this.$props["nav"];
                const currentName = this.$props["current"];
                return children.some(child => child.name === currentName);
            }
        },
        computed: {
            amount(){ return this.$props["amount"]; },
            mouseOver(){
                return debounce(::this.slideDown, this.slideOptions.duration * 2, this.delayOptions);
            },
            mouseLeave(){
                return debounce(::this.slideUp, this.slideOptions.duration * 2, this.delayOptions);
            }
        },
		render(){
			return (
                <li class={this.classes} onClick={::this.toggleSlide} onMouseover={::this.slideDown} onMouseleave={::this.slideUp}>
                    <span>{this.$props["nav"].name}</span>
                    <ul class="sub-nav">
                        {this.$props["nav"]
                        .children
                        .map(navElem => 
                            <NavElement current={this.$props["current"]} isSub={true} key={this.$ID.make(navElem.name)} elem={navElem}/>
                        )}
                    </ul>
                </li>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/sub-nav/sub-nav";
</style>
