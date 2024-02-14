import { Injectable } from '@angular/core';
import { Shelter } from '../../models/shelter/shelter';
import { CollectionReference, Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  private _shelters: CollectionReference<Shelter>;
  private _arrShelters$: Observable<Shelter[]>;

  constructor(private _firestore: Firestore) {
    this._shelters = collection(this._firestore, 'shelter') as CollectionReference<Shelter>;
    this._arrShelters$ = this.collectData();
  }

  collectData(): Observable<Shelter[]> {
    return collectionData(this._shelters);
  }
  
  insertData(shelter: Shelter): void {
    addDoc(this._shelters, shelter).then(
      (doc) => {
        console.log(doc);
      }
    ).catch(
      (error: any) => {
        console.log(error);
      }
    ).finally(() => {});
  }

  getShelters(): Observable<Shelter[]> {
    return this._arrShelters$;
  }

}
