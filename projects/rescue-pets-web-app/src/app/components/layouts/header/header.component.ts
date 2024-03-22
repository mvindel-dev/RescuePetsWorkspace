import { Component } from '@angular/core';
import { Shelter } from 'projects/rescue-pets-core-lib/src/lib/models/shelter/shelter';
import { ShelterService } from 'projects/rescue-pets-core-lib/src/lib/services/Shelter/shelter.service';
import { AuthService } from 'projects/rescue-pets-core-lib/src/lib/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public shelters: Shelter[] = [];
  loggedIn:boolean=false;
  name!:string | undefined;
  

  constructor(private _shelter: ShelterService, private _authService:AuthService) { }

  ngOnInit(): void {
    this._shelter.retrieveData();
    if(this._authService.checkIsLogged()){
      this.loggedIn=true;
    }else{
      this.loggedIn=false;
    }
  }

  getShelters(){
    return this._shelter.getShelters();
  }
  
  closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler?.dispatchEvent(new Event('click'));
    }
  }

  logout(){
    this._authService.logout();
    this.loggedIn=false;
  }
  
}


