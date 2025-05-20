import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production"){
    globalThis.prisma=db;
}

//gobalThis.prisma : This globaal variable ensures that the prisma client instance is 
//reused across hot reloads during development. Without this, each time your application
//reloads, a new instance of the prism client would be created, potentially leading to connection issues