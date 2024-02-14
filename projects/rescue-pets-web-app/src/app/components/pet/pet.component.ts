// pet.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from 'RescuePetsCoreLib';
import { AnimalsService } from 'RescuePetsCoreLib';
import { Animal } from 'RescuePetsCoreLib';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  selectedPet: Animal | null = null;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.selectedPet = this.animalsService.getAnimalByName(name) || null;
      this.petService.selectPet(this.selectedPet);
    });
  }
}
