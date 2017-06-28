import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DictionaryPage } from '../dictionary/dictionary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dictPage = DictionaryPage;
  favoriteList: string = "favorites";

  constructor(public navCtrl: NavController) {

  }

  onSearchbarClick() {
    let TabsComponent = this.navCtrl.parent;

    TabsComponent._tabs.forEach((tab, index) => {
      if (tab.root == this.dictPage) {
        TabsComponent.select(index);
      }
    })
  }

}
