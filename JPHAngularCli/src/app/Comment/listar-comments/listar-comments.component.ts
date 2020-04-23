import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/comment.service';

@Component({
  selector: 'app-listar-comments',
  templateUrl: './listar-comments.component.html',
  styleUrls: ['./listar-comments.component.css']
})
export class ListarCommentsComponent implements OnInit {

  comments: Array<any>;

  constructor(private service:CommentService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.listarComments().subscribe(dados => this.comments = dados);
  }

}
