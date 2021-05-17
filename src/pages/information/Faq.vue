<template>
  <div>
    <div class="sub_banner no_pad">
        <img src="~assets/img_about_banner.png" alt="">
        <div class="sub_banner_text">
            <h2 class="title">FAQ</h2>
        </div>
        <div class="sub_location">
            <div class="left">
                <ul>
                    <li>
                        <img src="~assets/img_home.png" alt="">
                    </li>
                    <li>
                        &nbsp;>&nbsp; FAQ
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="sub_content type_info">
        <div class="sub_content_main type_info">
            <div class="info_main">
                <div class="info_area">   
                    <h3 class="title">description title</h3>
                    <div class="faq_table">
                        <ul class="faq_list">
                            <li>
                                <a href="#" @click="faqSlide">WHAT ARE SHIPPING TIMES AND COSTS?</a>
                                <div class="faq_more">
                                    <ul class="list">
                                        <li>* Please bear in mind that EMS and DHL may not be available for all countries.</li>
                                        <li>* Complete and correct address (including phone number) required for delivery</li>
                                        <li>* Countries(below) would be shipped via DHL</li>
                                        <li>"United states, United Kingdom, Canada, Autrailia, France, Germany"</li>
                                        <li>* DHL fee is raised as of 29th Dec. 2016</li>
                                        <li>* To change your shipping method from EMS to DHL, Please leave a comment about your inquriry on the comments section of the order page(Step 3). Or email to cs@roseroseshop.com</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" @click="faqSlide">WHAT ARE SHIPPING TIMES AND COSTS?</a>
                                <div class="faq_more">
                                    <ul class="list">
                                        <li>* Please bear in mind that EMS and DHL may not be available for all countries.</li>
                                        <li>* Complete and correct address (including phone number) required for delivery</li>
                                        <li>* Countries(below) would be shipped via DHL</li>
                                        <li>"United states, United Kingdom, Canada, Autrailia, France, Germany"</li>
                                        <li>* DHL fee is raised as of 29th Dec. 2016</li>
                                        <li>* To change your shipping method from EMS to DHL, Please leave a comment about your inquriry on the comments section of the order page(Step 3). Or email to cs@roseroseshop.com</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="info_area">   
                    <h3 class="title">description title</h3>
                    <div class="faq_table">
                        <ul class="faq_list">
                            <li>
                                <a href="#" @click="faqSlide">WHAT ARE SHIPPING TIMES AND COSTS?</a>
                                <div class="faq_more">
                                    <ul class="list">
                                        <li>* Please bear in mind that EMS and DHL may not be available for all countries.</li>
                                        <li>* Complete and correct address (including phone number) required for delivery</li>
                                        <li>* Countries(below) would be shipped via DHL</li>
                                        <li>"United states, United Kingdom, Canada, Autrailia, France, Germany"</li>
                                        <li>* DHL fee is raised as of 29th Dec. 2016</li>
                                        <li>* To change your shipping method from EMS to DHL, Please leave a comment about your inquriry on the comments section of the order page(Step 3). Or email to cs@roseroseshop.com</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" @click="faqSlide">WHAT ARE SHIPPING TIMES AND COSTS?</a>
                                <div class="faq_more">
                                    <ul class="list">
                                        <li>* Please bear in mind that EMS and DHL may not be available for all countries.</li>
                                        <li>* Complete and correct address (including phone number) required for delivery</li>
                                        <li>* Countries(below) would be shipped via DHL</li>
                                        <li>"United states, United Kingdom, Canada, Autrailia, France, Germany"</li>
                                        <li>* DHL fee is raised as of 29th Dec. 2016</li>
                                        <li>* To change your shipping method from EMS to DHL, Please leave a comment about your inquriry on the comments section of the order page(Step 3). Or email to cs@roseroseshop.com</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>


export default {
    components: {
    },
    data() {
        return {

        }
    },
    methods: {
        faqSlide(e) {
            e.preventDefault();
            let target = e.target;

            target.parentNode.children[1].classList.toggle("active");
            target.classList.toggle("active");
        }
    }
}
</script>

<style lang="scss">
   

</style>