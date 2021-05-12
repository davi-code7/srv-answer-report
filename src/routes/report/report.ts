import { Router } from 'express';

import { report } from '../../controllers/report/report';

const router = Router();

router.post('', report);

export default router;
