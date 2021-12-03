import { Injectable } from '@angular/core';
import { Members } from '../models/member.model';
import * as moment from 'moment';
import { MemberModule } from '../member.module';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  members: Array<Members> = [
    { nome: 'Aline Almeida', 
    id: 1, idade: 10, peso: 50, altura: 165, gender: 'Feminino', 
    bodyFat: 0.05, motive: 'hipertrofia', record: 'Preencher aqui o histórico de atendimento do paciente', 
    img: "https://images.rawpixel.com/image_png_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvMzk3LW1ja2luc2V5LTIxYTM1NzktamlyXzEucG5n.png?s=ykgiiLOngAQ7OUlCGgsw6tOVJNSukmirSo8zwGlMRco",
    lastVisit: '2021-11-02', inclusionDate: '2021-04-01', email:'aline@gmail.com', senha:'12345'
    },
    { nome: 'Bruna Barbosa', 
    id: 2, idade: 15, peso: 50, altura: 165, gender: 'Feminino', 
    bodyFat: 0.26, motive: 'emagrecimento', record: 'Preencher aqui o histórico de atendimento do paciente', 
    img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/383-ted0689-teddy.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=05e357ecb3b80d636a1ad4563ce44b5b",
    lastVisit: '2021-11-02', inclusionDate: '2021-05-10', email:'bruna@gmail.com', senha:'12345'
    },
    { nome: 'Carla Casimiro', 
    id: 3, idade: 55, peso: 50, altura: 165, gender: 'Feminino', 
    bodyFat: 0.15, motive: 'hipertrofia', 
    record: 'Preencher aqui o histórico de atendimento do paciente', img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s53-ae-aom-009006.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=5d4f172d1786ae7079e916f82801b98b",
    lastVisit: '2021-11-02', inclusionDate: '2021-02-20', email:'carla@gmail,com', senha:'12345'
    },
    { nome: 'Daniela Dantas', 
    id: 4, idade: 12, peso: 60, altura: 165, gender: 'Feminino', 
    bodyFat: 0.28, motive: 'emagrecimento', 
    record: 'Preencher aqui o histórico de atendimento do paciente', img: "https://images.rawpixel.com/image_png_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczgwLXBvbS0wMjE5XzEucG5n.png?s=UExAA0roNR9xKyAlheXDN6hCibI8iv9o6tgde0bmUkM",
    lastVisit: '2021-11-02', inclusionDate: '2021-05-10', email:'daniela@gmail.com', senha:'12345'
    },
    { nome: 'Elis Esteves', 
    id: 5, idade: 30, peso: 80, altura: 165, gender: 'Feminino', 
    bodyFat: 0.29, motive: 'emagrecimento', record: 'Preencher aqui o histórico de atendimento do paciente', img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s31-ten-162-job7.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=a05b4c0201b420752c1ac6712c24889c",
    lastVisit: '2021-05-10', inclusionDate: '2021-04-09', email:'elis@gmail.com', senha:'12345'},
    { nome: 'Fabiana Fagundes', 
    id: 6, idade: 30, peso: 90, altura: 165, gender: 'Feminino', 
    bodyFat: 0.19, motive: 'adquirir massa magra', record: 'Preencher aqui o histórico de atendimento do paciente', img: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczc1LWppci0wMzE2LXBvbV8yLnBuZw.png?s=DnxGy8b3WQcvY-D1zl7zeXpmVdCkhSmwG1Tl9jt8UdA",
    lastVisit: '2021-11-02', inclusionDate: '2021-05-10', email:'fabiana@gmail.com', senha:'12345'
    },
    { nome: 'Gabriela Gomes', 
    id: 7, idade: 10, peso: 60, altura: 165, gender: 'Feminino', 
    bodyFat: 0.30, motive: 'diabetes', record: 'Preencher aqui o histórico de atendimento do paciente', img: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvay1zMzAtbmF0LWpvYjI1LTEwNjYtam9iMjUucG5n.png?s=FKA60BDAL10OXapUzZsNBgOmFACK4PyDLCwAo7OdNXk",
    lastVisit: '2021-11-02', inclusionDate: '2021-05-10', email:'gabriela@gmail.com', senha:'12345'
    },
    { nome: 'Hilda Furacão', 
    id: 8, idade: 45, peso: 75, altura: 165, gender: 'Feminino', 
    bodyFat: 0.20, motive: 'manter o peso', record: 'Preencher aqui o histórico de atendimento do paciente', img: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczcyLW1ja2luc2V5LTAxNDItMDJfMi5wbmc.png?s=JI49x94KQAl_n5SIRkou2rWnWtZv8OPG7qTAj1eWhes",
    lastVisit: '2021-11-02', inclusionDate: '2021-05-10', email:'hilda@gmail.com', senha:'12345'
    },
    { nome: 'Inês Iglesias', 
    id: 9, idade: 35, peso: 80, altura: 165, gender: 'Feminino', 
    bodyFat: 0.27, motive: 'emagrecimento', record: 'Preencher aqui o histórico de atendimento do paciente', img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s54-ae-ray-08007.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=b31cdd3b90ee353afdf48e0d8ee21618",
    lastVisit: '2021-11-02', inclusionDate: '2021-05-10', email:'ines@gmail.com', senha:'12345'
    },
    { nome: 'Jaqueline Jacob', 
    id: 10, idade: 5, peso: 55, altura: 165, gender: 'Feminino', 
    bodyFat: 0.22, motive: 'saúde', record: 'Preencher aqui o histórico de atendimento do paciente', img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-18_f_102_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=d26a3ae984148fb2e595f81f44adfbb3",
    lastVisit: '2021-11-02', inclusionDate: '2021-05-10', email:'jaqueline@gmail.com', senha:'12345'
    }
   ];



  constructor() { }

  getDefaultMember(): Members {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      nome: '',
      id: this.generateNextId(),
      idade: 0,
      peso: 0,
      altura: 0,
      gender: '',
      bodyFat: 0,
      motive: '',
      record: '',
      img: '',
      inclusionDate: dateToday,
      lastVisit: dateToday,
      email: '',
      senha: '',
    }
  }

  

  getMembers() {
    return this.members;
  }

  getMemberById(id: string) {
    return this.members.find((item) => item.id === parseInt(id));
  }

  getMemberByEmailAndPassword(email: string | undefined, senha: string | undefined) {
    return this.members.find((member) =>member.email === email && member.senha === senha);
  }

  generateNextId(): number {
    return this.members[(this.members.length - 1)].id + 1;
  }

  createMember(member: Members){
    this.members.push(member);
    return this.members;
  }

}
