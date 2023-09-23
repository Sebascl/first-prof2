import { Component } from '@angular/core';
import { Parser } from 'expr-eval';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  
  calNumber: string = '';
  calTotal: any = 0;
  parser = new Parser();

  onClickCalculate(value: string) {
    if (
      this.calNumber === 'Error' ||
      this.calNumber === 'NaN' ||
      this.calNumber === 'Infinity'
    ) {
      this.calNumber = '';
      this.calNumber += value;
    } else {
      this.calNumber += value;
    }
  }
  onClickClear() {
    this.calNumber = '';
    this.calTotal = 0;
  }

  onClickEqual() {
    try {
      this.calNumber = String(this.parser.evaluate(this.calNumber));
    } catch (e) {
      this.calNumber = 'Error';
    }
  }
}
