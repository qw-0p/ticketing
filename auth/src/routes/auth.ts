import express, {Request, Response} from "express";
import {body} from 'express-validator';

const authRouter = express.Router();


authRouter.get('/currentuser', (req, res) => {
    res.send('Hi there');
})

authRouter.post('/signup', [
   body('email').isEmail().withMessage('Email must be valid'),
   body('password').trim().isLength({min: 4, max: 20}).withMessage('Password must be between 4 and 20 characters')
],(req: Request, res: Response) => {
    const {email, password} = req.body;

    if (!email || typeof email !== 'string') {
        res.status(400).send('email is required');
    }

})

authRouter.post('/signin', (req, res) => {
    res.send('Hi there');
})

authRouter.post('/signout', (req, res) => {
    res.send('Hi there');
})

export default authRouter;
