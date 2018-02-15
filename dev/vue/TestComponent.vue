<script>
    export default {
        name: "test",
        render(){
            return (
                <div class="topbar">
                    <div class="content">{this.$slots["content"]}</div>
                </div>
            );
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@css/test";
</style>