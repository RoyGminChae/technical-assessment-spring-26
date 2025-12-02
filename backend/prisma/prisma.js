import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pkg from 'pg';

const { Pool } = pkg;

// Connect to Prisma Data Platform Postgres DB
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Prisma 7+ Postgres adapter
const adapter = new PrismaPg(pool);

// Export Prisma client instance
export const prisma = new PrismaClient({ adapter });