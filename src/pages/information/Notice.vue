<template>
  <div>
    <div class="sub_banner no_pad">
        <img src="~assets/img_about_banner.png" alt="">
        <div class="sub_banner_text">
            <h2 class="title">Notice</h2>
        </div>
        <div class="sub_location">
            <div class="left">
                <ul>
                    <li>
                        <img src="~assets/img_home.png" alt="">
                    </li>
                    <li>
                        &nbsp;>&nbsp; NOTICE
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="sub_content type_info">
        <div class="sub_content_main type_info">
            <div class="info_main">
                <div class="info_area">   
                    <div class="table_area">
                        <table class="info_table type_notice type_gray small_size">
                            <colgroup>
                                <col style="" />
                                <col style="width:40%;" />
                                <col style="" />
                                <col style="" />
                                <col style="" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>TITLE</th>
                                    <th>AUTHOR</th>
                                    <th>VIEW</th>
                                    <th>DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr 
                                    v-for="(list, index) in noticeList"
                                    :key="index"
                                >
                                    <td class="no">{{list.no}}</td>
                                    <td>{{list.title}}</td>
                                    <td><strong> {{list.author}}</strong></td>
                                    <td class="view">{{list.view}}</td>
                                    <td >{{list.date}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="paging">
                            <ul class="pagin_list">
                                <li>
                                    <router-link to="">
                                        <img src="~assets/img_gray_left_arrow.png" alt="">
                                    </router-link>
                                </li>
                                <li><router-link to="">1</router-link></li>
                                <li><router-link to="">2</router-link></li>
                                <li><router-link to="">3</router-link></li>
                                <li><router-link to="">4</router-link></li>
                                <li class="active"><router-link to="">5</router-link></li>
                                <li><router-link to="">6</router-link></li>
                                <li><router-link to="">7</router-link></li>
                                <li><router-link to="">8</router-link></li>
                                <li><router-link to="">9</router-link></li>
                                <li>
                                    <router-link to="">
                                        <img src="~assets/img_gray_right_arrow.png" alt="">
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="table_search_area">
                        <select class="select type_orange">
                            <option value="0">All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <input type="text" class="type_orange">
                        <div class="btn_area">
                            <button type="button" class="btn_orange type_small type_full">Search</button>
                        </div>
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
            noticeList:[
                { no: 10, title: "WHAT ARE SHIPPING TIMES AND COSTS?", author: "ROSEROSESHOP", view: 1232, date: "01-05-1993"},
                { no: 9, title: "The dress is great! Very classy and comfortable. ", author: "ROSEROSESHOP", view: 443, date: "01-05-1993"},
                { no: 8, title: "It fit perfectly! I'm 5'7 and 130 pounds. ", author: "ROSEROSESHOP", view: 1232, date: "01-05-1993"},
                { no: 7, title: "I am a 34B chest. ", author: "ROSEROSESHOP", view: 1232, date: "01-05-1993"},
                { no: 6, title: "This dress would be too long for those who are shorter but could be hemmed.", author: "ROSEROSESHOP", view: 1232, date: "01-05-1993"},
                { no: 5, title: " I wouldn't recommend it for those big chested as I am smaller chested and it ", author: "ROSEROSESHOP", view: 1232, date: "01-05-1993"},
                { no: 4, title: "fit me perfectly. The underarms were not too wide and the dress was made well.", author: "ROSEROSESHOP", view: 1232, date: "01-05-1993"},
                { no: 3, title: "I am a 34B chest. ", author: "ROSEROSESHOP", view: 1232, date: "01-05-1993"},
                { no: 2, title: "The dress is great! Very classy and comfortable.       ", author: "ROSEROSESHOP", view: 1232, date: "01-05-1993"},
                { no: 1, title: "WHAT ARE SHIPPING TIMES AND COSTS?", author: "ROSEROSESHOP", view: 1232, date: "01-05-1993"}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.table_area{
    .info_table{
        text-align:center;
    }
}
.table_search_area{
    text-align: center;
    input{
        width:373px;
        margin: 0 8px;
    }
    .btn_area{
        display:inline-block;
        vertical-align: top;
        button{
            margin:0;
            padding:0 41px;
            height:37px !important; 
        }
    }
}

@media screen and (max-width: 768px) {
    
    .table_area{
        padding-top:70px;
    }
    .table_search_area{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        text-align: center;
        font-size: 0;
        .select{
            width:20%;
            min-width: auto;
        }
        input{
            width:48%;
            margin: 0 1%;
        }
        .btn_area{
            width:30%;
            button{
                width:100% !important;
            }
        }
    }
}
</style>