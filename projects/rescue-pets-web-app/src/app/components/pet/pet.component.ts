// pet.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Animal } from 'projects/rescue-pets-core-lib/src/lib/models/animal/animal';
import { AnimalsService } from 'projects/rescue-pets-core-lib/src/lib/services/Animals/animals.service';
import { PetService } from 'projects/rescue-pets-core-lib/src/lib/services/Pets/pet.service';
import { AuthService } from 'projects/rescue-pets-core-lib/src/lib/services/auth.service';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  selectedPet: Animal | null = null;
  isAdmin!:boolean;
  isVolunteer!:boolean;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private animalsService: AnimalsService,
    private _router: Router,
    private _authService:AuthService
  ) {
    this.loadRoles();
  }

  loadRoles(){
    let userid = this._authService.currentUser?.uid;
    if(userid && this._authService.checkIsLogged()){
      this.isAdmin = this._authService.checkIsAdmin(userid);
      this.isVolunteer = this._authService.checkIsVolunteer(userid);
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.selectedPet = this.animalsService.getAnimalByName(name) || null;
      this.petService.selectPet(this.selectedPet);
    });
  }

  deleteAnimal(animal: Animal){
    let confirmation!:boolean;
    if (animal.sex=='male') confirmation = window.confirm('Estas segur que vols borrar al ' + animal.name + "?"); else confirmation = window.confirm('Estas segur que vols borrar a la ' + animal.name + "?");
    if(confirmation==true){
      let isDeleted = this.animalsService.deleteAnimal(animal);
      if(isDeleted){
        this._router.navigate(['/'+animal.type.toLowerCase()+'s']);
      }else{
        this._router.navigate(['/https://www.youtube.com/watch?v=QT0D3MtRjm8']);
      }
    }
  }

}
