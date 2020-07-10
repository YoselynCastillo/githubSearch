import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
// ---------------MODELS--------------- //
import { User } from '../../models/user.model';
import { Repo } from '../../models/repo.model';

// ---------------SERVICES--------------- //
import { GithubService } from '../../services/github.service';
import { MsgService } from '../../services/msg.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  // ---------------CONSTRUCTOR--------------- //
  constructor(
    private githubService: GithubService,
    private msgService: MsgService
  ) {}

  // ---------------VARIABLES--------------- //
  user: User;
  repos: Repo[];
  userName: string;
  notFound: boolean = false;
  // ---------------FUNCTIONS--------------- //
  ngOnInit(): void {}

  searchUser() {
    console.log('Username ingresado: ', this.userName);
    //GET USER
    this.githubService.getUser(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.msgService.postUser(this.user);
        this.notFound = false;
      },
      (error) => {
        console.log('User not Found');
        this.showModal();
      }
    );
  }

  showModal() {
    Swal.fire({
      icon: 'error',
      title: `User  (${this.userName}) Not Found`,
      text: 'Enter another Github username and Press Enter',
    });
  }
}
