import { Injectable } from '@nestjs/common';
import {PrismaClient} from '@prisma/client'
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(private config: ConfigService){
        super({
            datasources:{
                db:{
                    url:'postgresql://admin:123@localhost:5434/koq?schema=public'
                }
            }
        })

        console.log(config.get('DATABASE_URL'))

    }
}

/**
 * REPASANDO LA INSTALACION Y SETUP DE PRISM
 * Instale prisma y prisma client
 * npx prisma init para inicializar las carpetas de prisma
 * setee el string conection para la base de postgres en el .env que se creo
 * Cree los modelos usando la syntaxis de prisma
 * Genere los ts con prisma client > ?? npx prisma generate
 * Cree un servicio que extiende de prisma client y un modulo shared para usarlo en todos lados
 */