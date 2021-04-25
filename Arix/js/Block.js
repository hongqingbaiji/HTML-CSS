(function() {
  window.Block = function() {
    // 得到随机的方块类型
    // 1.先罗列所有的方块类型
    const allType = ['S', 'Z', 'J', 'L', 'I', 'O', 'T'];
    // 2.从所有的类型中随机得到一种
    this.type = allType[parseInt(Math.random() * allType.length)];
    // 3.得到随机的类型，再获取当前类型的所有形状总数量，因为不同的类型形状数量不同
    this.allDir = fangkuai[this.type].length;
    // 4.通过当前的allDir的length随机得到不同的数字
    this.dir = parseInt(Math.random() * this.allDir);
    // 5.得到随机的方块
    this.code = fangkuai[this.type][this.dir]
      // 初始化行和列的位置，要居中
    this.row = 0;
    this.col = 4;

  }
  Block.prototype.render = function() {
    // 渲染4*4的表格方块
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        // 如果4*4的矩阵中有某一项不是0，就说明有颜色，渲染这个颜色
        if (this.code[i][j] != 0) {
          game.setColor(i + this.row, j + this.col, this.code[i][j])
        }
      }
    }
  };
  Block.prototype.check = function(row, col) {
    // 能力判断方法，判断的是对应位置的方块和底图是否有都不为0的情况，
    // 有就返回true，否则返回false;false代表没有重合
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.code[i][j] != 0 && game.map.mapCode[i + row][j + col] != 0) {
          return false;
        }
      }
    }
    return true;
  };
  //方块下落，需要先判断当前的方块是否能下落
  Block.prototype.checkDown = function() {
    //判断当前地图的位置和自己方块的位置是否有重合；this.row+1指的是预判断
    // 预判断就是在下一次方块将要到达的位置是否有对应的地图不为0
    if (this.check(this.row + 1, this.col)) {
      this.row++;
    } else {
      // 此时就是下落到底的状态，需要渲染新的方块
      game.block = game.nextBlock;
      game.nextBlock = new Block();
      //方块到底了，然后要渲染到底图的code中
      this.renderMap();
      //判断是否可以消行
      game.map.checkRemove();
      //判断游戏是否结束
      this.checkOver();
    }
  };
  // 判断是否能够向左移动，如果可以则移动
  Block.prototype.checkLeft = function() {
    // 判断是否可以向左
    if (this.check(this.row, this.col - 1)) {
      this.col--;
    }
  };
  // 判断是否能够向右移动，如果可以则移动
  Block.prototype.checkRight = function() {
    // 判断是否可以向右
    if (this.check(this.row, this.col + 1)) {
      this.col++;
    }
  };
  //按住空格一键到底
  Block.prototype.checkBlockEnd = function() {
    //使用while循环，如果当前的check返回的是true，则代表可以下移，就让row++
    while (this.check(this.row + 1, this.col)) {
      this.row++;
    }
  };
  // 方块的旋转
  Block.prototype.checkRot = function() {
    // 备份旧的形状方向
    const oldDir = this.dir;

    // 改变新的方向
    this.dir++;
    // 如果当前dir大于了最后一种方向，回到第一种方向
    if (this.dir > this.allDir - 1) {
      this.dir = 0;
    }
    // 改变方向之后渲染新的方块方向
    this.code = fangkuai[this.type][this.dir];
    // 渲染之后的新方块需要判断是否有能力进行渲染
    if (!this.check(this.row, this.col)) {
      //进入了这里就说明重合了，违规了 打回原形
      this.dir = oldDir;
      // 再次渲染方块
      this.code = fangkuai[this.type][this.dir];
    }
  };

  // 将已经到底的方块渲染到地图中
  Block.prototype.renderMap = function() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        // 将现在已有的方块渲染到Map类的 mapCode上
        if (this.code[i][j] != 0) {
          // 改变地图的mapCode数据
          game.map.mapCode[this.row + i][this.col + j] = this.code[i][j];
        }
      }
    }
  };
  // 游戏结束判断
  Block.prototype.checkOver = function() {
    for (let i = 0; i < game.col; i++) {
      if (game.map.mapCode[0][i] != 0) {
        clearInterval(game.timer);
        clearInterval(game.timer2);
        alert('游戏结束，您的得分为：' + game.score);

      }
    }
  };

})()