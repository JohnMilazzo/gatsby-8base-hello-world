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
        fieldName: 'eightbase',
        // URL to query from
        // url: process.env.GQL_8BASE_API_URL
        url: 'https://api.8base.com/ck05he86w000h01jog3t41414'
      }
    }
  ]
};
