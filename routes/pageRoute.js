const express = require('express');
const pageController = require('../controllers/pageController');
const redirectMiddleWare = require('../middlewares/redirectMiddleWare');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/register').get(redirectMiddleWare, pageController.getRegisterPage);
router.route('/login').get(redirectMiddleWare, pageController.getLoginPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/contact').post(pageController.sendEmail);

module.exports = router;

