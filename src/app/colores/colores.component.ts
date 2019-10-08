import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../servicios/data-api.service';
@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss']
})
export class ColoresComponent implements OnInit {

  colors : any;
  msg = "";
  page: any;
  //animations
  status: boolean = false;

  constructor(public dataApiService: DataApiService) { }

  ngOnInit() {
    this.getListColors();
  }

  getListColors(){
    this.dataApiService
    .getAllColors().subscribe(res =>{
      this.colors = res['data'];
      this.page = res['page'];
      console.log('pages:', this.page);
    })
  }


  

  /**
   * Copy clipboard
   */
  copyColor(val: string){
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
  clickEvent(){
    this.status = !this.status;
  }

}
