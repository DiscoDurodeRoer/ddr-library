import { DdrConstantsService } from './ddr-constants.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DdrThemeService {

  private _theme: string;

  public get theme(): string {
    return this._theme;
  }
  
  private themesAvailables: string[] = [
    this.constans.DdrThemeConstants.THEME_DEFAULT,
    this.constans.DdrThemeConstants.THEME_DARK
  ];  

  constructor(private constans: DdrConstantsService) { 
    this._theme = this.constans.DdrThemeConstants.THEME_DEFAULT;
  }

  changeTheme(theme: string){
    if(this.themesAvailables.find(t => t === this._theme)){
      this._theme = theme;
    }else{
      console.error("Theme " + theme + " not exists");
      
    }
  }

}
