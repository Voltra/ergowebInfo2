import $ from "jquery"
import Vue from "$es-vue"
import $json from "@voltra/json"
import spinnerLordRemover from "spinner-lord"

import TopBar from "@components/TopBar"
import AppContent from "@components/AppContent"
import VMenu from "@components/VMenu"

import "@css/index/index"
    
const root = location.href.replace(/\/[^/]*$/, "");
const asset = uri => root + uri;

$(document).ready(()=>{    
    const components = { TopBar, AppContent, VMenu };
    Object.values(components).forEach(::Vue.use);
    const removeSpinnerLord = spinnerLordRemover.bind(spinnerLordRemover, $);
    
    $json.get("./assets/json/nav.json")
    .then(nav => {
        //use navigation setup data
        console.log(nav);
        
        new Vue({
            el: "#app",
            components,
            mounted(){
                setTimeout(removeSpinnerLord, 1000);
            }
        });
    });
});