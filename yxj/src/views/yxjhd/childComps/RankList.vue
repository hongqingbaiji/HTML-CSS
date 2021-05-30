<template>
  <div class="rank">
    <div class="rank-list">
      <h4 class="yxtitle">元宵厨神排行榜</h4>
      <div class="top1_3">
        <div class="top2">
          <div class="topInfo">
            <div class="uhead">
              <img src="~@/assets/img/ranklist/head.jpg">
            </div>
            <span class="uname">巴拉巴拉小魔仙</span>
          </div>
          <div class="yxbox">
            <span>56</span>
            <span class="yxicon"></span>
          </div>
        </div>
        <div class="top1">
          <div class="topInfo">
            <div class="uhead">
              <img src="~@/assets/img/ranklist/head.jpg">
            </div>
            <span class="uname">巴拉巴拉小魔仙</span>
          </div>
          <div class="yxbox">
            <span>56</span>
            <span class="yxicon"></span>
          </div>
        </div>
        <div class="top3">
          <div class="topInfo">
            <div class="uhead">
              <img src="~@/assets/img/ranklist/head.jpg">
            </div>
            <span class="uname">巴拉巴拉小魔仙</span>
          </div>
          <div class="yxbox">
            <span>56</span>
            <span class="yxicon"></span>
          </div>
        </div>
      </div>
      <div class="top4_5">
        <div class="top4">
          <div>
            <span class="topNum4_5">4</span>
            <span class="uhead4_5">
              <img src="~@/assets/img/ranklist/head.jpg">
            </span>
            <span class="uname4_5">巴拉巴拉小魔仙</span>
          </div>
          <div>
            <span class="totalNum">56</span>
            <span class="yxicon"></span>
          </div>
        </div> 
        <div class="top5">
          <div>
            <span class="topNum4_5">5</span>
            <span class="uhead4_5">
              <img src="~@/assets/img/ranklist/head.jpg">
            </span>
            <span class="uname4_5">巴拉巴拉小魔仙</span>
          </div>
          <div>
            <span class="totalNum">56</span>
            <span class="yxicon"></span>
          </div>
        </div>
      </div>
      <p>贡献榜前五名（并列以时间先后为准）将会分别获得月花篮1个，奖励将在活动结束的3个工作日内发放！</p>
    </div>
    <div class="rank-list">
      <h4 class="tytitle">汤圆厨神排行榜</h4>
      <div class="top1_3">
        <div class="top2">
          <div class="topInfo">
            <div class="uhead">
              <img src="~@/assets/img/ranklist/head.jpg">
            </div>
            <span class="uname">巴拉巴拉小魔仙</span>
          </div>
          <div class="yxbox">
            <span>56</span>
            <span class="tyicon"></span>
          </div>
        </div>
        <div class="top1">
          <div class="topInfo">
            <div class="uhead">
              <img src="~@/assets/img/ranklist/head.jpg">
            </div>
            <span class="uname">巴拉巴拉小魔仙</span>
          </div>
          <div class="yxbox">
            <span>56</span>
            <span class="tyicon"></span>
          </div>
        </div>
        <div class="top3">
          <div class="topInfo">
            <div class="uhead">
              <img src="~@/assets/img/ranklist/head.jpg">
            </div>
            <span class="uname">巴拉巴拉小魔仙</span>
          </div>
          <div class="yxbox">
            <span>56</span>
            <span class="tyicon"></span>
          </div>
        </div>
      </div>
      <div class="top4_5">
        <div class="top4">
          <div>
            <span class="topNum4_5">4</span>
            <span class="uhead4_5">
              <img src="~@/assets/img/ranklist/head.jpg">
            </span>
            <span class="uname4_5">巴拉巴拉小魔仙</span>
          </div>
          <div>
            <span class="totalNum">56</span>
            <span class="tyicon"></span>
          </div>
        </div> 
        <div class="top5">
          <div>
            <span class="topNum4_5">5</span>
            <span class="uhead4_5">
              <img src="~@/assets/img/ranklist/head.jpg">
            </span>
            <span class="uname4_5">巴拉巴拉小魔仙</span>
          </div>
          <div>
            <span class="totalNum">56</span>
            <span class="tyicon"></span>
          </div>
        </div>
      </div>
      <p>贡献榜前五名（并列以时间先后为准）将会分别获得月花篮1个，奖励将在活动结束的3个工作日内发放！</p>

    </div>
  </div>
</template>

<script>

export default {
  name:'RankList',
}
</script>

<style>
.rank {
  width: 814px;
  height: 437px;
  margin: 80px auto 30px;
  display: flex;
  justify-content:space-between;
}

.rank-list {
  position: relative;
  width: 392px;
  height: 437px;
  background: rgba(61, 23, 147, 0.47);
  border-radius: 6px;
}
.yxtitle, .tytitle{
  position: absolute;
  left: 50%;
  top:0;
  transform: translate(-50%,-50%);
  width: 156px;
  height: 43px;
  line-height: 43px;
}
.yxtitle{
  background: url('~@/assets/img/ranklist/yxtitle.png') no-repeat;
  background-size: 100% ;
}
.tytitle{
  background: url('~@/assets/img/ranklist/tytitle.png') no-repeat;
  background-size: 100% ;
}
/* top1-3 start */
.top1_3{
  display: flex;
  justify-content: space-between;
  width: 312px;
  height: 100px;
  margin: 90px 40px 30px;
}
.top1,.top2,.top3{
  width: 88px;
  height: 100px;
  background-color: #673EA9;
  border-radius: 6px;
  position: relative;
}
.top1{
  margin-top: -33px;
}

.topInfo{
  position: relative;
  width: 88px;
  display: flex;
  justify-content: center;
}
.topInfo .uname{
  font-size: 14px;
  margin: 40px 6px 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.uhead img{
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-top: 10px;
}

.uhead {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%,-50%);
  width: 50px;
  height: 59px;
}
.top1 .uhead{
  background: url('~@/assets/img/ranklist/1.png');
  background-size: 100%;
}
.top2 .uhead{
  background: url('~@/assets/img/ranklist/2.png');
  background-size: 100%;
}
.top3 .uhead{
  background: url('~@/assets/img/ranklist/3.png');
  background-size: 100%;
}
/* top1-3 end */
.yxbox{
  width: 88px;
  padding:0 10px;
}
.yxbox span{
  font-size: 14px;
  color:#fddd9b;
  padding-right: 15px;
}
.yxicon,.tyicon{
  display: inline-block;
  width: 24px;
  height: 20px;
  vertical-align: middle;
}
.yxicon{
  background: url('~@/assets/img/ranklist/yxicon.png') center right no-repeat;
  background-size: 100%;
}
.tyicon{
  background: url('~@/assets/img/ranklist/tyicon.png') center right no-repeat;
  background-size: 100%;
}

/* top4_5 start */
.top4_5{
  margin: 0 40px;
}
.topNum4_5{
  padding-right: 20px;
}
.top4,.top5{
  width: 312px;
  height: 48px;
  line-height: 48px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.uhead4_5 img{
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}
.totalNum{
  padding:10px;
  font-size: 14px;
  color:#fddd9b;
}
/* top4_5 end */
.rank-list p {
  margin:40px 40px;
  font-size: 12px;
  text-align: left;
}
</style>