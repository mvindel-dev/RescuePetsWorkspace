// cats.component.ts
import { Component, OnInit } from '@angular/core';
import { Animal } from 'RescuePetsCoreLib';
import { AnimalsService } from 'RescuePetsCoreLib';
import { PetService } from 'RescuePetsCoreLib';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  public cats: Animal[] | null = null;

  constructor(private _animals: AnimalsService, private _petService: PetService) {}

  ngOnInit(): void {
    this._animals.retrieveData();
    this._animals.dataLoaded$().subscribe(() => {
      this.getCats();
    });
  }

  getCats(): void {
    this.cats = this._animals.getCats();
  }

  selectCat(cat: Animal): void {
    this._petService.selectPet(cat);
  }
}
