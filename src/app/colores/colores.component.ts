import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../servicios/data-api.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss']
})
export class ColoresComponent implements OnInit {
  colors : any;
  constructor(public dataApiService: DataApiService) { }

  ngOnInit() {
    this.getListColors();
  }
  getListColors(){
    this.dataApiService
    .getAllColors().subscribe(res =>{
      this.colors = res['data'];
    })
  }


}
