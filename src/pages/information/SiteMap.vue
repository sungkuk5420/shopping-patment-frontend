<template>
  <div>
    <div class="sub_banner no_pad">
        <img src="~assets/img_about_banner.png" alt="">
        <div class="sub_banner_text">
            <h2 class="title">Sitemap</h2>
        </div>
    </div>
    <div class="sub_content type_info">
        <div class="sub_content_main type_info">
            <div class="info_main">
                <div class="info_area">
                    <div class="sitemap_area">
                        <ul class="site_list">
                            <li
                            v-for="(item, index) in site_list.one"
                            :key="index">
                                <h2 class="title">{{item.title}}</h2>
                                <ul>
                                    <li v-for="(item_2, index) in item.list"
                                        :key="index">
                                        <router-link :to="item_2.link">{{item_2.title}}</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="site_list">
                            <li
                            v-for="(item, index) in site_list.two"
                            :key="index">
                                <h2 class="title">{{item.title}}</h2>
                                <ul>
                                    <li v-for="(item_2, index) in item.list"
                                        :key="index">
                                        <router-link :to="item_2.link">{{item_2.title}}</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="site_list">
                            <li
                            v-for="(item, index) in site_list.three"
                            :key="index">
                                <h2 class="title">{{item.title}}</h2>
                                <ul>
                                    <li v-for="(item_2, index) in item.list"
                                        :key="index">
                                        <router-link :to="item_2.link">{{item_2.title}}</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="site_list">
                            <li
                            v-for="(item, index) in site_list.four"
                            :key="index">
                                <h2 class="title">{{item.title}}</h2>
                                <ul>
                                    <li v-for="(item_2, index) in (item.list)"
                                        :key="index"
                                        >
                                        <router-link to="/shop/shop">{{item_2}}</router-link>
                                    </li>
                                </ul>
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
import mixin from "../../mixin";

export default {
    mixins: [mixin],
    data() {
        return {
            site_list:{
                one :  [
                            { 
                                title: "No Sales", 
                                list:[
                                    {title: "ARITAUM Live",link: "/shop/shop"},
                                    {title: "Dust Masks",link: "/shop/shop"},
                                    {title: "Etude House Samples",link: "/shop/shop"},
                                    {title: "Neulii AC Derma",link: "/shop/shop"},
                                    {title: "SNOW2+ BOGO",link: "/shop/shop"}
                                ]
                            },
                            { 
                                title: "Makeup", 
                                list:[
                                    {title: "BB & CC Cream",link: "/shop/shop"},
                                    {title: "Foundation",link: "/shop/shop"},
                                    {title: "Powder & Pact",link: "/shop/shop"},
                                    {title: "Primer & Oil Control",link: "/shop/shop"},
                                    {title: "Makeup Base",link: "/shop/shop"},
                                    {title: "Cheek & Blusher",link: "/shop/shop"},
                                    {title: "Highlighter & Shading",link: "/shop/shop"},
                                    {title: "Concealer",link: "/shop/shop"},
                                    {title: "Other Goods",link: "/shop/shop"},
                                    {title: "Eye",link: "/shop/shop"},
                                    {title: "Lip",link: "/shop/shop"},
                                    {title: "Nail",link: "/shop/shop"},
                                    {title: "Set Item",link: "/shop/shop"},
                                    {title: "Kids",link: "/shop/shop"}
                                ]
                            },
                            { 
                                title: "Men", 
                                list:[
                                    {title: "Skin",link: "/shop/shop"},
                                    {title: "Care",link: "/shop/shop"},
                                    {title: "Sun Care",link: "/shop/shop"},
                                    {title: "Makeup",link: "/shop/shop"},
                                    {title: "Shaving & Cleansing",link: "/shop/shop"},
                                    {title: "Mask Sheet & Pack",link: "/shop/shop"},
                                    {title: "Set Item",link: "/shop/shop"}
                                ]
                            },
                            { 
                                title: "Event", 
                                list:[
                                    {title: "Event",link: "/shop/shop"}
                                ]
                            },
                            { 
                                title: "RRS List", 
                                list:[
                                    {title: "Hot New Releases",link: "/shop/shop"},
                                    {title: "Restocked Items",link: "/shop/shop"},
                                    {title: "Best Sellers",link: "/shop/shop"}
                                ]
                            },
                            { 
                                title: "Specials", 
                                list:[
                                    {title: "Specials",link: "/shop/shop"}
                                ]
                            },
                            { 
                                title: "My Account", 
                                list:[
                                    {title: "Account Information",link: "/shop/shop"},
                                    {title: "Enter you password",link: "/shop/shop"},
                                    {title: "Address Book",link: "/shop/shop"},
                                    {title: "Order History",link: "/shop/shop"},
                                    {title: "Downloads",link: "/shop/shop"}
                                ]
                            }
                        ],
                two :  [
                            { 
                                title: "Mexico Exhibition", 
                                list:[
                                    {title: "2ndesign",link: "/shop/shop"},
                                    {title: "asher",link: "/shop/shop"},
                                    {title: "bio plex",link: "/shop/shop"},
                                    {title: "celimax",link: "/shop/shop"},
                                    {title: "cosrx",link: "/shop/shop"},
                                    {title: "dm.cell",link: "/shop/shop"},
                                    {title: "herbisland",link: "/shop/shop"},
                                    {title: "iunik",link: "/shop/shop"},
                                    {title: "just gogo",link: "/shop/shop"},
                                    {title: "may island",link: "/shop/shop"},
                                    {title: "miskin",link: "/shop/shop"},
                                    {title: "neogen",link: "/shop/shop"},
                                    {title: "neulii",link: "/shop/shop"},
                                    {title: "troiareuke",link: "/shop/shop"},
                                    {title: "unimed",link: "/shop/shop"},
                                    {title: "uzme",link: "/shop/shop"}
                                ]
                            },
                            { 
                                title: "Cleansing", 
                                list:[
                                    {title: "Oil & Balm",link: "/shop/shop"},
                                    {title: "Foam & Toner",link: "/shop/shop"},
                                    {title: "Soap & Powder",link: "/shop/shop"},
                                    {title: "Gel & Liquid",link: "/shop/shop"},
                                    {title: "Water",link: "/shop/shop"},
                                    {title: "Lip & Eye & Nail",link: "/shop/shop"},
                                    {title: "Peeling & Scrub",link: "/shop/shop"},
                                    {title: "Cream & Lotion",link: "/shop/shop"},
                                    {title: "Tissue & Pad",link: "/shop/shop"},
                                    {title: "Kids",link: "/shop/shop"}
                                ]
                            },
                            { 
                                title: "Other Goods", 
                                list:[
                                    {title: "Toddler",link: "/shop/shop"},
                                    {title: "Top",link: "/shop/shop"},
                                    {title: "Outwear",link: "/shop/shop"},
                                    {title: "Bottom",link: "/shop/shop"},
                                    {title: "Dress",link: "/shop/shop"},
                                    {title: "Bodysuit",link: "/shop/shop"},
                                    {title: "Accessory",link: "/shop/shop"},
                                    {title: "Kids",link: "/shop/shop"},
                                    {title: "Oral Care",link: "/shop/shop"},
                                    {title: "Slimming Leggings",link: "/shop/shop"},
                                    {title: "Supplements",link: "/shop/shop"}
                                ]
                            },
                            { 
                                title: "Cart", 
                                list:[
                                    {title: "Cart",link: "/shop/cart"}
                                ]
                            },
                            { 
                                title: "Checkout", 
                                list:[
                                    {title: "Checkout",link: "/shop/checkout"}
                                ]
                            },
                            { 
                                title: "Search", 
                                list:[
                                    {title: "",link: "/shop/shop"}
                                ]
                            },
                        ],
                three : [ 
                            { 
                                title: "Skincare", 
                                list:[
                                    {title: "Oil",link: "/shop/shop"},
                                    {title: "Skin Toner",link: "/shop/shop"},
                                    {title: "Lotion & Emulsion",link: "/shop/shop"},
                                    {title: "Essence & Serum",link: "/shop/shop"},
                                    {title: "Cream & Gel",link: "/shop/shop"},
                                    {title: "Sun Care",link: "/shop/shop"},
                                    {title: "Eye & Lip Care",link: "/shop/shop"},
                                    {title: "Mist & Moisture",link: "/shop/shop"},
                                    {title: "Mask Sheet & Patch",link: "/shop/shop"},
                                    {title: "Massage & Pack",link: "/shop/shop"},
                                    {title: "Set Item",link: "/shop/shop"},
                                    {title: "Other Goods",link: "/shop/shop"},
                                    {title: "Kids",link: "/shop/shop"},
                                ]
                            },
                            { 
                                title: "Body & Hair", 
                                list:[
                                    {title: "Body Cleansing",link: "/shop/shop"},
                                    {title: "Body Care",link: "/shop/shop"},
                                    {title: "Hand & Foot Care",link: "/shop/shop"},
                                    {title: "Body Styling",link: "/shop/shop"},
                                    {title: "Hair Cleansing",link: "/shop/shop"},
                                    {title: "Hair Care",link: "/shop/shop"},
                                    {title: "Hair Styling",link: "/shop/shop"},
                                    {title: "Perfume & Deodorant",link: "/shop/shop"},
                                    {title: "Hair Remover",link: "/shop/shop"},
                                    {title: "Kids",link: "/shop/shop"},
                                    {title: "Bath Collection",link: "/shop/shop"}
                                ]
                            },
                            { 
                                title: "Limited", 
                                list:[
                                    {title: "Limited",link: "/shop/shop"},
                                ]
                            },
                            { 
                                title: "Wholesale", 
                                list:[
                                    {title: "Wholesale",link: "/shop/shop"},
                                ]
                            },
                            { 
                                title: "Miscellaneous Goods", 
                                list:[
                                    {title: "Miscellaneous Goods",link: "/shop/shop"},
                                ]
                            },
                            { 
                                title: "Household Supplies", 
                                list:[
                                    {title: "Household Supplies",link: "/shop/shop"},
                                    {title: "Other Goods",link: "/shop/shop"},
                                ]
                            },
                            { 
                                title: "Request", 
                                list:[
                                    {title: "Request",link: "/shop/shop"},
                                ]
                            },
                            { 
                                title: "Information", 
                                list:[
                                    {title: "Free Sample",link: "/shop/shop"},
                                    {title: "About Us",link: "/information/aboutUs"},
                                    {title: "Delivery Information",link: "/information/deliveryinformation"},
                                    {title: "Privacy Policy",link: "/information/privacyPolicy"},
                                    {title: "Terms & Conditions",link: "/shop/shop"},
                                    {title: "FAQ (Frequently Asked Questions)",link: "/information/faq"},
                                    {title: "Contact Us",link: "/"},
                                ]
                            },
                        ],

                four : [ 
                            { title: "Cosmetics Sample", list:["Skincare", "Makeup", "Cleansing", "Body & Hair", "Men"]},
                            { title: "Tools", list:["Puff & Cotton Pad", "Pouch & Container", "Makeup Tools", "Makeup Brushes", "Body & Hair Tools", "Cleansing Tools"]},
                            { title: "Sales", list:["1 Dollar Limited", "2NDESIGN Sale", "ARITAUM Live Sale", "Bagel / UZME Sale", "BRAND SALE Aritaum", "BRAND SALE Club Clio", "BRAND SALE Nature Collection", "BUY 2 GET 2 free", 
                            "BUY BRILLIANT GET FREE MASK", "COSRX EVENT", "COSRX free samples", "COSRX SALE EVENT", "DANAHAN sales", "DCARE DMASK CREMORLA BELLOCOY", "DHC / CREMORLAB Sale", 
                            "DMCELL / BEAUTY OF JOSEON / BENESTEM Sale", "Early Sun Cream Sale", "Eye Patch Super Sale", "Goodbye Summer Sale", "Happy Easter Day", "Happy Holloween Sale", "Hiddencos / Labute Sale",
                            "ICE PUMPKIN & MONTNATURE Sale", "Lips Promotion", "Mask Sheet Big Sale", "MILATTE / MEDIUS Sale", "Moisturizer Festival", "Nature Collection Sale", "neulii Sale", 
                            "NIGHTINGALE Sale", "No more Acne Sale", "OGI Event", "REDFLO / Aqulabo / LKURN Sale", "SIDMOOL / Dr. TROUB Sale", "SPRING Sale", "St. Patrick's Day Sale",
                            "STELBI Sale", "THESAEM Limited Sale", "Top 20 Best Selling Items Sale", "VITAMIN your skin", "Weekly Brand Sale", "Club CLIO Sale"]},
                        ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.sub_content{
    .sub_content_main.type_info{
         .info_main{
             .info_area{
                 margin-top:0;
             }
         }
    }
}
</style>