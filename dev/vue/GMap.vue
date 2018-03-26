<script>
    import * as VueGMap from "vue2-google-maps"
    import clone from "lodash.clone"
    
    const components = clone(VueGMap);
    delete components["install"];
    
    function isObject(_){
        return typeof _ == "object" && _ != null;
    }
    
    function isCoord(_){
        return isObject(_)
        && typeof _.lat == "number"
        && typeof _.lng == "number";
    }
    
    function isMarker(_){
        return isObject(_)
        && isCoord(_.position);
    }
    
    function isMarkerArray(_){
        return _ instanceof Array
        && _.every(isMarker);
    }
    
    function isCoordArray(_){
        return _ instanceof Array
        && _.every(isCoord)
    }
    
	export default {
		name: "g-map",
        components,
        props: {
            coords: {
                validator: _ => {
                    return isObject(_)
                    && isCoord(_.center)
                    && isMarkerArray(_.markers)
                    && isCoordArray(_.flight)
                    && isCoordArray(_.contour)
                },
                required: true
            }
        },
        data(){
            return {
                zoom: 6,
                flightOptions: {
                    strokeColor: "#02693E",
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                },
                contourOptions: {
                    strokeColor: "#FF0000",
                    strokeOpacity: 0,
                    strokeWeight: 2,
                    fillColor: "#FF0000",
                    fillOpacity: 0
                }
            };
        },
        computed: {
            center(){ return this.$props["coords"].center; },
            markers(){ return this.$props["coords"].markers; },
            flight(){ return this.$props["coords"].flight; },
            contour(){ return this.$props["coords"].contour; }
        },
        methods: {
            setZoom(type){
                this.zoom = type == "mobile" ? 6 : 7;
            }
        },
		render(){
			return (
                <div class="gmap">
                    <gmap-map v-responsive-listener={::this.setZoom} center={this.center} zoom={this.zoom} map-type-id="roadmap">
                        {this.markers.map(_ => (
                            <gmap-marker
                                key={this.$ID.make((_.position.lat + _.position.lng).toString(), true)}
                                position={_.position}
                                clickable={false}
                                draggable={false}
                            >
                            </gmap-marker>
                        ))}
                        
                        <gmap-polyline path={this.flight} options={this.flightOptions} draggable={false} editable={false}></gmap-polyline>
                        <gmap-polyline path={this.contour} options={this.contourOptions} draggable={false} editable={false}></gmap-polyline>
                    </gmap-map>
                </div>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/gmap/gmap";
</style>
