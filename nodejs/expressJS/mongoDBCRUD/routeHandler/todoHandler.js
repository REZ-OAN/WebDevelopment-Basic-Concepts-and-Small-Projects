// dependencies
const express = require('express');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');
const mongoose = require('mongoose');

// creating a model
// .model(model_name,schema)
// we map object using the model
const Todo = new mongoose.model("Todo",todoSchema); // this returns a class

// get all the todos
router.get('/', async(req,res)=>{
    try {
        // showing the condition based filtering and select keys with limit the doc count
       const queryRes = await Todo.find({status: req.body.status},{_id:0,status:0,__v:0}).limit(3);
        res.status(200).json({
            message: "showing the todos based on status",
            queryresults : queryRes
        });
    } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
});
// GET ACTIVE TODOS
router.get("/active", async (req, res) => {
    try {
        const todo = new Todo();
        const data = await todo.findActive();
        res.status(200).json({
        data,
        });
    } catch {
        res.status(500).json({
            error:"Error at the server side"
        });
    }
  });
// // GET ACTIVE TODOS with callback depricated
// router.get("/active-callback", (req, res) => {
//     const todo = new Todo();
//     todo.findActiveCallBack((err, data) => {
//       res.status(200).json({
//         data,
//       });
//     });
//   });
// get todo by id 
// GET ACTIVE TODOS by some keywords
router.get("/learn", async (req, res) => {
    const data = await Todo.findByJS();
    res.status(200).json({
      data,
    });
  });
  // GET TODOS BY LANGUAGE
router.get("/language", async (req, res) => {
    const data = await Todo.find().byLanguage("react");
    res.status(200).json({
      data,
    });
  });
router.get('/:id',async(req,res)=>{
    
        try {
           
            const queryRes  = await Todo.find({_id: req.params.id},{_id:0,__v:0});
            res.status(200).json({
                message: "Your Requested Data was found",
                queryresult : queryRes
            });
        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
});

// post todo
router.post('/', async(req,res)=>{
        const newTodo = new Todo(req.body);
        try {
            const savedTodo = await newTodo.save(); 
        
            res.status(200).json({
                message: "Todo was inserted successfully!!",
            });
        } catch (err) {
            res.status(500).json({
                error: err,
            });
        }
});
// post multiple todo
router.post('/all',async(req,res)=>{
        try {
            await Todo.insertMany(req.body);
            res.status(200).json({
                message: "Todos were inserted successfully!!",
            });
        } catch (err) {
                res.status(500).json({
                    error: err.message
                });
            }
        
});
// update todo
router.put('/:id',async(req,res)=>{
    try {
        // updateOne only updates the document does not return the prev document
        // if we want to do so 
        // then have to use findByIdAndUpdate
        // await Todo.updateOne({_id:req.params.id},{$set:{...req.body}});
        // also if we want to get the updated document then use the third parameter and new : true kore dibo
        const queryRes = await Todo.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}},{new:true});
        res.status(200).json({
            message: "Todo updated successfully!!",
            queryresults : queryRes
        });
    } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
});

// delete todo
router.delete('/:id',async(req,res)=>{
    try {
           
        const queryRes  = await Todo.findByIdAndDelete({_id: req.params.id},{_id:0,__v:0});
        res.status(200).json({
            message: "Your Requested Data was found and Deleted",
            deleteddata : queryRes
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// exporting the router
module.exports = router;


