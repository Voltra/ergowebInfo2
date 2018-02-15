import Vue from "$es-vue"
import Test from "@components/TestComponent"

const components = { Test };

document.addEventListener("DOMContentLoaded", ()=>{
    new Vue({
        el: "#id",
        components
    });
});