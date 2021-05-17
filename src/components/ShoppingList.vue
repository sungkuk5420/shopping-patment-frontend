<template>
  <div id="shoppingList">
    <div class="shopping_in">
      <div class="title_area">
        <h2 class="title">recently added items</h2>
        <button type="button" class="shopping_close" @click="shoppingClose">
          <img src="~assets/img_gray_x.png" alt="닫기">
        </button>
      </div>
      <div class="shopping_content">
        <!-- 장바구니 있을 때 -->
        <ul class="list">
          <!-- 장바구니 비었을 때 empty 클래스 추가-->
          <li v-for="(item, index) in shoppingList" :key="index">
            <img class="shopping_img" :src="item.img" alt>
            <div class="desc">
              <p class="item_title">{{ item.title }}</p>
              <p class="item_desc">
                $
                <em class="price">{{ item.price }}</em> x
                <em class="count">{{ item.count }}</em>
              </p>
            </div>
            <button type="button" class="list_close" @click="shoppingRemove(index)">
              <img src="~assets/img_gray_x.png" alt="닫기">
            </button>
          </li>
        </ul>
        <!-- 장바구니 있을 때 -->
        <div class="sub_total_area">
          <span class="sub_total">Subtotal :</span>
          <span class="total_price">
            $
            <em>{{ totalPriceCal }}</em>
          </span>
        </div>
        <div class="btn_area">
          <button type="button" class="btn_orange" @click="viewCart">view cart</button>
          <button type="button" class="btn_orange type_full" @click="checkOut">check out</button>
          <button type="button" class="empty" @click="allEmpty">Empty All</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "../mixin";

export default {
  mixins: [mixin],
  data() {
    return {
      shoppingList: [
        // 장바구니 리스트
        {
          img: require("../assets/img_list_sample_1.png"),
          title: "Derma Ectocica1",
          price: "53.70",
          count: 1
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          title: "Derma Ectocica2",
          price: "53.70",
          count: 1
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          title: "Derma Ectocica3",
          price: "53.70",
          count: 1
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          title: "Derma Ectocica4",
          price: "53.70",
          count: 1
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          title: "Derma Ectocica5",
          price: "53.70",
          count: 1
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          title: "Derma Ectocica6",
          price: "53.70",
          count: 1
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          title: "Derma Ectocica7",
          price: "53.70",
          count: 1
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          title: "Derma Ectocica8",
          price: "53.70",
          count: 1
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          title: "Derma Ectocica9",
          price: "53.70",
          count: 1
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          title: "Derma Ectocica10",
          price: "53.70",
          count: 1
        }
      ]
    };
  },
  methods: {
    shoppingClose() {
      // 장바구니 창 닫기
      let target = document.getElementById("shoppingList");
      target.classList.remove("active");
    },
    shoppingRemove(i) {
      // 선택한 장바구니 목록 삭제
      let shopIndex = i;
      this.shoppingList.splice(shopIndex, 1);
    },
    allEmpty() {
      // 장바구니 비우기
      this.shoppingList = [];
    },
    viewCart() {
      //장바구니 창 닫고 cart 페이지 이동
      this.shoppingClose();
      this.movePage("/shop/cart");
    },
    checkOut() {
      //장바구니 창 닫고 checkOut 페이지 이동
      this.shoppingClose();
      this.movePage("/shop/checkOut");
    }
  },
  computed: {
    totalPriceCal() {
      // 장바구니 전체 금액
      let price = 0;
      this.shoppingList.forEach((v, i) => {
        price += v.price * v.count;
      });

      return this.financial(price);
    }
  }
};
</script>

<style lang="scss" scoped>
#shoppingList {
  z-index: 1000;
  display: none;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  &.active {
    display: block;
  }
  .shopping_in {
    position: absolute;
    right: 0;
    top: 0;
    width: 344px;
    height: 100%;
    background: #fff;
    padding: 36px 20px 36px 26px;
    box-sizing: border-box;
    .title_area {
      position: relative;
      padding-bottom: 30px;
      .title {
        padding-right: 40px;
        font-family: Roboto;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        text-transform: uppercase;
        color: #000000;
        box-sizing: border-box;
      }
      .shopping_close {
        position: absolute;
        right: -5px;
        top: -8px;
        img {
          width: 100%;
        }
      }
    }
    .shopping_content {
      .empty_cart {
        margin: 80px 0;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: $font-size-7;
        line-height: 16px;
        color: $color-gray-8;
        text-align: center;
      }
      .list {
        overflow: auto;
        position: relative;
        height: calc(100vh - 316px);
        &.empty:after {
          content: "Your cart is currently empty.";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: $font-size-7;
          line-height: 16px;
          color: $color-gray-8;
          text-align: center;
        }
        > li {
          position: relative;
          padding: 40px 30px 40px 0;
          border-bottom: 1px solid #ededed;
          padding-left: 100px;
          box-sizing: border-box;

          &:first-child {
            border-top: 1px solid #ededed;
          }

          .shopping_img {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 85px;
          }
          .desc {
            .item_title {
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: $font-size-5;
              line-height: 24px;
              color: $color-gray-10;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .item_desc {
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: $font-size-5;
              line-height: 24px;
              color: $color-gray-10;
            }
          }
          .list_close {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            img {
              width: 100%;
            }
          }
        }
      }
      .sub_total_area {
        position: relative;
        padding: 24px 0;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
        .sub_total {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: $font-size-5;
          line-height: 24px;
          color: $color-gray-10;
        }
        .total_price {
          position: absolute;
          right: 0;
          top: 24px;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 21px;
          color: #000000;
        }
      }
      .btn_area {
        padding: 34px 0;
        font-size: 0;
        button {
          display: inline-block;
          vertical-align: top;
          padding: 0;
          width: 48%;
          height: 44px;
          line-height: 44px;
          font-weight: bold;
          font-size: $font-size-6;
          line-height: 24px;
          ~ button {
            margin-left: 4%;
          }
          &.empty {
            margin-left: 0;
            width: 100%;
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: $font-size-7;
            line-height: 14px;
            text-transform: capitalize;
            color: $color-secondary;
          }
          .disabled {
            opacity: 0.5;
          }
        }
      }
    }
  }
}
</style>