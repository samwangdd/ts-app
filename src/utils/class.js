/**
 * 伪代码
 */
class CoolGay {
  specialTrick = 'nothing';

  CoolGay(trick) {
    this.specialTrick = trick;
  }

  showOff() {
    console.log('Heres my trick :', this.specialTrick);
  }
}

const Joe = new CoolGay('jumping rope');
Joe.showOff();
