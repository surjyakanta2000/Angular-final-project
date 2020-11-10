import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import swal from 'sweetalert';
import { from } from 'rxjs';
import {ApiservicesService} from './apiservices.service';
import {ServicesService} from './services.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  regForm:FormGroup;
  loginForm:FormGroup;
  regDetails;
  logDetails;
  logd;
  regFormDetails;
  logFormDetails
  Error;
  errMsg;
  // preloader = document.getElementById('loading');
  title = 'frontend';
  constructor(private builder:FormBuilder,private router:Router,private apiservice:ApiservicesService,private service:ServicesService,private SpinnerService: NgxSpinnerService) { 
    
    this.regForm=this.builder.group(
      {
        fname:[''],
        lname:[''],
        email:[''],
        phone:[''],
        password:['']
      })
      this.loginForm=this.builder.group(
        {
        email:[''],
        password:['']
      })
    
    }
    
 openNav()
{
  document.getElementById('mySidenav').style.width="250px";
}
closeNav()
{
  document.getElementById('mySidenav').style.width="0px";
}
// myFunction()
// {
//   // setTimeout(function(){
//   //   ('.loader_bg').fadeToggle();
//   // },100);
//   document.getElementById('loaderid').style.display="none";
// }
registrationDetails()
{
  
  
  console.log(this.regForm.value);
  this.regDetails=this.regForm.value;
  this.apiservice.regFun(this.regDetails).subscribe(arrow=>{
    this.regFormDetails=arrow;
    console.log(this.regFormDetails);
    this.SpinnerService.hide();
    // swal({
    //   title: "Welcome!!",
    //   text: ""+this.regFormDetails.fname,
    //   icon: "success"
    // });
})
}
loginDetails()
{
  this.SpinnerService.show();
  console.log(this.loginForm.value);
  //console.log(this.logd.innerHTML);
  this.logDetails=this.loginForm.value;
  this.apiservice.loginFun(this.logDetails).subscribe(arrow=>{
  this.logFormDetails=arrow;
  console.log(this.logFormDetails);
  this.SpinnerService.hide();
  swal({
    title: "Welcome!!",
    text: "Login Success!!",
    icon: "success"
  });
},
(lError)=>
{
  this.Error=lError;
  console.log(this.Error.error);
  this.errMsg=this.Error.error;
})
}
}
