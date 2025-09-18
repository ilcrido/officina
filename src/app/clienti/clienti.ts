import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-clienti',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clienti.html',
  styleUrl: './clienti.css'
})
export class Clienti implements OnInit {
  clienti: any[] = [];
  nuovoCliente = { nome: '', cognome: '', telefono: '' };
  salvandoCliente = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.caricaClienti();
  }

  caricaClienti() {
    this.apiService.getClienti().subscribe({
      next: (clienti) => {
        this.clienti = clienti;
      },
      error: (error) => {
        console.error('Errore nel caricamento clienti:', error);
      }
    });
  }

  aggiungiCliente() {
    if (this.salvandoCliente) return;

    if (this.nuovoCliente.nome && this.nuovoCliente.cognome && this.nuovoCliente.telefono) {
      this.salvandoCliente = true;
      this.apiService.salvaCliente(this.nuovoCliente).subscribe({
        next: (cliente) => {
          this.clienti.push(cliente);
          this.nuovoCliente = { nome: '', cognome: '', telefono: '' };
          this.salvandoCliente = false;
        },
        error: (error) => {
          console.error('Errore nel salvataggio cliente:', error);
          this.salvandoCliente = false;
        }
      });
    }
  }
}
