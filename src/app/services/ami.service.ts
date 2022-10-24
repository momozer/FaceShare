import { Injectable } from '@angular/core';
import { Ami } from '../model/ami.model';

@Injectable({
  providedIn: 'root'
})
export class AmiService {
  ami : Ami[] = [
    {
      id : 1,
      prenom: "Hervé",
      nom : "Snapshet"
    },
    {
      id : 2,
      prenom: "Jean",
      nom : "Valjean"
    },
    {
      id : 3,
      prenom: "Antoine",
      nom : "Fissort"
    }
  ]

  constructor() { }
}
