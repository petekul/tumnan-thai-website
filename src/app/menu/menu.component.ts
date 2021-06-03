import { Component, OnInit } from '@angular/core';
import menuJson from './../../assets/menu.json'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menu;
  constructor() { 
    this.menu = menuJson;
  }

  ngOnInit(): void {

  }

  isNumber(val: any): boolean { return typeof val === 'number'; }

  findSection(category: string){
    return this.menu.find(section => section.category === category);
  }
  
}

export interface PriceOption {
  option: string;
  price: number;
}