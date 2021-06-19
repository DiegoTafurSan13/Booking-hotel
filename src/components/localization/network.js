const router = require('express').Router();
const Controller = require('./controller');
const Response = require('../../network/response');

router.get('/',(req,res)=>{
    const country = req.query.country || null;
    Controller.get(country)
    .then((data)=>{
        Response.success(req,res,data,200);
    })
    .catch((err)=>{
        Response.error(req,res,err,400);
    });
});
router.post('/',(req,res)=>{
    const localization = {
        country:req.body.country,
        department:req.body.department,
        province:req.body.province,
        district:req.body.district,
    };
    Controller.add(localization)
    .then((data)=>{
        Response.success(req,res,data,200);
    })
    .catch((err)=>{
        Response.error(req,res,err,400);
    });
});
router.patch('/:id',(req,res)=>{
    let localization = req.body;
    Controller.update(req.params.id,localization)
    .then((data)=>{
        Response.success(req,res,data,200);
    })
    .catch((err)=>{
        Response.error(req,res,err,400);
    });

});
router.delete('/:id',(req,res)=>{
    Controller.delete(req.params.id)
    .then((data)=>{
        Response.success(req,res,data,200);
    })
    .catch((err)=>{
        Response.error(req,res,err,400);
    });

});
module.exports = router;