const database = require("../models");
const { Op } = require("sequelize");

class LatestStreetMarketController {

static async GetAllProductsFromtheHomePage(req, res) {
    try {
        const allProductsOfProviders = await database.Products.findAll(
            { attributes: [
                [ 'id', 'id' ],
                [ 'name', 'name' ],
                [ 'photo_url', 'image' ],
                [ 'type_frontend_attribute', 'type' ],
                [ 'alt_frontend_attribute', 'alt' ],
                [ 'product_weight', 'subtitle' ]],
            where: { provider_id: { [Op.or]: [1 , 2] } },
            }
        )
            ;
        return res.status(200).json(allProductsOfProviders);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}
}

module.exports = LatestStreetMarketController;