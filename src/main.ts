import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (response.status !== 200) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    (<any>window).userList = data;
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch(err => console.log(err));
  })
  .catch(e => {
    document.getElementById('app-loader').innerHTML = 'Loading data failed';
  });




