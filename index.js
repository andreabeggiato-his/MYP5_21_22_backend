import expressInitializer from './initializers/express.js';
import passportInitializer from './initializers/passport.js';
import mongooseInitializer from './initializers/mongoose.js';

const port = 4000;

await mongooseInitializer();
await passportInitializer();
const app = await expressInitializer();

app.listen(port, () => {
  console.log('Backend started');
});
