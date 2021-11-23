import { ShowcaseDdrToggleComponent } from './showcase/showcase-ddr-toggle/showcase-ddr-toggle.component';
import { FormsModule } from '@angular/forms';
import { DdrTranslateService } from './../../projects/ddr-library/src/services/ddr-translate/ddr-translate.service';
import { ShowcaseDdrTranslateComponent } from './showcase/showcase-ddr-translate/showcase-ddr-translate.component';
import { ShowcaseAccordionComponent } from './showcase/showcase-accordion/showcase-accordion.component';
import { ShowcaseDdrDetailComponent } from './showcase/showcase-ddr-detail/showcase-ddr-detail.component';
import { DdrConfigService } from './../../projects/ddr-library/src/services/ddr-config/ddr-config.service';
import { ShowcaseDdrConfigComponent } from './showcase/showcase-ddr-config/showcase-ddr-config.component';
import { ShowcaseDdrDropdownComponent } from './showcase/showcase-ddr-dropdown/showcase-ddr-dropdown.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShowcaseDdrToastComponent } from './showcase/showcase-ddr-toast/showcase-ddr-toast.component';
import { ShowcaseDdrSpinnerComponent } from './showcase/showcase-ddr-spinner/showcase-ddr-spinner.component';
import { ShowcaseDdrJoinPipeComponent } from './showcase/showcase-ddr-join-pipe/showcase-ddr-join-pipe.component';

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DdrLibraryModule } from 'projects/ddr-library/src/ddr-library.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseClickoutsideComponent } from './showcase/showcase-clickoutside/showcase-clickoutside.component';
import { ShowcaseDdrLoadIframeComponent } from './showcase/showcase-ddr-load-iframe/showcase-ddr-load-iframe.component';
import { ShowcaseDdrBlockListComponent } from './showcase/showcase-ddr-block-list/showcase-ddr-block-list.component';
import { ShowcaseDdrTabsComponent } from './showcase/showcase-ddr-tabs/showcase-ddr-tabs.component';
import { ShowcaseDdrResolutionComponent } from './showcase/showcase-ddr-resolution/showcase-ddr-resolution.component';
import { ShowcaseDdrModalComponent } from './showcase/showcase-ddr-modal/showcase-ddr-modal.component';
import { MenuComponent } from './menu/menu.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { BaseShowcaseComponent } from './showcase/base-showcase/base-showcase.component';

export function configFactory(provider: DdrConfigService){
  return () => provider.getDataFromJSON('assets/config/data.json');
}

export function translateFactory(provider: DdrTranslateService){
  return () => provider.getData('assets/i18n/');
}

@NgModule({
  declarations: [		
    AppComponent,
    ShowcaseDdrJoinPipeComponent,
    ShowcaseDdrSpinnerComponent,
    ShowcaseDdrToastComponent,
    ShowcaseClickoutsideComponent,
    ShowcaseDdrDropdownComponent,
    ShowcaseDdrLoadIframeComponent,
    ShowcaseDdrConfigComponent,
    ShowcaseDdrDetailComponent,
    ShowcaseDdrBlockListComponent,
    ShowcaseDdrTabsComponent,
    ShowcaseDdrResolutionComponent,
    ShowcaseAccordionComponent,
    ShowcaseDdrTranslateComponent,
    ShowcaseDdrToggleComponent,
    ShowcaseDdrModalComponent,
    MenuComponent,
    GetStartedComponent,
    BaseShowcaseComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CodeHighlighterModule,
    DdrLibraryModule
  ],
  providers: [
    DdrConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps:[DdrConfigService],
      multi: true
    },
    DdrTranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps:[DdrTranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
