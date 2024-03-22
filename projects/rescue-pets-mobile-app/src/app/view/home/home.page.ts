import { Component } from '@angular/core';
import { Shelter } from 'projects/rescue-pets-core-lib/src/lib/models/shelter/shelter';
import { ShelterService } from 'projects/rescue-pets-core-lib/src/lib/services/Shelter/shelter.service';
import { AuthService } from 'projects/rescue-pets-core-lib/src/lib/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  public shelters: Shelter[] = [];

  constructor(private _shelter: ShelterService, private _authService:AuthService) {
    console.log(_authService.isVerified);
  }

  ngOnInit(): void {
    this._shelter.retrieveData();
  }

  getShelters(){
    return this._shelter.getShelters();
  }

}
