import { Store } from "vuex"
import { $json } from "@voltra/json"

import $ from "jquery"
import jqCssVarInstaller from "jq-cssvar"

jqCssVarInstaller($);
window.$ = window.jQuery = $;

export default new Store({
    state: {
        nav: [],
        currentPage: "Accueil" /*"Loire nature"*/
    },
    mutations: {
        updateNav(state, newNav){
            state.nav = newNav;
        }
    },
    action: {
        fetchNav({ commit }){
            $json.get("./assets/json/nav.json")
            .then(nav => {
                $.cssVar("nav-amount", nav.length);
                commit("updateNav", nav);
            }).catch(console.error);
        }
    }
});