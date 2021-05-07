// 公共方法
// 防抖动，解决频繁调用this.$refs.scroll.refresh() 问题
export function debounce(func, delay) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay)
  }
}