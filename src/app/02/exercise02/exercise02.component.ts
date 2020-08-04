import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise02',
  templateUrl: './exercise02.component.html',
  styleUrls: ['./exercise02.component.scss']
})
export class Exercise02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /**
     * Exercise: make an Observable that emits the first 3 clicks as "CLICK",
     * then the next 3 clicks as "click", then completes.
     * Hint: Use "concat" to concatenate two or more Observables
     */
  }

}
