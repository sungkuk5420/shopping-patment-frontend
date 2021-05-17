<template>
  <div>
        <div class="sub_banner no_pad">
            <img src="~assets/img_about_banner.png" alt="">
            <div class="sub_banner_text">
                <h2 class="title">Brands</h2>
            </div>
            <div class="sub_location">
                <div class="left">
                    <ul>
                        <li>
                            <img src="~assets/img_home.png" alt="">
                        </li>
                        <li>
                            &nbsp;>&nbsp; shop
                        </li>
                        <li>
                            &nbsp;>&nbsp; brands
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="brands_wrap">
            <div class="brans_in">
                <div class="search_area">
                    <input type="text" placeholder="Search for a brand">
                    <button type="button" class="search_btn">
                        <img src="~assets/img_search_2.png" />
                    </button>
                </div>
                <div class="alpha_area">
                    <ol class="list">
                        <li
                            v-for="(item, index) in alphaList"
                            :key="index"
                        ><a href="#" @click="alphaClick">{{item}}</a></li>
                    </ol>
                </div>
                <div class="alpha_table_area">
                    <ul class="table_depth_1">
                        <li>
                            <span class="title">0~9</span>
                            <ul class="table_depth_2">
                                <li>Claire Alexander</li>
                                <li>Lily Flores</li>
                                <li>Eduardo Bell</li>
                                <li>Scarlett Cooper</li>
                            </ul>
                        </li>
                        <li>
                            <span class="title">A</span>
                            <ul class="table_depth_2">
                                <li>Jennie Jones</li>
                                <li>Leslie Fox</li>
                                <li>Kristin Webb</li>
                                <li>Marvin Mccoy</li>
                                <li>Juanita Warren</li>
                            </ul>
                        </li>
                        <li>
                            <span class="title">B</span>
                            <ul class="table_depth_2">
                                <li>Arlene Henry</li>
                                <li>Diane Warren</li>
                                <li>Connie Simmmons</li>
                                <li>Victoria Wilson</li>
                                <li>Judith Miles</li>
                                <li>Tyrone Howard</li>
                                <li>Bessie Jones</li>
                                <li>Greg Russell</li>
                            </ul>
                        </li>
                        <li>
                            <span class="title">C</span>
                            <ul class="table_depth_2">
                                <li>Tanya Robertson</li>
                                <li>Bessie Hawkins</li>
                                <li>Arlene Fox</li>
                                <li>Gregory Cooper</li>
                                <li>Tyrone Fisher</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
  </div>
</template>

<script>

import mixin from "../../mixin";

export default {
    mixins: [mixin],
    components: {
    },
    data() {
        return {
            userEmail:'',
            alphaList:['All', '0~9', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        }
    },
    methods: {
        alphaClick(e) {
            e.preventDefault();

            let target = e.target;
            target.classList.toggle("active");
        }
    }
}
</script>

<style lang="scss" scoped>

.type_login{
    padding: 0 44px;
    .sub_content_title{
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
    .input_box_area{
        max-width:894px;
        margin: 0 auto;
        grid-template-areas: 'item';
        grid-template-columns: 1fr;
        > div{
             .title{
                text-align: center;
             }
             .desc{
                 text-align: center;
             }
        }
        .left{
            .btn_area{
                margin-top: 58px;
            }
        }
        .right{
            .btn_area{
                margin-top: 64px;
                .lost{
                    position: absolute;
                    right:0;
                    top: 7px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: $font-size-5;
                    line-height: 32px;
                    text-transform: capitalize;
                    color: $color-secondary;
                }
            }
        }
    }
}
@media screen and (max-width: 1200px) {
    .type_login .input_box_area .right .btn_area .lost{
        position: static;
        display: block;
        margin-top: 20px;
        font-size: $font-size-7;
        line-height: 14px;
    }
}

</style>