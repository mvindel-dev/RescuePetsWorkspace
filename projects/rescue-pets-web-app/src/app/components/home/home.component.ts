import { Component, OnInit } from '@angular/core';
import { Shelter } from 'RescuePetsCoreLib';
import { ShelterService } from 'RescuePetsCoreLib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public shelters: Shelter[] = [];

  constructor(private _shelter: ShelterService) {}

  ngOnInit(): void {
    this._shelter.getShelters().subscribe(shelters => {
      this.shelters = shelters;
    });
  }

}
