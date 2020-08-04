import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise04',
  templateUrl: './exercise04.component.html',
  styleUrls: ['./exercise04.component.scss']
})
export class Exercise04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /**
     * Exercise: When typing to an input element, request to users in JSONPlaceholder servers,
     * filter the user names by the search value of the input element and display the response in the markup.
     * Like autocomplete.
     * 
     * Hints: 
     *    - Use "debounceTime" when listening to the input event
     *    - Only request JSONPlaceholder servers for users once. Cache the result in private variable.
     *    - Use a "Subject" to emit new search results
     *    - Don't forget to unsubscribe in OnDestroy if necessary
     */
  }

}
