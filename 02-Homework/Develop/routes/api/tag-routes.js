const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: Product
  })
  .then((tags)=>{
    res.json(tags)
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  const id = req.params.id 
  Tag.findByPk(id,{
    include: Product
  })

  .then(tag => {
    res.json(tag)
  })

  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  const tag_name = req.body.tag_name
  Tag.create({tag_name})
  .then(tag =>{
    res.json(tag)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const tag_name = req.body.tag_name
  const id = req.params.id
  Tag.update({tag_name},{where:{id}})
  .then(tag => {
    res.json(tag)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const id = req.params.id
  Tag.destroy({
    where:{id}
  })
    .then(Tag=>{
      res.json(Tag)
    
  })
});

module.exports = router;
