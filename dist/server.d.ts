import Hapi from '@hapi/hapi';
export declare const server: Hapi.Server;
export declare function init(): Promise<Hapi.Server>;
export declare function start(): Promise<Hapi.Server>;
