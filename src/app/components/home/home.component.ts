import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  answer1 = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.answer1.hasError('required') ? 'You must enter a value' :
        '';
  }
 
  constructor() { }

  ngOnInit() {
  }

  showAnswer() {
    console.log(this.answer);
    if(this.answer === 'Philip') {
      this.showSpinner = true;

      setTimeout(() => {
        this.answerDisplay = this.answer + ': the answer is right.';
        this.showSpinner = false;
      }, 2000);
    } else if ( this.answer === '' ) {
      this.answerDisplay = 'Can not have space!';
      //this.answer.value('');
      setTimeout(() => {
        this.answerDisplay = '';
        this.showSpinner = false;
      }, 2000);
    } else {
      this.answerDisplay = 'Wrong answer, try again, hint: Philip';
      //this.answer.value('');
      setTimeout(() => {
        this.answerDisplay = '';
        this.showSpinner = false;
      }, 2000);
    }
  }
}
