<template>
  <footer>
    <section class="footer-content">
      <div class="footer-navs">
        <ul class="footer-list-group">
          <li class="footer-list-item">
            <a href="#">FIND A STORE</a>
          </li>
          <li class="footer-list-item">
            <a href="#">BECOME A MEMBER</a>
          </li>
          <li class="footer-list-item">
            <a href="#">SIGN UP FOR AN EMAIL</a>
          </li>
          <li class="footer-list-item">
            <a href="#">SEND A FEEDBACK</a>
          </li>
          <li class="footer-list-item">
            <a href="#">STUDENT DISCOUNTS</a>
          </li>
        </ul>

        <ul class="footer-list-group">
          <li class="footer-list-item">
            <a href="#">GET HELP</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-child">Order Status</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-child">Delivery</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-child">Returns</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-child">Payment Options</a>
          </li>
        </ul>

        <ul class="footer-list-group">
          <li class="footer-list-item">
            <a href="#">ABOUT NIKE</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-child">News</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-child">Careers</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-child">Investors</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-child">Sustainability</a>
          </li>
        </ul>

        <ul class="footer-list-group-social-media">
          <li class="footer-list-item">
            <a href="#" class="footer-list-child-icons">
              <twitter-icon size="1.5x" class="custom-class"></twitter-icon>
            </a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-child-icons">
              <facebook-icon size="1.5x" class="custom-class"></facebook-icon>
            </a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-child-icons">
              <instagram-icon size="1.5x" class="custom-class"></instagram-icon>
            </a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-child-icons">
              <youtube-icon size="1.5x" class="custom-class"></youtube-icon>
            </a>
          </li>
        </ul>
      </div>

      <hr />

      <div class="footer-others-options">
        <ul class="options-list-group">
          <li class="option-list-item">
            <a href="#">Guides</a>
          </li>
          <li class="option-list-item">
            <a href="#">Terms of Sale</a>
          </li>
          <li class="option-list-item">
            <a href="#">Terms of Use</a>
          </li>
          <li class="option-list-item">
            <a href="#">Nike Privacy Policy</a>
          </li>
        </ul>

        <div class="copyright">
          <div class="location">
            <map-pin-icon size="1.5x" class="map-pin-icon"></map-pin-icon>
            <span>Philippines</span>
          </div>
          <div class="copyright-child">
            <span>&#x24B8; </span>
            <span>2021 Nike, Inc . All Rights Reserved</span>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<style lang="scss">
@import "../assets/scss/_variable";

footer {
  background-color: $footer-bg;
  color: #fff;
  position: relative;
  top: 1px;

  .footer-content {
    margin: 0 $margin-side;

    .footer-navs {
      padding: $margin-side 0 30px 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      .footer-list-group {
        list-style: none;

        .footer-list-item {
          margin-bottom: 20px;

          a {
            text-decoration: none;
            color: $body-bg;

            &:hover {
              color: $primary;
            }
          }

          .footer-list-child {
            color: $saturated-text;

            &-icons {
              @extend .footer-list-child;
              margin-right: 30px;
            }
          }
        }

        &-social-media {
          @extend .footer-list-group;

          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
        }
      }
    }

    hr {
      border: 0.5px solid $text-muted;
      margin: 30px 0;
    }

    .footer-others-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8em;
      padding-bottom: 30px;
      color: $text-muted;

      .options-list-group {
        list-style: none;
        display: flex;
        align-items: center;

        .option-list-item {
          margin-right: 30px;

          a {
            text-decoration: none;
            color: $text-muted;

            &:hover {
              color: $primary;
            }
          }
        }
      }

      .copyright {
        display: flex;
        align-items: center;

        .location {
          display: flex;
          align-items: center;
          margin-right: 30px;

          .map-pin-icon {
            margin-right: 15px;
          }
        }
      }
    }
  }
}
</style>

<script>
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  MapPinIcon,
} from "vue-feather-icons";

export default {
  name: "Footer",
  components: {
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
    MapPinIcon,
  },
};
</script>
