<template>
  <div>
        <div class="sub_banner no_pad">
            <img src="~assets/img_about_banner.png" alt="">
            <div class="sub_banner_text">
                <h2 class="title">your account has been created!</h2>
            </div>
            <div class="sub_location">
                <div class="left">
                    <ul>
                        <li>
                            <img src="~assets/img_home.png" alt="">
                        </li>
                        <li>
                            &nbsp;>&nbsp; Account
                        </li>
                        <li>
                            &nbsp;>&nbsp; Login
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="type_login">
            <div class="input_box_area">
                <div class="right">
                    <p class="desc">Congratulations! Your new account has been successfully created!<br />
You can now take advantage of member privileges to enhance your online shopping experience with us.<br />
If you have ANY questions about the operation ozzf this online shop. please e-mail the store owner.<br />
A confirmation has been sent to the provided e-mail address. If you have not received it. within the hour, please contact us.</p>
                    <div class="btn_area">
                        <button type="button" @click="movePage('/')" class="btn_orange type_full">go to main page</button>
                    </div>
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
            userEmail:''
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
        .left{
            .btn_area{
                margin-top: 58px;
            }
        }
        .right{
        padding:0;
        border:0 none;
        text-align: center;
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
        .btn_area{
            button{
                width:288px;
                margin:0 auto;
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
    .input_box_area > div .desc {
        margin-bottom:30px !important;
    }
}

@media screen and (max-width: 768px) {
    #q-app .type_login .btn_area button{
        width:100%;
    }
}
</style>