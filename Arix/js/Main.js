(function() {
  window.Game = function() {
    //初始化
    this.row = 20;
    this.col = 12;
    this.init();
    // 实例方块
    this.block = new Block();
    // 实例地图
    this.map = new Map(this);
    // 启动定时器
    this.start();
  }
  Game.prototype.init = function() {
    const $table = $('<table></table>');
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
    // console.log($table);
    $($table).appendTo('body');
  }
  Game.prototype.setColor = function(row, col, num) {
    //给方块添加类名
    $('tr').eq(row).children('td').eq(col).addClass('c' + num);
  }
  Game.prototype.start = function() {
    let self = this;
    this.timer = setInterval(() => {
      // 渲染方块
      self.block.render();
      // 渲染地图
      self.map.render(self);
    }, 500);
  }
})()