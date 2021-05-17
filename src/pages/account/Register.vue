<template>
  <div>
        <div class="sub_banner no_pad">
            <img src="~assets/img_about_banner.png" alt="">
            <div class="sub_banner_text">
                <h2 class="title">Create an account</h2>
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
                            &nbsp;>&nbsp; Sign up
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="type_login type_register">
            <div class="input_box_area">
                <div>
                    <div class="input_area">
                        <q-input outlined v-model="userEmail" label="E-mail *" />
                    </div>
                    <div class="input_area">
                        <q-input outlined type="password" v-model="passWord" label="Password *" />
                    </div>
                    <div class="input_area">
                        <q-input outlined type="password" v-model="passWordConfirm" label="Password confirm *" />
                    </div>
                    <div class="input_area">
                        <q-input outlined v-model="firstName" label="First Name *" />
                    </div>
                    <div class="input_area">
                        <q-input outlined v-model="lastName" label="Last Name *" />
                    </div>
                    <div class="input_area">
                        <q-input outlined mask="### - ### - ####" v-model="telephone" label="Telephone *" />
                    </div>
                    <div class="check_area">
                        <!-- <ul class="checkbox_list">
                            <li class="type_all_check">
                                <div class="m_check_wrap">
                                    <input type="checkbox" id="agreeAll">
                                    <label for="agreeAll">All agree</label>
                                </div>
                            </li>
                            <li>
                                <div class="m_check_wrap">
                                    <input type="checkbox" id="agree1">
                                    <label for="agree1">I have read and agree to the <span class="check_move_link">privacy policy </span></label>
                                </div>
                            </li>
                            <li>
                                <div class="m_check_wrap">
                                    <input type="checkbox" id="agree2">
                                    <label for="agree2">I have read and agree to the <span class="check_move_link">subscribe </span></label>
                                </div>
                            </li>
                        </ul> -->
                        <ul class="checkbox_list">
                            <li class="type_all_check" >
                                <div class="m_check_wrap">
                                    <input type="checkbox" id="allCheck" @click="allCheck">
                                    <label for="allCheck">All agree</label>
                                </div>
                            </li>
                            <li>
                                <div class="m_check_wrap">
                                    <input type="checkbox" class="check_all_list" id="agree1" @click="checkAllList">
                                    <label for="agree1">I have read and agree to the
                                        <span class="check_move_link">privacy policy
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div class="m_check_wrap">
                                    <input type="checkbox" class="check_all_list" id="agree2" @click="checkAllList">
                                    <label for="agree2">I have read and agree to the
                                        <span class="check_move_link">subscribe
                                        </span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="btn_area">
                        <button type="button" @click="movePage('/account/registerComplete')" class="btn_orange type_full">Sign up</button>
                    </div>
                    <div class="login_sign_up">
                        <span class="account">Already have an account?</span>
                        <router-link to="/account/login" class="sign_up">Back to login</router-link>
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
            userEmail: '',
            passWord: '',
            passWordConfirm: '',
            firstName: '',
            lastName: '',
            telephone: '',
            cpf: '',
            Address: '',
            city: '',
            postCode: '',
            country: '',
            regState: ''
        }
    },
    methods: {
        allCheck(e) { // 전체 체크 버튼
			if(e.target.checked) {
				document.querySelectorAll(".check_all_list").forEach(function(v, i) {
					v.checked = true;
				});
			} else {
				document.querySelectorAll(".check_all_list").forEach(function(v, i) {
					v.checked = false;
				});
			}
		},
		checkAllList(e) { // 체크박스 리스트 클릭시 전체 체크
            let checkCount = 0;
			document.querySelectorAll(".check_all_list").forEach(function(v, i) {
				if(v.checked === false){
					checkCount++;
				}
			});

			if(checkCount>0) {
				document.getElementById("allCheck").checked = false;
			} else if(checkCount === 0) {
				document.getElementById("allCheck").checked = true;
			}
		}
    }
}
</script>

<style lang="scss" scoped>

.type_login{
    max-width: 894px;
    margin: 0 auto;
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
    &.type_register{
        .btn_area{
            border:0 none;
            margin-top:23px;
        }
        .check_area{
            margin-top:26px;
            .checkbox_list{
                .type_all_check{
                    padding-bottom:9px;
                    margin-bottom:16px;
                    position:relative;
                    &:after{
                        content:"";
                        position:absolute;
                        left:0;
                        bottom:0;
                        width:100%;
                        height:1px;
                        background: #ccc;
                    }
                    .m_check_wrap{

                        label{
                            color: $color-gray-9;
                            font-weight: bold;
                            font-size: $font-size-5;
                        }
                    }
                }
            }
        }
    }
}
</style>