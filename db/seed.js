import { faker } from "@faker-js/faker";
import db from "./client.js";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 10; i++) {
    const employee = {
      name: faker.book.title(),
      birthday: faker.date.between({
        from: "1980-01-01T00:00:00.000Z",
        to: "2001-01-01T00:00:00.000Z",
      }),
      salary: faker.number.int({ min: 30000, max: 60000 }),
    };

    await createEmployee(employee);
  }
}
