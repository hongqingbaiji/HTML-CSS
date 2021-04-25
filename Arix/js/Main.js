(function() {
  window.Game = function() {
    //初始化
    this.row = 20;
    this.col = 12;
    this.init();
    // 实例方块
    this.block = new Block();
    // 实例下一个方块
    this.nextBlock = new Block();
    // 实例地图
    this.map = new Map(this);
    // 启动定时器
    this.start();
    // 事件监听
    this.bindEvent();
    // 分数
    this.score = 0;
    // 速度
    this.during = 20;
  }
  Game.prototype.init = function() {
    const $table = $('<table></table>');
    $table.addClass('tab1');
    //渲染表格
    for (let i = 0; i < this.row; i++) {
      //创建tr
      const $tr = $('<tr></tr>');
      for (let j = 0; j < this.col; j++) {
        //创建td
        const $td = $('<td></td>');
        $td.appendTo($tr)
      }
      $tr.appendTo($table);
    }
    // 初始化预览窗口
    const $table2 = $('<table></table>');
    $table2.addClass('tab2');
    for (let i = 0; i < 4; i++) {
      //创建tr
      const $tr2 = $('<tr></tr>');
      for (let j = 0; j < 4; j++) {
        //创建td
        const $td2 = $('<td></td>');
        $td2.appendTo($tr2);
      }
      $tr2.appendTo($table2);
    }
    $($table).appendTo('body');
    $($table2).appendTo('body');
  }
  Game.prototype.setColor = function(row, col) {
    //给方块添加类名
    $('.tab1').find('tr').eq(row).children('td').eq(col).addClass('c1');
  };
  Game.prototype.setNextColor = function(row, col) {
    //给预览方块添加类名
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.nextBlock.code[i][j] != 0) {
          $('.tab2').find('tr').eq(i).children('td').eq(j).addClass('c2');
        }
      }
    }
  };
  //清屏功能
  Game.prototype.clear = function() {
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        $('.tab1').find('tr').eq(i).children('td').eq(j).removeClass();
      }
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        $('.tab2').find('tr').eq(i).children('td').eq(j).removeClass();
      }
    }
  };
  Game.prototype.bindEvent = function() {
    //备份
    const self = this;
    $(document).keydown(function(event) {
      if (event.keyCode == 37) {
        // 判断是否能够向左移动
        self.block.checkLeft();
      } else if (event.keyCode == 39) {
        // 判断是否能够向右移动
        self.block.checkRight();
      } else if (event.keyCode == 32) {
        // 按下空格一键到底
        self.block.checkBlockEnd();
      } else if (event.keyCode == 38) {
        //上键旋转
        self.block.checkRot();
      }
    })
  };
  Game.prototype.start = function() {
    let self = this;

    // 渲染时间
    let a = '';
    let ms = 0;
    let s = 0;
    let m = 0;
    this.timer2 = setInterval(() => {
      ms++;
      if (ms == 100) {
        ms = 0;
        s++;
      }
      if (s == 60) {
        s = 0;
        m++;
      }
      a = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
      document.getElementById('time').innerHTML = '用时：' + a;
    }, 10);

    // 帧编号
    this.f = 0;
    this.timer = setInterval(() => {
      self.f++;
      //渲染帧编号f
      // document.getElementById('f').innerHTML = '帧编号：' + self.f;
      // 清屏
      self.clear();
      // 渲染方块
      self.block.render();
      // 渲染预览方块
      self.setNextColor();
      // 渲染地图
      self.map.render(self);

      // 下落
      self.f % this.during == 0 && self.block.checkDown();
    }, 20);
  }
})()