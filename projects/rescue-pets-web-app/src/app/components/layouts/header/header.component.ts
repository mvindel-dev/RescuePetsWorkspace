import { Component } from '@angular/core';
import { Shelter } from 'RescuePetsCoreLib';
import { ShelterService } from 'RescuePetsCoreLib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public shelters: Shelter[] = [];

  constructor(private _shelter: ShelterService) {}

  ngOnInit(): void {
    this._shelter.getShelters().subscribe(shelters => {
      this.shelters = shelters;
    });
  }
  
  closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler?.dispatchEvent(new Event('click'));
    }
  }
  
}


