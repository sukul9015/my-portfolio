import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  is_mobile : boolean = false;
  inner_size : number = 0 ;

  ngOnInit(): void {
    
    window.scrollTo(0, 0);

    
            //for checking innerwidth and screen size
            this.inner_size = window.innerWidth;
            if(this.inner_size > 600){
              this.is_mobile = false;
            }
            else{
              this.is_mobile = true;
            }
            // ./ ..screen size search ends

  }

}
