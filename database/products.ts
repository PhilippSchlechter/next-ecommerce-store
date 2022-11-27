import { sql } from './connect';

export type Products = {
  id: number;
  name: string;
  type: string;
  size: string;
  price: number;
};

export async function getProductById(id: number) {
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
