import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ColoresComponent } from './colores/colores.component';
import { AppRoutingModule } from './app-routing.module';
/**
 * Servicio
 */
import { DataApiService } from './servicios/data-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ColoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
