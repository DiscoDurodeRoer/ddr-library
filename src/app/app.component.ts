import { DdrConstantsService } from './../../projects/ddr-library/src/services/ddr-constants.service';
import { DdrThemeService } from './../../projects/ddr-library/src/services/ddr-theme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteca-ddr';

  constructor(
    public themeService: DdrThemeService,
    public constants: DdrConstantsService
  ){ 
    this.themeService.changeTheme(this.constants.DdrThemeConstants.THEME_DEFAULT);
  }
}
