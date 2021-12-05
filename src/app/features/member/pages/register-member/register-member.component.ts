import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Members } from '../../models/member.model';
import { MemberServiceService } from '../../services/member-service.service';

@Component({
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.scss']
})
export class RegisterMemberComponent implements OnInit {

  member: Members = this.membersService.getDefaultMember(); 

  memberForm = new FormGroup ({
    nome: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    idade: new FormControl(),
    peso: new FormControl(),
    altura: new FormControl(),
    genero: new FormControl(''),
    gordura: new FormControl(),
    motivo: new FormControl(''),
    inclusionDate: new FormControl(this.member.inclusionDate),
    lastVisit: new FormControl(this.member.lastVisit),
    foto: new FormControl(''),
    historico: new FormControl('')

  });

  constructor(
    private membersService: MemberServiceService,
    private router: Router) { }


  ngOnInit(): void {
    this.memberForm.controls.inclusionDate.disable();
    this.memberForm.controls.lastVisit.disable();
  }

  
  onSubmit() {
    const formValue = this.memberForm.value;
    this.member.id,
    this.member.nome = formValue.nome;
    this.member.email = formValue.email;
    this.member.senha = formValue.senha;
    this.member.idade = formValue.idade;
    this.member.peso = formValue.peso;
    this.member.altura = formValue.altura;
    this.member.gender = formValue.genero;
    this.member.bodyFat = formValue.gordura;
    this.member.motive = formValue.motivo;
    this.member.inclusionDate;
    this.member.lastVisit;
    this.member.img = formValue.foto;
    this.member.record = formValue.historico;
    this.membersService.createMember(this.member);
    alert('Paciente adicionado com sucesso!');
    this.router.navigateByUrl('/members');
  }

  
  
}
