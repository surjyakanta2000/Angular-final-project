import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-fashiondetails',
  templateUrl: './fashiondetails.component.html',
  styleUrls: ['./fashiondetails.component.css']
})
export class FashiondetailsComponent implements OnInit {
  mobileData;
  public MobileArray=[
    {img:"../../assets/man2.jpeg",price:"1,900/-",itemid:"Shirt",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/women1.jpg",price:"3,900/-",itemid:"Grown",rating:"warning",rating5:"",rating4:""},
    {img:"../../assets/man1.png",price:"2,990/-",itemid:"Shirt",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/men3.png",price:"1,999/-",itemid:"t-Shirt",rating:"warning",rating5:"",rating4:"warning"},
  ];
  constructor(private sunSun:ActivatedRoute) { }

  ngOnInit(): void {
    this.sunSun.params.subscribe((cartdetails)=>{
      this.mobileData=this.MobileArray.filter((ArrayInfo)=>{
        return ArrayInfo.itemid==cartdetails.itemid;
      })[0];
      // console.log(this.mobileData);
    })
  }

}
