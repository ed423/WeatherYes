import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  constructor(private weatherService: WeatherService) {

  }

  cityName : string = 'Vancouver';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeather(this.cityName);
  }

  onSubmit() {
    this.getWeather(this.cityName);
    this.cityName = ' ';
  }

  private getWeather(cityName: string) {
    this.weatherService.getData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
}
