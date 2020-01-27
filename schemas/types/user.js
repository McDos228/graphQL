const type = "User";

const documentation = `"""User type"""`;

const typeDef = `${documentation}
type ${type} {
  id: ID
  username: String
  password: String
}`;

module.exports = {
  type,
  typeDef
};