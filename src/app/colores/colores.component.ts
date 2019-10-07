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

  /**
   * Copy clipboard
   */
  public logError(error: Error):void {
    console.group('copy clipboard error');
    console.error(error);
    console.groupEnd();
  }
  
  public logSuccess( value: string ) : void {
    console.group( "copy clipboard Success" );
    console.log( value );
    console.groupEnd();
  }

}
