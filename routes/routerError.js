import Router from 'express';

const router = Router();

router.all('/', (req, res, next) => res.status(404).json({
    "error": "This route does not exist."
}));

export default router;