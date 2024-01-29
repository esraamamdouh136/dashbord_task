import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiGatewayService } from 'src/app/core/api/catalog-service/api-gateway.service';
import { IDataResponse } from 'src/app/shared/models/app.model';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss'],
})
export class CatalogsComponent implements OnInit {
  catalogData: IDataResponse[]
  filterTerm: string;
  subscribe: Subscription
  constructor(private apiGatewayService: ApiGatewayService) { }

  ngOnInit(): void {
    this.initCatalog()
  }
  initCatalog() {
    this.subscribe = this.apiGatewayService.getCatalogs().subscribe(res => {
      this.catalogData = res
    })
  }
  filterData(event: IDataResponse[]) {
    this.apiGatewayService.filterFlag ? this.catalogData = event : this.initCatalog()
  }
  ngOnDestory() {
    this.subscribe.unsubscribe()
  }
}

