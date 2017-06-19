import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';
import { AppPage } from './pages/app/app.page';

@NgModule({
  declarations: [

  ],
  imports: [
    PagesModule
  ],
  providers: [],
  bootstrap: [AppPage]
})
export class AppModule { }

