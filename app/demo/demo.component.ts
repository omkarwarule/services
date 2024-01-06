import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers:[ArithmeticService]
})
export class DemoComponent 
{
    public sum:number;
    public diff:number;

    constructor(private use:ArithmeticService)
    {
       this.sum=this.use.add(10,5);
       this.diff=this.use.sub(10,5);
      
    }

}
