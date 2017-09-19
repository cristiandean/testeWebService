import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ItemsProvider } from '../../providers/items/items';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: any[];
  constructor(public platform: Platform, public navCtrl: NavController, itemProvider: ItemsProvider, private barcodeScanner: BarcodeScanner) {
    //itemProvider.getAll().subscribe(u=>{
    //   this.items = u.json();
    //});

  }

  camera() {
    this.platform.ready().then(() => {
      this.barcodeScanner.scan().then((barcodeData) => {
        alert(barcodeData.text);
      }, (err) => {
        alert("erro");
      });
    });

  }
}
