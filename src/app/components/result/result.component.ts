import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [ConfigService]
})
export class ResultComponent implements OnInit {
  public results = []
  public genres = []
  public finalResults = []
  //bandera para que aparezca el spinner de carga
  public band = false;
  constructor(
    private _route: ActivatedRoute,
    private _configService: ConfigService,
  ) { 

  }

  ngOnInit(): void {
    //se obtiene la palabra buscada por medio de la url
    this._route.params.subscribe(params =>{
      let movie = params.movie;

      this.search(movie);
    });
      //se obtiene la lista total de generos de pelicula
      this._configService.getGenres().subscribe(
        response =>{
         
          this.genres  = response.genres;
          console.log(this.genres);
          this.replaceGenres()
        },
        error =>{
          console.log(<any>error);
        }
    )
   

  }

  //funcion que se encarga de llamar al service para que haga la peticion de las peliculas que coincidan con la busqueda
  search(movie){

    this._configService.searchMovie(movie).subscribe(
      response =>{
        console.log(response);
       
        if(response.results){
          this.results = response.results;
          if(this.genres != []){
            this.replaceGenres()
          }
        }
        console.log(this.results);
      },
      error =>{
        console.log(<any>error);
      }
  )
    
  }

  //funcion que reemplaza en arreglo de generos ya que en su forma original es de tipo enteros 
  replaceGenres(){

    for(let i = 0; i < this.results.length; i++){

      for(let j = 0; j < this.results[i].genre_ids.length; j++){

        for(let k = 0; k < this.genres.length; k++){

          if(this.results[i].genre_ids[j] == this.genres[k].id){
            this.results[i].genre_ids[j] = this.genres[k].name;
          }

        }
       
      }
    }
    this.finalResults = this.results;
    this.band =true;
    console.log(this.results)
  }
}
