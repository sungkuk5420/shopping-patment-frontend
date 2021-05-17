<template>
  <div>
    <div class="sub_banner">
        <img src="~assets/img_sub_banner.png" alt="">
    </div>
    <div class="sub_location">
        <div class="left">
            <ul>
                <li>
                    <img src="~assets/img_home.png" alt="">
                </li>
                <li>
                    &nbsp;>&nbsp; Mexico Exhibition
                </li>
                <li>
                    &nbsp;>&nbsp; neulii
                </li>
            </ul>
        </div>
        <div class="right">
            <span class="prd_compare">
                Product Compare(<em>0</em>)
            </span>
            <label>
                Sort By:
            </label>
            <select class="select">
                <option value="0">BEST</option>
                <option value="1">NEW</option>
            </select>
            <label>
                Sort By:
            </label>
            <select class="select">
                <option value="0">12</option>
                <option value="1">13</option>
            </select>
        </div>
    </div>
    <div class="sub_content">
        <side-menu-com />
        <div class="sub_content_main">
            <ul class="brand_list">
                <li
                v-for="(item, index) in brand_list"
                :key="index"> 
                    <router-link to="/shop/itemInfo"> 
                        <img :src="item.img" alt="neulii">
                    </router-link>
                </li>
            </ul>
            <div class="grid_area">
                <h2 class="title">best product</h2>
            </div>
            <div class="type_eight type_one">
                <item-list />
            </div>
            <div class="grid_area">
                <h2 class="title">weekly best</h2>
                <p class="desc">
                    Follow the most popular trends and get<br />exclusive items from hongo shop
                </p>
            </div>
            <div class="type_four">
                <item-list />
            </div>
            <div class="paging type_right">
                <p class="paging_desc">showing <em>1</em> to <em>12</em> of <em>75</em> (7page)</p>
                <ul class="pagin_list">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li>
                    <li><a href="#">></a></li>
                    <li><a href="#">>></a></li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import mixin from "../../mixin";
import SideMenuCom from 'components/SideMenuCom.vue'
import ItemList from 'components/ItemList'

export default {
    components: { SideMenuCom, ItemList },
    mixins: [mixin],
    data() {
        return {
            brand_list: [
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")},
                {img:  require("../../assets/img_neuli.png")}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.select{
    height:20px;
    line-height:20px;
    border: 0 none;
}

.paging{
    position:relative;
    margin:20px 0 0 0;
    .paging_desc{
        position: absolute;
        left:0;
        top:0;
        display: block;
        font-family: Roboto;
        font-weight: bold;
        font-size: $font-size-6;
        line-height: 19px;
        color: #A0A0A0;
    }
}
.sub_location{
        position: relative;
        padding: 0 44px;
        top: auto;
        left: auto;
        height: 70px;
    .left{
        position: absolute;
        left: 44px;
        top: 33px;
    }
}
@media screen and (max-width: 1000px) {
    .paging{
        .paging_desc{
            position: static;
            padding-bottom: 10px;
        }
    }
    .sub_location{
        .left{
            position: static;
        }
    }
}
@media screen and (max-width: 768px) {
    .sub_location{
        padding: 0 21px;
        height: auto;
        .left{
            
        }
    }
    .sub_banner{
        margin-bottom:0;
    }
}
</style>