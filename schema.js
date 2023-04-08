const {gql} = require("graphql-tag")

const typeDefs = gql`
    type Query {
        "Categories query"
        categories: [Category!]!
        "Fetch specific category"
        category(name: String!): Category!
        "Fetch scepific Photo object"
        photoObj( id: ID! ):Data!
    }
    "A specific category"
    type Category{
        _id: ID!
        "Category name"
        name: String!
        "Category Georgian name"
        nameGeo: String!
        "An array of photos Data"
        data: [Data!]!
    }
    "A specific photo object"
    type Data {
        "An id of photo"
        id: ID!
        "A name of photo"
        name: String!
        "A georgian name of photo"
        nameGeo: String!
        "An url of the phto"
        url: String!
    }
`

module.exports = typeDefs