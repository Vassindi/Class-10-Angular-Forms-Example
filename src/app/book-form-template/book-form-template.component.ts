import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css']
})
export class BookFormTemplateComponent implements OnInit {

  formHasBeenSubmitted = false;
  bookDetails = {
    title: "",
    author: "",
    genre: "",
  };

  onFormSubmit(formObj: NgForm) {
    this.formHasBeenSubmitted = true;

    this.bookDetails.title = formObj.value.title;
    this.bookDetails.author = formObj.value.author;
    this.bookDetails.genre = formObj.value.genre;

    formObj.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
