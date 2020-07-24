import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

// ---------------MODELS--------------- //
import { Weather } from '../../models/weather.model';

// ---------------SERVICES--------------- //
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  // ---------------CONSTRUCTOR--------------- //
  constructor(private weatherService: WeatherService) {}
  // ---------------VARIABLES--------------- //
  math: Math;
  cities = [];
  city: string = '';
  countryCode: string = '';

  // ---------------FUNCTIONS--------------- //

  ngOnInit(): void {
    this.weatherService.getWeather('Caracas', 've').subscribe((city) => {
      city.main.temp = Math.round(city.main.temp);
      city.main.temp_min = Math.round(city.main.temp_min);
      city.main.temp_max = Math.round(city.main.temp_max);
      this.cities.push(city);
      console.log(this.cities);
    });
    this.weatherService.getWeather('Santiago', 'cl').subscribe((city) => {
      city.main.temp = Math.round(city.main.temp);
      city.main.temp_min = Math.round(city.main.temp_min);
      city.main.temp_max = Math.round(city.main.temp_max);
      this.cities.push(city);
      console.log(this.cities);
    });
    this.weatherService.getWeather('London', 'uk').subscribe((city) => {
      city.main.temp = Math.round(city.main.temp);
      city.main.temp_min = Math.round(city.main.temp_min);
      city.main.temp_max = Math.round(city.main.temp_max);
      this.cities.push(city);
      console.log(this.cities);
    });
  }

  customOptions: OwlOptions = {
    loop: false,
    margin: 20,
    autoplay: true,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    mouseDrag: true,
    touchDrag: false,
    navSpeed: 300,
    navText: [
      '<i class="fas fa-caret-left leftArrow"></i>',
      '<i class="fas fa-caret-right rightArrow"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: true,
  };

  addCity() {
    this.weatherService.getWeather(this.city, this.countryCode).subscribe(
      (city) => {
        city.main.temp = Math.round(city.main.temp);
        city.main.temp_min = Math.round(city.main.temp_min);
        city.main.temp_max = Math.round(city.main.temp_max);
        this.cities.push(city);
        console.log(this.cities);
      },
      (error) => {
        console.log('no encontrado');
      }
    );
  }
}
