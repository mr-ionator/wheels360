/** @type { import("drizzle-kit").Config} */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url:'postgresql://wheels360_owner:gP1yW0zIXJQR@ep-shiny-tooth-a1jx0j0q.ap-southeast-1.aws.neon.tech/wheels360?sslmode=require',
    }
};
