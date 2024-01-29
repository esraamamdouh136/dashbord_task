import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CATALOGS, IDataResponse } from 'src/app/shared/models/app.model';

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {
  filterFlag: boolean = false
  constructor() { }

  getCatalogs(): Observable<IDataResponse[]> {
    return of(CATALOGS);
  }
}
