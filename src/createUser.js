import { PrismaClient } from '@prisma/client';

const prismaClientDatabase = new PrismaClient();

export async function handler (event) {
    const { email, username, password } = JSON.parse(event.body);

    try {
        const result = await prismaClientDatabase.user.create({
            data: {
                email,
                username,
                password
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };
    } catch (error) {
        console.error('Error creating user:', error)

        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
}