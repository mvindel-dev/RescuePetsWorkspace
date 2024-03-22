import { Component } from '@angular/core';
import { Animal } from 'projects/rescue-pets-core-lib/src/lib/models/animal/animal';
import { AnimalsService } from 'projects/rescue-pets-core-lib/src/lib/services/Animals/animals.service';
import { PetService } from 'projects/rescue-pets-core-lib/src/lib/services/Pets/pet.service';
import { AuthService } from 'projects/rescue-pets-core-lib/src/lib/services/auth.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
})
export class DogsPage {

  public dogs!: Animal[];
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

  getDogs(){
    return this._animals.getAnimals().filter(animal => animal.type === 'Dog');
  }

  selectDog(dog: Animal): void {
    this._petService.selectPet(dog);
  }

}
