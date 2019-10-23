import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../servicios/data-api.service';
@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss']
})
export class ColoresComponent implements OnInit {
  colors: any;
  msg = "";
  page: any;
  perPage: any;
  total: any;
  title = "Colores";
  config: any;
  //animations
  status: boolean = false;

  constructor(public dataApiService: DataApiService) {
    this.config = {
      itemsPerPage: this.perPage,
      currentPage: this.page,
      totalItems: this.total
    };
  }

  ngOnInit() {
    this.getListColors();
  }

  clickBefore() {
    this.getListColors();
  }
  clickAfter() {
    this.getListColors2();
  }

  getListColors() {
    this.dataApiService
      .getAllColors().subscribe(res => {
        this.colors = res['data'];
        // this.perPage = res['per_page'];
        // this.page = res['page'];
        // this.total = res['total']
        // console.log('pages:', this.page);
        // console.log('per page:', this.perPage);
        // console.log('total', this.total);
      })
  }

  getListColors2() {
    this.dataApiService
      .getPage().subscribe(res => {
        this.colors = res['data'];
        // this.perPage = res['per_page'];
        // this.page = res['page'];
        // this.total = res['total']
        // console.log('pages:', this.page);
        // console.log('per page:', this.perPage);
        // console.log('total', this.total);
      })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

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
