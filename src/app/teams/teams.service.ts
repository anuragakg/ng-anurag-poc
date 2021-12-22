import { Injectable } from '@angular/core';
import { Teams } from '../_models/teams'
@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  data:Teams[]=[
    { id:1,name:'Anurag'},
    { id:2,name:'Vipul'},
    { id:3,name:'Nisha'},
    { id:4,name:'Bhagyashri'},
    { id:5,name:'Sai'},
    { id:6,name:'Tawkir'}
  ];

  constructor() { }
  getTeamsMembers(){
    return this.data;
  }
}
