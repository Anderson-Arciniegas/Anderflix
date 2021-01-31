import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';

@Component({
  selector: 'app-acclaimed',
  templateUrl: './acclaimed.component.html',
  styleUrls: ['./acclaimed.component.scss'],
  providers: [ConfigService]
})
export class AcclaimedComponent implements OnInit {
  public movies = [];

  constructor(
    private _configService: ConfigService 
  ) { }

  ngOnInit(): void {
    //Se usa el configService para hacer la petición de las peliculas mas aclamadas
    this._configService.getAclaimedMovies().subscribe(
      response =>{
        console.log(response);
      
        this.movies = response.results;
        
        this.movies.splice(4,16);
        console.log(this.movies)
      },
      error =>{
        console.log(<any>error);
      }
  )
  }

}
