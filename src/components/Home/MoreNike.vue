<template>
  <section class="container-fluid more-nike">
    <div class="subheadline">
      <h4>MORE NIKE CATEGORIES</h4>
      <img src="../../assets/images/line.svg" alt="Line" />
    </div>

    <div class="nike-categories">
      <CategoryCard v-for="category in getCategories"
        :key="category.id"
        :img="category.img"
        :name="category.name" />
    </div>

    <div class="more-nike-categories">
      <ul class="category-list">
        <li class="category-list-item"><h4>Icons</h4></li>
        <li class="category-list-item">
          <a href="#">Air Force 1</a>
        </li>
        <li class="category-list-item">
          <a href="#">Air Max 270</a>
        </li>
        <li class="category-list-item">
          <a href="#">Air Max 90</a>
        </li>
        <li class="category-list-item">
          <a href="#">Air Max 95</a>
        </li>
        <li class="category-list-item">
          <a href="#">Vapormax</a>
        </li>
      </ul>
      <ul class="category-list">
        <li class="category-list-item"><h4>Shoes</h4></li>
        <li class="category-list-item">
          <a href="#">All Shoes</a>
        </li>
        <li class="category-list-item">
          <a href="#">Custom Shoes</a>
        </li>
        <li class="category-list-item">
          <a href="#">Jordan Shoes</a>
        </li>
        <li class="category-list-item">
          <a href="#">Running Shoes</a>
        </li>
        <li class="category-list-item">
          <a href="#">Baskteball Shoes</a>
        </li>
        <li class="category-list-item">
          <a href="#">Gym & Training Shoes</a>
        </li>
      </ul>
      <ul class="category-list">
        <li class="category-list-item"><h4>Clothing</h4></li>
        <li class="category-list-item">
          <a href="#">All Clothing</a>
        </li>
        <li class="category-list-item">
          <a href="#">Modest Wear</a>
        </li>
        <li class="category-list-item">
          <a href="#">Shirts & Tops</a>
        </li>
        <li class="category-list-item">
          <a href="#">Jackets</a>
        </li>
        <li class="category-list-item">
          <a href="#">Shorts</a>
        </li>
        <li class="category-list-item">
          <a href="#">Trousers & Leggings</a>
        </li>
      </ul>
      <ul class="category-list">
        <li class="category-list-item"><h4>Kids’</h4></li>
        <li class="category-list-item">
          <a href="#">Infant & Todler Shoes</a>
        </li>
        <li class="category-list-item">
          <a href="#">Kids’ Shoes</a>
        </li>
        <li class="category-list-item">
          <a href="#">Kids’ Jordan Shoes</a>
        </li>
        <li class="category-list-item">
          <a href="#">Kids’ Backpacks</a>
        </li>
        <li class="category-list-item">
          <a href="#">Kids’ Shocks</a>
        </li>
      </ul>
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
      margin-bottom: 45px;
    }

    .more-nike-categories{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 0 45px;

      .category-list{
        list-style: none;

        .category-list-item{
          margin-bottom: 15px;

          a{
            text-decoration: none;
            color: $text-muted;
            transition: all .3s ease;

            &:hover{
              color:  $primary;
              font-weight: 500;
            }
          }
        }
      }
    }
}

</style>

<script>
import { mapGetters } from "vuex";
import CategoryCard from "@/components/CategoryCard";

export default {
  name: "MoreNike",
  components: {
    CategoryCard,
  },
  computed: {
    ...mapGetters([
      "getCategories"
    ])
  }
}
</script>