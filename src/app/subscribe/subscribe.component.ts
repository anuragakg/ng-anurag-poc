import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscribe } from '@app/_models/subscribe';
import {SubscribeService } from './subscribe.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.less']
})
export class SubscribeComponent implements OnInit {
  form:FormGroup;
  typesData:Subscribe[]=[];

  get typesFormArray(){
    return this.form.controls.types as FormArray;
  }

  constructor(private subscribeService:SubscribeService,private formBuilder:FormBuilder) { 
    this.typesData=this.subscribeService.getData();

    this.form=this.formBuilder.group({
      'types':new FormArray([])
    });
    this.addCheckbox();
  }
  
  ngOnInit(): void {
    
  }
  private addCheckbox(){
    this.typesData.forEach((type)=>{
      this.typesFormArray.push(new FormControl(false))
    })
  }
  selected=[];
  submit() {
    const selectedTypesIds = this.form.value.types
      .map((checked, i) => checked ? this.typesData[i].name : null)
      .filter(v => v !== null);
      console.log(selectedTypesIds)
      this.selected=selectedTypesIds;
  }
  OnCloseBox(){
    this.selected=[];
  }
}
