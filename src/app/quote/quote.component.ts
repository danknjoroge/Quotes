import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Hello', 'World','John'),
    new Quote(1, 'Hello', 'World','John'),
    new Quote(1, 'Hello', 'World','John')

  ];
  toggleDetails(index:number){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }


  constructor() { }
  name ="Welcome to Quote Website";

  ngOnInit(): void {
  }

}
