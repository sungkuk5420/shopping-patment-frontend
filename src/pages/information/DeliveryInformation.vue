<template>
  <div>
    <div class="sub_banner no_pad">
        <img src="~assets/img_about_banner.png" alt="">
        <div class="sub_banner_text">
            <h2 class="title">DELIVERY INFORMATION</h2>
        </div>
        <div class="sub_location">
            <div class="left">
                <ul>
                    <li>
                        <img src="~assets/img_home.png" alt="">
                    </li>
                    <li>
                        &nbsp;>&nbsp; DELIVERY INFORMATION
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="sub_content type_info">
        <div class="sub_content_main type_info">
            <div class="info_main">
                <div class="info_area">   
                    <h3 class="title">Available Shipping Methods</h3>
                    <p class="desc">All orders are shipped by EMS, DHL, USPS, Registered Air Mail, K-Packet, Q-Expess, and E-cargo. We are unfortunately unable to offer any other shipping options</p>
                    <div class="btn_area">
                        <button type="button" class="btn_orange">K-Packet</button>
                        <button type="button" class="btn_orange">EMS</button>
                        <button type="button" class="btn_orange">Air Parcel</button>
                        <button type="button" class="btn_orange">DHL</button>
                        <button type="button" class="btn_orange">Q-express </button>
                    </div>
                </div>
                <div class="info_area">
                    <h3 class="title">Express Delivery</h3>
                    <div class="table_area">
                        <table class="info_table type_gray">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>DHL</th>
                                    <th>EMS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Estimated delivery time<br />(varies by country)</th>
                                    <td>Generally 2-7 days</td>
                                    <td>Generally 5-15 days</td>
                                </tr>
                                <tr>
                                    <th>Online tracking</th>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <th>Restrictions</th>
                                    <td>Not available for all countries</td>
                                    <td>Not available for all countries</td>
                                </tr>
                                <tr>
                                    <th>Notes</th>
                                    <td>
                                        - Fast, Safe<br />
                                        - Highly recommended<br />
                                        - DHL offers On-Demand delivery service<br />
                                        (scheduled delivery, collecting of package from service point, vacation hold)
                                    </td>
                                    <td>
                                        - Fast, Safe<br />
                                        - Highly recommended
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <ul class="table_info">
                            <li>* Please bear in mind that EMS and DHL may not be available for all countries.</li>
                            <li>* Complete and correct address (including phone number) required for delivery</li>
                            <li>* Countries(below) would be shipped via DHL<br />
                                "United states, United Kingdom, Canada, Autrailia, France, Germany"</li>
                            <li>* DHL fee is raised as of 29th Dec. 2016</li>
                            <li>* To change your shipping method from EMS to DHL, Please leave a comment about your inquriry on the comments section of the order page(Step 3). Or email to cs@roseroseshop.com</li>
                        </ul>
                    </div>
                </div>
                <div class="info_area">
                    <h3 class="title">Ordinary Delivery</h3>
                    <div class="table_area">
                        <table class="info_table type_gray">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>K-packet</th>
                                    <th>Air pacel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Estimated delivery time<br />(varies by country)</th>
                                    <td>Generally 2-5 weeks</td>
                                    <td>Generally 2-5 weeks</td>
                                </tr>
                                <tr>
                                    <th>Online tracking</th>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td>Under 1.7kg</td>
                                    <td>Under 20kg</td>
                                </tr>
                                <tr>
                                    <th>Restrictions</th>
                                    <td>Not available for all countries</td>
                                    <td>Not available for all countries</td>
                                </tr>
                                <tr>
                                    <th>Notes</th>
                                    <td>Standard registered mail</td>
                                    <td>Standard registered mail</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="info_area">
                    <h3 class="title">Express Delivery</h3>
                    <div class="table_area type_small">
                        <table class="info_table type_gray">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Q-express</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Estimated delivery time<br />(varies by country)</th>
                                    <td>Generally 2-5 weeks</td>
                                </tr>
                                <tr>
                                    <th>Online tracking</th>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <th>Restrictions</th>
                                    <td>Indonesia only</td>
                                </tr>
                                <tr>
                                    <th>Notes</th>
                                    <td>
                                        - Only under 1.7kg<br />
                                        - When a parcel is over 1.7kg, It is divided without notice
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
    }
}
</script>

<style lang="scss" scoped>
   
    .btn_area{
        > button{
            margin:20px 20px 0 0;
        }
    }
@media screen and (max-width: 768px) {

    .btn_area{
        > button{
            margin:10px 10px 0 0;
        }
    }
}
</style>