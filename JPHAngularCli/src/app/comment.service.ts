import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  commentsUrl = "https://jsonplaceholder.typicode.com/comments";

  constructor(private service:HttpClient) { }

  listarComments(){
    return this.service.get<any[]>(`${this.commentsUrl}`);
  }
}
