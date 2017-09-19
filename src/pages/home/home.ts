import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemsProvider } from '../../providers/items/items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items:any[];
  constructor(public navCtrl: NavController, itemProvider:ItemsProvider) {
    this.updateItems();
    itemProvider.getAll().subscribe(u=>{
        this.items = u.json();
    });
  }


  updateItems(){
    this.items = [{nome:"aaa"}, {nome:"bbb"}];
  }
}
