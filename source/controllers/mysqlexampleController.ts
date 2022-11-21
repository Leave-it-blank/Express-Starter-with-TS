/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
//@ts-ignore
import { PrismaClient } from '@prisma/client'


const mysql_example = async (req: Request, res: Response, next: NextFunction) => {
    const prisma = new PrismaClient()
    async function main() {
        // ... you will write your Prisma Client queries here
        //example
        const user = await prisma.user.create({
            data: {
                name: 'Alice',
                email: 'alice@prisma.io',
            },
        })
        console.log(user)

        //get user record
        const users = await prisma.user.findMany()
        console.log(users)

        
    }

    main()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })


    return res.status(200).json({
        message: "mysql"
    });
};
export default { mysql_example };