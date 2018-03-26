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
    
	export default {
		name: "g-map",
        components,
        props: {
            coords: {
                validator: _ => {
                    return isObject(_)
                    && isCoord(_.center)
                    && _.markers instanceof Array
                    && _.markers.every(isMarker)
                },
                required: true
            }
        },
        computed: {
            center(){ return this.$props["coords"].center; },
            markers(){ return this.$props["coords"].markers; }
        },
		render(){
			return (
                <div class="gmap">
                    <gmap-map center={this.center} zoom={5} map-type-id="terrain">
                        {this.markers.map(_ => (
                            <gmap-marker
                                key={this.$ID.make((_.position.lat + _.position.lng).toString(), true)}
                                position={_.position}
                                clickable={false}
                                draggable={false}
                            >
                            </gmap-marker>
                        ))}
                    </gmap-map>
                </div>
			);
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@css/_components/gmap/gmap";
</style>
