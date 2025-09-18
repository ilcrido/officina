import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ordini-lavoro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ordini-lavoro.html',
  styleUrl: './ordini-lavoro.css'
})
export class OrdiniLavoro implements OnInit {
  ordini: any[] = [];
  veicoli: any[] = [];
  meccanici: any[] = [];
  ordineSelezionato: any = null;

  nuovoOrdine = {
    veicolo: { id: null },
    meccanico: { id: null },
    note: '',
    stato: 'IN_CORSO',
    totale: 0
  };

  nuovoLavoro = {
    descrizione: '',
    pezzo: '',
    prezzo: null,
    ordineLavoro: { id: null }
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.caricaDati();
  }

  caricaDati() {
    this.apiService.getOrdini().subscribe(ordini => this.ordini = ordini);
    this.apiService.getVeicoli().subscribe(veicoli => this.veicoli = veicoli);
    this.apiService.getMeccanici().subscribe(meccanici => this.meccanici = meccanici);
  }

  creaOrdine() {
    if (this.nuovoOrdine.veicolo.id && this.nuovoOrdine.meccanico.id) {
      this.apiService.salvaOrdine(this.nuovoOrdine).subscribe(ordine => {
        this.ordini.unshift(ordine);
        this.nuovoOrdine = {
          veicolo: { id: null },
          meccanico: { id: null },
          note: '',
          stato: 'IN_CORSO',
          totale: 0
        };
      });
    }
  }

  selezionaOrdine(ordine: any) {
    this.ordineSelezionato = ordine;
    this.nuovoLavoro.ordineLavoro.id = ordine.id;
  }

  aggiungiLavoro() {
    if (this.nuovoLavoro.descrizione && this.nuovoLavoro.pezzo && this.nuovoLavoro.prezzo) {
      this.apiService.salvaLavoro(this.nuovoLavoro).subscribe(lavoro => {
        // Ricarica gli ordini per vedere il totale aggiornato
        this.caricaDati();
        this.annullaLavoro();
      });
    }
  }

  annullaLavoro() {
    this.ordineSelezionato = null;
    this.nuovoLavoro = {
      descrizione: '',
      pezzo: '',
      prezzo: null,
      ordineLavoro: { id: null }
    };
  }
}
