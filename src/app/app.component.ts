import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrape';
  urls: String[] = [
  	'google.com',
  	'google.com',
  	'google.com',
  	'google.com',
  	'google.com',
  	'google.com',
  	'google.com',
  	'google.com',
  	'google.com',
  	'google.com'
  ];
// validation check never implemented
  formIsValid: boolean = false;

  constructor() {

  }
// The submit doesnt call anything?
  handleOnSubmit() {
  	// If no inputs have a value 
  	// this.formIsValid = false
  	// else this.formIsValid = true

  	if (this.formIsValid) {

  	}
  }

  handleOnChange(event) {

  }
}
