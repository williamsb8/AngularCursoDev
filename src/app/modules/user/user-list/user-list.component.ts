import { Component, OnInit } from '@angular/core';
import { ICardUser } from '@shared//components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: ICardUser[] = [
    {
      name: 'William Morales',
      age: 27,
      description: 'Desarrollador fullstack',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      work: 'Freenlace'
    },
    {
      name: 'Jose Manuel',
      age: 17,
      description: 'Desarrollador Backend',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
    },
    {
      name: 'Rueben Charcape',
      age: 20,
      description: 'Desarrollador frontend',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
    },
    {
      name: 'Rueben Charcape',
      age: 20,
      description: 'Desarrollador frontend',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
    }
  ]
    
  constructor() { }

  ngOnInit(): void {
  }

}
