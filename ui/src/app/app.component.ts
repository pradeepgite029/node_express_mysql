import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './common.service';
import { UpperCasePipe } from '@angular/common';
import { switchMap } from 'rxjs';
import { HighlightDirective } from './highlight.directive';
import { SquarePipe } from './square.pipe';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperCasePipe, HighlightDirective, SquarePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui';
  load = false;
  first_name: any;
  data: any;
  constructor(private commonService: CommonService) {}
  ngOnInit() {
    this.commonService
      .getusers()
      .subscribe((response: any) => {
        this.data = response.data;
      });
  }
}
