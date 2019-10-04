import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../servicios/data-api.service';
import { ColorInterface } from '../models/color-interface';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss']
})
export class ColoresComponent implements OnInit {
  Colores: any = [];
  constructor(public dataApiService: DataApiService) { }
  private color: ColorInterface

  ngOnInit() {
    this.getListColors();
  }

  getListColors(){
    this.dataApiService
    .getAllColors()
    .subscribe((color: ColorInterface) => (this.color = color));
  }


}
