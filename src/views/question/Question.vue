<template>
    <section class="question-container">
        <div class="main-content">
            <van-form class="main-content-form" @submit="handleSave" ref="formRef">
                <div class="ques-item" v-for="(ques,index) in questions" :key="index">
                    <div v-if="index < questionCount*questionNum && index >= questionCount*(questionNum-1)">
                        <div class="ques-item__title">
                           {{ index+1 }}. {{ isZH?ques.zhTitle:ques.enTitle }}
                        </div>
                        <div class="ques-item__option" v-if="ques.type === QuestionType.checkbox ">
                            <!-- <van-checkbox-group 
                                :max="ques.max"
                                :rules="[{ required: ques.required, message: ques.errorMsg }]"
                            >
                                <van-checkbox :name="option.title" v-for="(option,oIndex) in ques.options" :key="oIndex">{{ option.title }}</van-checkbox>
                            </van-checkbox-group> -->

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
    padding: 20px;
    font-size: 24px;
    .main-content-form{
        .main-content-btns{
            display: flex;
            justify-content: space-around;
            text-align: center;
        }
    }
}
</style>