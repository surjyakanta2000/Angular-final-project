import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  public MobileArray=[
    {img:"../../assets/man2.jpeg",price:"1,900/-",itemid:"Shirt",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/women1.jpg",price:"3,900/-",itemid:"Grown",rating:"warning",rating5:"",rating4:""},
    {img:"../../assets/man1.png",price:"2,990/-",itemid:"Shirt",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/men3.png",price:"1,999/-",itemid:"t-Shirt",rating:"warning",rating5:"",rating4:"warning"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
