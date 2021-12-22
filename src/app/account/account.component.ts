import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import {Account} from '../_models/account'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  constructor(private accountService:AccountService) { }
  data : Account[]=[];
  total=0;
  ngOnInit(): void {
    this.data=this.accountService.getAccountData();
    this.getTotal(this.data)
  }

  private getTotal(data:Account[]){
    data.forEach((item)=>{
      this.total +=item.amount;
    })
  }



}
