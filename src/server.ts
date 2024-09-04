import app from './app';
import { PORT } from './config';
// initialize database
import './database';

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});

export default app;
