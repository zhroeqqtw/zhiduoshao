<template>
    <div>
        <mt-header title="知多少 ">
            <mt-button @click="back()" icon="back" slot="left">返回</mt-button>
        </mt-header>


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

        <!-- 个人信息 -->
        <div class="personal-info">
            <img class="avatar" src="" alt="">
            <a href="" class="fr">编辑</a>
            <div class="authorInfo">
                <h3>{detail.title}</h3>
                <p>detail.authorName}}  {{detail.authorLabel</p>
            </div>
        </div>

        <!--income-->
        <div class="income">
            <div class="count">
                <a href="" class="fr">知识名片</a>
                <div>
                    <p class="title">总收入</p>
                    <h3>2333.3</h3>
                </div>
            </div>
            <mt-button  type="primary" size="large">知识也能赚钱</mt-button>
        </div>

        <div>
            <mt-tabbar :fixed=false selected="home">
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
        </div>

    </div>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
    .personal-info {
        padding: 12px;
        border-top: #ddd solid 1px;
        margin-bottom: 12px;
        background: #fff;
        .avatar {
            width: 80px;
            height:80px;
            background: #ddd;
            float: left;
            border-radius: 50%;
        }

        .authorInfo {
            margin-left: 92px;
            h3 {
                font-size: 20px;
                font-weight: normal;
                line-height: 45px;
            }
            p {
                color: #999;
            }
        }
    }

    .income {
        background: #fff;
        padding: 12px;
        .count {
            border-bottom: #ddd solid 1px;
            padding-bottom: 12px;
            margin-bottom: 12px;
        }

        .title {
            color: #666;
            margin-bottom: 8px;
        }
        h3 {
            font-size:30px;
        }
    }
</style>
<script>
    import Vue from 'vue';
    import {Header} from 'mint-ui';
    import res from '../resource';
    Vue.component(Header.name, Header);

    import {Tabbar, TabItem} from 'mint-ui';
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);

    import {Toast} from 'mint-ui';


    export default {
        components: {
            Header,
            Toast
        }
    }
</script>