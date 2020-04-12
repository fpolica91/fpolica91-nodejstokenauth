const Watch = require('../Models/Watch')

// ALL MONGOOSE METHODS WILL BE DONE IN CONTROLLERS,
// find, findbyid,findOne, findandupdate will be in contollers

class WatchController {
  async index(req, res) {
    const watches = await Watch.find({})
  }

  // STORE BY DEFAULT IS TO CREATE AN ITEM, IN THIS CASE A WATCH
  async store(req, res) {
    try {
      const { brand, model, material, picture } = req.body
      console.log(req.body)
      const watch = await Watch.create({
        brand,
        model,
        material,
        picture,
      })

      return res.json(watch)
    } catch (err) {
      return res.json(err)
    }
  }
  // THIS IS WHERE WE UPDATE THE WATCH MODEL
  async update(req, res) {}
  // THIS IS WHERE WE DELETE THE WATCH
  async delete(req, res) {}
}

module.exports = new WatchController()
