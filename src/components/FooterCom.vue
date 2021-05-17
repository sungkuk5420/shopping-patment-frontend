<template>
    <div id="footer">
        <div class="footer_in">
            <div class="left">
                <h2 class="logo">
                    <img src="~assets/img_roseshop_logo.png" alt="">
                </h2>
                <p class="desc">
                    TOM Co.,Ltd. (Woo seok Ha)<br />
                    7 floor, 103, Doraeul-ro, Deogyang-gu, <br />
                    Goyang-si, Gyeonggi-do,10551, South Korea
                </p>
                <p class="desc">
                    +82-31-926-2043<br />
                    +82-10-8357-1052<br />
                    cs@roseroseshop.com
                </p>
            </div>
            <div class="right">
                <ul class="footer_list">
                    <li>INFORMATION
                        <ul class="footer_list_2">
                            <li>
                                <router-link to="/information/aboutUs">
                                    About Us
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/information/deliveryInformation">
                                    Delivery Information
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/information/privacyPolicy">
                                    Privacy Policy
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/information/privacyPolicy">
                                    Teams & Canditions
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/information/faq">
                                    FAQ
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>CUSTOMER SERVICE
                        <ul class="footer_list_2">
                            <li>
                                <a href="#" >
                                    My Account
                                </a>
                            </li>
                            <li>
                                <router-link to="/information/siteMap">
                                    Site Map
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>EXTRAS
                        <ul class="footer_list_2">
                            <li>
                                <router-link to="/shop/brands">
                                    Brands
                                </router-link>
                            </li>
                            <li>
                                <a href="#">
                                    Specials
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>FOLLOW US
                        <ul class="footer_list_2">
                            <li>
                                <a href="#">
                                    <img src="~assets/ico_facebook.png" alt="facebook">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="~assets/ico_instargram.png" alt="Instagram">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="~assets/ico_twitter.png" alt="Twitter">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="~assets/ico_youtube.png" alt="Youtube">
                                    Youtube
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>PAYMENT METHOD
                        <ul class="footer_list_2">
                            <li>
                                <a href="#">
                                    <img src="~assets/img_paypal.png" alt="paypal">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="~assets/img_visa.png" alt="visa">
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <ul class="ver_list"> 
                <li class="desktop">
                    <img src="~assets/img_monitor.png" alt="">
                    <span>Desktop Version</span>
                </li>
                <li class="mobile">
                    <img src="~assets/img_smartphone.png" alt="">
                    <span>Mobile Version</span>
                </li>
            </ul>
            <p>COPYRIGHT 2014 TOM CO.,LTD. ALL RIGHTS RESERVED.</p>
        </div>
    </div>
</template>

<script>
import mixin from "../mixin";

export default {
    mixins: [mixin],
}
</script>
<style lang="scss" scoped>
/* footer start */
#footer {
  -ms-grid-row: 3;
  -ms-grid-column: 1;
  -ms-grid-column-span: 10;
  grid-area: footer;
  background: #F6F6F6;
}

#footer .footer_in {
    margin-top:100px;
    padding: 56px 99px 61px;
}

#footer .footer_in::after {
  content: '';
  display: block;
  clear: both;
}

#footer .footer_in .left {
  float: left;
  width: 440px;
}
#footer .footer_in .left > .logo{
    line-height: 0;
}

#footer .footer_in .left .desc {
  margin-top: 39px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: $font-size-5;
  line-height: 32px;
  color: $color-gray-10;
}

#footer .footer_in .left .desc ~ .desc {
  margin-top: 27px;
}

#footer .footer_in .right {
  float: left;
  width: calc(100% - 440px);
}

#footer .footer_in .right .footer_list {
  display: -ms-grid;
  display: grid;
      grid-template-areas: 'item item item item item';
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

#footer .footer_in .right .footer_list > li {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: $font-size-4;
  line-height: 32px;
  color: $color-gray-10;
}

#footer .footer_in .right .footer_list > li img {
  vertical-align: middle;
  margin-right: 10px;
}

#footer .footer_in .right .footer_list > li .footer_list_2 {
  margin-top: 28px;
}

#footer .footer_in .right .footer_list > li .footer_list_2 > li > a {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: $font-size-5;
  line-height: 36px;
  color: $color-gray-10;
}

#footer .copyright {
  padding: 0 99px;
}

#footer .copyright p {
  text-align: center;
  padding: 0 0 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: $font-size-7;
  line-height: 20px;
  letter-spacing: 0;
  color: $color-gray-10;
}
#footer .ver_list{
    border-top: 1px solid #E3E3E3;
    padding: 19px 0 10px;
    text-align: center;
}
#footer .ver_list > li{
   display: none; 
}
#footer .ver_list > li.mobile{
    display: block;
}
#footer .ver_list > li > img{
    display: inline-block;
    vertical-align: middle;
    margin-right:5px
}
#footer .ver_list > li > span{
    display: inline-block;
    vertical-align: middle;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: $font-size-6;
    line-height: 26px;
    color: $color-gray-10;
   cursor: pointer;
    
}

/* footer end */

@media screen and (max-width: 1500px) {
    #footer .footer_in .right .footer_list {
            grid-template-areas: 'item item item';
    }
}
@media screen and (max-width: 1200px) {
    #footer .footer_in .right .footer_list {
        grid-template-areas: 'item item item item item';
    }
    #footer .footer_in .left,#footer .footer_in .right{
        float: none;
        width: auto;
        margin:0 auto;
        text-align: center;
    }
    #footer .footer_in .left .desc{
        font-size: $font-size-6;
        line-height: 26px;
    }
    #footer .footer_in .right{
        margin-top: 20px;
    }
}
@media screen and (max-width: 768px) {
    #footer .footer_in{
        margin-top:40px;
        padding: 38px 33px;
    }
    #footer .footer_in .left,
    #footer .footer_in .right{
        text-align: left;
    }
    #footer .footer_in .right .footer_list{
        grid-template-areas: 'item';
        justify-content: normal;
    }
    #footer .footer_in .right .footer_list > li{
        display: none;
        font-size:0;
        line-height:0;
    }
    #footer .footer_in .right .footer_list > li:nth-child(4) {
        display:block;
    }
    #footer .footer_in .right .footer_list > li .footer_list_2{
        display: grid;
        grid-template-areas: 'items items';
        margin-top:0;
    }
    #footer .copyright{
        padding: 0;
    }
    #footer .copyright p{
        padding: 0 0 24px;
    }
    #footer .footer_in .left .desc{
        margin-top:30px;
    }
    #footer .footer_in .left .desc ~ .desc{
        margin-top:22px;
    }
    #footer .ver_list{
        padding:15px 0;
    }
    #footer .ver_list > li.desktop{
        display: block;
    }
    #footer .ver_list > li.mobile{
        display: none;
    }
}
</style>