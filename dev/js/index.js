import $ from "jquery"
import jqCssVarInstaller from "jq-cssvar"
import Vue from "$es-vue"
import $json from "@voltra/json"
import spinnerLordRemover from "spinner-lord"

import TopBar from "@components/TopBar"
import AppContent from "@components/AppContent"
import VMenu from "@components/VMenu"

import JsonClientPlugin from "@vplugins/$json";
import MakeIdPlugin from "@vplugins/makeID";
import JqueryPlugin from "@vplugins/jquery";

import "@css/index/index"

jqCssVarInstaller($);
window.$ = window.jQuery = $;
const root = location.href.replace(/\/[^/]*$/, "");
const asset = uri => root + uri;

$(document).ready(()=>{    
    const components = { TopBar, AppContent, VMenu };
    const plugins = [JsonClientPlugin, MakeIdPlugin, JqueryPlugin];
    plugins.concat(Object.values(components)).forEach(::Vue.use);
    
    const removeSpinnerLord = spinnerLordRemover.bind(spinnerLordRemover, $);
    
    $json.get("./assets/json/nav.json")
    .then(nav => {
        //use navigation setup data
//        console.log(nav);
        $.cssVar("nav-amount", nav.length);
        new Vue({
            el: "#app",
            components,
            data: {
                nav,
                currentPage: "Accueil" /*"Loire nature"*/
            },
            mounted(){
                setTimeout(removeSpinnerLord, 1000);
            }
        });
    });
});