<template>
    <div>
        <mt-header title="知多少 "></mt-header>
        <mt-swipe :auto="0" :style="{height: bannerHeight}" class="mb-8">


            <mt-swipe-item v-for="item in bannerImgs" track-by="$index" >
                <img :src="item">
            </mt-swipe-item>
        </mt-swipe>

        <mt-tabbar :fixed=true selected="home">
            <mt-tab-item id="home" >
                首页
            </mt-tab-item>
            <mt-tab-item id="find" @click="go('/find')">
                发现
            </mt-tab-item>
            <mt-tab-item id="me">
                我
            </mt-tab-item>
        </mt-tabbar>

        <div class="listItem" v-for="item in homeList.article" @click="go('/detail/' + item.id)">
            <h3>{{item.title}}</h3>
            <p class="intro">{{item.content}}</p>
            <div class="clearfix user">
                <img class="fl avatar" :src="item.Avatar" alt="">
                <p class="fl">{{item.authorName}} {{item.authorLabel}}</p>
                <p class="fr timeLength">{{item.timeLength}}学习完</p>
            </div>
        </div>

         <div class="handpick" v-for="item in homeList.handpick">
             <p class="head"><a class="color-gray fr more" href="">更多</a>{{item.title}} </p>
             <div class="clearfix">
                <div class="item" v-for="data in item.data" @click="go('/detail/' + data.id)">
                    <img class="fr image" :src="data.image" alt="">
                    <div>
                        <h4>{{data.title}}</h4>
                        <p class="color-gray intro">{{data.intro}}</p>
                    </div>

                </div>
             </div>
         </div>
    
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    .mint-header {
        background: #fff;
        color: #333;
    }

    .swipe-item img {
        width: 100%;
    }

    .listItem {
        background: #fff;
        margin-bottom: 8px;
        padding: 16px 12px;
        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }
        .intro {
            color: #999;
            height: 40px;
            overflow: hidden;
        }
        .avatar {
            width: 24px;
            height: 24px;
            background: #999;
            border-radius: 50%;
            margin-right: 8px;
        }
        .user {
            line-height: 24px;
            color: #999;
        }
        .timeLength {
            font-size: 12px;
        }

    }

    .handpick {
        background: #fff;
        padding-bottom: 12px;
        .head {
            line-height: 36px;
            border-bottom: #ddd solid 1px;
            padding: 0 12px;
        }
        .more {
            font-size:12px;
            color: #999;
        }
        .image {
            height: 68px;
            width: 68px;
        }
        .item {
            overflow: hidden;
            width: 50%;
            float: left;
            padding: 12px;
        }
        .intro {
            font-size: 12px;
        }
    }
</style>
<script>
    import Vue from 'vue';
    import { Header } from 'mint-ui';
    import res from '../resource';
    Vue.component(Header.name, Header);

    import { Swipe, SwipeItem } from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    import { Tabbar, TabItem } from 'mint-ui';
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);

    import { Toast } from 'mint-ui';

    export default {
        methods: {
            go(path){
                this.$router.go(path);
            }
        },
        data() {
            return {
                bannerHeight: document.documentElement.clientWidth/2.5 + 'px',
                bannerImgs: [],
                homeList: {},
                check: true
            }
        },
        created(){
            // 加载banner 数据
            res.request('getBannerData').then(({data: res})=>{
                if (res.status == 'success') {
                    this.bannerImgs = res.data;
                } else {
                    Toast('请求banner信息失败');
                }
            });

            // 加载列表数据
            res.request('getHomeListData').then(({data: res})=>{
                if (res.status == 'success') {
                    console.log(res)
                    this.homeList = res.data;
                } else {
                    Toast('请求banner信息失败');
                }
            });
        },
        components: {
            Header,
            Swipe,
            SwipeItem,
            Tabbar,
            TabItem
        }
    };
</script>