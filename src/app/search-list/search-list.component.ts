import { Component } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  searchCar = '';
  filter = 'name';

  cars = [
    {id: '1', name: 'Ford',     year: '1987'},
    {id: '2', name: 'Mazda',    year: '1999'},
    {id: '3', name: 'Bently',   year: '2004'},
    {id: '4', name: 'Audi',     year: '2003'},
    {id: '5', name: 'Mercedes', year: '1984'},
    {id: '6', name: 'BMW',      year: '1997'}
  ]

  onClickFilter(config) {
    const arr = document.getElementsByClassName('searchBtn');
    for (let i = 0; i < arr.length; i++) {
      let color = arr[i].name === config ? 'success' : 'primary';
      arr[i].className = `searchBtn btn btn-${color}`;
    } this.filter = config;
  }

}
