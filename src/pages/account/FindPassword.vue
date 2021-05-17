<template>
  <div>
    <div class="sub_banner no_pad">
      <img src="~assets/img_about_banner.png" alt="" />
      <div class="sub_banner_text">
        <h2 class="title">Forgot your Password?</h2>
      </div>
      <div class="sub_location">
        <div class="left">
          <ul>
            <li>
              <img src="~assets/img_home.png" alt="" />
            </li>
            <li>&nbsp;>&nbsp; Account</li>
            <li>&nbsp;>&nbsp; FINE PASSWORD</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="type_login">
      <div class="input_box_area">
        <div class="right">
          <h3 class="title">Forgot your password</h3>
          <p class="desc">
            Please enter the email address you used to sign up.<br />We will
            send you a password reset link to this email.
          </p>
          <div class="input_area">
            <q-input outlined v-model="userEmail" label="E-MAIL ADDRESS" />
          </div>
          <div class="btn_area">
            <button type="button" class="btn_orange type_full">CONTINUE</button>
          </div>
          <div class="login_sign_up">
            <span class="account">remember your password?</span>
            <span class="sign_up" @click="movePage('/account/login')"
              >Back to login</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "../../mixin";

export default {
  mixins: [mixin],
  components: {},
  data() {
    return {
      userEmail: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.type_login {
  padding: 0 44px;
  .sub_content_title {
    margin: 76px 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: $font-size-1;
    line-height: 60px;
    text-transform: uppercase;
    text-align: center;
    color: #000000;
  }
  .input_box_area {
    max-width: 894px;
    margin: 0 auto;
    grid-template-areas: "item";
    grid-template-columns: 1fr;
    > div {
      .title {
        text-align: center;
      }
      .desc {
        text-align: center;
      }
    }
    .left {
      .btn_area {
        margin-top: 58px;
      }
    }
    .right {
      .btn_area {
        margin-top: 64px;
        .lost {
          position: absolute;
          right: 0;
          top: 7px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: $font-size-5;
          line-height: 32px;
          text-transform: capitalize;
          color: $color-secondary;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .type_login .input_box_area .right .btn_area .lost {
    position: static;
    display: block;
    margin-top: 20px;
    font-size: $font-size-7;
    line-height: 14px;
  }
}
</style>