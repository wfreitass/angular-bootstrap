import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';
import {
  NgbdSortableHeader,
  SortEvent,
} from '../directives/sortable.directive';
import { CountryService } from '../service/country.service';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grid',

  templateUrl: './grid.component.html',
  providers: [CountryService, DecimalPipe],
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  countries$: Observable<Country[]>;
  total$: Observable<number>;
  @Input() texto: string = 'me inicializa cara';
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
    console.log(this.texto);
  }

  // onSort({ column, direction }: SortEvent) {
  onSort({ column, direction }: any) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  ngAfterViewInit() {
    // console.log('afterViewInit working');
    // let populationHeader = this.headers.find(
    //   (h) => h.sortable === 'population'
    // );
    // populationHeader.sort.emit({ column: 'population', direction: 'asc' });
    // populationHeader.direction = 'asc';
  }
}
