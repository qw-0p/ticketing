import express from 'express';
import {json} from 'body-parser';

import router from "./routes";
import {errorHandler} from "./middlewares/error-handler";

const app = express();
app.use(json());
app.use('/api', router);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Listening on port 3000!');
})
