// 防抖
export function myDebounce(fun, delay = 500) {
      let timer;
      return function () {
            let ctx = this
            let args = arguments
            if (timer) {
                  clearTimeout(timer)
            }
            timer = setTimeout(function () {
                  timer = null
                  fun.apply(ctx, args)
            }, delay)
      }
}