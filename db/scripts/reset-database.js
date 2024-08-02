import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS superheroes CASCADE;
        DROP TABLE IF EXISTS villains CASCADE;
        DROP TABLE IF EXISTS cities CASCADE;
    `);

    // Create the cities table
    await pool.query(`
        CREATE TABLE cities (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
    `);

    // Create the superheroes table
    await pool.query(`
        CREATE TABLE superheroes (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            superpower VARCHAR(255) NOT NULL,
            city_id INT REFERENCES cities(id),
            weakness VARCHAR(255)
        );
    `);

    // Create the villains table
    await pool.query(`
        CREATE TABLE villains (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            superpower VARCHAR(255) NOT NULL,
            city_id INT REFERENCES cities(id),
            weakness VARCHAR(255)
        );
    `);

    // Seed the cities table
    await pool.query(`
        INSERT INTO cities (name)
        VALUES 
            ('Gotham City'),
            ('Metropolis'),
            ('New York City'),
            ('Wakanda'),
            ('Central City'),
            ('Themyscira');
    `);

    // Seed the superheroes table
    await pool.query(`
        INSERT INTO superheroes (name, superpower, city_id, weakness)
        VALUES 
            ('Batman', 'Intelligence and gadgets', 1, 'No superpowers'),
            ('Superman', 'Flight and super strength', 2, 'Kryptonite'),
            ('Spider-Man', 'Wall-crawling and web-slinging', 3, 'Responsibility'),
            ('Black Panther', 'Enhanced strength and vibranium suit', 4, 'Overconfidence'),
            ('The Flash', 'Super speed', 5, 'Overexertion'),
            ('Wonder Woman', 'Superhuman strength and Lasso of Truth', 6, 'Binding of bracelets by a man');
    `);

    // Seed the villains table
    await pool.query(`
        INSERT INTO villains (name, superpower, city_id, weakness)
        VALUES 
            ('Joker', 'Criminal mastermind', 1, 'Insanity'),
            ('Lex Luthor', 'Genius-level intellect', 2, 'Obsession with Superman'),
            ('Green Goblin', 'Enhanced strength and glider', 3, 'Mental instability'),
            ('Killmonger', 'Enhanced strength and combat skills', 4, 'Arrogance'),
            ('Reverse-Flash', 'Negative Speed Force', 5, 'Paradox'),
            ('Cheetah', 'Superhuman speed and strength', 6, 'Humanity');
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();