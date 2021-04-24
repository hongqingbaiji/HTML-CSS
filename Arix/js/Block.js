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
  }
})()