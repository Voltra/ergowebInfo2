import $ from "jquery"
import jqCssVarInstaller from "jq-cssvar"
import Vue from "$es-vue"

import { $json } from "@voltra/json"
import spinnerLordRemover from "spinner-lord"

import TopBar from "@components/TopBar"
import AppContent from "@components/AppContent"
import VFooter from "@components/VFooter"
import VMenu from "@components/VMenu"
import GMap from "@components/GMap"
import Url from "@components/Url"
import ExtUrl from "@components/ExtUrl"

import JsonClientPlugin from "@vplugins/$json"
import MakeIdPlugin from "@vplugins/makeID"
import JqueryPlugin from "@vplugins/jquery"
import ResponsiveDirective from "@vplugins/responsiveDirective"
import * as VueGoogleMaps from "vue2-google-maps"

import "@css/index/index"

jqCssVarInstaller($);
window.$ = window.jQuery = $;
const root = location.href.replace(/\/[^/]*$/, "");
const asset = uri => root + "/assets/" + uri;

$(document).ready(()=>{    
    const components = { TopBar, AppContent, VMenu, VFooter, GMap, Url, ExtUrl };
    const plugins = [JsonClientPlugin, MakeIdPlugin, JqueryPlugin, ResponsiveDirective];
    const componentsArray = Object.values(components);
    [...plugins, ...componentsArray].forEach(::Vue.use);
    
    const removeSpinnerLord = spinnerLordRemover.bind(spinnerLordRemover, $);
    
    
    Promise.all([
        $json.get(asset("json/nav.json")),
        $json.get(asset("json/footer.json")),
        $json.get(asset("json/gmap.json")).then(j => {
            Vue.use(VueGoogleMaps, {
                load: {
                    key: j.api_key
                }
            });
            
            return j.coords;
        })
    ]).then(([nav, footerJson, coords]) => {
        const img = uri => asset(`img/${uri}`);
        const footerData = footerJson.map(_ => Object.assign({}, _, {src: img(_.src)}));
        
        $.cssVar("nav-amount", nav.length);
        new Vue({
            el: "#app",
            components,
            data: {
                nav,
                footerData,
                coords,
                currentPage: "Accueil" /*"Loire nature"*/
            },
            mounted(){
                setTimeout(removeSpinnerLord, 1000);
            }
        });
    }).catch(console.error);
});