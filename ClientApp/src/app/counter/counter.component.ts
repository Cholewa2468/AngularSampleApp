import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount:number = 0;
  public step:number = 5;

  public incrementCounter(stepUp:number) {
    this.currentCount+=stepUp;
  }

  public decrementCounter(stepDown:number) {
    this.currentCount-=stepDown;
  }

  public setStep(newStep:any) {
    this.step = parseInt(newStep.target.value, 10);
  }
}
