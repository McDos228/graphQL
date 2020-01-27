const TypeUser = require("../../types/user");
const User = require('../../../models/User');
const { SECRET } = require('../../../config');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const documentation = '"""Return token for registred users"""';

const mutationName = "login";

const mutation = `${documentation} ${mutationName} (
    username: String
    password: String
): String`;

const resolverFunction = async (parentValue, args, ctx, info) => {
  try {
    const user = await User.findOne({username: args.username});
    if(!user) throw new Error('no user found')
    else {

        if(bcryptjs.compareSync(args.password, user.password)){
          let token = jwt.sign({
            username : user.username,
          }, SECRET)

          return token
        }
        
    }

  } catch (error) {
    throw new Error(error.message);
  }
};

const resolver = { [mutationName]: resolverFunction };

module.exports = { resolver, mutation };