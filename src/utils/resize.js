// 响应式调整
export function _resetSize() {
      var size;
      var winW = window.innerWidth;
      if (winW <= 1600 && winW > 1200) {
            size = Math.round(winW / 16);
      } else if (winW <= 1200 && winW > 960) {
            size = 65
      } else if (winW <= 960) {
            size = 90
      } else {
            size = 100;
      }
      document.getElementsByTagName('html')[0].style.fontSize = size + 'px';
}