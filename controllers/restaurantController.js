const {Restaurant} = require('../models');
const categories = ['Italian', 'Fast Food'];

module.exports.viewAll = async function(req, res, next) {
    const restaurants = await Restaurant.findAll();
    res.render('index', {restaurants});
};

module.exports.renderEditForm = async function(req, res, next) {
    const restaurant = await Restaurant.findByPk(
        req.params.id
    );
    res.render('edit', {restaurant, categories});
};

module.exports.updateResturant = async function(req, res) {
  await Restaurant.update(
      {
          name: req.body.name,
          category: req.body.category,
          rating: req.body.rating,
          image: req.body.image,
          description: req.body.description
      },
      {
          where:{
              id:req.params.id
          }
      });
  res.redirect('/');
};

module.exports.deleteRestaurant = async function(req, res){
    await Resturant.destroy(
        {
            where:{
                id: req.params.id
            }
        });
    res.redirect('/');
};
/*[ {
        id: 1,
        name: 'Pizza Hut',
        image: 'https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0K-ng4JYb_4WwRI/1900x1427.jpg',
        rating: 2,
        category: 'Italian',
        description: 'asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl'
    },
    {
        id: 2,
        name: 'Chipotle',
        image: 'https://d1ralsognjng37.cloudfront.net/afb087dc-e5f1-47ef-96ce-f84dbfa5c6fa.jpeg',
        rating: 4,
        category: 'Mexican',
        description: 'asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl'
    }]*/