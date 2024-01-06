import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  

  constructor() 
  {
      

  }
  add(ino1:number,ino2:number)
  {
    
     return (ino1+ino2);
  }
  sub(ino1:number,ino2:number)
  {
    
     return (ino1-ino2);
  }

}
