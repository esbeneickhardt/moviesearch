import weaviate from 'weaviate-ts-client';

const client = weaviate.client({
  scheme: 'http',
  host: 'localhost',
  port: 8080,
});

const response = await client.graphql
  .get()
  .withClassName('JeopardyQuestion')
  .withFields('question answer points')
  .do();
console.log(response);