import { Injectable } from '@angular/core';
import { from, Observable,throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { RegistrationData,LoginData } from './dataservices.service';
import { catchError } from 'rxjs/operators';
import { ServicesService } from './services.service'
@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  token;
  api_reg="https://backend-database-collection.herokuapp.com/api/user/register";
  api_log="https://backend-database-collection.herokuapp.com/api/user/login";
  constructor(private link:HttpClient,private service:ServicesService) { 
    this.token=this.service.getToken();
    console.log(this.token)
  }
  regFun(regDetails):Observable<RegistrationData[]>
  {
    return this.link.post<RegistrationData[]>(this.api_reg,regDetails);
  }
  loginFun(loginDetails):Observable<LoginData[]>
  {
    return this.link.post<LoginData[]>(this.api_log,loginDetails).pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse)
  {
    return throwError(error);
    
  }
}
