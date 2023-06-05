import express from 'express';
import { WorkerController } from './controller/worker.controller';

export function getRoutes() {
    const router = express.Router();

    const workerController = new WorkerController();

    router.get('/workers', workerController.getAll);
    router.get('/workers/:id', workerController.getOne);
    router.post('/workers', workerController.create);
    router.put('/workers', workerController.update);
    router.delete('/workers/:id', workerController.delete);

    return router;
}
