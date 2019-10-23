import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DataApiService } from '../servicios/data-api.service';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColoresComponent implements OnInit {
  asyncColors: Observable<string[]>;

  colors: any;
  msg = "";
  page: any;
  perPage: any;
  total: any;
  title = "Colores";
  config: any;
  loading: boolean;
  status: boolean;
  constructor(public dataApiService: DataApiService) {
  }

  ngOnInit() {
    this.getListColors(1);
  }

  getListColors(page: number) {
    this.loading = true;
    this.dataApiService
      .getAllColors().subscribe(res => {
        this.colors = res['data'];
      })
  }



  // getListColors() {
  //   this.dataApiService
  //     .getAllColors().subscribe(res => {
  //       this.colors = res['data'];
  //       this.perPage = res['per_page'];
  //       this.page = res['page'];
  //       this.total = res['total']
  //       console.log('pages:', this.page);
  //       console.log('per page:', this.perPage);
  //       console.log('total', this.total);
  //     })
  // }


  /**
   * Copy clipboard
   */
  copyColor(val: string) {
    let selectionBox = document.createElement('textarea');
    selectionBox.style.opacity = '0';
    selectionBox.style.position = 'fixed';
    selectionBox.style.top = '0';
    selectionBox.style.left = '0';
    selectionBox.value = val;
    document.body.appendChild(selectionBox);
    selectionBox.focus();
    selectionBox.select();
    document.execCommand('copy');
    document.body.removeChild(selectionBox);
    this.msg = "Copy!";
  }
  clickEvent() {
    this.status = !this.status;
  }

}
