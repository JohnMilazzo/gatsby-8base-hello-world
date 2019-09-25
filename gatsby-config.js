require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        //
        // NOTE: THIS CANNOT BEGIN WITH A NUMBER!!
        //
        typeName: 'EIGHTBASE',

        // This is the field under which it's accessible
        // in our queries
        fieldName: 'eightbase',

        // URL to query from
        url: process.env.GQL_8BASE_API_URL
      }
    }
  ]
};
