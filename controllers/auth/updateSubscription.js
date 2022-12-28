const { User } = require('../../models/user');

const updateSubscription = async (req, res, next) => {
  const { _id } = req.user;
  const { subscription = 'starter' } = req.body;
  await User.findByIdAndUpdate(_id, { subscription });
  res.json({ message: `Subscription updated to ${subscription}` });
};
module.exports = updateSubscription;
