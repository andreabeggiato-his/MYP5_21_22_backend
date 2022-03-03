import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://PUTUSERNAME:PASSWORD@firstprojectcluster.iwkq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const init = async () => {
  await mongoose.connect(connectionString);
};

export default init;
