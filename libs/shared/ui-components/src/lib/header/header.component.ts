import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'htd-header',
  template: `
    <header>
      <img alt="How to Dad logo" width="250" src="../assets/logo.svg" />
      <h1 class="text-hint">The ULTIMATE Dad Jokes!</h1>
      <p class="text-hint">
        Give the gift that NEVER gets old! 😜
      </p>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
