const express = require('express');
const courseController = require('../controllers/courseController');
const roleMiddleWare = require('../middlewares/roleMiddleWare');

const router = express.Router();

router.route('/').post(roleMiddleWare(["teacher", "admin"]), courseController.createCourse);
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);

module.exports = router;

