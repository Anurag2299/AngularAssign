import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent implements OnInit {
  products = [
    { name: 'mobile', price: '30300' },
    { name: 'ac', price: '33000' },
    { name: 'tv', price: '20000' },
    { name: 'bed', price: '55000' },
    { name: 'couch', price: '38000' },
    { name: 'doormat', price: '100' },
    { name: 'flower', price: '200' },
    { name: 'fan', price: '1500' },
    { name: 'charger', price: '300' },
    { name: 'usb cable', price: '250' },
    { name: 'bottle', price: '140' },
    { name: 'badminton', price: '1400' },
    { name: 'remote', price: '110' },
    { name: 'doll', price: '245' },
    { name: 'graph paper', price: '30' },
    { name: 'holder', price: '100' },
    { name: 'pen', price: '20' },
    { name: 'ink', price: '50' },
    { name: 'kite', price: '10' },
    { name: 'jelly', price: '230' },
    { name: 'iron', price: '600' },
    { name: 'shoes', price: '1800' },
    { name: 'trimmer', price: '1350' },
    { name: 'tape', price: '5' },
    { name: 'led', price: '700' },
    { name: 'socks', price: '900' },
    { name: 'shampoo', price: '570' },
    { name: 'face wash', price: '84' },
    { name: 'clip', price: '32' },
    { name: 'paint', price: '160' },
    { name: 'brush', price: '125' },
    { name: 'mask', price: '400' },
    { name: 'pin', price: '50' },
    { name: 'yo-yo', price: '300' },
    { name: 'knife', price: '170' },
    { name: 'earphones', price: '1240' },
    { name: 'clock', price: '1200' },
    { name: 'books', price: '500' },
    { name: 'keyboard', price: '1300' },
    { name: 'photoframe', price: '750' },
  ];
  showGrid = true;
  constructor() {}
  toggleView = (value) => {
    this.showGrid = value;
  };
  filterPrice = () => {
    console.log('price');
    this.products.sort((a, b) => (a.price > b.price ? 1 : -1));
  };
  filterName = () => {
    console.log('cost');
    this.products.sort((a, b) => (a.name > b.name ? 1 : -1));
  };
  ngOnInit(): void {}

  filter(value: string){
    switch(value) {
      case "price":
        this.filterPrice()
         break;
      case "name":
         this.filterName()
         break;
    }
  }
}
