import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrape';
  urls: String[] = [
  ];

  numOfInputs: number[] = Array(10).fill(0).map((x, i) => i + 1);

  formIsValid: boolean = false;

  urlForm = this.fb.group({
    urlInput1: [''],
    urlInput2: [''],
    urlInput3: [''],
    urlInput4: [''],
    urlInput5: [''],
    urlInput6: [''],
    urlInput7: [''],
    urlInput8: [''],
    urlInput9: [''],
    urlInput10: ['']
  });
  
  constructor(private fb: FormBuilder, private http: HttpClient) {

  }

  handleOnSubmit() {
  	// If no inputs have a value 
  	// this.formIsValid = false
  	// else this.formIsValid = true

  	const httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	};

	Object.keys(this.urlForm.controls).forEach(key => {
	  let url = this.urlForm.get(key).value;

	  if (url !== '') {
	  	this.urls.push(this.urlForm.get(key).value);
	  }
	});

	const urls = JSON.stringify({ urls: this.urls });
  	this.http.post('http://localhost:1337/api/urlHandler', urls, httpOptions)
  	.subscribe(
  		results => {
  			console.log(results);
  		},
  		errors => {
  			console.log(errors);
  		})
  }

  handleOnChange(event) {

  }
}
