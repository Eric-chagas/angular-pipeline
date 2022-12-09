import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

console.log(environment.iapClientId)
console.log(environment.urlApi)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
