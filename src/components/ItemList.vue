<template>
  <div class="grid_area">
    <div class="grid_container_wrap">
      <ul class="grid_container">
        <li
          class="grid_item item_2"
          v-for="(item, index) in productList"
          :key="index"
        >
          <div class="item_img">
            <router-link to="/shop/iteminfo">
              <img :src="item.img" alt="샘플 리스트" />
            </router-link>

            <ul class="left_top">
              <li class="type_dark">{{ item.best }}</li>
              <li class="type_orange">
                <em>{{ item.discountPercent }}</em
                >% OFF
              </li>
            </ul>
            <router-link to="/shop/iteminfo" class="basket">
              <img src="~assets/ico_shopping_basket.png" alt="장바구니" />
            </router-link>
          </div>
          <div class="item_desc">
            <router-link to="/shop/iteminfo">
              <h3 class="item_title">
                {{ item.title }}
              </h3>
              <p>
                {{ item.desc }}
              </p>
              <div class="star_area">
                <span class="star_parent_wrap">
                  <span class="star_parent">
                    <span :style="item.star"></span>
                  </span>
                </span>
                <span class="result_star">
                  {{ item.resultStar }}
                </span>
                <span class="total_user">
                  (<em>{{ item.totalUser }}</em
                  >)
                </span>
              </div>
              <div class="price_area">
                <span class="before_price"
                  >$ <em>{{ item.beforePrice }}</em></span
                >
                <span class="discount_price"
                  >$ <em>{{ item.discountPrice }}</em></span
                >
              </div>
            </router-link>
            <button class="heart_area">
              <img src="~assets/ico_heart.png" alt="좋아요" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          img: require("../assets/img_list_sample_1.png"),
          best: "best1",
          discountPercent: "50",
          title: "Jorge Miles",
          desc: " Derma Ectocica 23 Emulsion - 100ml",
          star: { width: "20%" },
          resultStar: "4.5",
          totalUser: "2489",
          beforePrice: "76.00",
          discountPrice: "53.70",
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          best: "best1",
          discountPercent: "50",
          title: "Jorge Miles",
          desc: " Derma Ectocica 23 Emulsion - 100ml",
          star: { width: "40%" },
          resultStar: "4.5",
          totalUser: "2489",
          beforePrice: "76.00",
          discountPrice: "53.70",
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          best: "best1",
          discountPercent: "50",
          title: "Jorge Miles",
          desc: " Derma Ectocica 23 Emulsion - 100ml",
          star: { width: "50%" },
          resultStar: "4.5",
          totalUser: "2489",
          beforePrice: "76.00",
          discountPrice: "53.70",
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          best: "best1",
          discountPercent: "50",
          title: "Jorge Miles",
          desc: " Derma Ectocica 23 Emulsion - 100ml",
          star: { width: "60%" },
          resultStar: "4.5",
          totalUser: "2489",
          beforePrice: "76.00",
          discountPrice: "53.70",
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          best: "best1",
          discountPercent: "50",
          title: "Jorge Miles",
          desc: " Derma Ectocica 23 Emulsion - 100ml",
          star: { width: "80%" },
          resultStar: "4.5",
          totalUser: "2489",
          beforePrice: "76.00",
          discountPrice: "53.70",
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          best: "best1",
          discountPercent: "50",
          title: "Jorge Miles",
          desc: " Derma Ectocica 23 Emulsion - 100ml",
          star: { width: "100%" },
          resultStar: "4.5",
          totalUser: "2489",
          beforePrice: "76.00",
          discountPrice: "53.70",
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          best: "best1",
          discountPercent: "50",
          title: "Jorge Miles",
          desc: " Derma Ectocica 23 Emulsion - 100ml",
          star: { width: "80%" },
          resultStar: "4.5",
          totalUser: "2489",
          beforePrice: "76.00",
          discountPrice: "53.70",
        },
        {
          img: require("../assets/img_list_sample_1.png"),
          best: "best1",
          discountPercent: "50",
          title: "Jorge Miles",
          desc: " Derma Ectocica 23 Emulsion - 100ml",
          star: { width: "100%" },
          resultStar: "4.5",
          totalUser: "2489",
          beforePrice: "76.00",
          discountPrice: "53.70",
        },
      ],
    };
  },
};
</script>

<style>
</style>