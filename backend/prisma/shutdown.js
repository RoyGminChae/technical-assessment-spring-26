import { prisma } from './prisma.js';

export default async function gracefulShutdown() {
    try {
        await prisma.$disconnect();
        console.log('Prisma disconnected.');
        process.exit(0);
    } catch (err) {
        console.error('Error disconnecting Prisma:', err);
        process.exit(1);
    }
}
