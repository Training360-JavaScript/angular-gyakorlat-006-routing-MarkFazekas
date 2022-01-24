import { Injectable } from '@angular/core';
import {Event} from "../model/event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[]{
    return [
      {name: "A buddhizmus lélektana és spiritualitása", date: "2021.09.25", time: "9:00", location: {address: "Gellért Hotel - Teaszalon", city: "Budapest", country: "Hungary"}},
      {name: "VIZSGA", date: "2022.01.29", time: "9:00", location: {address: "Testnevelési Egyetem", city: "Budapest", country: "Hungary"}},
      {name: "Pszichoterápiás alapismeretek", date: "2022.02.05", time: "9:30", location: {address: "Courtyard Marriott Hotel", city: "Budapest", country: "Hungary"}},
    ];
  }
}
