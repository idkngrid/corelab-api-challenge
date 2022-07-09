import { Router } from 'express';

import VehicleController from './controllers/VehicleController';

const router = Router();

router.post("/add", VehicleController.createVehicle);
router.get("/vehicles", VehicleController.getAllVehicles);
router.put("/vehicle/:id", VehicleController.updateVehicle);
router.delete("/vehicle/:id", VehicleController.deleteVehicle);

export { router };