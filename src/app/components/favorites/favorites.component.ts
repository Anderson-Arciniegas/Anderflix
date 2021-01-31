import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { add, del} from '../../config/favorites.actions';
import { Movie } from '../../models/movie.model'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  movies$: Observable<any>;
  public movies = []
  public localMovies = []
  public band = true
  public band2 = true
  constructor(
    private store: Store<{movies: Array<Movie>}>) {
    this.store.subscribe( state => {
        console.log(state)
        this.guardarState(state)
      })
      
   }

  ngOnInit(): void {
    this.movies$ = this.store.pipe(select('movies'))
   
    //se toman las peliculas favoritas guardadas en local storage y se agregan al state
    this.localMovies = JSON.parse(localStorage.getItem("movies"));
    if(this.localMovies != null){
    
      if(this.localMovies[0] != null && this.movies.length > 0){
        for(let i = 0; i < this.localMovies.length; i++){
          this.band2 = true
          for(let j = 0; j < this.movies.length; j++){
           
              if(this.localMovies[i].id == this.movies[j].id){
                this.band2 = false
              }
             
          }
          if(this.band2){
            this.addMovie(this.localMovies[i]);
          }
        }
      }else if(this.localMovies[0] != null){
          for(let i = 0; i < this.localMovies.length; i++){
            this.addMovie(this.localMovies[i])
          }
      }
     
    }
   
  }

  //Funcion que agrega una pelicula al state
  addMovie(movie: Movie){

    this.store.dispatch(add({Movie: movie}));
    console.log(this.movies$)
    
  }

  //Funcion que elimina una pelicula del state y del localStorage
  deleteMovie(id: number){
    this.store.dispatch(del({movieId: id}));

    console.log(this.movies$)

      localStorage.removeItem("movies");
      localStorage.setItem("movies",JSON.stringify(this.movies))

    }
  
  //Funcion que procesa el array de peliculas favoritas del state y las agrega al localStorage  
  guardarState(state){
   
    this.movies = state.movies;
    console.log(this.movies);
    
      //se agregan al local Storage las peliculas que esten en el state y aún no esten en localStorage
      this.localMovies = JSON.parse(localStorage.getItem("movies"));
      if(this.localMovies == null || this.localMovies[0] == null){
        this.localMovies = [];
        this.localMovies = this.movies
      }else{
        for(let i = 0; i < this.movies.length; i++){
          this.band2 = true
          for(let j = 0; j< this.localMovies.length; j++){
            if(this.localMovies[j].id == this.movies[i].id){
              this.band2 = false
            }
          
          }
          if(this.band2){
            console.log("hola")
            this.localMovies.push(this.movies[i])
          }
        }
      }
     
      //Se guarda el array peliculas en el Local storage 
      localStorage.setItem("movies",JSON.stringify(this.localMovies))
      console.log(JSON.parse(localStorage.getItem("movies")));

      
  
  }
}
