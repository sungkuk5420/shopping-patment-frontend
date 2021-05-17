<template>
  <div>
    <div class="sub_banner no_pad">
      <img src="~assets/img_about_banner.png" alt />
      <div class="sub_banner_text">
        <h2 class="title">LOGIN</h2>
      </div>
      <div class="sub_location">
        <div class="left">
          <ul>
            <li>
              <img src="~assets/img_home.png" alt />
            </li>
            <li>&nbsp;>&nbsp; Account</li>
            <li>&nbsp;>&nbsp; Login</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="type_login">
      <div class="input_box_area">
        <div class="input_in">
          <h3 class="title">Login</h3>
          <div class="input_area">
            <q-input outlined label="E-MAIL ADDRESS" />
          </div>
          <div class="input_area">
            <q-input outlined type="password" label="PASSWORD" />
          </div>
          <div class="btn_area">
            <button type="button" class="btn_orange type_full">Login</button>
          </div>
          <div class="check_area">
            <ul class="checkbox_list">
              <li>
                <div class="m_check_wrap">
                  <input type="checkbox" id="keepLogin" />
                  <label for="keepLogin">Keep logged in</label>
                </div>
              </li>
            </ul>
            <router-link to="/account/findPassword" class="lost"
              >Forgot your ID / Password?</router-link
            >
          </div>
          <p class="or">
            <span>OR</span>
          </p>
          <div class="sns_area">
            <ul class="list">
              <li class="g-signin2" id="googleButton">
                <img src="~assets/img_login_google.png" alt />
                <span>Continue with Google</span>
              </li>
              <li>
                <img src="~assets/img_login_apple.png" alt />
                <span>Continue with Apple</span>
                <div
                  id="appleid-signin"
                  class="signin-button"
                  data-color="black"
                  data-border="true"
                  data-type="sign in"
                ></div>
              </li>

              <!-- <li @click="openYahooAccessTokenPage">
                <img src="~assets/img_login_yahoo.png" alt>
                <span>Continue with Yahoo</span>
              </li>-->
              <li @click="getFacebookAccessToken">
                <img src="~assets/img_login_facebook.png" alt />
                <span>Continue with Facebook</span>
              </li>
            </ul>
          </div>
          <div class="login_sign_up">
            <span class="account">Don't have an account?</span>
            <router-link to="/account/register" class="sign_up"
              >Sign up</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { T } from "../../store/module-example/types";
import mixin from "../../mixin";

export default {
  mixins: [mixin],
  components: {},
  data() {
    return {
      userEmail: "",
      userPassword: "",
      auth2: null,
    };
  },
  beforeMount() {
    const thisObj = this;
    const loginUser = this.$q.cookies.get("loginUser");
    if (loginUser) {
      const successCb = () => {
        thisObj.loginCallbackPage();
        thisObj.$store.dispatch(T.SET_LOGIN_USER_INFO, loginUser);
        setTimeout(() => {
          thisObj.sendSuccessMessage("로그인 성공");
        }, 0);
      };

      const errorCb = () => {
        console.log("세션 만료로 쿠키 제거");
        thisObj.removeLoginSesstion();
      };

      this.checkLoginSesstion(successCb, errorCb);
    }
  },
  methods: {
    attachSignin(element) {
      const thisObj = this;
      window.auth2.attachClickHandler(
        element,
        {},
        function (googleUser) {
          console.log(googleUser);
          var profile = googleUser.getBasicProfile();
          console.log("ID: " + profile.getId()); // Don't send this directly to your server!
          console.log("Full Name: " + profile.getName());
          console.log("Given Name: " + profile.getGivenName());
          console.log("Family Name: " + profile.getFamilyName());
          console.log("Image URL: " + profile.getImageUrl());

          thisObj.googleLogin(googleUser.wc.access_token);
        },
        function (error) {
          alert(JSON.stringify(error, undefined, 2));
        }
      );
    },
    googleAuthInit() {
      const thisObj = this;
      thisObj.attachSignin(document.getElementById("googleButton"));
    },
    googleLogin(accessToken) {
      const thisObj = this;
      const successCb = (result) => {
        console.log(result);
        if (result.success) {
          const loginUser = {
            email: result.email,
            first_name: result.first_name,
            last_name: result.last_name,
          };
          thisObj.$q.cookies.set("loginUser", loginUser, { path: "/" });
          thisObj.$store.dispatch(T.SET_LOGIN_USER_INFO, loginUser);
          thisObj.$q.cookies.set("token", result.tom_token, { path: "/" });
          thisObj.movePage("/");
          setTimeout(() => {
            thisObj.sendSuccessMessage("구글 로그인 성공");
          }, 0);
        } else {
          setTimeout(() => {
            thisObj.sendErrorMessage("로그인 실패" + result.message);
          }, 0);
        }
      };
      const errorCb = () => {};
      thisObj.$store.dispatch(T.GOOGLE_LOGIN, {
        data: {
          accessToken,
        },
        successCb,
        errorCb,
      });
    },
    facebookLogin(accessToken, userId) {
      const thisObj = this;
      const successCb = (result) => {
        console.log(result);
        if (result.success) {
          const loginUser = {
            email: result.email,
            first_name: result.first_name,
            last_name: result.last_name,
          };
          thisObj.$q.cookies.set("loginUser", loginUser, { path: "/" });
          thisObj.$store.dispatch(T.SET_LOGIN_USER_INFO, loginUser);
          thisObj.$q.cookies.set("token", result.tom_token, { path: "/" });
          thisObj.movePage("/");
          setTimeout(() => {
            thisObj.sendSuccessMessage("페이스북 로그인 성공");
          }, 0);
        } else {
          setTimeout(() => {
            thisObj.sendErrorMessage("로그인 실패" + result.message);
          }, 0);
        }
      };
      const errorCb = () => {};
      thisObj.$store.dispatch(T.FACEBOOK_LOGIN, {
        data: {
          accessToken,
          userId,
        },
        successCb,
        errorCb,
      });
    },
    getFacebookAccessToken() {
      const thisObj = this;
      FB.login(
        function (response) {
          if (response.authResponse) {
            console.log("Welcome!  Fetching your information.... ");
            console.log(response); // dump complete info
            const accessToken = response.authResponse.accessToken; //get access token
            const userId = response.authResponse.userID; //get FB UID
            thisObj.facebookLogin(accessToken, userId);
            FB.api("/me", function (response) {
              const user_email = response.email; //get user email
              // you can store this data into your database
            });
          } else {
            //user hit cancel button
            console.log("User cancelled login or did not fully authorize.");
          }
        },
        {
          scope: "email",
        }
      );
    },
    openYahooAccessTokenPage() {
      console.log(this.$route.hash);
      console.log(this.$route);
      const YAHOO_REDIRECT_URI =
        "https://rose-rose-shop.netlify.app/oauth/yahoo/sucess";
      const YAHOO_CLIENT_ID =
        "dj0yJmk9QnZMRXNoakNiMk00JmQ9WVdrOVFUWXdSRlJyTXpBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTVl";
      const YAHOO_SCOPE = `openid%20profile`;
      window.open(
        `https://api.login.yahoo.com/oauth2/request_auth?client_id=${YAHOO_CLIENT_ID}&response_type=code&redirect_uri=${YAHOO_REDIRECT_URI}&scope=${YAHOO_SCOPE}&nonce=YihsFwGKgt3KJUh6tPs2`,
        "_blank",
        "width=500,height=600"
      );
    },
    yahooLoginSuccessFunc(loginUser) {
      console.log(loginUser);
    },
    appleLoginInit() {
      AppleID.auth.init({
        clientId: "com.roseroseshop.web",
        scope: "name email",
        redirectURI: "https://rose-rose-shop.netlify.app/account/login",
        state: "testState",
        usePopup: true, //or false defaults to false
      });
      //Listen for authorization success
      document.addEventListener("AppleIDSignInOnSuccess", (data) => {
        //handle successful response
        console.log("successful");
        console.log(data);
      });
      //Listen for authorization failures
      document.addEventListener("AppleIDSignInOnFailure", (error) => {
        //handle error.
        console.log("handle error");
        console.log(data);
      });
    },
  },
  mounted() {
    this.googleAuthInit();
    this.appleLoginInit();
  },
};
</script>

<style lang="scss">
#appleid-signin {
  top: 0;
  position: absolute;
  height: 55px;
  opacity: 0;
}
</style>

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
    .input_in {
      .btn_area {
        margin-top: 24px;
      }
      .check_area {
        position: relative;
        margin-top: 18px;
        .lost {
          position: absolute;
          right: 0;
          top: 0;
          font-family: Roboto;
          font-style: normal;
          font-weight: 400;
          font-size: $font-size-6;
          line-height: 20px;
          text-transform: capitalize;
          color: #939fa5;
        }
      }

      .or {
        position: relative;
        margin: 30px 0;
        text-align: center;
        > span {
          position: relative;
          display: inline-block;
          height: 21px;
          line-height: 21px;
          padding: 0 14px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 10px;
          background: #fff;
          text-align: center;
          text-transform: uppercase;
          /* Gray / Dark */
          color: rgba(0, 0, 0, 0.24);
        }

        &:before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 1px;
          background: #e5e5e5;
        }
      }
      .sns_area {
        .list {
          font-size: 0;
          display: grid;
          grid-template-areas: "item item";
          grid-template-columns: 1fr 1fr;
          grid-gap: 14px;
          > li {
            position: relative;
            padding: 14px 0;
            background: #ffffff;
            border: 1px solid #cfd6d8;
            box-sizing: border-box;
            border-radius: 1px;
            text-align: center;
            cursor: pointer;
            img {
              display: inline-block;
              vertical-align: middle;
              margin-right: 10px;
            }
            > span {
              display: inline-block;
              vertical-align: middle;
              font-family: Noto Sans KR;
              font-style: normal;
              font-weight: 500;
              font-size: $font-size-6;
              line-height: 20px;
              color: $color-gray-10;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .type_login .input_box_area .input_in .check_area .lost {
  }
}
@media screen and (max-width: 768px) {
  .type_login {
    .input_box_area {
      .or {
        display: none;
      }
    }
    .input_box_area {
      .input_in {
        .sns_area {
          margin-top: 25px;
          .list {
            grid-template-areas: "item";
            grid-template-columns: 1fr;
            grid-gap: 8px;
          }
        }
        .login_sign_up {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>