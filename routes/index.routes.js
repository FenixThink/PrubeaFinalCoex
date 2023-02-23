import { Router } from 'express'
const router = Router();

router.get('/', function(req, res, next) {
    res.render('index');
  });
  
  router.get('/register', function(req, res, next) {
    res.render('register');
  });
  
  router.get('/home', function(req, res, next) {
    res.render('home');
  });
  router.get('/update', function(req, res, next) {
    res.render('update');
  });
  
  export default router