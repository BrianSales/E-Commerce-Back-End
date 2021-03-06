const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: Product

  })
  .then((categories)=>{
    res.json(categories)
  })
  // be sure to include its associated Products

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  const id = req.params.id 
  Category.findByPk(id,{
    include: Product
  })

  .then(category => {
    res.json(category)
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  const category_name = req.body.category_name
  Category.create({category_name})
  .then(category =>{
    res.json(category)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const category_name = req.body.category_name
  const id = req.params.id
  Category.update({category_name},{where:{id}})
  .then(category => {
    res.json(category)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const id = req.params.id
  Category.destroy({
    where:{id}
  })
    .then(category=>{
      res.json(category)
    
  })
});

module.exports = router;
