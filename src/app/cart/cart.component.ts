import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  mobileData;
  MobileArray=[
    {img:"../../assets/mobile1.png",price:"49900",itemid:"iPhone X(Black,64GB)(4Gb)",rating:"warning",rating5:"",rating4:"warning"},
    // {img:"../../assets/mobile2.png",price:"9900",itemid:"Samsung (Rose gold,64GB)(4Gb)",rating:"warning",rating5:"",rating4:""},
    // {img:"../../assets/mobile3.png",price:"19990",itemid:"HUAWEI 9 Lite(Nevy blue,128GB)(6Gb)",rating:"warning",rating5:"",rating4:"warning"},
    // {img:"../../assets/mobile4.png",price:"25999",itemid:"Samsung j2 Max(gold,64GB)(4Gb)",rating:"warning",rating5:"",rating4:"warning"},
    // {img:"../../assets/mobile5.png",price:"12940",itemid:"Micromax(Black,32GB)(2Gb)",rating:"warning",rating5:"",rating4:""},
    // {img:"../../assets/mobile6.png",price:"19,090",itemid:"VIVO V15(Sky blue,32GB)(4Gb)",rating:"warning",rating5:"",rating4:"warning"},
    // {img:"../../assets/laptop1.png",price:"79900",itemid:"Asus Vivobook(i7-8'th Gen,8GB,1TB HDD,120GB SSD)",rating:"warning",rating5:"warning",rating4:"warning"},
    // {img:"../../assets/trimer.png",price:"1900",itemid:"Panasonic EFQ17",rating:"warning",rating5:"",rating4:""},
    // {img:"../../assets/laptop3.png",price:"69990",itemid:"Hp pavilion X360(i7-8'th Gen,8GB,1TB HDD)",rating:"warning",rating5:"",rating4:"warning"},
    // {img:"../../assets/mouse1.png",price:"2999",itemid:"Mouse m023gr3",rating:"warning",rating5:"",rating4:""},
    // {img:"../../assets/mixer.png",price:"4940",itemid:"USHA mixer",rating:"warning",rating5:"",rating4:"warning"},
    // {img:"../../assets/laptop2.png",price:"59090",itemid:"Dell Inspirion(i5-8'th Gen,8GB,1TB HDD)",rating:"warning",rating5:"",rating4:""},
    // {img:"../../assets/mouse2.png",price:"1900",itemid:"CORSAIR Mouse",rating:"warning",rating5:"",rating4:"warning"},
    // {img:"../../assets/mouse3.png",price:"1900",itemid:"GXT-152",rating:"warning",rating5:"",rating4:""},
    // {img:"../../assets/mouse4.png",price:"4990",itemid:"GX-Gaming",rating:"warning",rating5:"",rating4:""}
  ];
  itemval;
  price;
  product_total_amt;
  total_cart_amt;
  shipping_total_amt;
  constructor(private sunSun:ActivatedRoute) { }

  ngOnInit(): void {
    this.product_total_amt=document.getElementById(' product_total_amt');
    this.total_cart_amt=document.getElementById('total_cart_amt');
    this.shipping_total_amt=document.getElementById('shipping_total_amt');
    this.sunSun.params.subscribe((electronicsdetail)=>{
      this.mobileData=this.MobileArray.filter((ArrayInfo)=>{
        return ArrayInfo.itemid==electronicsdetail.itemid;
      })[0];
      // console.log(this.mobileData);
    })
  }

  decrease()
  {
    this.itemval=document.getElementById('textbox');
    this.price=document.getElementById('price');
    //console.log(this.price.innerHTML.value);
     if(this.itemval.value<=0)
     {
       this.itemval.value=0;
       alert("Minimum 1 item required");
     }
     else
     {
       this.itemval.value=parseInt(this.itemval.value)-1;
       this.itemval=document.getElementById('textbox').style.background='#fff';
       this.itemval=document.getElementById('textbox').style.color='#000';
       this.price.innerHTML = parseInt(this.price.innerHTML) - 49900;
       this. product_total_amt.innerHTML = parseInt(this. product_total_amt.innerHTML) - 49900;
       this. total_cart_amt.innerHTML = parseInt(this. product_total_amt.innerHTML) + parseInt(this.shipping_total_amt.innerHTML);
     }
  }
  increase()
  {
    this.itemval=document.getElementById('textbox');
    this.price=document.getElementById('price');
    // console.log(this.itemval.value);
    if(this.itemval.value>=5)
    {
      this.itemval.value=5;
      alert("max 5 item allowed");
      this.itemval=document.getElementById('textbox').style.background='red';
      this.itemval=document.getElementById('textbox').style.color='#fff';
    }
    else
    {
      this.itemval.value=parseInt(this.itemval.value)+1;
      this.price.innerHTML = parseInt(this.price.innerHTML) +49900;
      this. product_total_amt.innerHTML = parseInt(this. product_total_amt.innerHTML) + 49900;
      this. total_cart_amt.innerHTML = parseInt(this. product_total_amt.innerHTML) + parseInt(this.shipping_total_amt.innerHTML);
    }
  }

}
