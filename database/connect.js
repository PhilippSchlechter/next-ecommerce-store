import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

export async function getProducts() {
  const products = await sql`
  SELECT * FROM products;
`;
  return products;
}
export async function getProductById(id) {
  const products = await sql`
  SELECT * FROM products WHERE id = ${id}
  `;
  return products[0];
}
