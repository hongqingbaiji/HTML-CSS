<template>
  <div id="yxjhd">
    <top-img></top-img>
    <marking :status="status" :active-state="activeState"
             :is-change-team="isChangeTeam"
             :team="team"
             :paste-num="pasteNum"
             @teamchange="teamchange"
             @pasteNumChange="pasteNumChange"
             :team1-count="team1Count"
             :team2-count="team2Count"
             @teamCount1="teamCount1" 
             @teamCount2="teamCount2"
             ></marking>
    <pk :team1-count="team1Count" :team2-count="team2Count" :team="team"></pk>
    <rank-list :team1FirstFive="team1FirstFive" :team2FirstFive="team2FirstFive"></rank-list>
    <head-pendant></head-pendant>
    <create-cum :award-list="awardList"></create-cum>
  </div>
</template>

<script>
import TopImg from './childComps/TopImg';
import Marking from './childComps/Marking';
import Pk from './childComps/Pk';
import RankList from './childComps/RankList';
import HeadPendant from './childComps/HeadPendant';
import CreateCum from './childComps/CreateCum'
import { 
  getMakeDumpling,
  getUserRecord,
  getchangeTeam,
  getDailyTask,
  getActiveUser,
  getAwardList,
  getSelectTeam,
  getTeamInfo,
  getMakeAward 
} from 'network/yxjhd';

export default {
  name: 'Yxjhd',
  components: {
    TopImg,
    Marking,
    Pk,
    RankList,
    HeadPendant,
    CreateCum
  },
  data() {
    return {
      // TopImg
      notice:[],
      // Marking
      status:1,
      activeState: 0,
      isChangeTeam:0,
      team:0,
      pasteNum:0,

      // pk
      team1Count:0,
      team2Count:0,

      //RankList
      team1FirstFive:[],
      team2FirstFive:[],
      avatar:'',

      // CreateCum
      awardList:[]
    }

  },
  created(){

    // 获取制作接口
    getMakeDumpling().then(res => {
      //state：-1000， msg: 您没有登录 data:null
     
    });

    // 我的记录列表接口
    getUserRecord().then(res => {
      //state：-1000， msg: 您没有登录 data:null
      
    });

    // 更换阵营接口
    getchangeTeam().then(res => {

      
    }); 

    // 每日任务列表接口
    getDailyTask().then(res => {
      // console.log(res);
    });

    // 活动用户信息接口
    getActiveUser().then(res => {
      res={ 
        "status":1,
        "msg":"\u4e0d\u5728\u6d3b\u52a8\u65f6\u95f4\u5185\uff01",
        "data":{
          "active_user": {       //活动用户信息
          "paste_num":50,       //面团数量
          "team":0,              //队伍 0未选择队伍 1汤圆队 2元宵队
          "is_changed_team":0    //是否已经更改过阵营
          },
          "notice":[
            "厨神【nodwang】制作了汤圆",
            "厨神【nodwang】制作了Array"
          ],
          "active_status":1
        }
      };
      // 登录状态
      this.status = res.status;
      //活动状态 0未开始，1进行中，2已结束
      this.activeState = res.data.active_status;
      // 是否更换过阵营 0没有 1更换过
      this.isChangeTeam = res.data.active_user.is_changed_team;
      // 当前所处阵营 0无 1汤圆队 2元宵队
      this.team = res.data.active_user.team;
      // 面团数量 
      this.pasteNum = res.data.active_user.paste_num;

    });

    // 获取累计制作奖励列表接口
    getAwardList().then(res => {
      this.awardList = res.data;
    })

    // 选择阵营接口
    getSelectTeam().then(res => {

    });

    // 队伍排行榜信息接口
    getTeamInfo().then(res => {
      res = {
        "status":1,
        "data":[{
          "team_type":2,
          "count":64070,
           "first_five":[
                {
                    "uid":95441500,
                    "dumpling_num":56,
                    "avatar":"http:\/\/passport.66rpg.com\/user\/avatar?uid=95441500",
                    "username":"\u2605\u5954\u5954\u2605"
                },
                {
                    "uid":84184494,
                    "dumpling_num":56,
                    "avatar":"http:\/\/passport.66rpg.com\/user\/avatar?uid=84184494",
                    "username":"\u590f\u7720fitting"
                },
                {
                    "uid":18633391,
                    "dumpling_num":56,
                    "avatar":"http:\/\/passport.66rpg.com\/user\/avatar?uid=18633391",
                    "username":"\u767e\u91cc.\u4e5d\u5f26"
                },
                {
                    "uid":37177537,
                    "dumpling_num":56,
                    "avatar":"http:\/\/passport.66rpg.com\/user\/avatar?uid=37177537",
                    "username":"tatillonne"
                },
                {
                    "uid":86521273,
                    "dumpling_num":56,
                    "avatar":"http:\/\/passport.66rpg.com\/user\/avatar?uid=86521273",
                    "username":"si\u7396\u5b50\u9e2d"
                }
            ]
        },{
          "team_type":1,
          "count":457305,
          "first_five":[
                {
                    "uid":21467303,
                    "dumpling_num":56,
                    "avatar":"http:\/\/passport.66rpg.com\/user\/avatar?uid=21467303",
                    "username":"\u7389\u5e37"
                },
                {
                    "uid":21880268,
                    "dumpling_num":56,
                    "avatar":"http:\/\/passport.66rpg.com\/user\/avatar?uid=21880268",
                    "username":"kitsch-V"
                },
                {
                    "uid":4231288,
                    "dumpling_num":56,
                    "avatar":"http:\/\/passport.66rpg.com\/user\/avatar?uid=4231288",
                    "username":"\u6e29\u90c1\u6e05"
                },
                {
                    "uid":88376334,
                    "dumpling_num":56,
                    "avatar":"http:\/\/passport.66rpg.com\/user\/avatar?uid=88376334",
                    "username":"\u6a31\u5c9b\u60a0\u5948"
                },
                {
                    "uid":83337296,
                    "dumpling_num":56,
                    "avatar":"http:\/\/passport.66rpg.com\/user\/avatar?uid=83337296",
                    "username":"\u559c\u9a6c\u62c9\u96c5\u6ca1\u6709\u7cd6~"
                }
            ]
        }]
      };
      // this.teamType = res.data.team_type;
      this.team2Count = res.data[0].count;
      this.team1Count = res.data[1].count;
      this.team1FirstFive = res.data[0].first_five;
      this.team2FirstFive = res.data[1].first_five;
    });

    // 领取累计制作奖励接口
    getMakeAward().then(res => {

    });
  },
  methods:{
    pasteNumChange(value){
      this.pasteNum = parseFloat(value);
    },
    teamchange(e){
      this.team = e;
      console.log('team:'+this.team);
    },
    teamCount1(e1){
      this.team1Count = e1;
      console.log('t1c:'+this.team1Count);
    },
    teamCount2(e2){
      this.team2Count = e2;
      console.log('t2c:'+this.team2Count);
    } 
  }
}
</script>

<style scoped>
  #yxjhd{
    height: 3000px;
    font-size: 16px;
    color:#fff;
    background-color: #58309B;
    text-align: center;
  }
</style>

