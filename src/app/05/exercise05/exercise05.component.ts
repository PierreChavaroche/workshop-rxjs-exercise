import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise05',
  templateUrl: './exercise05.component.html',
  styleUrls: ['./exercise05.component.scss']
})
export class Exercise05Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /**
     * Exercise: We want to give our users the possibility to type in a user ID (input) and to select the 
     * type of the resource they want to display (select). But, what is important is that the request is 
     * supposed to be issued only after both fields are filled in. After that, the app should automatically 
     * re-render whenever any of the fields is changed.
     * 
     * Hints: 
     *    - Use "@ViewChild" to get the input and select element
     *    - Use "debounceTime" and "distinctUntilChanged" when listening to the input event
     *    - `https://jsonplaceholder.typicode.com/${resource}?userId=${id}`
     */
  }

}
