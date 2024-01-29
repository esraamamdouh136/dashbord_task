import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiGatewayService } from 'src/app/core/api/catalog-service/api-gateway.service';
import { IDataResponse } from 'src/app/shared/models/app.model';

@Component({
  selector: 'bm-side-bar-filter',
  templateUrl: './side-bar-filter.component.html',
  styleUrls: ['./side-bar-filter.component.scss']
})
export class SideBarFilterComponent implements OnInit {
  @Input() data: IDataResponse[]
  @Output() filterCatalogData = new EventEmitter<IDataResponse[]>();
  filter = { it: false, sales: false, financial: false, business: false };
  
  constructor(private apiGatewayService: ApiGatewayService) { }

  ngOnInit(): void {
  }
  filterChange() {
    if (this.filter.it || this.filter.sales || this.filter.financial || this.filter.business) {
      this.apiGatewayService.filterFlag = true;
      this.filterCatalogData.emit(this.data.filter(x =>
        (x.title.toLocaleLowerCase() === ('IT & Computer').toLocaleLowerCase() && this.filter.it)
        || (x.title.toLocaleLowerCase() === ('Sales & Marketing').toUpperCase() && this.filter.sales)
        || (x.title.toLocaleLowerCase() === ('Financial Services').toLocaleLowerCase() && this.filter.financial)
        || (x.title.toLocaleLowerCase() === ('Finance and Business').toLocaleLowerCase() && this.filter.business)
      ))
    }
    else {
      this.apiGatewayService.filterFlag = false;
      this.filterCatalogData.emit(this.data)
    }
  }
}
