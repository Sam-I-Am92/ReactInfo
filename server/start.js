// import app server
import app from './index.js';
import 'dotenv/config';

// launch server and listen on specified port
app.listen(process.env.PORT, () => {
    console.log(`Express server listening on port ${process.env.PORT}!`);
  });