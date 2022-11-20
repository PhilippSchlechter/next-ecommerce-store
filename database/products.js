import { sql } from './connect';

export async function getProductById(id) {
  const [product] = await sql`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
}
