import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SolicitationPageComponent } from './app/pages/sollicitation-page/sollicitation-page.component';

bootstrapApplication(SolicitationPageComponent, appConfig)
  .catch((err) => console.error(err));
