import { Component } from '@angular/core';
import { Animal } from 'RescuePetsCoreLib';
import { AnimalsService } from 'RescuePetsCoreLib';
import { PetService } from 'RescuePetsCoreLib';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {

  public dogs: Animal[] | null = null;

  constructor(private _animals: AnimalsService, private _petService: PetService) {}

  ngOnInit(): void {
    this._animals.retrieveData();
    this._animals.dataLoaded$().subscribe(() => {
      this.getDogs();
    });
  }

  getDogs(): void {
    this.dogs = this._animals.getDogs();
  }

  selectDog(dog: Animal): void {
    this._petService.selectPet(dog);
  }
  
}
