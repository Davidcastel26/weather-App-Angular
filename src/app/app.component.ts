import { Component, OnInit, inject } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/enviromment';
import { WeatherData, Product } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
// export class AppComponent {
  
  http = inject(HttpClient);
  apiData : WeatherData[] = [];
  productsAppCom : Product[]= [];


  ngOnInit(): void {
    this.http.get<Product[]>(environment.productApiURL)
    .subscribe((data) =>{
      this.productsAppCom = data;
    })
  }
  // ng add @nguniversal/express-engine
  // constructor(private weatherService: WeatherService){

  // }
  
  // ngOnInit(): void {
  //   // this.weatherService.getWeatherData()
  //   this.http.get<WeatherData[]>(environment.weatherApiBaseUrl)
  //   .subscribe((data) => {
  //     this.apiData = data;
  //   })
  // }
}
