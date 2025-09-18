import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8081/api/officina';

  constructor(private http: HttpClient) {}

  // Clienti
  getClienti(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/clienti`);
  }

  salvaCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/clienti`, cliente);
  }

  cercaClienti(termine: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/clienti/cerca/${termine}`);
  }

  // Veicoli
  getVeicoli(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/veicoli`);
  }

  salvaVeicolo(veicolo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/veicoli`, veicolo);
  }

  trovaVeicoloPerTarga(targa: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/veicoli/targa/${targa}`);
  }

  getOrdiniInCorso(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ordini/in-corso`);
  }

  getOrdini(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ordini`);
  }

  salvaOrdine(ordine: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/ordini`, ordine);
  }

  getMeccaniciAttivi(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/meccanici`);
  }

  getOrdiniVeicolo(veicoloId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ordini/veicolo/${veicoloId}`);
  }

  getLavoriOrdine(ordineId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/lavori/ordine/${ordineId}`);
  }

  salvaLavoro(lavoro: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/lavori`, lavoro);
  }

  getClientiDropdown(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/clienti/dropdown`);
  }

  getMeccanici(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/meccanici`);
  }
}
