<template>
    <div>
        <mt-header title="知识详情">
            <mt-button @click="back()" icon="back" slot="left">返回</mt-button>
        </mt-header>

        <div class="author">
            <div class="clearfix authorBlock">
                <img class="fl avatar" :src="detail.authorAvatar" alt="">
                <div class="authorInfo">
                    <h3>{{detail.title}}</h3>
                    <p>{{detail.authorName}}  {{detail.authorLabel}}</p>
                </div>
            </div>
            <p class="intro">{{detail.intro}}</p>
        </div>

        <div class="buyInfo">
            <p >
                <span class="fr">{{detail.learnCount}}人学过</span>
                <span class="timeLength">{{detail.timeLength}}分钟</span>学完
            </p>

            <mt-button v-show="!detail.isBuy" type="primary" size="large">赞助1元并学习</mt-button>

            <p v-show="detail.isBuy" style="text-align: center;">
                <span class=success-icon></span>知识点GET
            </p>

        </div>

        <div class="content">
            <h4>知识简介</h4>
            <div class="content-detail">{{{detail.detail}}}</div>
        </div>
    </div>
</template>
<style  scoped lang="scss" rel="stylesheet/scss">
    .author {
        background: #fff;
        padding: 12px;
        border-top: #ddd solid 1px;
        margin-bottom: 12px;
        overflow: hidden;
    }

    .authorBlock {
        border-bottom: #ddd solid 1px;
        padding-bottom: 12px;
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

    .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #666;
    }

    .intro {
        padding-top: 12px;
        color: #999;
        padding-bottom: 8px;
    }

    .buyInfo {
        background: #fff;
        padding: 12px;
        color: #666;
        margin-bottom: 12px;
        p {
            line-height: 24px;
            padding-bottom: 10px;
            border-bottom: #ddd solid 1px;
            margin-bottom: 12px;
        }
    }
    .timeLength {
        color: #4d9ff4;
        margin-right: 4px;
    }

    .content {
        background: #fff;
        padding: 12px;
        margin-bottom: 12px;
        h4 {
            color: #ddd;
            margin-bottom: 12px;
        }
        .content-detail {

        }
    }
    .success-icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #60be29;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 8px;
    }

</style>
<script >
    import Vue from 'vue';
    import { Header } from 'mint-ui';
    import res from '../resource';
    import Router from 'vue-router';
    Vue.component(Header.name, Header);

    import { Button } from 'mint-ui';
    Vue.component(Button.name, Button);

    import { Toast } from 'mint-ui';

    export default {
        methods: {
            back(){
                history.back();
            }
        },
        data() {
            return {
                detail: {}
            }
        },
        created(){
            // 加载banner 数据
            res.request('getArticleDetail').then(({data: res})=>{
                if (res.status == 'success') {
                    this.detail = res.data;
                    console.log(res)
                } else {
                    Toast('请求banner信息失败');
                }
            });

        },
        components: {
            Header,
            Button
        }
    };
</script>