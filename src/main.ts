import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SolicitingsPageComponent } from './app/pages/solicitings-page/solicitings-page.component';

bootstrapApplication(SolicitingsPageComponent, appConfig)
  .catch((err) => console.error(err));
