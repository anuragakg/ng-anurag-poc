import { Injectable } from '@angular/core';
import {Account} from '../_models/account'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  data:Account[]=[
    {date:new Date('01-Feb-2021'),description:'Room Rent',amount:700},
    {date:new Date('02-Feb-2021'),description:'Morrission',amount:20}
  ];
  getAccountData(){
    return this.data;
  }
}
