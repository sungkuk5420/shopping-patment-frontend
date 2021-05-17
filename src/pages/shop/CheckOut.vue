<template>
  <div>
    <div class="sub_banner no_pad">
        <img src="~assets/img_about_banner.png" alt="">
        <div class="sub_banner_text">
            <h2 class="title">checkout</h2>
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
                        &nbsp;>&nbsp; checkOut
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="sub_content type_info">
        <div class="sub_content_main type_info">
            <div class="info_main type_checkout">
                <div class="bill_area">
                    <div class="detail_area first">
                        <h3 class="title">Billing details</h3>
                        <div class="input_area type_half">
                            <q-input outlined v-model="billFirstName" label="First Name *" />
                            <q-input outlined v-model="billLastName" label="Last Name *" />
                        </div>
                        <div class="input_area type_half">
                            <q-input outlined v-model="billEmail" label="E-mail *" />
                            <q-input outlined v-model="billTelePhone" label="Telephone *" mask="### - ### - ####" />
                        </div>
                        <div class="input_area type_half">
                            <q-input outlined v-model="billCompany" label="Company" />
                            <q-input outlined v-model="billAddress" label="Address 1" />
                        </div>
                        <div class="input_area type_half">
                            <q-input outlined v-model="billCity" label="Cit *y" />
                            <q-input outlined v-model="billPostCode" label="Post Code *" />
                        </div>
                        <div class="input_area type_half">
                            <q-input outlined v-model="billCountry" label="Country *" />
                            <q-input outlined v-model="billZoneState" label="Zone/State *" />
                        </div>
                        <div class="input_area type_half">
                            <q-input outlined v-model="billPassword" label="Password *" />
                            <q-input outlined v-model="billPassConfirm" label="Password Confirm*" />
                        </div>
                    </div>
                    <div class="detail_area">
                        <h3 class="title">More details</h3>
                        <ul class="checkbox_list">
                            <li>
                                <div class="m_check_wrap">
                                    <input type="checkbox" id="moreDetail1">
                                    <label for="moreDetail1">I wash to subscribe to the Your Store newsletter.</label>
                                </div>
                            </li>
                            <li>
                                <div class="m_check_wrap">
                                    <input type="checkbox" id="moreDetail2">
                                    <label for="moreDetail2">I have read and agree to the Privacy Policy</label>
                                </div>
                            </li>
                            <li>
                                <div class="m_check_wrap">
                                    <input type="checkbox" id="moreDetail3">
                                    <label for="moreDetail3">My delivery and billing details are the same</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="detail_area">
                        <h3 class="title">Delivery details</h3>
                        <div class="input_area type_half">
                            <q-input outlined v-model="deliveryFirstName" label="First Name *" />
                            <q-input outlined v-model="deliveryLastName" label="Last Name *" />
                        </div>
                        <div class="input_area type_half">
                            <q-input outlined v-model="deliveryCompany" label="Company" />
                            <q-input outlined v-model="deliveryTelePhone" label="Telephone *" mask="### - ### - ####" />
                        </div>
                        <div class="input_area type_half">
                            <q-input outlined v-model="deliveryCity" label="Cit *y" />
                            <q-input outlined v-model="deliveryAddress" label="Address 1" />
                        </div>
                        <div class="input_area type_half">
                            <q-input outlined v-model="deliveryCountry" label="Country *" />
                            <q-input outlined v-model="deliveryPostCode" label="Post Code *" />
                        </div>
                        <div class="input_area type_half">
                            <q-input outlined v-model="deliveryZoneState" label="Zone/State *" />
                        </div>
                    </div>
                </div>
                <div class="order_area">
                    <div class="your_order">
                        <h3 class="title">Your order</h3>
                        <div class="order_detail">
                            <div class="order_list first">
                                <h4 class="title">product </h4>
                                <ul class="list">
                                    <li>
                                        <span class="left">Derma Ectocica 2020 - 110ml x 2 set</span>
                                        <span class="right">$ <em>100.25</em></span>
                                    </li>
                                    <li>
                                        <span class="left">Derma Ectocica 2020 - 110ml x 2 set</span>
                                        <span class="right">$ <em>100.25</em></span>
                                    </li>
                                </ul>
                            </div>
                            <div class="total_list bor_top">
                                <h4 class="title">SUBtotal</h4>
                                <span class="price">
                                    $ <em>150.50</em>
                                </span>
                            </div>
                            <div class="order_list bor_top">
                                 <h4 class="title">Delivery Methods </h4>
                                <ul class="list">
                                    <li>
                                        <span class="left">Derma Ectocica 2020 - 110ml x 2 set</span>
                                        <span class="right">$ <em>100.25</em></span>
                                    </li>
                                </ul>
                            </div>
                            <div class="total_list bor_top">
                                 <h4 class="title">total </h4>
                                 <span class="price">
                                     $ <em>162.76</em>
                                 </span>
                            </div>
                        </div>
                        <div class="methods_area">
                            <h3 class="title">Delivery Methods</h3>
                            <div class="radio_area">
                                <div class="m_radio_wrap">
                                    <input type="radio" name="delivery" id="radio_1">
                                    <label for="radio_1">2[K-Packet] US(Registered) (Weight: 0.81kg) - $12.26</label>
                                </div>
                                <div class="m_radio_wrap">
                                    <input type="radio" name="delivery" id="radio_2">
                                    <label for="radio_2">3 [EMS] US(Express) (Weight: 0.81kg) - $12.26</label>
                                </div>
                                <div class="m_radio_wrap">
                                    <input type="radio" name="delivery" id="radio_3">
                                    <label for="radio_3">8 [DHL] Zone 5 2020(Express) (Weight: 0.81kg) - $12.26</label>
                                </div>
                            </div>
                        </div>
                        <div class="methods_area">
                            <h3 class="title">payment Methods</h3>
                            <div class="radio_area">
                                <div class="m_radio_wrap">
                                    <input type="radio" name="payment" id="radio_4">
                                    <label for="radio_4">Paypal Express Checkout</label>
                                </div>
                                <div class="m_radio_wrap">
                                    <input type="radio" name="payment" id="radio_5">
                                    <label for="radio_5">RHAeKc Kacca</label>
                                </div>
                                <div class="m_radio_wrap">
                                    <input type="radio" name="payment" id="radio_6">
                                    <label for="radio_6">Alipay Cross</label>
                                </div>
                            </div>
                            <div class="btn_area">
                                <button type="button" class="btn_orange type_full">proceed to paypal</button>
                                <button type="button" class="btn_orange continue" @click="movePage('/shop/shop')">Continue shopping</button>
                            </div>
                        </div>
                    </div>
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
            itemCount:1,
            billFirstName:'',
            billLastName:'',
            billEmail:'',
            billTelePhone:'',
            billCompany:'',
            billAddress:'',
            billCity:'',
            billPostCode:'',
            billCountry:'',
            billZoneState:'',
            billPassword:'',
            billPassConfirm:'',
            deliveryFirstName:'',
            deliveryLastName:'',
            deliveryCompany:'',
            deliveryTelePhone:'',
            deliveryCity:'',
            deliveryAddress:'',
            deliveryCountry:'',
            deliveryPostCode:'',
            deliveryZoneState:''
        }
    },
    methods: {
        itemPlus() {
            this.itemCount++
        },
        itemMinus() {
            if(this.itemCount < 1) {
                this.itemCount=0
            } else {
                this.itemCount--
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
.order_area{
    .btn_area{
        margin-top:38px;
        button{
            font-weight: 500;
            width:100%;
            &.continue{
                margin-top:26px;
                border:0 none;
                color: $color-secondary;
                font-size: $font-size-7;
                line-height: 14px;
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .input_area.type_half{
        grid-template-areas: 'items';
        grid-template-columns: 1fr;
    }
    .sub_content {
        .sub_content_main.type_info{
            .info_main.type_checkout{
                .bill_area{
                    grid-column: span 5;
                }
                .order_area{
                    grid-column: span 5;
                }
            }
        }
    }
}


@media screen and (max-width: 768px) {
    .radio_area {
        .m_radio_wrap{
            margin-top:19px;
        }
    }
    .sub_content {
        .sub_content_main.type_info{
            .info_main.type_checkout{
                display:block;
                .bill_area{
                    padding: 0;
                    border: 0 none;
                    .detail_area{
                        > .title{
                            font-size: 20px;
                            line-height: 32px;
                            color: #F54843;
                        }
                    }
                }
                .order_area{
                    padding: 0;
                    border: 0 none;
                    .btn_area{
                        button{
                            height:48px;
                            line-height:48px;
                            font-size: 14px;
                            line-height: 32px;
                            &.continue{
                                margin-top:0;
                            }
                        }
                    }
                    .your_order {
                        > .title{
                            margin-top:35px;
                            font-weight: bold;
                            font-size: 20px;
                            line-height: 32px;
                            color: #F54843;
                            text-align:left;
                        }
                        .order_detail{
                            margin-top:0;
                            border:0 none;
                            padding: 17px 0 0 0;
                            .order_list {
                                .title{
                                    font-size: 14px;
                                    line-height: 20px;
                                    color: $color-gray-10;
                                }
                                .left{
                                    font-size: 12px;
                                    line-height: 16px;
                                }
                                .right{
                                    font-size: 14px;
                                    line-height: 18px;
                                }
                            }
                            .total_list{
                                .title{
                                    font-size: 14px;
                                    line-height: 20px;
                                }
                                .price{
                                    font-size: 16px;
                                    line-height: 24px;
                                }
                            }
                        }
                        .methods_area{
                            > .title{
                                font-size: 20px;
                                line-height: 32px;
                                color: #F54843;
                            }
                        }
                    }
                }
                .input_area.type_half{
                    display: block;
                    margin-top:0;
                    input{
                        font-size:14px !important;
                    }
                    label{
                        margin-top:12px;
                    }
                }
            }
        }
    }
    
}
</style>