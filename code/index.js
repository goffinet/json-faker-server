const faker = require('faker');

let database = { posts: []};
const threshold = 1000;

for (let id = 1; id<= threshold; id++) {
  database.posts.push({
    id: id,
    author: faker.name.firstName() + " " + faker.name.lastName(),
    title: faker.lorem.sentence(),
    slug: faker.lorem.slug(),
    description: faker.lorem.sentences(),
    content: faker.lorem.paragraphs()
  });
}

console.log(JSON.stringify(database));
