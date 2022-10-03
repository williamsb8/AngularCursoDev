import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
import { USERS_DATA } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { ICarouselItem } from '@shared/components/carousel/icarousel-item.metadata';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit, OnInit, OnDestroy {

  public carouselData: ICarouselItem[]; //= CAROUSEL_DATA_ITEMS;
  public users: ICardUser[] = []; // USERS_DATA;
  public userSubscription: Subscription = new Subscription;
  public priceSoles: number;
  // public obj: Array<any>;
    
  constructor(
    private userService: UserService
  ) {
    this.carouselData = CAROUSEL_DATA_ITEMS;
    this.priceSoles = 0;
    this.obj = [{id: 1, name: 'primero', joinDate: 1599935113003}];
  }

  ngOnInit(): void {
    this.getUser();
    console.log('User List - OnInit');
  }

  ngAfterViewInit(): void {
    console.log('User List - AfterViewInit');
  }

  addAmount() {
    this.priceSoles += 10;
    /* this.obj.push({
      id: this.obj.length + 1,
      name: 'otro',
      joinDate: 1599935113003
    }); */
  }

  getUser(): void {
    this.userSubscription = this.userService
      .getAllUsers()
      .subscribe( r => this.users = (r.error) ? [] : r.data );
  }

  ngOnDestroy(): void {
    if(this.userSubscription) {
      console.log('unsubscribe');
      this.userSubscription.unsubscribe();
    }
  }

}
