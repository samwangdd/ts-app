/**
 * 防抖
 * @param {function} fn
 */
function deBounce(fn, delay) {
  let timeOut = null;
  console.log('deBounce :', this);
  return function() {
    clearTimeout(timeOut);
    console.log('return :', this);
    timeOut = setTimeout(() => {
      console.log('setTimeout :', this);
      console.log('arguments :', arguments);
      fn.apply(this, arguments);
    }, delay);
  };
}

function sayHi() {
  console.log('sayHi :', this);
  console.log('防抖成功！');
}

window.addEventListener('scroll', deBounce(sayHi, 2000));
