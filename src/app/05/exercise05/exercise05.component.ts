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
     * Exercise: When typing to an input element, request to users in JSONPlaceholder servers,
     * filter the user names by the typed text of the input element and display the response in the markup.
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
