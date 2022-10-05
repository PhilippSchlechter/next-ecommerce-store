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
