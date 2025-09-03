import { Router } from 'express';
import {
  getAllIdeas,
  getSingleIdea,
  createIdea,
  deleteIdea,
  updateIdea,
} from '../controllers/ideaControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/').get(getAllIdeas).post(protect, createIdea);

router
  .route('/:id')
  .get(getSingleIdea)
  .put(protect, updateIdea)
  .delete(protect, deleteIdea);

export default router;
