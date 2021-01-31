import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ConfigService]
})
export class LoginComponent implements OnInit {
  public movies: [];
  public mainMovie: {};
  public error: string;

  constructor(
    private _configService: ConfigService ,
  ) {
      
   }

  ngOnInit() {
    //peticion a la api por medio del archivo de servios para obtener las peliculas trending
    this._configService.getMovies().subscribe(
      response =>{
       
        if(response.results){
          this.movies = response.results;
          //se toma la primera pelicula trending para ser usada como pelicula principal
          this.mainMovie = response.results[0];

        }
      
      },
      error =>{
        console.log(<any>error);
      }
  )
 
  }

}

  
