import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>Dashboard Officina</h2>

      <div style="display: flex; gap: 20px; margin-bottom: 20px;">
        <div class="stat-card">
          <h3>{{clienti.length}}</h3>
          <p>Clienti Totali</p>
        </div>
        <div class="stat-card">
          <h3>{{veicoli.length}}</h3>
          <p>Veicoli Registrati</p>
        </div>
      </div>

      <button class="btn" (click)="caricaDati()">Aggiorna Dati</button>
    </div>
  `,
  styles: [`
    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
      min-width: 120px;
    }
    .stat-card h3 {
      font-size: 2em;
      margin: 0;
      color: #007bff;
    }
    .stat-card p {
      margin: 5px 0 0 0;
      color: #666;
    }
  `]
})
export class Dashboard implements OnInit {
  clienti: any[] = [];
  veicoli: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
  }

  caricaDati() {
    this.apiService.getClienti().subscribe(clienti => this.clienti = clienti);
    this.apiService.getVeicoli().subscribe(veicoli => this.veicoli = veicoli);
  }
}
