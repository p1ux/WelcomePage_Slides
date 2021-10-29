import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async openTerms(e) {
    e.preventDefault();
    await Browser.open({ 'url': 'https://google.com' });
    }

    async openPrivacy(e) {
       
      e.preventDefault();
      await Browser.open({ 'url': 'https://google.com' }); }
}
