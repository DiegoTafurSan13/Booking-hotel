const router = require('express').Router();

const response = require('../../network/response');
const controller = require('./controller');

router.get('/',(req,res) =>{
    const name = req.query.name;
    controller.get(name)
    .then(data => response.success(req,res,data,200))
    .catch(err => response.error(req,res,err,400));
});

router.post('/',(req,res) =>{
    const user = req.body;
    controller.add(user)
    .then(data => response.success(req,res,data,200))
    .catch(err => response.error(req,res,err,400));
});

router.patch('/:id',(req,res)=>{
    const id = req.params.id;
    const user = req.body;

    controller.update(id,user)
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