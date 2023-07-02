<template>
    <section class="question-container">
        <div v-if="true" class="homeDiv">
            <div class="textStyle">尊敬的先生/女士：</div>
            &nbsp;&nbsp;&nbsp;&nbsp;作为大众（安徽）智慧物流项目参与者，我们诚挚的邀请您参与本次调查问卷。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;您的反馈将有助于我们识别该项目对环境保护、社会价值和公司治理等层面的帮助和提升，感谢您的参与。
        </div>
        <div class="main-content">
            <van-form class="main-content-form" @submit="handleSave" ref="formRef">
                <div class="content-item" v-for="(quesItem,idx) in questions" :key="idx">
                    <div class="content-item-top">
                        <div>
                            <div class="titleLeft title">
                            </div>
                            <div class="titleRight title">
                            </div>
                            <div class="text">{{quesItem.title}}<span class="littleT">（5道题目）</span></div>
                        </div>
                        <div class="ques-item" v-for="(ques,index) in quesItem.questionList" :key="index">
                            <div class="" v-if="index < questionCount*questionNum && index >= questionCount*(questionNum-1)">
                                <div class="ques-item__title">
                                   {{ ques.enTitle }}
                                </div>
                                <!-- <div class="ques-item__option" v-if="ques.type === QuestionType.checkbox ">
                                   
        
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
                                </div> -->
                                <div class="ques-item__option" >
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
                    </div>
                    <div class="scroll-content">
                        <div :class="['position'+idx,'inisdeS']"></div>
                        <!-- <div :class="[true?'availableBtn':'disabledBtn','inisdeS']></div> -->
                    </div>
                </div>
                <div class="main-content-btns">
                    <div class="beforeBtn outerBtn">
                        <button class="btn before" @click="questionNum--" >上一页</button>
                    </div>
                    <div class="afterBtn outerBtn">
                        <button class="after btn" native-type="submit" v-if="questionNum*questionCount>=Questions.length">提交问卷</button>
                        <button class="after btn" v-else @click="handleNext">下一页</button>
                    </div>
                    <!-- <van-button type="primary" v-if="questionNum > 1" @click="questionNum--">
                        上一页
                    </van-button>
                    <van-button type="primary" native-type="submit" v-if="questionNum*questionCount>=Questions.length">
                        提交
                    </van-button>
                    <van-button type="primary" v-else @click="handleNext">
                        下一页
                    </van-button> -->
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
        margin-bottom: 92px;
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
            .content-item{
                margin-bottom: 80px; 
            }
            .content-item-top{
                width: 680px;
                border: 2px solid #4DF9FF;
                border-radius: 39px;
                margin: 0 auto;
                background: linear-gradient(270deg, rgba(0,54,144,0.00) 0%, rgba(0,54,144,0.00) 99%);
                // position: absolute;
                // top: 148px;
                // left: 35px;
                position: relative;
                padding-top: 64px;
                // margin-bottom: 80px;
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
                left: 30px;
            }
            .titleRight{
                background: linear-gradient(90deg, rgba(0,97,168,0.00) 0%, #004FA9 33%, #00DCF4 94%);
                left: 95px;
                top: -20px;
            }
            .text {
                position: absolute;
                top: -24px;
                left: 70px;
                font-size: 46px;
                font-weight: bold;
                .littleT{
                    font-size: 32px;
                    font-weight: normal;
                    margin-left: 30px;
                }
            }
            .ques-item {
                // margin-top: 64px;
                padding: 0 30px;
                .ques-item__title{
                    font-size: 22px;
                }
               // 这句不起作用
                .van-radio__label{
                    font-size: 22px;
                    color: #fff!important;
                    font-family: 思源黑体;
                    line-height: 44px;
                    font-weight: normal;
                }
                .van-radio__icon .van-icon{
                    font-size: 22px;
                }
                .ques-item__option{
                    .van-radio{
                        height: 44px;
                        line-height: 44px;
                    }
                    
                    .van-cell{
                        background: transparent;
                    }
                }
            }
            .scroll-content{
                width: 680px;
                height: 8px;
                border-radius: 6px;
                box-sizing: border-box;
                border: 2px solid #4DF9FF;
                margin-top: 50px;
                margin-left: 35px;
                position: relative;
                .inisdeS{
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width: 224px;
                    height: 6px;
                    border-radius: 6px;
                    background: #4DF9FF;
                    box-sizing: border-box;
                    border: 2px solid #4DF9FF;
                }
                .position1{
                    left: 228px;
                }
                .position2{
                    left: 456px;
                }
            }

            .main-content-btns{
                height: 100px;
                .outerBtn{
                    position: absolute;
                    left: 74px;
                    width: 220px;
                    height: 72px;
                    border-radius: 215px;
                    background: linear-gradient(90deg, #53B7FF 0%, #2AA6FF 22%, #007EDB 75%, #0061A8 99%);
                    box-sizing: border-box;
                    box-shadow: 0px 0px 24px 0px #00DDFF;
                    .btn{
                        height: 62px;
                        width: 210px;
                        margin: 0 auto;
                        margin-top: 5px;
                        font-family: 思源黑体;
                        font-size: 26px;
                        font-weight: bold;
                        line-height: 44px;
                        display: flex;
                        align-items: center;
                        letter-spacing: 0em;
                        border-radius: 215px;
                        border: 2px solid #4DF9FF;
                        background: transparent;
                        justify-content: center;
                        box-sizing: border-box;
                        box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
                    }
                }
                .afterBtn{
                    left: 386px;
                }
            }
        }
    }  
}
</style>
<style>
.van-radio__label{
    color: #fff!important;
}
</style>