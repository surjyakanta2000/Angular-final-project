import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import swal from 'sweetalert';
import{Router} from '@angular/router';
@Component({
  selector: 'app-electronicsdetail',
  templateUrl: './electronicsdetail.component.html',
  styleUrls: ['./electronicsdetail.component.css']
})
export class ElectronicsdetailComponent implements OnInit {
  mobileData;
  MobileArray=[
    {img:"../../assets/mobile1.png",price:"49,900/-",itemid:"iPhone X(Black,64GB)(4Gb)",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/mobile2.png",price:"9,900/-",itemid:"Samsung (Rose gold,64GB)(4Gb)",rating:"warning",rating5:"",rating4:""},
    {img:"../../assets/mobile3.png",price:"19,990/-",itemid:"HUAWEI 9 Lite(Nevy blue,128GB)(6Gb)",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/mobile4.png",price:"25,999/-",itemid:"Samsung j2 Max(gold,64GB)(4Gb)",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/mobile5.png",price:"12,940/-",itemid:"Micromax(Black,32GB)(2Gb)",rating:"warning",rating5:"",rating4:""},
    {img:"../../assets/mobile6.png",price:"19,090/-",itemid:"VIVO V15(Sky blue,32GB)(4Gb)",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/laptop1.png",price:"79,900/-",itemid:"Asus Vivobook(i7-8'th Gen,8GB,1TB HDD,120GB SSD)",rating:"warning",rating5:"warning",rating4:"warning"},
    {img:"../../assets/trimer.png",price:"1,900/-",itemid:"Panasonic EFQ17",rating:"warning",rating5:"",rating4:""},
    {img:"../../assets/laptop3.png",price:"69,990/-",itemid:"Hp pavilion X360(i7-8'th Gen,8GB,1TB HDD)",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/mouse1.png",price:"2,999/-",itemid:"Mouse m023gr3",rating:"warning",rating5:"",rating4:""},
    {img:"../../assets/mixer.png",price:"4,940/-",itemid:"USHA mixer",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/laptop2.png",price:"59,090/-",itemid:"Dell Inspirion(i5-8'th Gen,8GB,1TB HDD)",rating:"warning",rating5:"",rating4:""},
    {img:"../../assets/mouse2.png",price:"1,900/-",itemid:"CORSAIR Mouse",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/mouse3.png",price:"1,900/-",itemid:"GXT-152",rating:"warning",rating5:"",rating4:""},
    {img:"../../assets/mouse4.png",price:"4,990/-",itemid:"GX-Gaming",rating:"warning",rating5:"",rating4:""}
  ];
  constructor( private sunSun:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.sunSun.params.subscribe((cartdetails)=>{
      this.mobileData=this.MobileArray.filter((ArrayInfo)=>{
        return ArrayInfo.itemid==cartdetails.itemid;
      })[0];
      // console.log(this.mobileData);
    })
  }
  swalert()
  {
    swal({
      title: "Thank You",
      text: "Item Added Successfully!!",
      icon: "success"
    });
    //this.router.navigate(['/cart']);
  }
}
