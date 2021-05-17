<template>
  <div id="header">
    <!-- <div class="header_top">
      <div class="select_area">
        <div class="custom_select">
          <span class="selected_text type_img">
            <img
              src="~assets/img_america.png"
              id="eng"
              class="selected_text_img active"
              alt="america"
            >
            <img src="~assets/img_america.png" id="2" class="selected_text_img" alt="america">
            <img src="~assets/img_america.png" id="3" class="selected_text_img" alt="america">

            <select name id @change="nationChange">
              ENG
              <option value="eng">ENG</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </span>
        </div>
        <div class="custom_select">
          <a class="selected_text">USD</a>
        </div>
      </div>
      <div class="login_area">
        <ul class="login_list">
          <li v-show="loginUser" @click="logout">
            <a href="#">LOGOUT</a>
          </li>
          <li v-show="!loginUser">
            <router-link to="/account/login">LOGIN</router-link>
          </li>
          <li v-show="!loginUser">
            <router-link to="/account/register">JOIN</router-link>
          </li>
          <li>
            <router-link to="/">MY PAGE</router-link>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="header_bottom">
      <div class="logo_area">
        <h1 class="title">
          <a href="#" @click="movePage('/')">
            <img src="~assets/img_roseshop_logo.png" alt />
          </a>
        </h1>
      </div>
      <div class="m_gnb_area">
        <button type="button" @click="menuShow">
          <img src="~assets/img_m_gnb.png" alt="모바일 메뉴바" />
        </button>
      </div>
      <!-- <div class="gnb_list_wrap">
        <div
          class="gnb_list_in"
          @mouseover="isMobile ? null : menuShow()"
          @mouseout="isMobile ? null : menuHide()"
        >
          <ul class="gnb_list">
            <li>
              <router-link to>HOT DEAL</router-link>
            </li>
            <li>
              <router-link to>
                NEW ARRIVAL
                <span class="orange_ico">N</span>
              </router-link>
            </li>
            <li>
              <router-link to>TIME SALE</router-link>
            </li>
            <li>
              <router-link to>EVENT PAGE</router-link>
            </li>
            <li>
              <router-link to="/information/notice">NOTICE</router-link>
            </li>
            <li>
              <router-link to="/shop/brands">BRAND</router-link>
            </li>
          </ul>

          <div class="gnb_list_more" id="gnbMore">
            <button type="button" class="gnb_mo_close" @click="menuHide">
              <img src="~assets/img_gray_x.png" alt />
            </button>
            <ul class="gnb_depth_1">
              <li v-for="(item, index) in gnbMenuList.depth1" :key="index">
                <a href="#" @click="gnbSlide">{{ item.title }}</a>
                <ul class="gnb_depth_2" :class="{ all_show: item.allShow }">
                  <li v-for="(item2, i) in item.depth2" :key="i">
                    <router-link to="/shop/shop">{{ item2 }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="event_list">
              <li>
                <img src="~assets/img_gnb_event.png" alt />
                <div class="event_desc">
                  <h3 class="title">EVENT TITLE</h3>
                  <p class="desc">Description</p>
                </div>
              </li>
              <li>
                <img src="~assets/img_gnb_event.png" alt />
                <div class="event_desc">
                  <h3 class="title">EVENT TITLE</h3>
                  <p class="desc">Description</p>
                </div>
              </li>
              <li>
                <img src="~assets/img_gnb_event.png" alt />
                <div class="event_desc">
                  <h3 class="title">EVENT TITLE</h3>
                  <p class="desc">Description</p>
                </div>
              </li>
              <li>
                <img src="~assets/img_gnb_event.png" alt />
                <div class="event_desc">
                  <h3 class="title">EVENT TITLE</h3>
                  <p class="desc">Description</p>
                </div>
              </li>
            </ul>
            <div class="gnb_mo_bottom_area">
              <div class="sns_wrap">
                <ul class="gnb_sns">
                  <li>
                    <a href="#">
                      <img src="~assets/ico_facebook.png" alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~assets/ico_instargram.png" alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~assets/ico_twitter.png" alt="Twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="~assets/ico_youtube.png" alt="Youtube" />
                    </a>
                  </li>
                </ul>
                <p class="gnb_mo_copyright">
                  © 2014 TOM CO.,LTD. ALL RIGHTS RESERVED.
                </p>
              </div>
              <ul class="nation_list">
                <li>
                  <a href="#">
                    <img src="~assets/img_america.png" alt="america" />
                    <span class="text">ENG</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="text">USD</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="gnb_more_bg"></div>
        </div>
      </div> -->
      <ul class="ico_area">
        <li>
          <a href="#">
            <img src="~assets/img_magnify.png" alt="찾기" />
          </a>
        </li>
        <li class="off">
          <a href="#">
            <img src="~assets/ico_user.png" alt="사용자" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="~assets/ico_heart.png" alt="좋아요" />
          </a>
        </li>
        <li>
          <a href="#" @click="shoppingList">
            <img src="~assets/ico_shopping_basket.png" alt="장바구니" />

            <span class="orange_ico">0</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixin from "../mixin";

export default {
  mixins: [mixin],
  data() {
    return {
      isMobile: false,
      gnbMenuList: {
        depth1: [
          {
            title: "SKIN CARE",
            depth2: [
              "OIL",
              "SKIN TONER",
              "LOTION & EMULSION",
              "ESSENCE & SERUM",
              "CREAM & GEL",
              "SUN CARE",
              "EYE & LIP CARE",
              "MIST & MOISTURE",
              "SK SHEET & PATCH",
              "MA",
              "MASSAGE & PACK",
              "SET ITEM",
              "OTHER GOODS",
              "KIDS",
            ],
          },
          {
            title: "SAMPLES",
            depth2: ["SKINCARE", "MAKEUP", "CLEANSING", "BODY & HAIR", "MEN"],
          },
          {
            title: "MAKEUP",
            depth2: [
              "BB & CC CREAM",
              "FOUNDATION",
              "POWDER & PACT",
              "PRIMER & OIL CONTROL",
              "MAKEUP BASE",
              "CHEEK & BLUSHER",
              "HIGHLIGHTER & SHADING",
              "CONCEALER",
              "OTHER GOODS",
              "EYE",
              "LIP",
              "NAIL",
              "SET ITEM",
              "KIDS",
              "",
            ],
          },
          {
            title: "CLEANSING",
            depth2: [
              "OIL & BALM",
              "FOAM & TONER",
              "SOAP & POWDER",
              "GEL & LIQUID",
              "WATER",
              "LIP & EYE & NAIL",
              "PEELING & SCRUB",
              "CREAM & LOTION",
              "TISSUE & PAD",
              "KIDS",
            ],
          },
          {
            title: "BODY&HAIR",
            depth2: [
              "BODY CLEANSING",
              "BODY CARE",
              "HAND & FOOT CARE",
              "BODY STYLING",
              "HAIR CLEANSING",
              "HAIR CARE",
              "HAIR STYLING",
              "PERFUME & DEODORANT",
              "HAIR REMOVER",
              "KIDS",
              "BATH COLLECTION",
            ],
          },
          {
            title: "Community",
            depth2: ["Q & A", "Request"],
            allShow: true,
          },
        ],
      },
    };
  },
  methods: {
    menuShow() {
      // gnb 메뉴 보이기
      document.querySelector("#gnbMore").classList.add("active");
      document.querySelector("#gnb_more_bg").classList.add("active");
    },
    menuHide() {
      // gnb 메뉴 숨기기
      document.querySelector("#gnbMore").classList.remove("active");
      document.querySelector("#gnb_more_bg").classList.remove("active");
    },
    shoppingList() {
      // 장바구니 열기
      let target = document.getElementById("shoppingList");
      target.classList.add("active");
    },
    gnbSlide(e) {
      // gnb 메뉴 리스트 클릭시 2 뎁스 열기

      let target = e.target;

      target.parentNode.children[1].classList.toggle("active");
      target.classList.toggle("active");
    },
    mq() {
      // 가로 768px 이하인지 확인 - media query
      this.isMobile = window.matchMedia("(max-width:768px)").matches;
    },
    nationChange(e) {
      let target = e.target;
      let target_value = target.options[target.selectedIndex].value;

      document.querySelectorAll(".selected_text_img").forEach((v, i) => {
        v.classList.remove("active");
      });

      document.getElementById(target_value).classList.add("active");
    },
  },
  created() {
    // 리사이즈 시 mq 가져오기
    window.addEventListener("resize", this.mq);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.mq);
  },
};
</script>

<style lang="scss" scoped>
/* header start */

#header {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
  -ms-grid-column-span: 10;
  grid-area: header;
  .header_top {
    position: relative;
    height: 58px;
    border-bottom: 1px solid $color-gray-6;
    .custom_select {
      select {
        position: relative;
        border: 0;
        font-size: 12px;
        font-weight: 500;
        &::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          width: 7px;
          height: 5px;
          margin-top: -2px;
          //background: url("../assets/images/img_bottom_arrow.png") no-repeat 0 0;
        }
        &.active::after {
          transform: rotate(90deg);
        }
      }
    }
    .select_area {
      position: absolute;
      left: 45px;
      top: 23px;
    }
    .login_area {
      position: absolute;
      right: 45px;
      top: 23px;
      .login_list {
        > li {
          display: inline-block;
          vertical-align: top;
          & ~ li {
            margin-left: 24px;
          }
          a {
            display: block;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: $font-size-7;
            height: 20px;
            line-height: 20px;
            color: $color-gray-9;
            cursor: pointer;
          }
        }
      }
    }
  }
  .header_bottom {
    height: 91px;
    position: relative;
    .logo_area {
      position: absolute;
      top: 40px;
      left: 45px;
      .title {
        line-height: 0;
        a {
          display: block;
          line-height: 0;
        }
      }
    }
    .gnb_list_wrap {
      text-align: center;
      .gnb_list_in {
        display: inline-block;
        .gnb_list {
          > li {
            display: inline-block;
            vertical-align: top;
            cursor: pointer;
            padding: 0 15px;
            a {
              display: block;
              position: relative;
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: $font-size-5;
              height: 91px;
              line-height: 91px;
              &:hover {
                color: $color-secondary;
              }
            }
          }
          .orange_ico {
            top: 25px;
          }
        }
      }
    }
    .ico_area {
      position: absolute;
      right: 54px;
      top: 43px;
      &.off {
        display: none;
      }
      > li {
        display: inline-block;
        vertical-align: top;
        & ~ li {
          margin-left: 26px;
        }
        a {
          position: relative;
        }
      }
    }

    .m_gnb_area {
      display: none;
      position: absolute;
      right: 29px;
      top: 67px;
    }
    .gnb_list_more {
      z-index: 10;
      position: absolute;
      left: 0;
      top: 91px;
      padding: 43px 50px;
      width: 100%;
      background: #fff;
      box-sizing: border-box;
      display: none;
      grid-template-areas: "item item item item item item item item item item";
      grid-gap: 10px;
      &.active {
        display: grid;
      }
      .gnb_mo_close,
      .gnb_mo_bottom_area {
        display: none;
      }
      .gnb_depth_1 {
        display: grid;
        grid-template-areas: "item item item item item item";
        grid-column: span 6;
        > li {
          > a {
            display: block;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: $font-size-4;
            line-height: 32px;
            color: $color-secondary;
          }
          .gnb_depth_2 {
            margin-top: 21px;
            &.all_show {
              display: block;
              a {
                font-weight: bold;
                font-size: $font-size-4;
                line-height: 32px;
                color: $color-secondary;
              }
            }
            > li {
              a {
                display: block;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: $font-size-6;
                line-height: 24px;
                color: color-gray-10;
              }
              a.active {
                font-weight: bold;
                font-size: $font-size-4;
                line-height: 32px;
                color: $color-secondary;
              }
            }
          }
        }
      }
      .event_list {
        grid-column: span 4;
        display: grid;
        grid-template-areas: "item item item item";
        grid-gap: 16px;
        > li {
          grid-column: span 2;
          position: relative;
          .event_desc {
            position: absolute;
            left: 24px;
            right: 24px;
            bottom: 12px;
            background: rgba(255, 255, 255, 0.8);
            padding: 10px 5px 4px;
            text-align: center;
            .title {
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: $font-size-5;
              line-height: 24px;
              color: color-gray-10;
            }
            .desc {
              margin-top: 4px;
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: $font-size-6;
              line-height: 24px;
              color: color-gray-9;
            }
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1150px) {
  #header {
    .header_bottom {
      .gnb_list_wrap {
        text-align: right;
        .gnb_list_in {
          .gnb_list {
            > li {
              padding: 0 5px;
            }
          }
        }
      }
      .ico_area {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 1650px) {
  #header {
    .header_bottom {
      .gnb_list_more {
        padding: 20px;
        text-align: center;
        .gnb_depth_1 {
          grid-column: span 10;
        }
        .event_list {
          grid-column: span 10;
          > li {
            grid-column: span 1;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  #header .header_bottom .gnb_list {
    grid-gap: 2%;
  }
}

@media screen and (max-width: 768px) {
  #header .header_bottom .gnb_list {
    display: none;
  }
  #header .header_top {
    height: 52px;
  }
  #header .header_top .select_area {
    left: 24px;
    top: 17px;
  }
  #header .header_top .login_area {
    display: none;
  }
  #header .header_bottom {
    position: static;
    height: 55px;
  }
  #header .header_bottom .ico_area {
    display: block;
    right: 24px;
    top: 19px;
  }
  #header .header_bottom .ico_area > li ~ li {
    margin-left: 14px;
  }
  #header .header_bottom .logo_area {
    top: 71px;
    left: 21px;
  }
  #header .header_bottom .logo_area img {
    width: 104px;
  }
  #header .header_bottom .m_gnb_area {
    display: block;
  }

  #header {
    .header_bottom {
      .gnb_list_more {
        z-index: 1000;
        position: fixed;
        right: 0;
        top: 0;
        left: auto;
        width: 80%;
        height: 100%;
        background: #fff;
        padding: 80px 30px 180px;
        &.active {
          display: block;
        }
        .gnb_mo_close {
          display: block;
          position: absolute;
          left: 18px;
          top: 30px;
        }
        .gnb_depth_1 {
          overflow: auto;
          display: block;
          height: 100%;
          text-align: left;
          > li {
            > a {
              position: relative;
              font-weight: bold;
              font-size: $font-size-6;
              line-height: 20px;
              color: $color-gray-10;
              background: url("../assets/img_mo_gray_right_arrow.png") no-repeat
                100% 50%;
            }
            ~ li {
              margin-top: 30px;
            }
            .gnb_depth_2 {
              display: none;
              &.active {
                display: block;
              }
              > li {
                > a {
                  font-size: $font-size-7;
                  line-height: 22px;
                }
              }
              &.all_show {
                > li {
                  margin-top: 30px;
                  a {
                    position: relative;
                    font-weight: bold;
                    font-size: $font-size-6;
                    line-height: 20px;
                    color: $color-gray-10;
                    background: url("../assets/img_mo_gray_right_arrow.png")
                      no-repeat 100% 50%;
                  }
                }
              }
            }
          }
        }
        .event_list {
          display: none;
        }

        .gnb_mo_bottom_area {
          display: block;
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          .sns_wrap {
            padding: 22px;
            border-top: 1px solid #eaeaea;
            text-align: left;
            .gnb_sns {
              > li {
                display: inline-block;
                vertical-align: top;
                margin-right: 18px;
              }
            }
            .gnb_mo_copyright {
              margin-top: 17px;
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: $font-size-7;
              line-height: 20px;

              color: $color-gray-10;
            }
          }
          .nation_list {
            display: grid;
            grid-template-areas: "item item";
            grid-column: 1fr 1fr;
            border-top: 1px solid #eaeaea;
            > li {
              text-align: center;
              padding: 13px 0 15px;
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: $font-size-7;
              line-height: 20px;
              color: $color-gray-9;

              &:first-child {
                border-right: 1px solid #eaeaea;
              }
              img {
                display: inline-block;
                vertical-align: middle;
                margin-right: 7px;
              }
              .text {
                display: inline-block;
                vertical-align: middle;
                position: relative;
                padding-right: 15px;
                &::after {
                  content: "";
                  position: absolute;
                  right: 0;
                  top: 50%;
                  width: 7px;
                  height: 5px;
                  margin-top: -2px;
                  background: url("../assets/img_bottom_arrow.png") no-repeat 0
                    0;
                }
                &.active::after {
                  transform: rotate(90deg);
                }
              }
            }
          }
        }
      }
      #gnb_more_bg {
        display: none;
        z-index: 999;
        position: fixed;
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        &.active {
          display: block;
        }
      }
    }
  }
}
/* header end */
</style>
