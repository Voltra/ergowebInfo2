import $ from "jquery"

const plugin = {
    install(Vue){
        Object.defineProperties(Vue.prototype, {
            $: {
                get(){
                    return $;
                }
            }
        });
    }
};

if(typeof window != "undefined" && window.Vue)
    Vue.use(plugin);

export default plugin;