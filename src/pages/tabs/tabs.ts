import { Component } from '@angular/core';

import { DictionaryPage } from '../dictionary/dictionary';
import { PhrasesPage } from '../phrases/phrases';
import { NumbersPage } from '../numbers/numbers';
import { FavoritesPage } from '../favorites/favorites';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DictionaryPage;
  tab2Root = PhrasesPage;
  tab3Root = HomePage;
  tab4Root = NumbersPage;
  tab5Root = FavoritesPage;

  constructor() {

  }
}
