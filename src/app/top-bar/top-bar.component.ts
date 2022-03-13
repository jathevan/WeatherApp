import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {SET_LOCATION} from '../location-reducer';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  loc: string;

  constructor(private store: Store<any>) {
  }


  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.store.dispatch({type: SET_LOCATION, payload: this.loc});
  }

  ngOnInit(): void {
  }
}
