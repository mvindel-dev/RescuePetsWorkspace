import { Component } from '@angular/core';
import { Animal } from 'projects/rescue-pets-core-lib/src/lib/models/animal/animal';
import { AnimalsService } from 'projects/rescue-pets-core-lib/src/lib/services/Animals/animals.service';
import { PetService } from 'projects/rescue-pets-core-lib/src/lib/services/Pets/pet.service';
import { AuthService } from 'projects/rescue-pets-core-lib/src/lib/services/auth.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
})
export class CatsPage {

  public cats!:Animal[];
  isAdmin!:boolean;
  isVolunteer!:boolean;


  constructor(private _animals: AnimalsService, private _petService: PetService, private _authService:AuthService) {
    this.loadRoles();

  }

  loadRoles(){
    let userid = this._authService.currentUser?.uid;
    if(userid && this._authService.checkIsLogged()){
      this.isAdmin = this._authService.checkIsAdmin(userid);
      this.isVolunteer = this._authService.checkIsVolunteer(userid);
    }
  }


  getCats(){
    return this._animals.getAnimals().filter(animal => animal.type === 'Cat');
  }

  selectCat(cat: Animal): void {
    this._petService.selectPet(cat);
  }

}
