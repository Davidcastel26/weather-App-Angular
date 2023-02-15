import { Component, Input } from '@angular/core';
import { DataHere, WeatherData } from '../../models/data.model';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {

  @Input() dataWeather : WeatherData = {
    temp:  0,
    humidity: 0,
    min_temp:  0,
    max_temp:  0,
    wind_speed: 0,
    sunrise:0,
    sunset:0,
  };

  @Input() hereData: DataHere ={
    images: ['../assets/cold.png', ],
    description: ['min']
  };

}
