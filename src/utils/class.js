/**
 * 伪代码
 */
class CoolGay {
  specialTrick = 'nothing';
  count = 0;

  CoolGay(trick) {
    this.specialTrick = trick;
  }

  handleClick = () => {
    this.count++;
  };

  showOff() {
    console.log('Heres my trick :', this.specialTrick);
  }
}

const Joe = new CoolGay('jumping rope');
Joe.showOff();
Joe.handleClick();
console.log('Joe.count :>> ', Joe.count);

// 不适合使用箭头函数的场景
const Message = () => {
  console.log('this.count :>> ', this.count);
};

const message = new Message();
