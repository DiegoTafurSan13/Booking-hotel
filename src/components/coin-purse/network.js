const router = require('express').Router();

const controller = require('./controller');
const response = require('../../network/response');

router.get('/',(req,res)=>{
    const user = req.query.user;
    controller.get(user)
    .then(data => response.success(req,res,data,200))
    .catch(err => response.error(req,res,err,400));
});

router.post('/',(req,res)=>{
    const coinPurse = req.body;
    controller.add(coinPurse)
    .then(data => response.success(req,res,data,200))
    .catch(err => response.error(req,res,err,400));
});

router.patch('/:id',(req,res)=>{
    const id = req.params.id;
    const coin = req.body;
    controller.update(id,coin)
    .then(data => response.success(req,res,data,200))
    .catch(err => response.error(req,res,err,400));
});

router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    controller.delete(id)
    .then(data => response.success(req,res,data,200))
    .catch(err => response.error(req,res,err,400));
});

module.exports = router;