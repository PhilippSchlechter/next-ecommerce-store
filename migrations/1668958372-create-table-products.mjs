export async function up(sql) {
  await sql`
  CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(40) NOT NULL,
  type varchar(40) NOT NULL,
  size varchar(40) NOT NULL,
  price integer NOT NULL
  )`;
}

export async function down(sql) {
  await sql`
  DROP TABLE products
  `;
}
