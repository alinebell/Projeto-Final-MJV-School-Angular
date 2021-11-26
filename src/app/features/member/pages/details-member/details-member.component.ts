import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Members } from '../../models/member.model';
import { MemberServiceService } from '../../services/member-service.service';

@Component({
  templateUrl: './details-member.component.html',
  styleUrls: ['./details-member.component.scss']
})
export class DetailsMemberComponent implements OnInit {

  member: Members | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private membersService: MemberServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const member = this.membersService.getMemberById(params.id); 
      this.member = member;
      console.log(params);
    });
  }

}
