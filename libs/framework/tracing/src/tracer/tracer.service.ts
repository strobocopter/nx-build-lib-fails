import { Injectable } from '@angular/core';
import { JsonUtilService } from '@stroboware/framework/utils';

@Injectable({
  providedIn: 'root'
})
export class TracerService {

  constructor(private jsonUtil: JsonUtilService) { }

  public trace(obj: any) {
    console.log('tracing: ', this.jsonUtil.toJson(obj))
  }
}
