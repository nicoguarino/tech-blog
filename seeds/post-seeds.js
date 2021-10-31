const { Post } = require('../models');

// Pulled from Module 14 snap shot for testing
const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    body: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png'
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    body: 'https://nasa.gov/donec.json'
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    body: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx'
  },
  {
    title: 'Nunc purus.',
    body: 'http://desdev.cn/enim/blandit/mi.jpg'
  },
  {
    title: 'Pellentesque eget nunc.',
    body: 'http://google.ca/nam/nulla/integer.aspx'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    body: 'https://stanford.edu/consequat.png'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: 'http://edublogs.org/non/ligula/pellentesque.js'
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    body: 'http://ucla.edu/consequat/nulla.html'
  },
  {
    title: 'Duis ac nibh.',
    body: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx'
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    body: 'https://reverbnation.com/ligula/sit.jpg'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: 'http://china.com.cn/lectus/vestibulum.json'
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    body: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json'
  },
  {
    title: 'Donec dapibus.',
    body: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml'
  },
  {
    title: 'Nulla tellus.',
    body: 'https://lycos.com/natoque/penatibus/et.html'
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    body: 'https://gmpg.org/lorem.jpg'
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    body: 'https://paginegialle.it/mattis/egestas.jsp'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: 'http://wikia.com/turpis/eget.jpg'
  },
  {
    title: 'Etiam justo.',
    body: 'https://shareasale.com/quis.json'
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    body: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png'
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    body: 'https://java.com/at/nibh/in.png'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
