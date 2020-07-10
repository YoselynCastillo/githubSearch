import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';

// ---------------MODELS--------------- //
import { User } from '../../models/user.model';
import { Repo } from '../../models/repo.model';

// ---------------SERVICES--------------- //
import { GithubService } from 'src/app/services/github.service';
import { MsgService } from '../../services/msg.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  // ---------------CONSTRUCTOR--------------- //
  constructor(
    private githubService: GithubService,
    private msgService: MsgService
  ) {}

  // ---------------VARIABLES--------------- //
  @Input() repos: Repo[];
  user: User;
  private subscription: Subscription;
  visibility: boolean=false;
  // ---------------FUNCTIONS--------------- //
  ngOnInit(): void {
    this.getMessages();
  }

  private getMessages(): void {
    this.subscription = this.msgService.getUser().subscribe((msj) => {
      this.user = msj;
      this.searchRepos(this.user);
      if (this.user.name) {
        this.visibility = true;
      } else {
        this.visibility = false;
      }
    });
  }
  searchRepos(user:User) {
    this.githubService.getRepos(user.login).subscribe(
      (repos) => {
        this.repos = repos;
        console.log(this.repos);
      },
      (error) => {
        console.log('Repos not Found');
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
