import { PrismaClient } from '@prisma/client';

const prismaClientDatabase = new PrismaClient();

export async function handler (event) {
    try {
        const result = await prismaClientDatabase.user.findMany()

        return {
            statusCode: 200,
            body: JSON.stringify({ result })
        };
    } catch (error) {
        console.error('Error creating user:', error)

        return {
          statusCode: 500,
          body: JSON.stringify({ error: error.message }),
        }
      }
}