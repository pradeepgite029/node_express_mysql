import { Component } from '@angular/core';
import {QuoteService} from '../services/quote.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parent',
  imports: [FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  constructor(private quoteService: QuoteService, private route: Router) {}
  parentData: string = "";
  ngOnInit() {
    this.quoteService.currentMessage.subscribe(
      message => this.parentData = message
    );
  }
  submit(data: string) {
    this.quoteService.updateMessage(data);
    this.route.navigate(['child']);
  }
}
