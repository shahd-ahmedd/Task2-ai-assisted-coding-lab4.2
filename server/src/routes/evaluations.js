import express from 'express';
import {
  getAllEvaluations,
  getEvaluation,
  createEvaluation,
  getEvaluationSummary
} from '../controllers/evaluationController.js';

const router = express.Router();

router.route('/')
  .get(getAllEvaluations)
  .post(createEvaluation);

router.get('/summary', getEvaluationSummary);
router.get('/:id', getEvaluation);

export default router;
