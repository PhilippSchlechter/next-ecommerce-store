import { config } from 'dotenv-safe';
import postgres from 'postgres';

// loads all environment variables from .env file
// for all code after this line
if (!process.env.FLY_IO) config();

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Connect only once to the database
function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }
  return globalThis.postgresSqlClient;
}
// Connect to postgres
export const sql = connectOneTimeToDatabase();

export async function getProducts() {
  const products = await sql`
  SELECT * FROM products;
`;
  return products;
}
export async function getProductById(id: number) {
  const [product] = await sql`
  SELECT * FROM products WHERE id = ${id}
  `;
  return product;
}
