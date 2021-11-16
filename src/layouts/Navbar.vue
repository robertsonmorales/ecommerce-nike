<template>
  <nav class="navbar">
    <div id="brand" class="nav-brand">
      <img
        alt="Vue logo"
        src="../assets/images/logo.svg"
        width="58"
        height="21"
      />
    </div>

    <ul class="nav-links">
      <li class="nav-link-item">
        <router-link to="/">HOME</router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/men">MEN</router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/women">WOMEN</router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/kids">KIDS</router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/customise">CUSTOMISE</router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/sale">SALE</router-link>
      </li>
    </ul>

    <div class="user-navbar">
      <form>
        <label for="search">Search</label>
        <div class="input-group user-nav-item">
          <input
            type="text"
            class="form-control"
            v-model="search"
            maxlength="30"
            placeholder="Search here ..."
          />
          <search-icon size="1.5x" class="input-icon"></search-icon>
        </div>
      </form>

      <router-link 
        to="/favorite" 
        class="user-icons add-to-favorite user-nav-item">

        <heart-icon size="1.5x"></heart-icon>

        <span class="badge badge-primary">2</span>

      </router-link>

      <router-link
        to="/added-to-cart"
        class="user-icons add-to-cart user-nav-item"
      >
        <shopping-cart-icon size="1.5x" class="cart-icon"></shopping-cart-icon>
        <span class="badge badge-primary">2</span>
      </router-link>

      <router-link 
        to="/account-settings"
        class="user-icons account-settings">

        <user-icon size="1.5x" class="user-icons"></user-icon>

      </router-link>

    </div>
  </nav>
</template>

<style lang="scss">
@import "../assets/scss/_style.scss";

.navbar {
  background-color: $body-bg;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 2;
  padding: 0px $margin-side__navigation;
  filter: drop-shadow(0 1px 3px rgba(0,0,0,0.1));

  .nav-links {
    list-style: none;
    display: flex;

    .nav-link-item {
      margin: 30px 15px;

      a {
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9em;
        padding-bottom: 10px;
        color: $default;
        transition: all .3s ease;

        &:hover{
          font-weight: 600;
        }

        &.router-link-exact-active {
          font-weight: 600;
          color: $primary;
        }
      }
    }
  }

  .user-nav-item {
    margin: 0 15px;
  }

  .user-navbar {
    display: flex;
    align-items: center;

    form{
      label{
        display:  none;
      }
    }

    .user-icons {
      color: $default;
      text-decoration: none;
    }

    .account-settings{
      margin-left: 30px;
      background-color: $light;
      height: 46px;
      width: 46px;
      border-radius: 50%;
      @include flexCenter(center);

      &:hover{
        background-color: $light__hovered;
      }

      &:active{
        background-color: $light__focused;
        @include bootstrapBoxShadow($light__active);
      }
    }

    .add-to-cart,
    .add-to-favorite {
      display: flex;
      align-items: flex-start;
      position: relative;

      .badge {
        min-height: 18px;
        min-width: 26px;
        border-radius: 10px;
        color: #fff;
        font-size: 0.9em;
        display: flex;
        align-items: center;
        font-weight: 500;
        justify-content: center;
      }

      .badge-primary {
        background-color: $primary;
        position: absolute;
        left: 15px;
      }
    }
  }
}
</style>

<script>
import { mapGetters } from "vuex"; 
import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "vue-feather-icons";

export default {
  name: "Navbar",
  components: {
    SearchIcon,
    HeartIcon,
    ShoppingCartIcon,
    UserIcon
  },
  data() {
    return {
      search: "",
      favorites: 0
    }
  },
  computed: {
    ...mapGetters(["getFav"])
  }
};
</script>
