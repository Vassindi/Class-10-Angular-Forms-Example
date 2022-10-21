import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css'],
})
export class BookFormReactiveComponent implements OnInit {

  reactiveForm: FormGroup;
  formHasBeenSubmitted: boolean;

  onFormSubmit() {

    this.formHasBeenSubmitted = true

    setTimeout(() => {
      this.reactiveForm.reset();
      this.formHasBeenSubmitted = false
    }, 5000);
  }

  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genre: new FormControl('mystery', Validators.required)
    });
  }
}
