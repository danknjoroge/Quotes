import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who is not trying', 'Tony Robins','John Ngugi', new Date(2022,4,21)),
    new Quote(1, 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle', 'Christian Larson','Jane Njoki', new Date(2021,4,11)),
    new Quote(1, 'Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are', 'John Wooden','Mary Waithera', new Date(2019,0,18, 21,14)),

  ];
  toggleDetails(index:number){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete: any, index: number){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }


  constructor() { }
  name ="Welcome to Quote Website";

  ngOnInit(): void {
  }

}
