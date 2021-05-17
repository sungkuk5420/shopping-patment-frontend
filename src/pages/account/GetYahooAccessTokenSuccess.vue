<template>
  <div class="fixed-center text-center">
    <p class="text-faded">야후 로그인 중...</p>
  </div>
</template>

<script >
import { T } from "../../store/module-example/types";
export default {
  name: "Error404",
  mounted() {
    console.log(this.$route.fullPath);
    const datas = this.$route.fullPath.split("?");
    const code = datas[1].replace("code=", "");
    console.log(code);
    console.log(opener);
    const thisObj = this;
    const successCb = loginUser => {
      console.log("yahoo sucess ");
      console.log(loginUser);
      opener.yahooLoginSuccessFunc(loginUser);
      window.close();
    };
    const errorCb = () => {};
    thisObj.$store.dispatch(T.YAHOO_LOGIN, {
      data: { code },
      successCb,
      errorCb
    });
  }
};
</script>
