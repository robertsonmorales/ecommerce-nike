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
      <div class="search-navbar user-nav-item">
        <input
          type="text"
          class="form-control"
          v-model="search"
          maxlength="30"
          placeholder="Search here ..."
        />
        <search-icon size="1.5x" class="search-icon"></search-icon>
      </div>

      <router-link to="/favorite" class="user-icons user-nav-item">
        <heart-icon size="1.5x" class="heart-icon"></heart-icon>
      </router-link>

      <router-link
        to="/added-to-cart"
        class="user-icons add-to-cart user-nav-item"
      >
        <shopping-cart-icon size="1.5x" class="cart-icon"></shopping-cart-icon>
        <span class="badge badge-primary">2</span>
      </router-link>

      <router-link to="/account-settings">
        <user-icon size="1.5x" class="user-icons"></user-icon>
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss">
@import "../assets/scss/_style.scss";

.navbar {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 1;
  padding: 15px $margin-side;

  .nav-links {
    list-style: none;
    display: flex;

    .nav-link-item {
      margin: 0 15px;

      a {
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9em;
        padding-bottom: 10px;
        color: $default;
        transition: all 0.1s ease-in-out;

        &.router-link-exact-active {
          color: $primary;
          border-bottom: 2px solid $primary;
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

    .search-navbar {
      display: flex;
      align-items: center;
      position: relative;

      .form-control {
        font-family: $font-family;
        background-color: #eeeeee;
        border-radius: 10px;
        border: none;
        outline: none;
        height: 50px;
        padding-left: 15px;
        padding-right: 45px;
        font-size: 0.9em;
        transition: background-color 0.2s ease-in-out;

        &:focus {
          background-color: #ddd;
        }
      }

      .search-icon {
        position: absolute;
        right: 15px;
      }
    }

    .user-icons {
      color: $default;
      text-decoration: none;
    }

    .add-to-cart {
      display: flex;
      align-items: flex-start;

      .badge {
        height: 22px;
        padding: 0px 12px;
        border-radius: 10px;
        color: #fff;
        font-size: 0.9em;
        display: flex;
        align-items: center;
        font-weight: 600;
        border: 2px solid #eeeeee;
      }

      .badge-primary {
        background-color: $primary;
        position: relative;
        right: 5px;
      }
    }
  }
}
</style>

<script>
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
    UserIcon,
  },
  mounted() {
    console.log("Component Mounted Successfully!");
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>
