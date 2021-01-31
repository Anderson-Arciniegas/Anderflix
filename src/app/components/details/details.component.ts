import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import {  ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { add, del} from '../../config/favorites.actions';
import { Movie } from '../../models/movie.model'
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

 
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ConfigService]
})
export class DetailsComponent implements OnInit {
  public movie = {}
  public newMovie = {}
  public listMovies = []
  public band = true;
  movies$: Observable<any>

  constructor(

    //Se declaran los metodos privados
    private _route: ActivatedRoute,
    private _configService: ConfigService,
    private store: Store<{movies: Array<Movie>}>,
    private router:Router,
    private _location: Location

  ) {
  
    //muestra el state cada vez que cambia
    this.store.subscribe( state => {
      console.log(state)
    })
   }

  ngOnInit(): void {
    //toma la id de la url para usarla en la peticion 
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getDetails(id);
    });

    this.movies$ = this.store.pipe(select('movies'))
    console.log(this.movies$)

  }

  //funcion que retrocede a la pagina anterior 
  goBack(){
    this._location.back();
  }

  //se crea una variable model Movie para ser insertada en el state 
  datesMovie(movie){
    let newMovie: Movie = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date
    }
    
    this.addMovie(newMovie);
  }

  //Añadir pelicula favorita al state 
  addMovie(movie: Movie){

    this.listMovies = JSON.parse(localStorage.getItem("movies"));

    if(this.listMovies != null && this.listMovies[0] != null){
      for(let i = 0; i < this.listMovies.length; i++){
        if(movie.id == this.listMovies[i].id){
          this.band = false
        }
      }
    }
    
    if(this.band){
      this.store.dispatch(add({Movie: movie}));
    }
 
    this.router.navigate(["/favoritas" ])
  }
  
  //Peticion a la api para obetener los detalles de una película mediante su id 
  getDetails(id){

    this._configService.getDetails(id).subscribe(
      response =>{
        console.log(response);
       
        this.movie = response;
        
        console.log(this.movie);
      },
      error =>{
        console.log(<any>error);
      }
    )
  }
}
