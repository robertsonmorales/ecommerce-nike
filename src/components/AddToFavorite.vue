<template>
    <button @click="addToFavorite()"
        type="button"
        class="btn-favorite">
        <heart-icon size="1.5x" 
            class="heart-icon"
            :fill="favorite" 
            :stroke="(favorite == 'transparent') 
                ? 'currentColor'
                : ''
            "></heart-icon>
    </button>
</template>

<style lang="scss">
@import "../assets/scss/_variable";

.heart-icon{
    &:hover{
        fill: $primary;
        stroke: $primary;
    }
}
</style>

<script>
import { HeartIcon } from "vue-feather-icons";

export default {
    name: "AddToFavorite",
    components: {
        HeartIcon
    },
    props: {
        is_fav: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        favorite: function(){
            return (this.is_fav) ? "#FF4D00" : "transparent";
        }
    },
    methods: {
        addToFavorite: function(){
            this.$emit('add-to-favorite');
        }
    }
}
</script>