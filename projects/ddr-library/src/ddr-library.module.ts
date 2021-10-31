import { DdrThemeService } from './services/ddr-theme.service';
import { DdrModalModule } from './components/ddr-modal/ddr-modal.module';
import { DdrToggleModule } from './components/ddr-toggle/ddr-toggle.module';
import { DdrNgModelBaseModule } from './components/ddr-ng-model-base/ddr-ng-model-base.module';
import { DdrTranslateModule } from './services/ddr-translate/ddr-translate.module';
import { DdrResolutionModule } from './services/ddr-resolution/ddr-resolution.module';
import { DdrDetailModule } from './components/ddr-detail/ddr-detail.module';
import { DdrConfigModule } from './services/ddr-config/ddr-config.module';
import { DdrLoadIframeModule } from './directives/ddr-load-iframe/ddr-load-iframe.module';
import { DdrSpinnerModule } from './components/ddr-spinner/ddr-spinner.module';
import { DdrJoinPipeModule } from './pipes/ddr-join-pipe/ddr-join-pipe.module';
import { NgModule } from '@angular/core';
import { DdrToastModule } from './components/ddr-toast/ddr-toast.module';
import { DdrConstantsService } from './services/ddr-constants.service';
import { DdrClickOutsideModule } from './directives/ddr-click-outside/ddr-click-outside.module';
import { DdrDropdownModule } from './components/ddr-dropdown/ddr-dropdown.module';
import { DdrBlockListModule } from './components/ddr-block-list/ddr-block-list.module';
import { DdrTabsModule } from './components/ddr-tabs/ddr-tabs.module';
import { DdrAccordionModule } from './components/ddr-accordion/ddr-accordion.module';

@NgModule({
  declarations: [
  ],
  imports: [
    DdrJoinPipeModule,
    DdrSpinnerModule,
    DdrToastModule,
    DdrClickOutsideModule,
    DdrDropdownModule,
    DdrLoadIframeModule,
    DdrConfigModule,
    DdrDetailModule,
    DdrBlockListModule,
    DdrTabsModule,
    DdrResolutionModule,
    DdrAccordionModule,
    DdrTranslateModule,
    DdrNgModelBaseModule,
    DdrToggleModule,
    DdrModalModule
  ],
  exports: [
    DdrJoinPipeModule,
    DdrSpinnerModule,
    DdrToastModule,
    DdrClickOutsideModule,
    DdrDropdownModule,
    DdrLoadIframeModule,
    DdrConfigModule,
    DdrDetailModule,
    DdrBlockListModule,
    DdrTabsModule,
    DdrResolutionModule,
    DdrAccordionModule,
    DdrTranslateModule,
    DdrNgModelBaseModule,
    DdrToggleModule,
    DdrModalModule
  ],
  providers: [
    DdrConstantsService,
    DdrThemeService
  ]
})
export class DdrLibraryModule { }
