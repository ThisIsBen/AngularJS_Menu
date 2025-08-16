import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private socket: Socket;
  private apiUrl = 'http://localhost:3000/api/orders/soup';

  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:3000');
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }

  onNewOrder(callback: (message: any) => void): void {
    this.socket.on('KD', callback);
  }
}