<template>
    <section class="container-fluid more-nike">
        <div class="subheadline">
            <h4>MORE NIKE CATEGORIES</h4>
            <img src="../../assets/images/line.svg" alt="Line" />
        </div>

        <div class="nike-categories">
            <CategoryCard
            v-for="category in categories"
            :key="category.id"
            :img="category.img"
            :name="category.name" />
        </div>
    </section>
</template>

<style lang="scss">
@import "../../assets/scss/_variable";

.more-nike{
    padding: 50px 0;

    .nike-categories{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
}

</style>

<script>
import axios from 'axios';
import CategoryCard from '@/components/CategoryCard';
export default {
    name: "MoreNike",
    components: {
        CategoryCard,
    },
    data(){
        return {
            categories: []
        };
    },
    created(){
        axios.get("https://api.jsonbin.io/b/618e4de94a56fb3dee0ddecc", {
            headers: {
                "X-Master-Key": "$2b$10$TSdN37bgq5btrJOM0i1r0e2625W/uvUSXKDqyV9Hra/7sUoehKAue"
            }
        }).then((response) => {
            this.categories = response.data.categories;
        });
    }
}
</script>