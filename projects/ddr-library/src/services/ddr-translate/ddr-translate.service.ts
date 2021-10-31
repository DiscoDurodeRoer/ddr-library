import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DdrTranslateService {

  private _data: any;

  constructor(private http: HttpClient) { }

  public getData(path: string){
    return new Promise( (resolve, reject) => {

      let language;
      if(navigator.language.includes('-')){
        language = navigator.language.split('-')[0];
      }else{
        language = navigator.language;
      }

      this.http.get(path+language+'.json').subscribe(data => {
        this._data = data;
        resolve(true);
      }, error => {
        console.error("Error to get translations: ",error);
        reject(true);
      })

    });
  }

  public getTranslate(word: string){
    return this._data[word];
  }

}
