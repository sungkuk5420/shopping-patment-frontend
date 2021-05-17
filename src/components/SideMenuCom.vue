<template>
    <div class="sub_side">
        <div class="sub_side_in">
            <a href="#" class="all_categories" @click="allShow">All Categories</a>
            <ul class="sub_depth_1" id="subSide">
                <li 
                    v-for="(item, index) in sideMenuList.depth1"
                    :key="index">
                    <a href="#" @click="sideSlide">{{ item.title }}</a>
                    <ul class="sub_depth_2">
                        <li
                        v-for="(item2, i) in item.depth2"
                            :key="i">
                            <a href="#" @click="sideSlide">{{item2.title}}</a>
                            <ul class="sub_depth_3">
                                <li
                                v-for="(item3, i2) in item2.depth3"
                                    :key="i2">
                                <a href="#" @click="sideActive">{{item3}}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sideMenuList: {
                depth1: [
                    {
                        title: 'Categories',
                        depth2: [
                            {
                                title: 'Categories',
                                depth3: ['item','item','item','item','item']
                            },
                        ]
                    },
                    {
                        title: 'Categories',
                        depth2: [
                            {
                                title: 'Categories',
                                depth3: ['item','item','item','item','item']
                            },
                        ]
                    },
                    {
                        title: 'Categories',
                        depth2: [
                            {
                                title: 'Categories',
                                depth3: ['item','item','item','item','item']
                            },
                        ]
                    },
                    {
                        title: 'Categories',
                        depth2: [
                            {
                                title: 'Categories',
                                depth3: ['item','item','item','item','item']
                            },
                        ]
                    },
                ]
            }
        }
    },
    methods: {
        allShow(e) {
            e.preventDefault();

            let sideMenu = document.querySelector("#subSide");

            sideMenu.classList.toggle("active");
        },
        sideSlide(e) {
            e.preventDefault();
            let target = e.target;

            target.parentNode.children[1].classList.toggle("active");
            target.classList.toggle("active");
        },
        sideActive(e) {
            e.preventDefault();
            let target = e.target;
            
            target.parentNode.parentNode.childNodes.forEach((item) => {
                item.childNodes[0].classList.remove("active");
            });

            target.classList.add("active");
        }
    }
}
</script>
<style lang="scss">
.sub_side{
    grid-column: span 2;
    .sub_side_in{
        background: $color-gray-1 ;
        padding: 16px 8px;
        border: 1px solid $color-gray-6;
        box-sizing: border-box;
        .all_categories{
            position:relative;
            padding-left:40px;
            font-family: Roboto;
            font-weight:500;
            font-size: $font-size-5;
            line-height: 24px;
            color: $color-gray-10;
            &:before{
                content:"";
                position: absolute;
                left:13px;
                top:7px;
                width:12px;
                height:8px;
                background: url(../assets/img_orange_bottom_arrow.png) no-repeat 0 0;
                background-size:100% auto;
                transform: rotate(-90deg);
            }
            &.active{
                font-weight:500;
            }
        }
    }
    .sub_depth_1{
        display:none;
        margin-top:22px;
        margin-left:8px;
         li{
            margin-bottom:22px;
            > a{
                position:relative;
                padding-left:40px;
                font-family: Roboto;
                font-weight:500;
                font-size: $font-size-5;
                line-height: 24px;
                color: $color-gray-10;
                &:before{
                    content:"";
                    position: absolute;
                    left:13px;
                    top:7px;
                    width:12px;
                    height:8px;
                    background: url(../assets/img_orange_bottom_arrow.png) no-repeat 0 0;
                    background-size:100% auto;
                    transform: rotate(-90deg);
                }
                &.active{
                    font-weight:500;
                }
            }
            .sub_depth_2{
                display: none;
                li{
                    margin-top:22px;
                    a{
                        margin-left: 8px;
                    }
                    .sub_depth_3{
                        display:none;
                        li{
                            a{
                                font-size: $font-size-6;
                                line-height: 20px;
                                font-weight:400;
                                color: #19191D;
                                &:before{
                                    content:none;
                                }
                                &.active{
                                    font-weight:500;
                                }
                            }
                        }
                        &.active{
                            display: block;
                        }
                    }
                }
                &.active{
                    display: block;
                }
            }
        }
        &.active{
            display: block;
        }
    }
}

@media screen and (max-width: '1400px') {

    .sub_side{
        grid-column: span 3;
    }
}
@media screen and (max-width: '768px') {
    .sub_side{
        display:none;
    }
}
</style>