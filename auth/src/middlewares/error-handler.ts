import {NextFunction, Request, Response} from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): any => {
    if (err) {
        return res.status(500).send({errors: err});
    }
   next();
}
