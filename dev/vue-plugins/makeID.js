const plugin = {
    install(Vue){    
        Vue.prototype.$ID = {
            make(str, stringResult, radix){
                if(typeof str != "string")
                    throw new TypeError("The first parameter must be a string")

                if(typeof stringResult != "undefined" && typeof stringResult != "boolean")
                    throw new TypeError("The second parameter must be either omitted or a boolean")

                if(typeof radix != "undefined" && typeof radix != "number")
                    throw new TypeError("The third parameter must be either omitted or a number")

                var defaultRadix = 10;

                var encoded = btoa(str).split("").map(function(e){ return e.charCodeAt(0) }).join("");

                if(stringResult)
                    return encoded;

                var radixToUse = radix || defaultRadix;
                return parseInt(encoded, radixToUse);
            }
        }
    }
};

if(typeof window != "undefined" && window.Vue)
    Vue.use(plugin);

export default plugin;