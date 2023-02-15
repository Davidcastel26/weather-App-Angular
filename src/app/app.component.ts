import { Component, OnInit, inject } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/enviromment';
import { WeatherData } from './models/data.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
// export class AppComponent {
  
  http = inject(HttpClient);
  apiData : WeatherData[] = [];
  // constructor(private weatherService: WeatherService){

  // }
  
  ngOnInit(): void {
    // this.weatherService.getWeatherData()
    this.http.get<WeatherData[]>(environment.weatherApiBaseUrl)
    .subscribe((data) => {
      this.apiData = data;
    })
  }
}
