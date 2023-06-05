import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Worker } from '../models/Worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }

  async getAll(): Promise<Worker[]> {
    return await lastValueFrom(this.http.get<Worker[]>('api/workers'));
  }

  async getWorker(id: number) {
    return await lastValueFrom(this.http.get<Worker>('api/workers/'+ id));
  }

  async create(worker: Worker) {
    return await lastValueFrom(this.http.post<Worker>('/api/workers', worker));
  }

  async delete(id: number){
    return await lastValueFrom(this.http.delete<Worker>('/api/workers/' + id))
  }
}
