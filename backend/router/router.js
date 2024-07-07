const router = require('express').Router();
const User = require('../models/user');

router.post('/insert', (req, res)=>{
    const {name} = req.body;
    const {email} = req.body;
    const {pass} = req.body;
   const record =  new User({username:name, email:email, password:pass});
   record.save();

    res.json({message:"sucessfully inserted"});

})

router.get('/fetch', async(req, res)=>{
   try {
    const record = await User.find()
    res.json(record);
   } catch (error) {
        console.log(error);
   }
})

router.delete('/delete/:id', async(req, res)=>{
   const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.json({message: "succesfully deleted"});

})

router.get('/fetchuser/:id', async(req, res)=>{
    const id = req.params.id;
    const record = await User.findById(id);
    res.json(record);
})

router.put('/updateuser/:id', async(req, res)=>{
    const id = req.params.id;
    const {name, email, pass} = req.body
   await User.findByIdAndUpdate(id, {username:name, email:email, password:pass});
   res.json({message:'Update successfully'});

})


module.exports = router;