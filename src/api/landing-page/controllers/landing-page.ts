/**
 * landing-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::landing-page.landing-page",
  ({ strapi }) => ({
    async hello(ctx) {
      try {
        return { date: new Date(), status: true };
      } catch (err) {
        ctx.body = err;
      }
    },
    async find(ctx) {
      // some custom logic here
      ctx.query = { ...ctx.query, local: "en" };

      // Calling the default core action
      const { data, meta } = await super.find(ctx);

      // some more custom logic
      meta.date = Date.now();

      return { data, meta };
    },
  })
);
