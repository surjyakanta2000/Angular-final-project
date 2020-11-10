import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  setData(token:string)
  {
    window.localStorage.setItem('token',token);
  }
  getToken()
  {
    return window.localStorage.getItem('token');
  }
  getDestroy()
  {
    return window.localStorage.clear();
  }
}
