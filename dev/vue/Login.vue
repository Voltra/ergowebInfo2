<script>
    import ClearFloat from "./ClearFloat"
    
	export default {
		name: "login",
        props: {
            action: {
                type: String,
                required: false
            }
        },
        data(){
            return {
                formAction: this.$props["action"] || "",
                loginLabel: "lock_open", //"&#xE898;" //"vpn_key" //"&#xE0DA;"
                identifierPlaceholder: "Identifiant",
                passwordPlaceholder: "Mot de passe"
            };
        },
		render(){
			return (
                <div class="login-form">
                    <form action={this.formAction} method="POST">
                        <input name="identifier" type="text" placeholder={this.identifierPlaceholder}/>
                        <input name="password" type="password" palceholder={this.passwordPlaceholder}/>
                        <button type="submit">
                            <i class="material-icons">{this.loginLabel}</i>
                        </button>
                        <ClearFloat/>
                    </form>
                </div>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/login/login";
</style>
