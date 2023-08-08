
const connection = require('../Config/connection');
const thoughts = require('../Models/thought');

const user = require('../Models/user');
const thoughtsSeed = require('./thoughtsData');

const usersSeed = require('./userData');



connection.on('error', (err) => {
  console.error(err);
});

connection.once('open', async () => {
  console.log('Seeds Connected');

  try {
    await thoughts.deleteMany({});
    await user.deleteMany({});


    await thoughts.insertMany(thoughtsSeed);
   
    await user.insertMany(usersSeed);

    console.log(await thoughts.find({}));

    console.log(await user.find({}));

    console.info('Database Seeded');
  } catch (error) {
    console.error(error);
  }

  process.exit(0);
});


