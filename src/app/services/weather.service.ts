import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // ---------------CONSTRUCTOR--------------- //
  constructor(private http: HttpClient) {}

  // ---------------VARIABLES--------------- //
  apikey = '4c1e4a6c2de9676c36ce8bd51599b294';
  
  // ---------------FUNCTIONS--------------- //

  getWeather(city,countryCode) {
    return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${this.apikey}&units=metric`);
  }
  
}
