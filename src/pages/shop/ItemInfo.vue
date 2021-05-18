<template>
  <div>
    <div class="sub_content type_info type_item">
      <div class="sub_content_main type_info">
        <div class="info_main">
          <div class="info_area">
            <div class="item_img">
              <div class="top">
                <img :src="itemDetail.mainImg" alt="" />
              </div>
              <div class="bottom">
                <ul class="bottom_list">
                  <li
                    v-for="(item, index) in itemDetail.img"
                    :key="index"
                    @click="itemChange(index)"
                  >
                    <img :src="item" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="item_info">
              <p class="design_type">{{ itemDetail.title }}</p>
              <h2 class="title">{{ itemDetail.desc }}</h2>
              <div class="star_area">
                <span class="star_parent_wrap">
                  <span class="star_parent">
                    <span :style="itemDetail.star"></span>
                  </span>
                </span>
                <span class="result_star">
                  {{ itemDetail.resultStar }}
                </span>
                <span class="total_user">
                  (<em>{{ itemDetail.totalUser }}</em
                  >)
                </span>
              </div>
              <div class="price_area">
                <span class="before_price"
                  >$
                  <em>{{ itemDetail.beforePrice }}</em>
                </span>
                <span class="discount_price"
                  >$
                  <em>{{ itemDetail.discountPrice }}</em>
                </span>
              </div>
              <p class="item_desc">{{ itemDetail.itemDesc }}</p>
              <ul class="item_more_info">
                <li>
                  Brand <strong>{{ itemDetail.brand }}</strong>
                </li>
                <li>
                  Product code <strong>{{ itemDetail.productCode }}</strong>
                </li>
                <li>
                  product weight <strong>{{ itemDetail.productWeight }}</strong>
                </li>
                <li>
                  Availabilty <strong>{{ itemDetail.availabilty }}</strong>
                </li>
              </ul>
              <div class="item_count">
                <span class="minus" @click="itemMinus2">
                  <img src="~assets/img_gray_minus.png" alt="" />
                </span>
                <span class="count">{{ `만원권 ${item10000Count}장` }}</span>
                <span class="plus" @click="itemPlus2">
                  <img src="~assets/img_gray_plus.png" alt="" />
                </span>
              </div>
              <div class="item_count" style="margin-top: 5px">
                <span class="minus" @click="itemMinus">
                  <img src="~assets/img_gray_minus.png" alt="" />
                </span>
                <span class="count">{{ `천원권 ${item1000Count}장` }}</span>
                <span class="plus" @click="itemPlus">
                  <img src="~assets/img_gray_plus.png" alt="" />
                </span>
              </div>
              <div class="btn_area">
                <button type="button" class="type_dark">Payment</button>
                <button type="button" class="type_gray">add to wishlist</button>
              </div>
              <ul class="social">
                <li>
                  <span class="first">TAGS</span>
                  <span>{{ itemDetail.tags }}</span>
                </li>
                <li>
                  <span class="first">SHARE</span>
                  <button type="button">
                    <img src="~assets/ico_facebook.png" alt="facebook" />
                  </button>
                  <button type="button">
                    <img src="~assets/ico_twitter.png" alt="Twitter" />
                  </button>
                  <button type="button">
                    <img src="~assets/ico_instargram.png" alt="Instagram" />
                  </button>
                  <button type="button">
                    <img src="~assets/ico_youtube.png" alt="Youtube" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="info_area">
            <div class="info_item_detail">
              <p class="detail_desc">PRODUCT DESCRIPTION</p>
              <p class="detail_desc_2">
                Saints are a low-waist, drop crotch relaxed boyfriend jean.
                Straight fit across the hips, bow shape legs, with knee darts
                and tapered leg. Back pockets dropped slightly for slouch feel.
              </p>
              <div class="detail_img_area">
                <img src="~assets/img_item_detail.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      item1000Count: 1,
      item10000Count: 1,
      itemDetail: {
        mainImg: require("../../assets/img_item_info_sample.png"), //메인 이미지
        img: [
          require("../../assets/img_item_info_sample.png"), //메인 이미지랑 같아야됨?
          require("../../assets/img_test1.png"), //서브 이미지
          require("../../assets/img_item_info_sample.png"), //서브 이미지
          require("../../assets/img_test2.png"), //서브 이미지
        ],
        title: "2NDESIGN",
        desc: "FIRST TONER ESSENCE - 200ML",
        star: { width: "80%" },
        resultStar: 4.5,
        totalUser: 2489,
        beforePrice: 76.0,
        discountPrice: 53.7,
        itemDesc:
          "Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel.",
        brand: "C2NDESIGN",
        productCode: "2NDESIGN_191206",
        productWeight: "303G",
        availabilty: "IN STOCK",
        tags: "2NDESIGN Springy Peeling Gel Tone Up Boost 120ml",
      },
    };
  },
  methods: {
    itemPlus() {
      // 카운트 증가
      this.item1000Count++;
    },
    itemMinus() {
      // 카운트 감소
      if (this.item1000Count < 1) {
        this.item1000Count = 0;
      } else {
        this.item1000Count--;
      }
    },
    itemPlus2() {
      // 카운트 증가
      this.item10000Count++;
    },
    itemMinus2() {
      // 카운트 감소
      if (this.item10000Count < 1) {
        this.item10000Count = 0;
      } else {
        this.item10000Count--;
      }
    },
    itemChange(i) {
      // 이미지 클릭시 대표 이미지 변환
      let itemIndex = i;
      this.itemDetail.mainImg = this.itemDetail.img[itemIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
.info_area {
  display: grid;
  grid-template-areas: "items items items items items items items items items items";
  grid-auto-columns: 1fr;
  grid-gap: 75px;
  .item_img {
    grid-column: span 6;
    .top {
      img {
        width: 100%;
      }
    }
    .bottom {
      .bottom_list {
        display: grid;
        grid-template-areas: "items items items items items items";
        grid-auto-columns: 1fr;
        grid-gap: 16px;
        margin-top: 16px;
        li {
          cursor: pointer;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .item_info {
    grid-column: span 4;
    .design_type {
      font-family: Roboto;
      font-weight: 500;
      font-size: $font-size-5;
      line-height: 24px;
      color: #000f08;
    }
    > .title {
      margin-top: 7px;
      font-family: Roboto;
      font-weight: 500;
      font-size: $font-size-2;
      line-height: 48px;
      color: #000f08;
    }
    .star_area {
      margin-top: 20px;
    }
    .price_area {
      margin-top: 30px;
      .before_price {
        font-weight: 500;
        font-size: $font-size-3;
        line-height: 40px;
      }
      .discount_price {
        font-size: $font-size-2;
        line-height: 48px;
      }
    }
    .item_desc {
      margin-top: 19px;
      font-family: Roboto;
      font-size: $font-size-6;
      line-height: 20px;
      color: #8c8c8c;
    }
    .item_more_info {
      margin: 30px 0;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: $font-size-5;
      line-height: 32px;
      text-transform: uppercase;
      color: #000f08;
      strong {
        font-weight: 700;
      }
    }
    .mo_add_area {
      display: none;
      text-align: center;
      .bag_area {
        position: relative;
        margin-top: 24px;
        padding-right: 68px;
        box-sizing: border-box;
        > button {
          display: inline-block;
          vertical-align: top;
          height: 69px;
          line-height: 69px;
          background: #000f08;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 17.25px !important;
          text-align: center;
          color: #ffffff;
          &.bag {
            width: 100%;
          }
          &.heart {
            position: absolute;
            right: 0;
            top: 0;
            width: 67px;
            img {
            }
          }
        }
      }
    }
    .item_count {
      position: relative;
      width: 100%;
      height: 70px;
      background: #ffffff;
      border: 1px solid $color-gray-8;
      box-sizing: border-box;
      text-align: center;
      .minus {
        position: absolute;
        left: 0;
        top: 0;
        width: 78px;
        height: 70px;
        line-height: 70px;
        color: $color-gray-8;
        cursor: pointer;
      }
      .count {
        display: inline-block;
        padding: 0 78px;
        width: 100%;
        height: 70px;
        line-height: 70px;
        font-family: Roboto;
        font-weight: bold;
        font-size: $font-size-4;
        color: $color-gray-10;
        box-sizing: border-box;
      }
      .plus {
        position: absolute;
        right: 0;
        top: 0;
        width: 78px;
        height: 70px;
        line-height: 70px;
        color: $color-gray-8;
        cursor: pointer;
      }
    }
    .btn_area {
      button {
        margin-top: 20px;
        width: 100%;
        height: 70px;
        line-height: 70px;
        font-family: Roboto;
        font-weight: bold;
        font-size: $font-size-5;
        line-height: 24px;
        text-transform: uppercase;
      }
    }
    .social {
      > li {
        margin-top: 20px;
        span {
          display: inline-block;
          vertical-align: top;
          margin-right: 10px;
          font-family: Roboto;
          font-weight: 500;
          font-size: $font-size-6;
          line-height: 20px;
          color: $color-gray-9;
        }
        button {
          display: inline-block;
          vertical-align: top;
          margin-right: 10px;
          font-family: Roboto;
          font-weight: 500;
          font-size: $font-size-6;
          line-height: 20px;
          color: $color-gray-9;
          margin-right: 20px;
        }
        .first {
          font-weight: 300;
        }
        &:nth-child(2) {
          margin-top: 13px;
          span {
            margin-right: 20px;
          }
        }
      }
    }
  }
  .info_item_detail {
    grid-column: span 10;
    margin-top: 113px;
    .detail_desc {
      font-family: Roboto;
      font-weight: 500;
      font-size: $font-size-4;
      line-height: 32px;
      color: $color-gray-10;
    }
    .detail_desc_2 {
      margin-top: 20px;
      font-family: Roboto;
      font-weight: 400;
      font-size: $font-size-5;
      line-height: 24px;
      color: #8c8c8c;
    }
    .detail_img_area {
      margin-top: 34px;
      img {
        max-width: 100%;
        margin: 0 auto;
      }
    }
  }
}

// @media screen and (max-width: 1000px) {
//   .info_area .item_img {
//     grid-column: span 10;
//   }
//   .info_area .item_info {
//     grid-column: span 10;
//   }
// }

// @media screen and (max-width: 768px) {  
//   .info_area {
//     display: block;
//     margin-top: 0 !important;
//     grid-template-areas: none;
//     // grid-auto-columns: 1fr;
//     // grid-gap: 75px;
//     .item_img {
//       margin: 0 -21px;
//       .bottom {
//         display: none;
//       }
//     }
//     .item_info {
//       .design_type {
//         margin-top: 24px;
//         font-weight: 500;
//         font-size: $font-size-6;
//         line-height: 20px;
//       }
//       .title {
//         font-weight: 500;
//         font-size: 18px;
//         line-height: 28px;
//       }
//       .star_area {
//         margin-top: 13px;
//       }
//       .price_area {
//         margin-top: 11px;
//         .before_price {
//           font-weight: 500;
//           font-size: $font-size-5;
//           line-height: 24px;
//         }
//         .discount_price {
//           font-weight: bold;
//           font-size: 18px;
//           line-height: 40px;
//         }
//       }
//       .item_desc {
//         display: none;
//       }
//       .item_more_info {
//         margin-top: 15px;
//         font-size: $font-size-7;
//         line-height: 24px;
//       }
//       .item_count {
//         height: 48px;
//         font-size: $font-size-5;
//         .count {
//           height: 46px;
//           line-height: 46px;
//           font-size: $font-size-5;
//         }
//         .minus,
//         .plus {
//           width: 48px;
//           height: 46px;
//           line-height: 46px;
//           img {
//             width: 16px;
//           }
//         }
//       }
//       .btn_area {
//         button {
//           margin-top: 10px !important;
//           width: 100% !important;
//           height: 48px !important;
//           line-height: 48px !important;
//           font-size: 14px !important;
//           line-height: 24px !important;
//         }
//       }
//       .social {
//         .first {
//           display: block;
//           margin-bottom: 13px;
//         }
//       }
//     }
//     .info_item_detail {
//       margin-top: 50px;
//       padding-top: 40px;
//       border-top: 1px solid #eaeaea;
//       .detail_desc {
//         font-size: $font-size-5;
//         line-height: 40px;
//       }
//       .detail_desc_2 {
//         margin-top: 20px;
//         font-size: $font-size-6;
//         line-height: 20px;
//       }
//       .detail_img_area {
//         margin-top: 20px;
//       }
//     }
//   }
// }
// </style>