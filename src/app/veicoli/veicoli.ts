import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-veicoli',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './veicoli.html',
  styleUrl: './veicoli.css'
})
export class Veicoli implements OnInit {
  veicoli: any[] = [];
  nuovoVeicolo = { targa: '', marca: '', modello: '', anno: null, proprietarioId: null };
  clienti: any[] = [];
  salvandoVeicolo = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.caricaVeicoli();
    this.caricaClienti();
  }

  caricaVeicoli() {
    this.apiService.getVeicoli().subscribe(veicoli => this.veicoli = veicoli);
  }

  caricaClienti() {
    this.apiService.getClientiDropdown().subscribe(clienti => this.clienti = clienti);
  }

  aggiungiVeicolo() {
    if (this.salvandoVeicolo) return;

    if (this.nuovoVeicolo.targa && this.nuovoVeicolo.marca && this.nuovoVeicolo.modello && this.nuovoVeicolo.anno && this.nuovoVeicolo.proprietarioId) {
      this.salvandoVeicolo = true;
      this.apiService.salvaVeicolo(this.nuovoVeicolo).subscribe({
        next: (veicolo) => {
          this.veicoli.push(veicolo);
          this.nuovoVeicolo = { targa: '', marca: '', modello: '', anno: null, proprietarioId: null };
          this.salvandoVeicolo = false;
        },
        error: (error) => {
          console.error('Errore nel salvataggio veicolo:', error);
          this.salvandoVeicolo = false;
        }
      });
    }
  }
}
