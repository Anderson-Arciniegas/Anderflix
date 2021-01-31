import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../config/config.service';


@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrls: ['./populars.component.scss'],
  providers: [ConfigService]
})
export class PopularsComponent implements OnInit {
  //Se usa la herramienta Input para obtener las peliculas trending del componente padre
  @Input() popularsMovies = [];
  @Input() band: boolean; 
  public popularsTv = [];
  public aux: number = 0;
  

  constructor(
    private _configService: ConfigService ,
  ) { }

   ngOnInit(): void{

    if(this.band ){
      //Peticion para obtener las series populares
      this._configService.getSeries().subscribe(
        response =>{
          console.log(response);
         
          if(response.results){
            this.popularsTv= response.results;
            console.log(this.popularsMovies)
          }
          
        },
        error =>{
          console.log(<any>error);
        }
    )
    }else{
      console.log(this.popularsMovies)
    }

    
  }
  //asignacion de clases para el funcionamiento del carrusel de peliculas
  classAsing(i){
    if(i > 3){
      return  ["image","hide"]
    }else{
      return "image"
    }
  }
  //asignacion de clases para el funcionamiento del carrusel de series
  classAsing2(i){
    if(i > 3){
      return  ["serieImage","hide"]
    }else{
      return "serieImage"
    }
  }

  //funcion encargada de cambiar las clases de las distintas tarjetas del carrusel para que funcione
 carousel(move, clase){
  
    let img1 = document.getElementsByClassName(clase)
     
        if(move == "right"){

          if(this.aux < 10 - 4 ){

            img1[this.aux].classList.toggle("hide");
     
            img1[this.aux + 4].classList.remove("hide");
            this.aux += 1
          }

        }else{
          if(this.aux > 0){
            img1[this.aux + 3].classList.toggle("hide");
     
            img1[this.aux - 1].classList.remove("hide");
            this.aux -= 1
          }
        }   
  }


}
