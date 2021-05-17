<template>
  <div>
    <div class="sub_banner no_pad">
      <img src="~assets/img_about_banner.png" alt>
      <div class="sub_banner_text">
        <h2 class="title">cart</h2>
      </div>
      <div class="sub_location">
        <div class="left">
          <ul>
            <li>
              <img src="~assets/img_home.png" alt>
            </li>
            <li>&nbsp;>&nbsp; shop</li>
            <li>&nbsp;>&nbsp; cart</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sub_content type_info">
      <div class="sub_content_main type_info">
        <div class="info_main">
          <!-- 장바구니 없을 경우 -->
          <!-- <div class="cart_empty">
                    <p class="empty_desc">Your cart is currently empty.</p>
                    <div class="btn_area">
                        <button type="button" class="btn_orange type_full" @click="movePage('/shop/shop')">RETURN TO SHOP</button>
                    </div>
          </div>-->
          <!-- 장바구니 없을 경우 -->
          <!-- 장바구니 있을 경우 -->
          <div class="cart_exist">
            <div class="cart_table_area">
              <table class="cart_table">
                <colgroup>
                  <col style="width:35%;">
                  <col style>
                  <col style>
                  <col style="width:15%;">
                  <col style>
                  <col style="min-width:150px;">
                  <col style>
                </colgroup>
                <thead>
                  <tr>
                    <th>product name</th>
                    <th>model</th>
                    <th>Weight(kg)</th>
                    <th>unit price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in shoppingList" :key="index">
                    <td>
                      <div class="cart_img">
                        <img :src="item.img" alt>
                        <span class="img_desc">{{ item.title }} x {{ item.count }} set</span>
                      </div>
                    </td>
                    <td>{{ item.model }}</td>
                    <td>{{ item.weight }}</td>
                    <td class="price_td">
                      <strong>
                        $
                        <em>{{ item.price }}</em>
                      </strong>
                    </td>
                    <td>
                      <div class="item_count">
                        <span class="minus" @click="itemMinus(index)">
                          <img src="~assets/img_black_minus.png" alt>
                        </span>
                        <span class="count">{{ item.count }}</span>
                        <span class="plus" @click="itemPlus(index)">
                          <img src="~assets/img_black_plus.png" alt>
                        </span>
                      </div>
                    </td>
                    <td class="total_td">
                      <strong class="total type_pc">
                        $
                        <em>{{ financial(item.price * item.count) }}</em>
                      </strong>
                      <strong class="total type_mobile">
                        Unit price $ {{ item.price }} Shipping cost $ 33
                        <em>Total price $ {{ financial(item.price * item.count) }}</em>
                      </strong>
                    </td>
                    <td>
                      <button type="button" class="cart_close" @click="listRemove(index)">
                        <img src="~assets/img_gray_x.png" alt>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="more_cart btn_area">
                <button type="button" class="btn_orange">
                  Show 3 more (
                  <em id="current_cart">8</em>/
                  <em id="totla_cart">10</em>)
                </button>
              </div>
            </div>
            <div class="cart_total_area">
              <div class="left">
                <div class="btn_area">
                  <button type="button" class="btn_orange continue_btn">continue shopping</button>
                  <button type="button" class="clear_chart" @click="allEmpty">CLEAR SHOPPING CART</button>
                </div>
              </div>
              <div class="right">
                <span class="sub_total">SUBTOTAL</span>
                <span class="sub_total_price">
                  $
                  <em>{{ totalPriceCal }}</em>
                </span>
              </div>
            </div>
            <div class="total_couphon_area">
              <div class="couphon_register_area">
                <input type="text" placeholder="Enter coupon code">
                <div class="btn_area">
                  <button type="button" class="btn_orange type_full">apply coupon</button>
                </div>
              </div>
              <div class="btn_area checkout">
                <button
                  type="button"
                  class="btn_orange type_full"
                  @click="movePage('/shop/checkOut')"
                >Check out</button>
              </div>
            </div>
          </div>
          <!-- 장바구니 있을 경우 -->
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
      shoppingList: [
        // 장바구니 리스트
        {
          img: require("../../assets/img_list_sample_1.png"),
          title: "Derma Ectocica 2020 - 110ml",
          model: "Derma Ectocica",
          weight: "0.056",
          price: 53.7,
          count: 1,
          total: 53.7
        },
        {
          img: require("../../assets/img_list_sample_1.png"),
          title: "Derma Ectocica 2020 - 110ml",
          model: "Derma Ectocica",
          weight: "0.056",
          price: 53.7,
          count: 1,
          total: 53.7
        },
        {
          img: require("../../assets/img_list_sample_1.png"),
          title: "Derma Ectocica 2020 - 110ml",
          model: "Derma Ectocica",
          weight: "0.056",
          price: 53.7,
          count: 1,
          total: 53.7
        },
        {
          img: require("../../assets/img_list_sample_1.png"),
          title: "Derma Ectocica 2020 - 110ml",
          model: "Derma Ectocica",
          weight: "0.056",
          price: 53.7,
          count: 1,
          total: 53.7
        },
        {
          img: require("../../assets/img_list_sample_1.png"),
          title: "Derma Ectocica 2020 - 110ml",
          model: "Derma Ectocica",
          weight: "0.056",
          price: 53.7,
          count: 1,
          total: 53.7
        },
        {
          img: require("../../assets/img_list_sample_1.png"),
          title: "Derma Ectocica 2020 - 110ml",
          model: "Derma Ectocica",
          weight: "0.056",
          price: 53.7,
          count: 1,
          total: 53.7
        },
        {
          img: require("../../assets/img_list_sample_1.png"),
          title: "Derma Ectocica 2020 - 110ml",
          model: "Derma Ectocica",
          weight: "0.056",
          price: 53.7,
          count: 1,
          total: 53.7
        },
        {
          img: require("../../assets/img_list_sample_1.png"),
          title: "Derma Ectocica 2020 - 110ml",
          model: "Derma Ectocica",
          weight: "0.056",
          price: 53.7,
          count: 1,
          total: 53.7
        },
        {
          img: require("../../assets/img_list_sample_1.png"),
          title: "Derma Ectocica 2020 - 110ml",
          model: "Derma Ectocica",
          weight: "0.056",
          price: 53.7,
          count: 1,
          total: 53.7
        }
      ]
    };
  },
  methods: {
    itemPlus(i) {
      // 리스트 카운트 ++
      this.shoppingList[i].count++;
    },
    itemMinus(i) {
      // 리스트 카운트 --
      if (this.shoppingList[i].count < 1) {
        this.shoppingList[i].count = 0;
      } else {
        this.shoppingList[i].count--;
      }
    },
    listRemove(i) {
      // 리스트 삭제
      let shopIndex = i;
      this.shoppingList.splice(shopIndex, 1);
    },
    allEmpty() {
      // 리스트 전체 삭제
      this.shoppingList = [];
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
.cart_empty {
  text-align: center;
  .btn_area {
    margin-top: 64px;
    button {
      padding: 0 41px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: $font-size-6;
      text-transform: uppercase;
      color: #ffffff;
      height: 40px;
      line-height: 40px;
    }
  }
}

@media screen and (max-width: "1000px") {
  .cart_table {
    colgroup {
      col {
        &:first-child {
          width: 40% !important;
        }
      }
    }
  }
}
@media screen and (max-width: "768px") {
  /* cart start */
  .sub_content {
    .sub_content_main {
      &.type_info {
        .info_main {
          .cart_exist {
            .cart_table {
              display: block;

              tbody,
              tr,
              td {
                display: block;
              }
              thead {
                display: none;
              }
              tr {
                margin-top: 21px;
                position: relative;
                padding: 16px 16px 80px;
                border: 1px solid #cfd6d8;
                box-sizing: border-box;
                text-align: left;
                td:first-child {
                  padding: 0 25px 0 80px;
                }
              }
              td {
                margin-top: 5px;
                padding: 0 25px 0 80px;
                box-sizing: border-box;
                font-size: $font-size-6;
                line-height: 20px;

                .type_pc {
                  display: none;
                }
                .type_mobile {
                  display: block;
                  font-weight: 400;
                  em {
                    display: block;
                    font-weight: 700;
                  }
                }
                &.price_td {
                  strong {
                    font-size: $font-size-5;
                    line-height: 24px;
                    em {
                      font-size: $font-size-5;
                      line-height: 24px;
                    }
                  }
                }
                &.total_td {
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  width: 100%;
                  height: 60px;
                  padding: 10px;
                  box-sizing: border-box;
                  background: #f9f9f9;
                  text-align: center;
                  color: $color-gray-10;
                }
              }
              .cart_img {
                position: static;
                .img_desc {
                  position: static;
                  display: block;
                  padding-left: 0;
                  transform: none;
                  font-weight: bold;
                  font-size: 11px;
                  line-height: 20px;
                  text-align: left;
                }
                img {
                  position: absolute;
                  left: 16px;
                  top: 16px;
                  width: 64px;
                  height: 64px;
                }
              }
              .item_count {
                display: inline-block;
                width: auto;
                text-align: center;
                height: 36px;
                .count {
                  padding: 0 50px;
                  width: auto;
                  height: 36px;
                  line-height: 36px;
                }
                .plus {
                  height: 36px;
                  line-height: 36px;
                  img {
                    margin-top: 0;
                  }
                }
                .minus {
                  height: 36px;
                  line-height: 36px;
                  img {
                    margin-top: 0;
                  }
                }
              }
              .cart_close {
                position: absolute;
                right: 10px;
                top: 10px;
                width: 30px;
                height: 30px;
                border: 0 none;
                img {
                  width: 100%;
                }
              }
            }
            .cart_total_area {
              padding: 20px 0;
              .left {
                position: static;
                margin-bottom: 20px;
              }
              .continue_btn {
                display: none;
              }
              .right {
                .sub_total {
                  width: 50%;
                  height: 24px;
                  font-weight: bold;
                  font-size: $font-size-6;
                  line-height: 24px;
                  text-align: left;
                }
                .sub_total_price {
                  margin: 0;
                  width: 50%;
                  height: 24px;
                  font-weight: bold;
                  font-size: $font-size-5;
                  line-height: 24px;
                  text-align: right;
                }
              }
            }
            .total_couphon_area {
              padding: 0;
              margin: 30px 0;
              .couphon_register_area {
                padding: 0;
                width: 100%;
                padding-right: 40%;
                > input {
                  width: 100%;
                }
                .btn_area {
                  width: 39%;
                  button {
                    width: 100%;
                    font-size: 14px !important;
                    line-height: 24px !important;
                  }
                }
              }
              .btn_area {
                &.checkout {
                  position: static;
                  margin-top: 5px;
                  font-size: 14px !important;
                  line-height: 24px !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>