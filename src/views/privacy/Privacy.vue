<template>
    <div class="homeDiv">
        <div class="homeContent">
            <div>
                <div class="titleLeft title">
                </div>
                <div class="titleRight title">
                </div>
                <div class="text">{{pageText.title}}</div>
            </div>
            <div class="content">
                <div class="content-top">
                    {{pageText.content1}}<span class="keynote">{{pageText.content2}}</span>。
<br>{{pageText.content3}}
{{pageText.content4}}
                </div>
            </div>
            <div>
                <div class="disagreeBtn btnDiv">
                    <button class="disagree btn">{{pageText.button1}}</button>
                </div>
                <div class="agreeBtn btnDiv">
                    <button class="agree btn" @click="hanleNext">{{pageText.button2}}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { PageDescriptionZh, PageDescriptionEn } from './config'
import {useLanguageStroe} from '@/store/language';
import { storeToRefs } from 'pinia'
let { isZH } = storeToRefs(useLanguageStroe())
const pageText = ref<object>(PageDescriptionZh)
watch(isZH, (newValue, oldValue) => {
  pageText.value = newValue?PageDescriptionZh:PageDescriptionEn
},{immediate:true});
const router = useRouter()
const hanleNext = () => {
    router.push('/home')
}
</script>
<style scoped>
    .homeDiv {
        width: 100%;
        height: 100%;
        color: #fff;
        .homeContent{
            width: 680px;
            /* height: 880px; */
            border: 2px solid #4DF9FF;
            border-radius: 39px;
            margin: 0 auto;
            background: linear-gradient(270deg, rgba(0,54,144,0.00) 0%, rgba(0,54,144,0.00) 99%);
            position: absolute;
            top: 148px;
            left: 35px;
            padding-bottom: 80px;
        }
        .content{
            width: 620px;
            margin: 0 auto;
            font-family: 思源黑体;
            font-size: 22px;
            font-weight: normal;
            line-height: 44px;
            letter-spacing: 0em;
            margin-top: 100px;
            .content-top{
                /* height: 538px; */
            }
            .keynote{
                font-weight: 700;
                text-decoration: underline;
            }
            .Pgifts{
                height: 132px;
                margin-top: 10px;
            }
        }
        .title{
            width: 400px;
            height: 64px;
            position: absolute;
            border-radius: 259px;
        }
        .titleLeft{
            background: linear-gradient(90deg, #53B7FF 0%, #007EDB 33%, rgba(0,97,168,0.00) 99%);
            top: -40px;
            left: 107px;
        }
        .titleRight{
            background: linear-gradient(90deg, rgba(0,97,168,0.00) 0%, #004FA9 33%, #00DCF4 94%);
            left: 172px;
            top: -20px;
        }
        .text {
            position: absolute;
            top: -36px;
            left: 197px;
            font-family: 思源黑体;
            font-size: 46px;
            font-weight: bold;
            letter-spacing: 0em;
        }
        .btnDiv{
            position: absolute;
            bottom: -36px;
            width: 220px;
            height: 72px;
            border-radius: 215px;
            background: linear-gradient(90deg, #53B7FF 0%, #2AA6FF 22%, #007EDB 75%, #0061A8 99%);

            box-sizing: border-box;
            /* border: 1px solid #000000; */
            box-shadow: 0px 0px 24px 0px #00DDFF;
            /* box-shadow: 10px 10px 15px -10px; */
            .btn{
                width: 210px;
                height: 62px;
                margin: 0 auto;
                margin-top: 5px;
                font-family: 思源黑体;
                font-size: 26px;
                font-weight: bold;
                line-height: 44px;
                text-align: center;
                display: flex;
                align-items: center;
                letter-spacing: 0em;
                border: 2px solid #4DF9FF;
                background: transparent;
                border-radius: 31px;
                justify-content: center;
                color: #fff
            }
        }
        .disagreeBtn {
            left: 60px;
        }
        .agreeBtn {
            right: 60px;
        }
    }
</style>