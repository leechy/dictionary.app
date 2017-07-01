import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html'
})
export class DictionaryPage {

  searchbar: HTMLElement;

  constructor(public navCtrl: NavController) { }

  ionViewDidEnter() {
    // console.log(this.searchbar);
  }

}
