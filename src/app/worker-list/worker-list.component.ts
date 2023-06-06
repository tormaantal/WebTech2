import { Component } from '@angular/core';
import { Worker } from '../models/Worker';
import { Router } from '@angular/router';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent {
  workers!: Worker[];

  constructor(private router: Router,
    private workerService: WorkerService){ }

  async ngOnInit() {
    this.workers = await this.workerService.getAll();
  }  

  async deleteWorker(id: number){
    await this.workerService.delete(id);
    this.workers = await this.workerService.getAll();
  }
}
