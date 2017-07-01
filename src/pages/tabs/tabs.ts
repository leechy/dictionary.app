import { Component } from '@angular/core';

import { DictionaryPage } from '../dictionary/dictionary';
import { PhrasesPage } from '../phrases/phrases';
import { FavoritesPage } from '../favorites/favorites';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  dictRoot = DictionaryPage;
  phrasesRoot = PhrasesPage;
  homeRoot = HomePage;
  favRoot = FavoritesPage;

  constructor() {

  }
}
