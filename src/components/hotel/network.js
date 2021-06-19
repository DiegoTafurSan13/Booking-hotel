const router = require('express').Router();

const controller = require('./controller');
const response = require('../../network/response');

router.get('/',(req,res)=>{
    const filter ={
        name:req.query.name || null,
        localization:req.query.localization || null,
        calification:req.query.calification || null
    };
    controller.get(filter)
    .then(data => response.success(req,res,data,200))
    .catch(err => response.error(req,res,err,400));
});

router.post('/',(req,res)=>{
    const hotel = req.body;
    controller.add(hotel)
    .then(data => response.success(req,res,data,200))
    .catch(err => response.error(req,res,err,400));
});

router.patch('/:id',(req,res)=>{
    const id = req.params.id;
    const hotel = req.body;

    controller.update(id,hotel)
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
