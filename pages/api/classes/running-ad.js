import userAuth from '../../../middleware/userAuth';

import connectMongo from '../../../utils/db';
import Class from '../../../models/Class';
import Course from '../../../models/Course';
import Student from '../../../models/Student';

const handler = async (req, res) => {
  const { method } = req;
  console.log('connecting...');
  await connectMongo();
  console.log('connected!');

  if (method === 'GET') {
    try {
      let classes = await Class.find({ status: 'running' })
        .populate('course students')
        .lean();
      let foundId = '';
      console.log(classes.length);
      const adClasses = [];
      classes.forEach((training) => {
        const courseFound = adClasses.find(
          (cl) => cl?.course?._id === training?.course?._id
        );
        if (!courseFound) {
          adClasses.push(training);
        } else {
          foundId = courseFound._id;
          console.log(courseFound);
          courseFound.schedules = [
            {
              name: courseFound.schedule,
              value: courseFound._id,
            },
            {
              name: training.schedule,
              value: training._id,
            },
          ];
          console.log(training);
        }
      });
      // console.log(adClasses.length);
      // console.log(adClasses.find((cl) => cl._id === foundId));
      res.json(adClasses);
    } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
    }
  }
};

export default handler;
// export default userAuth(handler)
