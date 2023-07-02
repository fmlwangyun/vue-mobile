<template>
    <div class="homeDiv">
        <div class="homeContent">
            <div>
                <div class="titleLeft title">
                </div>
                <div class="titleRight title">
                </div>
                <div class="text">大众安徽智慧物流</div>
            </div>
            <div class="content">
                <div class="content-item jion">
                    <div class="itemTitle">参与礼兑换</div>
                    <div :class="[true?'availableBtn':'disabledBtn','commeBtn']">
                        <button class="btn photo">{{true?'兑换':'已兑换'}}</button>
                    </div>
                </div>
                <div class="content-item share">
                    <div class="itemTitle">分享礼兑换</div>
                    <div :class="[true?'availableBtn':'disabledBtn','commeBtn']">
                        <button class="btn photo">{{true?'兑换':'已兑换'}}</button>
                    </div>
                </div>
                <div v-if="true" class="content-botttom">
                    抱歉！今日分享礼已领取完毕
                </div>
            </div>
           
        </div>
        <div v-if="true" class="modal">

            <div class="modal-content">
                <div v-if="false">
                    <div class="outerDiv">
                        <div class="insideDiv">
                            
                        </div>
                    </div>
                    <div class="textDiv">请您找工作人员<br>&nbsp;&nbsp;&nbsp;&nbsp;扫描二维码兑奖！</div>
                </div>
                <div v-else class="Redeemed">
                    您的奖品已兑换！
                </div>
            </div>
            <div class="modal-cancel">
                <div class="small-cirle">
                    <van-icon class="textIcon" name="cross" />
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
        height: 1140px;
        color: #fff;
        font-family: 思源黑体;
        font-size: 22px;
        font-weight: normal;
        line-height: 44px;
        letter-spacing: 0em;
        text-align: center;
        letter-spacing: 0em;
        .homeContent{
            width: 680px;
            height: 540px;
            border: 2px solid #4DF9FF;
            border-radius: 39px;
            margin: 0 auto;
            background: linear-gradient(90deg, #003690 0%, rgba(0,148,255,0.00) 99%);            position: absolute;
            top: 406px;
            left: 35px;
        }
        .content{
            width: 620px;
            margin: 0 auto;
            .content-item{
                margin-top: 116px;
                width: 600px;
                height: 80px;
                font-size: 36px;
                font-weight: bold;
                border-radius: 89px;
                border: 2px solid #4DF9FF;
                position: relative;
                .itemTitle{
                    padding-left: 38px;
                    text-align: left;
                    line-height: 64px;
                    font-size: 36px;
                    font-weight: bold;
                    position: absolute;
                    top: -32px;
                    left: 30px;
                    width: 344px;
                    height: 64px;
                    border-radius: 259px;
                    background: linear-gradient(90deg, #53B7FF 0%, #007EDB 22%, #004DAA 79%, rgba(0,77,170,0.00) 99%);
                }
            }
            .share{
                margin-top: 100px;
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
            left: 38px;
        }
        .titleRight{
            background: linear-gradient(90deg, rgba(0,97,168,0.00) 0%, #004FA9 33%, #00DCF4 94%);
            left: 103px;
            top: -20px;
        }
        .text {
            position: absolute;
            top: -36px;
            left: 88px;
            
            font-size: 46px;
            font-weight: bold;
        }
        .availableBtn{
            
            box-shadow: 0px 0px 24px 0px #00DDFF;
            background: linear-gradient(90deg, #53B7FF 0%, #2AA6FF 22%, #007EDB 75%, #0061A8 99%);
           .btn{
                
            }
        }
        .disabledBtn{
            background: linear-gradient(90deg, #94D2FF 0%, #6D8BA1 99%);
            box-shadow: 0px 0px 16px 0px rgba(0, 221, 255, 0.5);
            .btn{
                box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
            }
        }
        .commeBtn{
            position: absolute;
            bottom: -32px;
            height: 64px;
            box-sizing: border-box;
            left: 345px;
            width: 160px;
            border-radius: 215px;
            box-sizing: border-box;
            .btn{
                height: 54px;
                margin: 0 auto;
                margin-top: 5px;
                font-size: 26px;
                display: flex;
                align-items: center;
                letter-spacing: 0em;
                border: 2px solid #4DF9FF;
                background: transparent;
                justify-content: center;
                width: 150px;
                border-radius: 31px;
            }
        }
        .modal{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
            background: rgba(0, 0, 0, 0.6);
        }
        .modal-content{
            z-index: 2;
            position: absolute;
            left: 125px;
            top: 380px;
            width: 500px;
            height: 575px;
            border-radius: 39px;
            opacity: 1;

            background: linear-gradient(41deg, #003690 -3%, #00B7FF 99%);

            box-sizing: border-box;
            border: 2px solid #4DF9FF;
            .outerDiv{
                position: absolute;
                left: 110px;
                top: 100px;
                width: 280px;
                height: 280px;
                border-radius: 16px;
                background: #FFFFFF;
                .insideDiv{
                    position: absolute;
                    left: 10px;
                    top: 10px;
                    width: 260px;
                    height: 260px;
                    border-radius: 12px;
                    box-sizing: border-box;
                    border: 2px solid #4DF9FF;
                    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
                }
            }
            .textDiv{
                position: absolute;
                left: 110px;
                top: 433px;
                width: 280px;
                height: 104px;
            }
        }
        .Redeemed{
            display: flex;
            align-items: center;
            justify-content: center;
            width:100%;
            height: 100%;
            font-size: 32px;
            font-weight: normal;
        }
        .modal-cancel{
            position: absolute;
            left: 339px;
            top: 1005px;
            width: 72px;
            height: 72px;
            border-radius: 215px;

            background: linear-gradient(90deg, #53B7FF 0%, #2AA6FF 22%, #007EDB 75%, #0061A8 99%);

            /* 002 */
            box-shadow: 0px 0px 24px 0px #00DDFF;
            

            .small-cirle{
                position: absolute;
                left: 6px;
                top: 6px;
                width: 60px;
                height: 60px;
                border-radius: 215px;
                box-sizing: border-box;
                border: 2px solid #4DF9FF;
                box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
                text-align: center;
                line-height: 60px;
                .textIcon{
                    /* position: absolute;
                    left: 14px;
                    top: 14px; */
                    width: 32px;
                    height: 32px;
                    font-size: 32px;
                }
            }
        }
    }
</style>