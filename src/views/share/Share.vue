<template>
    <div class="homeDiv">
        <div class="homeContent">
            <div>
                <div class="titleLeft title">
                </div>
                <div class="titleRight title">
                </div>
                <div class="text">拍照分享</div>
            </div>
            <div class="content">
                <div class="content-top">
                    感谢您的宝贵意见及建议！
                </div>
                <div class="content-middle">
                    请向现场工作人员出示二维码领取您的奖品<br>您还可参与拍照分享<br>现场领取分享好礼！
                </div>
                <div class="content-QRCode">
                   <div class="QRCode"></div>
                </div>
                <div v-if="true" class="content-botttom">
                    抱歉！今日分享礼已领取完毕
                </div>
            </div>
            <div>
                <div :class="[false?'footerBtn':'overBtn','outerBtn']">
                    <button class="btn photo"><van-icon name="chat-o" />&nbsp;&nbsp;&nbsp;拍照分享</button>
                </div>
                <div class="btnPrize outerBtn">
                    <button class="prize btn">奖品兑换</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
    .homeDiv {
        width: 100%;
        height: 100%;
        color: #fff;
        .homeContent{
            width: 680px;
            height: 880px;
            border: 2px solid #4DF9FF;
            border-radius: 39px;
            margin: 0 auto;
            background: linear-gradient(270deg, rgba(0,54,144,0.00) 0%, rgba(0,54,144,0.00) 99%);
            position: absolute;
            top: 148px;
            left: 35px;
        }
        .content{
            width: 620px;
            margin: 0 auto;
            font-family: 思源黑体;
            font-size: 22px;
            font-weight: normal;
            line-height: 44px;
            letter-spacing: 0em;
            text-align: center;
            letter-spacing: 0em;
            margin-top: 100px;
            .content-top{
                height: 54px;
                font-size: 36px;
                font-weight: bold;
            }
            .content-middle{
                height: 135px;
                margin-top: 60px;
            }
            .content-QRCode{
                margin-top: 68px;
                /* text-align: center; */
                .QRCode{
                    margin: 0 auto;
                    width: 260px;
                    height: 260px;
                    border-radius: 12px;
                    opacity: 1;

                    box-sizing: border-box;
                    border: 2px solid #4DF9FF;
                    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
                }
            }
            .content-botttom{
                height: 132px;
                margin-top: 45px;
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
            left: 248px;
            font-family: 思源黑体;
            font-size: 46px;
            font-weight: bold;
            letter-spacing: 0em;
        }
        .footerBtn{
            left: 188px;
            width: 304px;
            border-radius: 215px;
            background: linear-gradient(90deg, #53B7FF 0%, #2AA6FF 22%, #007EDB 75%, #0061A8 99%);
            box-sizing: border-box;
            box-shadow: 0px 0px 24px 0px #00DDFF;
            .btn{
                width: 290px;
                border-radius: 31px;
            }
        }
        .overBtn{
            left: 188px;
            width: 304px;
            border-radius: 215px;
            box-sizing: border-box;
            background: linear-gradient(90deg, #94D2FF 0%, #6D8BA1 99%);
            box-shadow: 0px 0px 16px 0px rgba(0, 221, 255, 0.5);
            .btn{
                width: 290px;
                border-radius: 31px;
                box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
            }
        }
        .btnPrize{
            left: 552px;
            width: 160px;
            border-radius: 215px 0px 0px 215px;
            box-shadow: 0px 0px 24px 0px #00DDFF;
            background: linear-gradient(90deg, #53B7FF 0%, #2AA6FF 22%, #007EDB 75%, #0061A8 99%);
            .prize{
                position: absolute;
                left: 5px;
                width: 155px;
                height: 62px;
                border-right: none;
                border-radius: 215px 0px 0px 215px;
                box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
               
            }
        }
        .outerBtn{
            position: absolute;
            bottom: -36px;
            height: 72px;
            box-sizing: border-box;
            .btn{
                height: 62px;
                margin: 0 auto;
                margin-top: 5px;
                font-family: 思源黑体;
                font-size: 26px;
                font-weight: bold;
                line-height: 44px;
                display: flex;
                align-items: center;
                letter-spacing: 0em;
                border: 2px solid #4DF9FF;
                background: transparent;
                justify-content: center;
            }
        }
    }
</style>