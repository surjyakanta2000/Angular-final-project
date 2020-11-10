import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-tvappd',
  templateUrl: './tvappd.component.html',
  styleUrls: ['./tvappd.component.css']
})
export class TvappdComponent implements OnInit {
  mobileData;
  public MobileArray=[
    {img:"../../assets/hometheater2.jpeg",price:"9,900/-",itemid:"5.1,single chanel 60w woffer",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/hometheater.png",price:"12,900/-",itemid:"60w sound bar",rating:"warning",rating5:"",rating4:""},
    {img:"../../assets/tv1.png",price:"19,990/-",itemid:" (34 inch) Smart-tv",rating:"warning",rating5:"",rating4:"warning"},
    {img:"../../assets/tv2.png",price:"25,999/-",itemid:"Sony bravia k9pf9542",rating:"warning",rating5:"",rating4:"warning"},
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
