import { Injectable } from '@angular/core';
import { Ami } from '../model/ami.model';

@Injectable({
  providedIn: 'root'
})
export class AmiService {
  supprimer(id: number) {
    throw new Error('Method not implemented.');
  }
  amis : Ami[] = [
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

  getAllAmis(): Ami[] {
    return this.amis;
  }

  getAmiById(amiId: number): Ami {
    
    const ami = this.amis.find(ami => ami.id === amiId);
    if(!ami){
      throw new Error("ami non existant");
    }else{
      return ami;
    }
  }



}
