import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {QuoteService} from '../services/quote.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  constructor(private quoteService: QuoteService, private route: Router) {}
  childData: string = "";
  ngOnInit() {
    this.quoteService.currentMessage.subscribe(
      message => this.childData = message
    );
  }
  submit(data: string) {
    this.quoteService.updateMessage(data);
    this.route.navigate(['parent']);
  }
}
