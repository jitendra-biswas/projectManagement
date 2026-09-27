import {PrismaClient} from "@/app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

const connectionString = process.env.DATABASE_URL

const adapter = new PrismaPg({
    connectionString,
})

const globalForPrisma = globalThis as unknown as ({
    Prisma : PrismaClient | undefined,
})

export const prisma = globalForPrisma.Prisma ?? new PrismaClient ({
    adapter,
})


if(process.env.NODE_ENV === 'production'){
    globalForPrisma.Prisma = prisma
}