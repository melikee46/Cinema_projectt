const { PrismaClient } =require("@prisma/client");

//tek bir instanve oluşturuyoruz 
const prisma =new PrismaClient();

//dışarı açıyoruz
module.exports=prisma;