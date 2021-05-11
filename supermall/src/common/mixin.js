// 混入  两个组件中有重复代码，就可以使用混入
import { debounce } from 'common/utils';

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted() {
    // 监听item中图片加载完成
    this.refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      this.refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener);
  }
}