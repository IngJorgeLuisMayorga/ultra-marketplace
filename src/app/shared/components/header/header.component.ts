import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string = 'Marketplace';

  public total$: Observable<number>;
  public count$: Observable<number>;

  constructor() {
    this.total$ = of(0);
    this.count$ = of(0);
  }

  ngOnInit(): void {
  }

}
