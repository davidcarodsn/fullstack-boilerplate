import { Router } from "express";
import { getExample } from '../controllers/example';

const router = Router();

router.get('/', getExample)

export default router;
