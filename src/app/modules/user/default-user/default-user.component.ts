import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-user',
  templateUrl: './default-user.component.html',
  styleUrls: ['./default-user.component.scss']
})
export class DefaultUserComponent implements OnInit {

  public style = {
    background: 'red'
  }

  public isShow = false;
  public msg = '';

  constructor() { }

  ngOnInit(): void {
  }

  showError() {
    this.style.background = 'red';
    this.msg = '* Hubo un error!';
    this.isShow = true;

  }
  showSuccess() {
    this.style.background = 'green';
    this.msg = '* Todo Beleennn!';
    this.isShow = true;
  }

}
