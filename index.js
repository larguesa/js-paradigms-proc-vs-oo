//Procedural routine
document.getElementById('proc-btn').onclick = function handler() {
  const value1 = document.getElementById('input-n1').value;
  const value2 = document.getElementById('input-n2').value;
  const n1 = parseInt(value1);
  const n2 = parseInt(value2);
  const sum = n1 + n2;
  document.getElementById('proc-result').textContent = sum;
};

//Object Oriented routine
class InputField {
  constructor(id) {
    this.id = id;
  }
  getNumber() {
    const value = document.getElementById(this.id).value;
    return parseInt(value);
  }
}
class Form {
  static outElement = document.getElementById('oo-result');
  static getSum(n1, n2) {
    return n1 + n2;
  }
  static displaySum(value) {
    Form.outElement.textContent = value;
  }
}

const in1 = new InputField('input-n1');
const in2 = new InputField('input-n2');
document.getElementById('oo-btn').onclick = function handler() {
  const res = Form.getSum(in1.getNumber(), in2.getNumber());
  Form.displaySum(res);
}