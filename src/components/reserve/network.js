const router = require('express').Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/',(req,res)=>{
    let filter = {
        idReserve : req.query.idReserve || null,
        entry     : req.query.entry || null,
        idUser    : req.query.idUser || null
    };
    controller.get(filter)
    .then(data => response.success(req,res,data,200))
    .catch(err => response(req,res,err,400))
});

router.post('/',(req,res)=>{
    const reserve = req.body;
    controller.add(reserve)
    .then(data => response.success(req,res,data,200))
    .catch(err => response(req,res,err,400))
});

router.patch('/:id',(req,res)=>{
    const id = req.params.id;
    const reserve = req.body;
    controller.update(id,reserve)
    .then(data => response.success(req,res,data,200))
    .catch(err => response(req,res,err,400))
});

router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    controller.delete(id)
    .then(data => response.success(req,res,data,200))
    .catch(err => response(req,res,err,400))
})

module.exports = router;