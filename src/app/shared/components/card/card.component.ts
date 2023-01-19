import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  id!: number;

  @Input()
  img!: string;

  @Input()
  name!: string;

  @Input()
  price!: number;

  @Input()
  available!: boolean;

  @Output()
  onClick = new EventEmitter();

  public cart_ok_src = `${environment.assets}assets/icons/ecommerce.png`;

  public loading = true;

  constructor() { }

  ngOnInit(): void {
    this.loading = false;
  }

  clickHandler(){
    if(this.available) this.onClick.emit()
  }


  get isLoading(): boolean{
    return this.loading
  }

  get isAvailable(): boolean{
    return !this.loading
  }

  get isNotAvailable(): boolean{
    return !this.loading && !this.available
  }

  get imgMock(): string{
    return `https://picsum.photos/seed/${this.id}/400/400`;
  }

}
