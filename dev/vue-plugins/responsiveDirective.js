const rd = {
    install(Vue, options={}){
        const d = {
            handler: null,
            breakpoint: 768,
            bind(el, binding){
                const handler = binding.value;
                if(typeof handler != "function")
                    throw new TypeError("Expected the handler to be a Function");
                
                el.responsiveDirectiveHandler = e => {
                    if(window.innerWidth <= d.breakpoint)
                        handler("mobile");
                    else
                        handler("desktop");
                };
                
                window.addEventListener("resize", el.responsiveDirectiveHandler);
                el.responsiveDirectiveHandler(null);
            },
            unbind(el, binding){
                window.removeEventListener("resize", el.responsiveDirectiveHandler);
            }
        };
        
        Vue.directive("responsive-listener", d);
    }
};

export default rd