<template>
    <div>
        <mt-header title="知多少"></mt-header>
        <mt-swipe :auto="0" :style="{height: bannerHeight}" class="mb-8">


            <mt-swipe-item v-for="item in bannerImgs" track-by="$index" >
                <img :src="item">
            </mt-swipe-item>
        </mt-swipe>

        <mt-tabbar :fixed=true selected="find">
            <mt-tab-item id="home" @click="go('/index')">
                <!--<img slot="icon" src="../assets/100x100.png">-->
                首页
            </mt-tab-item>
            <mt-tab-item id="find">
                <!--<img slot="icon" src="../assets/100x100.png">-->
                发现
            </mt-tab-item>
            <mt-tab-item id="me">
                <!--<img slot="icon" src="../assets/100x100.png">-->
                我
            </mt-tab-item>
        </mt-tabbar>

        <div class="list">
            <h3>精选专题</h3>
            <ul >
                <li v-for="item in findList" @click="go('/detail/' + item.id)">
                    <img class="fl" :src="item.image" alt="">
                    <div class="info">
                        <h4>{{item.title}}</h4>
                        <p class="color-gray">{{item.intro}}</p>
                    </div>
                </li>
            </ul>
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

    .list {
        background: #fff;
        margin-bottom: 40px;

        h3 {
            font-weight: normal;
            font-size:14px;
            padding: 0 12px;
            line-height: 40px;
            border-bottom: #ddd solid 1px;
        }
        li {
            list-style: none;
            overflow: hidden;
            padding: 12px;
            border-bottom: #ddd solid 1px;
            img {
                height: 60px;
                width: 60px;
            }
            .info {
                margin-left: 72px;
                h4 {
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size:16px;
                    font-weight: normal;
                    line-height: 30px;
                }
                .color-gray {
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }


</style>
<script type="text/ecmascript-6">
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
                findList: []
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

            // 加载精选 数据
            res.request('getFindList').then(({data: res})=>{
                if (res.status == 'success') {
                    console.log(res)
                    this.findList = res.data;
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