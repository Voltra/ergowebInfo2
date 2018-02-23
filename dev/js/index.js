import Vue from "$es-vue"
import TopBar from "@components/TopBar"
import AppContent from "@components/AppContent"

import "@css/index/index"

const components = { TopBar, AppContent };

//const VueUse = Vue.use.bind(Vue);
//Object.values(components).forEach(VueUse);

document.addEventListener("DOMContentLoaded", ()=>{
    new Vue({
        el: "#app",
        components
    });
});