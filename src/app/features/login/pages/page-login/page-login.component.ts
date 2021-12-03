import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberServiceService } from 'src/app/features/member/services/member-service.service';

@Component({
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  error: boolean = false;

  email?: string;
  senha?: string;
  

  constructor(private membersService: MemberServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authenticate(){
    console.log(this.email, this.senha);
    const member = this.membersService.getMemberByEmailAndPassword(this.email, this.senha);
    if (!member){
      this.error = true;
    } else {
      sessionStorage.setItem('member', JSON.stringify(member));
      this.router.navigateByUrl('members');
    }
    console.log(member);
  }

  
}
