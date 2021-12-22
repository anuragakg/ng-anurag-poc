import { Injectable } from '@angular/core';
import { Subscribe} from '../_models/subscribe'
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  data:Subscribe[]=[
    {id:1,name:'SMS Alert'},
    {id:2,name:'Marketing news letter'},
    {id:3,name:'Flyers'}
  ]

  getData(){
    return this.data;
  }
}
