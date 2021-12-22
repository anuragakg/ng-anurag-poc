import { Component, OnInit } from '@angular/core';
import { Teams } from '@app/_models/teams';
import { TeamsService } from './teams.service';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.less']
})
export class TeamsComponent implements OnInit {

  constructor(private teamService:TeamsService) { }
  data:Teams[];
  ngOnInit(): void {
    this.data=this.teamService.getTeamsMembers();
  }

}
