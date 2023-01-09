import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  user?: User;
  /**
   *
   */
  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
    (this.githubService.user as Observable<User>).subscribe((user) => {
      this.user = user;
    });
  }
}
