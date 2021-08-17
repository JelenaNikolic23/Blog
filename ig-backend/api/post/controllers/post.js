"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);

      if (!data) {
        ctx.throw(400, "Please add some content");
      }

      if (!files || !files.lenght) {
        ctx.throw(400, "Please add at least a file");
      }
      entity = await strapi.services.restaurant.create(
        { ...data, likes: 0 },
        { files }
      );
    } else {
      ctx.throw(400, "You must submit a multipart request");
    }
    return sanitizeEntity(entity, { model: strapi.models.restaurant });
  },
};
