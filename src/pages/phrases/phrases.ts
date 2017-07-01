import { Component, OnInit } from '@angular/core';

import { common } from '../../app/common';

import { Phrase } from '../../assets/dictionary/phrase.interface';
import phrases from '../../assets/dictionary/phrases';

@Component({
  selector: 'page-phrases',
  templateUrl: 'phrases.html'
})
export class PhrasesPage implements OnInit {

  common = common;

  phraseCollection: {
    'lu': string,
    'en': string,
    'ru': string,
    'bg': string,
    'phrases': Phrase[]
  }[];

  ngOnInit() {
    this.phraseCollection = phrases;
  }
}
