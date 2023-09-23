import { Component } from '@angular/core';
import { SemaphoreService } from './semaphore.service';


@Component({
  selector: 'app-semaphore',
  templateUrl: './semaphore.component.html',
  styleUrls: ['./semaphore.component.scss']
})
export class SemaphoreComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  checkbox1 = false;
  checkbox2 = false;
  inputValue = 0;

  constructor(private semaphoreService:SemaphoreService) {}
  onClickDetenerSemaforos(){
    this.semaphoreService.onClickDetenerSemaforos();
  }
  onClickIniciarSemaforos(){
    this.semaphoreService.onClickIniciarSemaforos();
  }
  onClickSecondSemaforo(){
    this.semaphoreService.onClickSecondSemaforo();
  }
  onClickThirdSemaforo(){
    this.semaphoreService.onClickThirdSemaforo();
  }

  
  onClickChange() {
    if (this.checkbox1 === true && this.checkbox2 === true) {
      this.semaphoreService.checkBox1True(this.inputValue);
      this.semaphoreService.checkBox2True(this.inputValue);
    } else if (this.checkbox1 === true) {
      this.semaphoreService.checkBox1True(this.inputValue);
    } else if (this.checkbox2 === true) {
      this.semaphoreService.checkBox2True(this.inputValue);
    }
  }
}
