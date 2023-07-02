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
                <div class="contentImg">
                    <div class="ewmOuter">
                        <div class="ewmInside">

                        </div>
                    </div>
                </div>
                <div class="contentBottom">
                    <div class="leftLine"></div>
                    <div class="leftText">长按保存图片<br>分享至朋友圈现场领取奖品</div>
                    <div class="rightText">识别二维码<br>参与调研问卷</div>

                </div>
            </div>
            <div class="footerBtn">
                <button class="btn">重新制作</button>
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
        .homeContent{
            width: 680px;
            height: 980px;
            border: 2px solid #4DF9FF;
            border-radius: 39px;
            margin: 0 auto;
            background: linear-gradient(90deg, #003690 0%, rgba(0,148,255,0.00) 99%);            position: absolute;
            top: 88px;
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
            margin-top: 75px;
            .contentImg {
                margin: 0 auto;
                width: 600px;
                height: 700px;
                border-radius: 16px;
                opacity: 1;
                background: #fff;
                position: relative;
                /* background: url(矩形 6.png); */

                /* 002 */
                box-shadow: 0px 0px 24px 0px #00DDFF; 
                .ewmOuter{
                    position: absolute;
                    width: 180px;
                    height: 180px;
                    right: 0;
                    bottom: -64px;
                    border-radius: 16px;

                    background: #FFFFFF;

                    box-shadow: 0px 0px 16px 0px rgba(0, 221, 255, 0.6);
                    .ewmInside{
                        position: absolute;
                        left: 10px;
                        top: 10px;
                        width: 160px;
                        height: 160px;
                        border-radius: 12px;
                        box-sizing: border-box;
                        border: 2px solid #4DF9FF;
                        box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
                    }
                }
            }
            .contentBottom{
                margin: 0 auto;
                width: 600px;
                position: relative;
                font-family: 思源黑体;
                font-size: 24px;
                font-weight: normal;
                line-height: 34px;
                letter-spacing: 0em;
              .leftLine{
                position: absolute;
                left: 0px;
                top: 0px;
                width: 4px;
                height: 130px;
                border-radius: 4px;
                background: linear-gradient(0deg, #4DF9FF 0%, rgba(77,249,255,0.00) 92%);
              }  
              .leftText{
                position: absolute;
                left: 14px;
                top: 72px;
                width: 313px;
                height: 67px;
              }  
              .rightText{
                position: absolute;
                right: 0px;
                top: 72px;
                width: 185px;
                height: 67px;
                text-align: right;
              }  
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
            left: 75px;
        }
        .titleRight{
            background: linear-gradient(90deg, rgba(0,97,168,0.00) 0%, #004FA9 33%, #00DCF4 94%);
            left: 140px;
            top: -20px;
        }
        .text {
            position: absolute;
            top: -36px;
            left: 120px;
            font-family: 思源黑体;
            font-size: 46px;
            font-weight: bold;
            letter-spacing: 0em;
        }
        .footerBtn{
            position: absolute;
            bottom: -36px;
            left: 210px;
            width: 260px;
            height: 72px;
            border-radius: 215px;
            background: linear-gradient(90deg, #53B7FF 0%, #2AA6FF 22%, #007EDB 75%, #0061A8 99%);

            box-sizing: border-box;
            /* border: 1px solid #000000; */
            box-shadow: 0px 0px 24px 0px #00DDFF;
            /* box-shadow: 10px 10px 15px -10px; */
            .btn{
                width: 250px;
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
    }
</style>