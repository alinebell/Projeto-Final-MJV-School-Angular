import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberModule } from 'src/app/features/member/member.module';
import { Members } from 'src/app/features/member/models/member.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  member?: Members;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const memberStorage = sessionStorage.getItem('member');
    if(memberStorage) {
      this.member = JSON.parse(memberStorage);
    }
    console.log(this.member);
  }

  navigateByUrl(path: string) {
    this.router.navigateByUrl(path);
  }

  exit() {
    sessionStorage.clear();
    this.navigateByUrl('/login');
  }

}
