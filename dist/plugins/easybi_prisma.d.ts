import { PrismaClient } from '@prisma-clients/easybi';
import Hapi from '@hapi/hapi';
declare module '@hapi/hapi' {
    interface ServerApplicationState {
        prisma: PrismaClient;
    }
}
declare const prismaPlugin: Hapi.Plugin<null>;
export default prismaPlugin;
