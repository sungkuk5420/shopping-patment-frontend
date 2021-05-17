<template>
  <div class="main_wrap">
    <div class="main_content">
      <!-- <div class="main_banner">
        <q-responsive :ratio="192/55" class="col">
          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            autoplay
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
          >
            <q-carousel-slide @click="movePage('/shop/itemInfo')" :name="1" img-src="~assets/img_main_banner_sample.png" />
            <q-carousel-slide @click="movePage('/shop/itemInfo')" :name="2" img-src="~assets/img_main_banner_sample.png" />
            <q-carousel-slide @click="movePage('/shop/itemInfo')" :name="3" img-src="~assets/img_main_banner_sample.png" />
            <q-carousel-slide @click="movePage('/shop/itemInfo')" :name="4" img-src="~assets/img_main_banner_sample.png" />
          </q-carousel>
        </q-responsive>
      </div>
      <div class="main_top_ad">
        <div class="type_eight">
          <ul class="grid_container">
            <li class="grid_item item_2">
              <router-link to="/shop/itemInfo">
                <img src="~assets/img_ban_sample1.png" alt="top 샘플">
              </router-link>
            </li>
            <li class="grid_item item_2">
              <router-link to="/shop/itemInfo">
                <img src="~assets/img_ban_sample2.png" alt="top 샘플">
              </router-link>
            </li>
            <li class="grid_item item_2">
              <router-link to="/shop/itemInfo">
                <img src="~assets/img_ban_sample3.png" alt="top 샘플">
              </router-link>
            </li>
            <li class="grid_item item_2">
              <router-link to="/shop/itemInfo">
                <img src="~assets/img_ban_sample4.png" alt="top 샘플">
              </router-link>
            </li>
          </ul>
        </div>
      </div> -->
      <div class="grid_area">
        <h2 class="title">weekly best</h2>
        <p class="desc">
          Follow the most popular trends and get<br />exclusive items from hongo
          shop
        </p>
        <div class="tab_area">
          <ul class="tab_list">
            <li class="active" @click="tabList">skin care</li>
            <li @click="tabList">caleansing</li>
            <li @click="tabList">makeup</li>
            <li @click="tabList">samples</li>
            <li @click="tabList">body &amp; hair</li>
          </ul>
          <select class="m_tab_list">
            <option value="0">skin care</option>
            <option value="1">caleansing</option>
            <option value="2">makeup</option>
            <option value="3">samples</option>
            <option value="4">body &amp; hair</option>
          </select>
        </div>
      </div>
      <ItemList />
      <div class="btn_area">
        <button type="button" class="lead_more">
          Lead More
          <img src="~assets/img_leadmore_arrow.png" alt="" />
        </button>
      </div>

      <!-- <div class="grid_area type_bor">
        <h2 class="title">new arival</h2>
        <p class="desc">
          Shop new arrivals at LOFT and find feminine, versatile and affordable
          women's clothing<br />
          including new tops, dresses, pants, accessories and more. Shop today!
        </p>
        <div class="tab_area">
          <ul class="tab_list">
            <li class="active" @click="tabList">skin care</li>
            <li @click="tabList">caleansing</li>
            <li @click="tabList">makeup</li>
            <li @click="tabList">samples</li>
            <li @click="tabList">body &amp; hair</li>
          </ul>
          <select class="m_tab_list">
            <option value="0">skin care</option>
            <option value="1">caleansing</option>
            <option value="2">makeup</option>
            <option value="3">samples</option>
            <option value="4">body &amp; hair</option>
          </select>
        </div>
      </div>
      <ItemList />

      <div class="btn_area">
        <button type="button" class="lead_more">
          Lead More
          <img src="~assets/img_leadmore_arrow.png" alt="" />
        </button>
      </div> -->
      <div class="main_bottom_ad">
        <ul class="grid_container">
          <li class="grid_item item_5">
            <router-link to="/shop/shop">
              <img src="~assets/img_men_sport.jpg" alt="" />
            </router-link>
          </li>
          <li class="grid_item item_5">
            <router-link to="/shop/shop">
              <img src="~assets/img_find_your.jpg" alt="" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from "components/ItemList";
import mixin from "../mixin";

export default {
  mixins: [mixin],
  components: {
    ItemList,
  },
  methods: {
    tabList(e) {
      let target = e.target;

      target.parentNode.childNodes.forEach((item) => {
        item.classList.remove("active");
      });
      target.classList.toggle("active");
    },
  },
  data() {
    return {
      slide: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
/* main start */
.main_content {
  grid-area: main;
  padding: 44px 44px 0;
  .main_banner {
    margin: -44px -44px 40px -44px;
    > div {
      min-height: 200px;
    }
    .q-carousel {
      //padding-top:47.83%;
    }
    .q-carousel__navigation--bottom {
      display: none;
    }
  }
  .main_top_ad {
    .type_eight {
      .grid_container {
        grid-gap: 39px;
        img {
          width: 100%;
        }
      }
    }
  }
  .btn_area {
    text-align: center;
  }
  .grid_area {
    &.type_bor {
      border-top: 1px solid #cfd6d8;
    }
  }
}
.main_bottom_ad {
  margin: 0 -44px -100px;
  .grid_container {
    grid-gap: 0;
  }
}
.q-panel > div {
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .main_content {
    padding: 20px;
    .main_top_ad {
      .type_eight {
        .grid_container {
          grid-gap: 16px;
          .grid_item {
            &.item_2 {
              grid-column: span 6;
            }
          }
        }
      }
    }
  }
  .main_content .main_banner {
    margin: -20px -20px 20px -20px;
  }
  .main_content .main_ad .grid_item.item_2,
  .main_content .main_ad .grid_item.item_4 {
    grid-column: span 6;
  }
  .main_bottom_ad {
    margin: 0 -20px -60px;
  }
}
/* main end */
</style>