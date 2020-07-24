import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//---------------COMPONENTS---------------//
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';

//---------------SERVICES---------------//
import { GithubService } from './services/github.service';
import { WeatherService } from './services/weather.service';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    HeaderComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
  ],
  providers: [GithubService, WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
