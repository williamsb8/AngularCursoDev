import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements AfterViewInit, OnInit {

  public loader = 'assets/images/loader/loading.gif';
  public isLoading = true;
  constructor() { }
  
  ngOnInit(): void {
  }

  /**
   * After the view has been initialized, set the isLoading variable to false after 1 second.
   */
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
