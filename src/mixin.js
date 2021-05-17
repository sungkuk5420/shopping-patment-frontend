import { T } from "./store/module-example/types";
import { mapGetters } from "vuex";
let myMixin = {
  components: {},
  computed: {
    totalPriceCal() {
      // 장바구니 전체 금액
      let price = 0;
      this.shoppingList.forEach((v, i) => {
        price += v.price * v.count;
      });

      return this.financial(price);
    },
    ...mapGetters({
      changeSuccessMessage: "changeSuccessMessage",
      changeErrorMessage: "changeErrorMessage",
      loginUser: "getLoginUserInfo"
    })
  },
  created() {
    console.log("mixin");
  },
  watch: {
    changeSuccessMessage(text) {
      if (text !== "") {
        this.$notification.success({
          message: text,
          // description:
          // 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          onClick: () => {
            console.log("Notification Clicked!");
          }
        });
      }
      this.$store.dispatch(T.CHANGE_SUCCESS_MESSAGE, "");
    },
    changeErrorMessage(text) {
      if (text !== "") {
        this.$notification.error({
          message: text,
          onClick: () => {
            console.log("Notification Clicked!");
            this.close();
          }
        });
      }
      this.$store.dispatch(T.CHANGE_ERROR_MESSAGE, "");
    }
  },
  data() {
    return {};
  },
  methods: {
    financial(x) {
      // 소수점 두번째에서 반올림
      return Number.parseFloat(x).toFixed(2);
    },
    logout() {
      const thisObj = this;
      thisObj.$store.dispatch(T.SET_LOGIN_USER_INFO, null);
      thisObj.removeLoginSesstion();
      thisObj.movePage("/account/login");
      setTimeout(() => {
        thisObj.sendSuccessMessage("로그아웃");
      }, 0);
    },

    removeLoginSesstion() {
      this.$q.cookies.remove("loginUser", { path: "/" });
      this.$q.cookies.remove("token", { path: "/" });
      this.$q.cookies.remove("prevPgae", { path: "/" });
    },
    checkLoginSesstion(successCb, errorCb) {
      const loginUser = this.$q.cookies.get("loginUser");
      if (loginUser) {
        successCb();
      } else {
        errorCb();
      }
    },
    movePage(pageName) {
      this.$router.push(pageName).catch(err => {}); // 동일한 페이지 중복 에러처리
    },
    prevPage() {
      this.$router.go(-1);
    },
    sendSuccessMessage(text) {
      this.$store.dispatch(T.CHANGE_SUCCESS_MESSAGE, text);
    },
    sendErrorMessage(text) {
      this.$store.dispatch(T.CHANGE_ERROR_MESSAGE, text);
    },

    loginCallbackPage() {
      const prevPage = this.$q.cookies.get("prevPgae");
      if (prevPage) {
        this.movePage(prevPage);
      } else {
        this.movePage("/");
      }
    }
  }
};
export default myMixin;
