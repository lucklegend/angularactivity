import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export interface User {
  name: string;
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: User[] = [
  {id: 1, name: 'Hydrogen', username: 'ARC', email: 'arc@testing.com'},
  
];

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'actions'];
  dataSource = ELEMENT_DATA;
  
  listUsers:User[] = [];
  constructor(private userSevice: UserService) { }

  ngOnInit(): void {
    this.userSevice.listUsers().subscribe(data =>{
      this.listUsers = data;
    });
  }

}
