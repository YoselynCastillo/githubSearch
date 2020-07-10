import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//---------------COMPONENTS---------------//
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';

//---------------SERVICES---------------//
import { GithubService } from './services/github.service'


@NgModule({
  declarations: [AppComponent, SearchComponent, UserComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [GithubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
