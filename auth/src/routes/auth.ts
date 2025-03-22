import express from "express";

const authRouter = express.Router();

authRouter.get('/currentuser', (req, res) => {
    res.send('Hi there');
})

authRouter.post('/signup', (req, res) => {
    res.send('Hi there');
})

authRouter.post('/signin', (req, res) => {
    res.send('Hi there');
})

authRouter.post('/signout', (req, res) => {
    res.send('Hi there');
})

export default authRouter;
