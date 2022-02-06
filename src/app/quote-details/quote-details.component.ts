import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  // [x: string]: any;

  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }
  countLike() {
    
  }
  countDislike(){

  }
  constructor() { }

  ngOnInit(): void {
  }

}
