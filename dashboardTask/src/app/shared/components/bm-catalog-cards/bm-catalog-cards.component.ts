import { Component, Input, OnInit } from '@angular/core';
import { IDataResponse } from '../../models/app.model';

@Component({
  selector: 'bm-catalog-cards',
  templateUrl: './bm-catalog-cards.component.html',
  styleUrls: ['./bm-catalog-cards.component.scss']
})
export class BmCatalogCardsComponent implements OnInit {
  @Input() data!: IDataResponse[];
  @Input() filterTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
