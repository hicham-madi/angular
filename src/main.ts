import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SolicitingsPageComponent } from './app/pages/solicitings-page/solicitings-page.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');
bootstrapApplication(SolicitingsPageComponent, appConfig)
  .catch((err) => console.error(err));
