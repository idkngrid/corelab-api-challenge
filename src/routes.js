import { Router } from 'express';

import UserController from './controllers/UserController';

const router = Router();

router.post("/vehicle", UserController.createVehicle);
router.get("/vehicles", UserController.getAllVehicles);
router.put("/vehicle/:id", UserController.updateVehicle);
router.delete("/vehicle/:id", UserController.deleteVehicle);

export { router };