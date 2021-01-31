import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  
  constructor(
    
    private router:Router
  ) {
  
  }

  ngOnInit(): void {
    
  }

  //se toma la pelicula a buscar y se redirecciona al componente resultados 
  searchMovie(event){
    let movie = event.target.value;
    
    this.router.navigate(["/resultados/"+ movie ])
       
  }

}
