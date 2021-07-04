import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed=true;
  is_mobile : boolean = false;
  inner_size : number = 0 ;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {

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
