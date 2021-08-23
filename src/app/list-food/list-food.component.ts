import { Component, OnInit } from '@angular/core';

export class Food {
  constructor(public id: number, public name: string, public price: number) {

  }
}

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {
  name = '';
  price = 0;
  foods = [
    new Food(1,'Bananas',5.99),
    new Food(2,'Lettuce',3.99),
    new Food(3,'Oranges',6.99),
    new Food(4,'Pasta', 8.99),
    new Food(5,'Pizza',12.99)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  addFood() {

    if (this.name != null && this.price != null) {
      var new_id = this.foods.length;
      var new_name = this.name;
      var new_price = this.price;
     
      new Food(new_id, new_name, new_price);
    }
  }
  removeFood() {
    if (this.foods) {

    }
  }
}
