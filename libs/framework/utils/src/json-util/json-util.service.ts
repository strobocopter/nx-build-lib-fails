import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonUtilService {

  constructor() { }

  public toJson(obj: any) {
    return JSON.stringify(obj);
  }

  public fromJson(json: string) {
    if (typeof json === 'undefined') {
      return undefined;
    }
    return JSON.parse(json);
  }
}
