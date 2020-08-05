import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise06',
  templateUrl: './exercise06.component.html',
  styleUrls: ['./exercise06.component.scss']
})
export class Exercise06Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /**
     * Exercise: When typing to an input element, request to users in JSONPlaceholder servers,
     * filter the user names by the typed text of the input element and display the response in the markup.
     * Like autocomplete.
     * 
     * Hints: 
     *    - Use "@ViewChild" to get the input element
     *    - Use "debounceTime" and "distinctUntilChanged" when listening to the input event
     *    - Only request JSONPlaceholder servers for users once. Cache the result in private variable.
     *    - Use a "Subject" to emit new search results
     *    - Implement interface "IUser" if necessary
     *    - Don't forget to unsubscribe in OnDestroy if necessary
     */
  }

}
