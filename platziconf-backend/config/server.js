module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3006),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2e3e90aa092a61f1c1f604569e4b145d'),
    },
  },
});
