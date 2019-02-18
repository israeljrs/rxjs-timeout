import { Component, OnInit } from '@angular/core';

import { WebRequestService } from '../services/web-request.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  msg = 'Clique no botão para consulta !!!';

  constructor(private req: WebRequestService) { }

  ngOnInit() {
  }

  btnClickRequest() {
    this.req.getArticle().subscribe(res => {
      this.msg = `title: ${res.title}`;
      console.log(res);
    }, (error) => {
      this.msg = error.message;
      console.log(error);
    });
  }

}
