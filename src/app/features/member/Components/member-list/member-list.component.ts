import { Component, OnInit } from '@angular/core';
import { Members } from '../../models/member.model';
import { MemberServiceService } from '../../services/member-service.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members: Array<Members> = [];

  filteredMembers: Array<Members> = [];

  constructor(private membersService: MemberServiceService) { }

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
    this.filteredMembers = this.members;
  }

    searchMember(event: any) {
      const value = event.target.value;
      const members = this.members.filter((member) => member.nome.toUpperCase().search(value.toUpperCase()) > -1 );
      this.filteredMembers = members;
    }

}
