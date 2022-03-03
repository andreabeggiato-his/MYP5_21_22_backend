import expressInitializer from './initializers/express.js';
import mongooseInitializer from './initializers/mongoose.js';

await mongooseInitializer();
const app = await expressInitializer();

app.listen(() => {
  console.log('Backend started');
});
