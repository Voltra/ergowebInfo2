<script>
    import ClearFloat from "./ClearFloat"
    
	export default {
		name: "search-bar",
        props: {
            action: {
                type: String,
                required: false
            }
        },
        data(){
            return {
                //search <-> &#xE8B6;
                searchLabel: "search", //"&#xE8B6;",
                placeholder: "Rechercher...",
                formAction: this.$props["action"] || ""
            }
        },
		render(){
			return (
                <form class="search-bar" action={this.formAction} method="GET">
                    <div class="form-content">
                        <input name="search" type="text" placeholder={this.placeholder}/>
                        <button type="submit">
                            <i class="material-icons">{this.searchLabel}</i>
                        </button>
                        <ClearFloat/>
                    </div>
                </form>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/search-bar/search-bar";
</style>
