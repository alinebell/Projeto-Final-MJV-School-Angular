import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Members } from '../../models/member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Input()
  card?: Boolean;

  @Input()
  member?: Members;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetails(){
    this.router.navigateByUrl(`member-details/${this.member?.id}`)
  }

}
