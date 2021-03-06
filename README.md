# Web DB II Module Challenge

In this challenge, you will write an API that can be used to manage _Cars_ stored in a Relational Database.

## Minimum Viable Product

- Using `knex migrations`, design and write a schema for the `cars` table using the specifications below.
- Configure `knex` to connect to a `/data/car-dealer.db3` database using the `sqlite3` npm module.
- Write a set of endpoints to support `CREATE` and `READ` operations on the `cars` resource.
- Use a rest client like _Insomnia_ or _Postman_ to test your API.
- Add seed data to the database using `knex seeds`
- Add `UPDATE` and `DELETE` operations to your API.
- Write a schema file for a `sales` table. This table should track information on the sale of each car. You may wish to research `foreign keys` in order to link each sale to the entry in `cars` which sold.

## Specifications

The client for this API is a car dealer who has provided the following specs:

- The critical information for each car is the VIN, make, model, and mileage.
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.
