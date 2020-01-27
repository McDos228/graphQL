const type = "Todo";

const documentation = `"""Todo type"""`;

const typeDef = `${documentation}
type ${type} {
  id: ID
  title: String
  status: String
}`;

module.exports = {
  type,
  typeDef
};