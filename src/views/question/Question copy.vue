<template>
    <section class="question-container">
        <div v-if="true" class="homeDiv">
            <div class="textStyle">尊敬的先生/女士：</div>
            &nbsp;&nbsp;&nbsp;&nbsp;作为大众（安徽）智慧物流项目参与者，我们诚挚的邀请您参与本次调查问卷。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;您的反馈将有助于我们识别该项目对环境保护、社会价值和公司治理等层面的帮助和提升，感谢您的参与。
        </div>
        <div class="main-content">
            <van-form class="main-content-form" @submit="handleSave" ref="formRef">
                <div class="ques-item" v-for="(ques,index) in questions" :key="index">
                    <div>
                        <div class="titleLeft title">
                        </div>
                        <div class="titleRight title">
                        </div>
                        <div class="text">环境保护</div>
                    </div>
                    <div v-if="index < questionCount*questionNum && index >= questionCount*(questionNum-1)">
                        <div class="ques-item__title">
                           {{ index+1 }}. {{ isZH?ques.zhTitle:ques.enTitle }}
                        </div>
                        <div class="ques-item__option" v-if="ques.type === QuestionType.checkbox ">
                           

                            <van-field
                                :rules="[{ required: ques.required, message: ques.errorMsg }]"
                            >
                                <template #input>
                                    <van-checkbox-group 
                                        v-model:value="ques.answer"
                                        :max="ques.max"
                                        :rules="[{ required: ques.required, message: ques.errorMsg }]"
                                    >
                                        <van-checkbox :name="option.title" v-for="(option,oIndex) in ques.options" :key="oIndex">{{ option.title }}</van-checkbox>
                                    </van-checkbox-group>
                                </template>
                            </van-field>
                        </div>
                        <div class="ques-item__option" v-else>
                            <van-field
                                :rules="[{ required: ques.required, message: ques.errorMsg }]"
                            >
                                <template #input>
                                    <van-radio-group
                                        v-model="ques.answer"
                                        :rules="[{ required: ques.required, message: ques.errorMsg }]"
                                    >
                                        <van-radio :name="option.title" v-for="(option,oIndex) in ques.options" :key="oIndex">{{ option.title }}</van-radio>
                                    </van-radio-group>
                                </template>
                            </van-field>
                        </div>
                    </div>
                </div>
                <div class="main-content-btns">
                    <van-button type="primary" v-if="questionNum > 1" @click="questionNum--">
                        上一页
                    </van-button>
                    <van-button type="primary" native-type="submit" v-if="questionNum*questionCount>=Questions.length">
                        提交
                    </van-button>
                    <van-button type="primary" v-else @click="handleNext">
                        下一页
                    </van-button>
                </div>
            </van-form>

        </div>
    </section>
</template>

<script setup lang="ts">
import { ref , onMounted , computed} from 'vue'
import { Questions } from './config'
import { QuestionType } from './enum'
import {useLanguageStroe} from '@/store/language';
import { storeToRefs } from 'pinia'
onMounted(()=>{
})
let { isZH } = storeToRefs(useLanguageStroe())


const props = defineProps({
    questionCount: {
        type: Number,
        required: false,
        default: 5
    }
})
const formRef = ref()

const questionNum = ref<number>(1) 
const questions = ref<object[]>(Questions)

const handleSave = (values:any) => {
    formRef.value.validate().then(()=>{

    })
}

const handleNext = () => {
    formRef.value.validate().then(()=>{
        questionNum.value++
    })
}
</script>

<style scoped lang="less">
.question-container{
    // padding: 20px;
    width: 100%;
    height: 100%;
    color: #fff;
    font-family: 思源黑体;
    font-size: 22px;
    font-weight: normal;
    line-height: 44px;
    letter-spacing: 0em;
    margin-top: 318px;
    .homeDiv{
        // position: absolute;
        // left: 35px;
        // top: 418px;
        margin: 0 auto;
        
        width: 680px;
        height: 294px;
        background: linear-gradient(90deg, rgba(0,54,144,0.75) 0%, rgba(0,148,255,0.00) 99%);
        box-sizing: border-box;
        border: 2px solid #4DF9FF;
        border-radius: 39px 130px 39px 39px;
        padding: 36px 30px;
        .textStyle{
            font-weight: 700;
        }
    }
    .main-content{
        // position: relative;

        .main-content-form{
            .ques-item{
                width: 680px;
                border: 2px solid #4DF9FF;
                border-radius: 39px;
                margin: 0 auto;
                background: linear-gradient(270deg, rgba(0,54,144,0.00) 0%, rgba(0,54,144,0.00) 99%);
                // position: absolute;
                // top: 148px;
                // left: 35px;
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
                left: 156px;
                font-size: 46px;
                font-weight: bold;
            }
            .main-content-btns{
            }
        }
    }  
}
</style>