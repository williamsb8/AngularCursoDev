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

  // public classStyle = ['dev-card', 'dev-card-primary'];

  public cards: {
    title: string;
    body?: string;
    isPrimary: boolean;
    isDisabled: boolean;
  }[] = [
    {
      title: 'Tarjeta Principal',
      isPrimary: true,
      isDisabled: false
    },
    {
      title: 'Tarjeta Secundaria',
      isPrimary: false,
      isDisabled: false
    },
    {
      title: 'Tarjeta Desactivada',
      isPrimary: true,
      isDisabled: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showError(): void {
    this.style.background = 'red';
    this.msg = '* Hubo un error!';
    this.isShow = true;

  }
  showSuccess(): void {
    this.style.background = 'green';
    this.msg = '* Todo Beleennn!';
    this.isShow = true;
  }

  changeStatus(card: {
    title: string,
    body?: string,
    isPrimary?: boolean,
    isDisabled?: boolean;
  }) {
    card.isPrimary = !card.isPrimary;
  }

  disabledCard(card: {
    title: string,
    body?: string,
    isPrimary?: boolean,
    isDisabled?: boolean;
  }) {
    card.isDisabled = !card.isDisabled;
  }
}
