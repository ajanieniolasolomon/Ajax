import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router'
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {
  posts: Observable<any>;
  constructor(private route:ActivatedRoute,private service:AdminService) { }

  ngOnInit() {
    this.posts=this.route.paramMap.switchMap(data=>
      this.service.GetPost()
    )
  }

}
