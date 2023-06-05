import { Component } from '@angular/core';
import { WorkerService } from '../services/worker.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Worker } from '../models/Worker';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.scss']
})
export class WorkerFormComponent {
  workerForm: FormGroup = this.formBuilder.group({
    id: [],
    name: ['', Validators.required],
    competence: [''],
    wage: [0, Validators.min(1)],
    status: ['', Validators.required],
  });

  workers!: Worker[]
  errorMessage: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private workerService: WorkerService,
    private router: Router
  ) { }

  get wage(){
    return this.workerForm.get('wage');
  }

  get name(){
    return this.workerForm.get('name');
  }

  get status(){
    return this.workerForm.get('status');
  }

  async create() {
    this.errorMessage = 'ok';
    const worker = this.workerForm.value;
    this.workers = await this.workerService.getAll();
    for (let index = 0; index < this.workers.length; index++) {
      const element = this.workers[index];
      if(element.name === worker.name) {
        this.errorMessage = 'Worker already in database!'
        index = this.workers.length;
      }
    }
    if(this.errorMessage === 'ok'){
      this.workerService.create(worker)
      this.router.navigateByUrl("/worker-list");
    }
    
  }

}
