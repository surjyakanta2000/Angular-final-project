import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvapp',
  templateUrl: './tvapp.component.html',
  styleUrls: ['./tvapp.component.css']
})
export class TvappComponent implements OnInit {

  public MobileArray=[
    {img:"../../assets/hometheater2.jpeg",price:"9,900/-",itemid:"5.1,single chanel 60w woffer",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/hometheater.png",price:"12,900/-",itemid:"60w sound bar",rating:"warning",rating5:"",rating4:""},
    {img:"../../assets/tv1.png",price:"19,990/-",itemid:" (34 inch) Smart-tv",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/tv2.png",price:"25,999/-",itemid:"Sony bravia k9pf9542",rating:"warning",rating5:"",rating4:"warning"},
  ];
  constructor() { }


  ngOnInit(): void {
  }

}
