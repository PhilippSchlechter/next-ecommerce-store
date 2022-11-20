/* ERROR:
Failed to parse: syntax error at or near "$1".typescript-sql-tagged-template-plugin(100001) */
const products = [
  {
    name: '#1',
    type: 'Poster',
    size: '50 x 50',
    price: 111,
  },
  {
    name: '#2',
    type: 'Poster',
    size: '50 x 50',
    price: 111,
  },
  {
    name: '#3',
    type: 'Poster',
    size: '50 x 50',
    price: 111,
  },
  {
    name: '#4',
    type: 'Poster',
    size: '50 x 50',
    price: 111,
  },
];

export async function up(sql) {
  await sql`
    INSERT INTO
      products
      ${sql(products, 'name', 'type', 'size', 'price')}
  `;
}

export async function down(sql) {
  for (const product of products) {
    await sql`
      DELETE FROM
        products
      WHERE
        name = ${product.name} AND
        type = ${product.type} AND
        size = ${product.size} AND
        price = ${product.price}
    `;
  }
}
