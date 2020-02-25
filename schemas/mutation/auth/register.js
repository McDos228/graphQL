const TypeUser = require("../../types/user");
const User = require('../../../models/User');
const bcryptjs = require('bcryptjs');
const salt = bcryptjs.genSaltSync(10);

const documentation = '"""Return token for registred users"""';

const mutationName = "register";

const mutation = `${documentation} ${mutationName} (
    username: String
    password: String
): ${TypeUser.type}`;

const resolverFunction = async (parentValue, args, ctx, info) => {
    try {
        const user = await User.findOne({username: args.username});

        if(user) throw new Error('user with this username already exist');
        else {
            const pass = bcryptjs.hashSync(args.password, salt)

            return await User.create({
                username: args.username,
                password: pass
            })
        }

    } catch (error) {
        throw new Error(error.message);
    }
};

const resolver = { [mutationName]: resolverFunction };

module.exports = { resolver, mutation };