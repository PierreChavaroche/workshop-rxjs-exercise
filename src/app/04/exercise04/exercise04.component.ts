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
     * Exercise: Listen to the query params and get the param "id". In this case the param "id" is a post-id.
     * Request to comments in JSONPlaceholder servers and get all comments of the given post-id.
     * Display the response in the markup

     * Hints: 
     *   - Example request: http://jsonplaceholder.typicode.com/comments?postId=1
     *   - Use Observable "queryParams" from "ActivatedRoute"
     *   - Consider the case that there is no post-id as query param available. Use "iif" from RxJS if necessary.
     */
  }

}
