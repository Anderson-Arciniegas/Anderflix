import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { favoritesMovies } from './config/farorites.reducer';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PopularsComponent } from './components/populars/populars.component';
import { AcclaimedComponent } from './components/acclaimed/acclaimed.component';
import { ResultComponent } from './components/result/result.component';
import { DetailsComponent } from './components/details/details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PopularsComponent,
    AcclaimedComponent,
    ResultComponent,
    DetailsComponent,
    FavoritesComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    StoreModule.forRoot({ movies: favoritesMovies}),
    MatProgressSpinnerModule,
   
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
