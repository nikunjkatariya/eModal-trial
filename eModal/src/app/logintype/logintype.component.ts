import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logintype',
  templateUrl: './logintype.component.html',
  styleUrls: ['./logintype.component.css']
})
export class LogintypeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  passing(path:string)
  {
    if(path=="terminal"){}
     // this.ds.logintype="terminal";
    if(path=="user"){}
      //this.ds.logintype="user";
    this.router.navigate(['/','login']);
  }
}
