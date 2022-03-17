import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initiallogin',
  templateUrl: './initiallogin.component.html',
  styleUrls: ['./initiallogin.component.css']
})
export class InitialloginComponent implements OnInit {

  constructor(private router:Router, private renderer:Renderer2) { }

  ngOnInit(): void {
    //if(this.ds.logintype==""){
      this.router.navigate(['/','initial-login']);
      let script = this.renderer.createElement('script');
      script.defer = true;
      script.async = true;
      script.src="https://www.google.com/recaptcha/api.js";
      this.renderer.appendChild(document.body,script);
    //}
  }
  usertype:any;
  logopath="../assets/images/logos/logo.png";

  resolved(token:any){
    console.log(token);
  }  
}
