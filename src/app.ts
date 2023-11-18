import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/students/student.routes';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/V1/students', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  const ac = 40;

  res.send(ac);
});

export default app;
