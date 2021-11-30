
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 */

export type User = {
  id: number
  email: string
  name: string
}

/**
 * Model Source
 */

export type Source = {
  id: number
  owner_id: number
  name: string
  user: string
  pass: string
  host: string
  port: string
  database: string
  dialect: Dialect
}

/**
 * Model Entity
 */

export type Entity = {
  id: number
  name: string
  source_id: number
}

/**
 * Model Property
 */

export type Property = {
  id: bigint
  name: string
  entity_id: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Dialect: {
  mysql: 'mysql',
  postgresql: 'postgresql',
  sqlserver: 'sqlserver',
  oracle: 'oracle',
  sqlite: 'sqlite'
};

export type Dialect = (typeof Dialect)[keyof typeof Dialect]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.source`: Exposes CRUD operations for the **Source** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sources
    * const sources = await prisma.source.findMany()
    * ```
    */
  get source(): Prisma.SourceDelegate<GlobalReject>;

  /**
   * `prisma.entity`: Exposes CRUD operations for the **Entity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entities
    * const entities = await prisma.entity.findMany()
    * ```
    */
  get entity(): Prisma.EntityDelegate<GlobalReject>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.3.0
   * Query Engine version: 78a5df6def6943431f4c022e1428dbc3e833cf8e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Source: 'Source',
    Entity: 'Entity',
    Property: 'Property'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    sources: number
  }

  export type UserCountOutputTypeSelect = {
    sources?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type SourceCountOutputType
   */


  export type SourceCountOutputType = {
    entities: number
  }

  export type SourceCountOutputTypeSelect = {
    entities?: boolean
  }

  export type SourceCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SourceCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SourceCountOutputType
    : S extends undefined
    ? never
    : S extends SourceCountOutputTypeArgs
    ?'include' extends U
    ? SourceCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SourceCountOutputType ?SourceCountOutputType [P]
  : 
     never
  } 
    : SourceCountOutputType
  : SourceCountOutputType




  // Custom InputTypes

  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SourceCountOutputType
     * 
    **/
    select?: SourceCountOutputTypeSelect | null
  }



  /**
   * Count Type EntityCountOutputType
   */


  export type EntityCountOutputType = {
    properties: number
  }

  export type EntityCountOutputTypeSelect = {
    properties?: boolean
  }

  export type EntityCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EntityCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EntityCountOutputType
    : S extends undefined
    ? never
    : S extends EntityCountOutputTypeArgs
    ?'include' extends U
    ? EntityCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof EntityCountOutputType ?EntityCountOutputType [P]
  : 
     never
  } 
    : EntityCountOutputType
  : EntityCountOutputType




  // Custom InputTypes

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EntityCountOutputType
     * 
    **/
    select?: EntityCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UserGroupByOutputType[P]> 
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      > 
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    sources?: boolean | SourceFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    sources?: boolean | SourceFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'sources'
        ? Array < SourceGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'sources'
        ? Array < SourceGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    sources<T extends SourceFindManyArgs = {}>(args?: Subset<T, SourceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Source>>, PrismaPromise<Array<SourceGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Source
   */


  export type AggregateSource = {
    _count: SourceCountAggregateOutputType | null
    _avg: SourceAvgAggregateOutputType | null
    _sum: SourceSumAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  export type SourceAvgAggregateOutputType = {
    id: number | null
    owner_id: number | null
  }

  export type SourceSumAggregateOutputType = {
    id: number | null
    owner_id: number | null
  }

  export type SourceMinAggregateOutputType = {
    id: number | null
    owner_id: number | null
    name: string | null
    user: string | null
    pass: string | null
    host: string | null
    port: string | null
    database: string | null
    dialect: Dialect | null
  }

  export type SourceMaxAggregateOutputType = {
    id: number | null
    owner_id: number | null
    name: string | null
    user: string | null
    pass: string | null
    host: string | null
    port: string | null
    database: string | null
    dialect: Dialect | null
  }

  export type SourceCountAggregateOutputType = {
    id: number
    owner_id: number
    name: number
    user: number
    pass: number
    host: number
    port: number
    database: number
    dialect: number
    _all: number
  }


  export type SourceAvgAggregateInputType = {
    id?: true
    owner_id?: true
  }

  export type SourceSumAggregateInputType = {
    id?: true
    owner_id?: true
  }

  export type SourceMinAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    user?: true
    pass?: true
    host?: true
    port?: true
    database?: true
    dialect?: true
  }

  export type SourceMaxAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    user?: true
    pass?: true
    host?: true
    port?: true
    database?: true
    dialect?: true
  }

  export type SourceCountAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    user?: true
    pass?: true
    host?: true
    port?: true
    database?: true
    dialect?: true
    _all?: true
  }

  export type SourceAggregateArgs = {
    /**
     * Filter which Source to aggregate.
     * 
    **/
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     * 
    **/
    orderBy?: Enumerable<SourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sources
    **/
    _count?: true | SourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceMaxAggregateInputType
  }

  export type GetSourceAggregateType<T extends SourceAggregateArgs> = {
        [P in keyof T & keyof AggregateSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSource[P]>
      : GetScalarType<T[P], AggregateSource[P]>
  }


    
    
  export type SourceGroupByArgs = {
    where?: SourceWhereInput
    orderBy?: Enumerable<SourceOrderByWithAggregationInput>
    by: Array<SourceScalarFieldEnum>
    having?: SourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceCountAggregateInputType | true
    _avg?: SourceAvgAggregateInputType
    _sum?: SourceSumAggregateInputType
    _min?: SourceMinAggregateInputType
    _max?: SourceMaxAggregateInputType
  }


  export type SourceGroupByOutputType = {
    id: number
    owner_id: number
    name: string
    user: string
    pass: string
    host: string
    port: string
    database: string
    dialect: Dialect
    _count: SourceCountAggregateOutputType | null
    _avg: SourceAvgAggregateOutputType | null
    _sum: SourceSumAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  type GetSourceGroupByPayload<T extends SourceGroupByArgs> = Promise<
    Array<
      PickArray<SourceGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof SourceGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], SourceGroupByOutputType[P]> 
            : GetScalarType<T[P], SourceGroupByOutputType[P]>
        }
      > 
    >


  export type SourceSelect = {
    id?: boolean
    owner?: boolean | UserArgs
    owner_id?: boolean
    name?: boolean
    user?: boolean
    pass?: boolean
    host?: boolean
    port?: boolean
    database?: boolean
    dialect?: boolean
    entities?: boolean | EntityFindManyArgs
    _count?: boolean | SourceCountOutputTypeArgs
  }

  export type SourceInclude = {
    owner?: boolean | UserArgs
    entities?: boolean | EntityFindManyArgs
    _count?: boolean | SourceCountOutputTypeArgs
  }

  export type SourceGetPayload<
    S extends boolean | null | undefined | SourceArgs,
    U = keyof S
      > = S extends true
        ? Source
    : S extends undefined
    ? never
    : S extends SourceArgs | SourceFindManyArgs
    ?'include' extends U
    ? Source  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'owner'
        ? UserGetPayload<S['include'][P]> :
        P extends 'entities'
        ? Array < EntityGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? SourceCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Source ?Source [P]
  : 
          P extends 'owner'
        ? UserGetPayload<S['select'][P]> :
        P extends 'entities'
        ? Array < EntityGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? SourceCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Source
  : Source


  type SourceCountArgs = Merge<
    Omit<SourceFindManyArgs, 'select' | 'include'> & {
      select?: SourceCountAggregateInputType | true
    }
  >

  export interface SourceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Source that matches the filter.
     * @param {SourceFindUniqueArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SourceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SourceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Source'> extends True ? CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>> : CheckSelect<T, Prisma__SourceClient<Source | null >, Prisma__SourceClient<SourceGetPayload<T> | null >>

    /**
     * Find the first Source that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SourceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SourceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Source'> extends True ? CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>> : CheckSelect<T, Prisma__SourceClient<Source | null >, Prisma__SourceClient<SourceGetPayload<T> | null >>

    /**
     * Find zero or more Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sources
     * const sources = await prisma.source.findMany()
     * 
     * // Get first 10 Sources
     * const sources = await prisma.source.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceWithIdOnly = await prisma.source.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SourceFindManyArgs>(
      args?: SelectSubset<T, SourceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Source>>, PrismaPromise<Array<SourceGetPayload<T>>>>

    /**
     * Create a Source.
     * @param {SourceCreateArgs} args - Arguments to create a Source.
     * @example
     * // Create one Source
     * const Source = await prisma.source.create({
     *   data: {
     *     // ... data to create a Source
     *   }
     * })
     * 
    **/
    create<T extends SourceCreateArgs>(
      args: SelectSubset<T, SourceCreateArgs>
    ): CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>>

    /**
     * Create many Sources.
     *     @param {SourceCreateManyArgs} args - Arguments to create many Sources.
     *     @example
     *     // Create many Sources
     *     const source = await prisma.source.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SourceCreateManyArgs>(
      args?: SelectSubset<T, SourceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Source.
     * @param {SourceDeleteArgs} args - Arguments to delete one Source.
     * @example
     * // Delete one Source
     * const Source = await prisma.source.delete({
     *   where: {
     *     // ... filter to delete one Source
     *   }
     * })
     * 
    **/
    delete<T extends SourceDeleteArgs>(
      args: SelectSubset<T, SourceDeleteArgs>
    ): CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>>

    /**
     * Update one Source.
     * @param {SourceUpdateArgs} args - Arguments to update one Source.
     * @example
     * // Update one Source
     * const source = await prisma.source.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SourceUpdateArgs>(
      args: SelectSubset<T, SourceUpdateArgs>
    ): CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>>

    /**
     * Delete zero or more Sources.
     * @param {SourceDeleteManyArgs} args - Arguments to filter Sources to delete.
     * @example
     * // Delete a few Sources
     * const { count } = await prisma.source.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SourceDeleteManyArgs>(
      args?: SelectSubset<T, SourceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SourceUpdateManyArgs>(
      args: SelectSubset<T, SourceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Source.
     * @param {SourceUpsertArgs} args - Arguments to update or create a Source.
     * @example
     * // Update or create a Source
     * const source = await prisma.source.upsert({
     *   create: {
     *     // ... data to create a Source
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Source we want to update
     *   }
     * })
    **/
    upsert<T extends SourceUpsertArgs>(
      args: SelectSubset<T, SourceUpsertArgs>
    ): CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>>

    /**
     * Count the number of Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCountArgs} args - Arguments to filter Sources to count.
     * @example
     * // Count the number of Sources
     * const count = await prisma.source.count({
     *   where: {
     *     // ... the filter for the Sources we want to count
     *   }
     * })
    **/
    count<T extends SourceCountArgs>(
      args?: Subset<T, SourceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceAggregateArgs>(args: Subset<T, SourceAggregateArgs>): PrismaPromise<GetSourceAggregateType<T>>

    /**
     * Group by Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceGroupByArgs['orderBy'] }
        : { orderBy?: SourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Source.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SourceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    owner<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    entities<T extends EntityFindManyArgs = {}>(args?: Subset<T, EntityFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Entity>>, PrismaPromise<Array<EntityGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Source findUnique
   */
  export type SourceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * Throw an Error if a Source can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Source to fetch.
     * 
    **/
    where: SourceWhereUniqueInput
  }


  /**
   * Source findFirst
   */
  export type SourceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * Throw an Error if a Source can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Source to fetch.
     * 
    **/
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     * 
    **/
    orderBy?: Enumerable<SourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     * 
    **/
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     * 
    **/
    distinct?: Enumerable<SourceScalarFieldEnum>
  }


  /**
   * Source findMany
   */
  export type SourceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * Filter, which Sources to fetch.
     * 
    **/
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     * 
    **/
    orderBy?: Enumerable<SourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sources.
     * 
    **/
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SourceScalarFieldEnum>
  }


  /**
   * Source create
   */
  export type SourceCreateArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * The data needed to create a Source.
     * 
    **/
    data: XOR<SourceCreateInput, SourceUncheckedCreateInput>
  }


  /**
   * Source createMany
   */
  export type SourceCreateManyArgs = {
    data: Enumerable<SourceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Source update
   */
  export type SourceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * The data needed to update a Source.
     * 
    **/
    data: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
    /**
     * Choose, which Source to update.
     * 
    **/
    where: SourceWhereUniqueInput
  }


  /**
   * Source updateMany
   */
  export type SourceUpdateManyArgs = {
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    where?: SourceWhereInput
  }


  /**
   * Source upsert
   */
  export type SourceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * The filter to search for the Source to update in case it exists.
     * 
    **/
    where: SourceWhereUniqueInput
    /**
     * In case the Source found by the `where` argument doesn't exist, create a new Source with this data.
     * 
    **/
    create: XOR<SourceCreateInput, SourceUncheckedCreateInput>
    /**
     * In case the Source was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
  }


  /**
   * Source delete
   */
  export type SourceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * Filter which Source to delete.
     * 
    **/
    where: SourceWhereUniqueInput
  }


  /**
   * Source deleteMany
   */
  export type SourceDeleteManyArgs = {
    where?: SourceWhereInput
  }


  /**
   * Source without action
   */
  export type SourceArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
  }



  /**
   * Model Entity
   */


  export type AggregateEntity = {
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  export type EntityAvgAggregateOutputType = {
    id: number | null
    source_id: number | null
  }

  export type EntitySumAggregateOutputType = {
    id: number | null
    source_id: number | null
  }

  export type EntityMinAggregateOutputType = {
    id: number | null
    name: string | null
    source_id: number | null
  }

  export type EntityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    source_id: number | null
  }

  export type EntityCountAggregateOutputType = {
    id: number
    name: number
    source_id: number
    _all: number
  }


  export type EntityAvgAggregateInputType = {
    id?: true
    source_id?: true
  }

  export type EntitySumAggregateInputType = {
    id?: true
    source_id?: true
  }

  export type EntityMinAggregateInputType = {
    id?: true
    name?: true
    source_id?: true
  }

  export type EntityMaxAggregateInputType = {
    id?: true
    name?: true
    source_id?: true
  }

  export type EntityCountAggregateInputType = {
    id?: true
    name?: true
    source_id?: true
    _all?: true
  }

  export type EntityAggregateArgs = {
    /**
     * Filter which Entity to aggregate.
     * 
    **/
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     * 
    **/
    orderBy?: Enumerable<EntityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entities
    **/
    _count?: true | EntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntityMaxAggregateInputType
  }

  export type GetEntityAggregateType<T extends EntityAggregateArgs> = {
        [P in keyof T & keyof AggregateEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntity[P]>
      : GetScalarType<T[P], AggregateEntity[P]>
  }


    
    
  export type EntityGroupByArgs = {
    where?: EntityWhereInput
    orderBy?: Enumerable<EntityOrderByWithAggregationInput>
    by: Array<EntityScalarFieldEnum>
    having?: EntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntityCountAggregateInputType | true
    _avg?: EntityAvgAggregateInputType
    _sum?: EntitySumAggregateInputType
    _min?: EntityMinAggregateInputType
    _max?: EntityMaxAggregateInputType
  }


  export type EntityGroupByOutputType = {
    id: number
    name: string
    source_id: number
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  type GetEntityGroupByPayload<T extends EntityGroupByArgs> = Promise<
    Array<
      PickArray<EntityGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof EntityGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], EntityGroupByOutputType[P]> 
            : GetScalarType<T[P], EntityGroupByOutputType[P]>
        }
      > 
    >


  export type EntitySelect = {
    id?: boolean
    name?: boolean
    source?: boolean | SourceArgs
    source_id?: boolean
    properties?: boolean | PropertyFindManyArgs
    _count?: boolean | EntityCountOutputTypeArgs
  }

  export type EntityInclude = {
    source?: boolean | SourceArgs
    properties?: boolean | PropertyFindManyArgs
    _count?: boolean | EntityCountOutputTypeArgs
  }

  export type EntityGetPayload<
    S extends boolean | null | undefined | EntityArgs,
    U = keyof S
      > = S extends true
        ? Entity
    : S extends undefined
    ? never
    : S extends EntityArgs | EntityFindManyArgs
    ?'include' extends U
    ? Entity  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'source'
        ? SourceGetPayload<S['include'][P]> :
        P extends 'properties'
        ? Array < PropertyGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? EntityCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Entity ?Entity [P]
  : 
          P extends 'source'
        ? SourceGetPayload<S['select'][P]> :
        P extends 'properties'
        ? Array < PropertyGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? EntityCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Entity
  : Entity


  type EntityCountArgs = Merge<
    Omit<EntityFindManyArgs, 'select' | 'include'> & {
      select?: EntityCountAggregateInputType | true
    }
  >

  export interface EntityDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Entity that matches the filter.
     * @param {EntityFindUniqueArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EntityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EntityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Entity'> extends True ? CheckSelect<T, Prisma__EntityClient<Entity>, Prisma__EntityClient<EntityGetPayload<T>>> : CheckSelect<T, Prisma__EntityClient<Entity | null >, Prisma__EntityClient<EntityGetPayload<T> | null >>

    /**
     * Find the first Entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EntityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EntityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Entity'> extends True ? CheckSelect<T, Prisma__EntityClient<Entity>, Prisma__EntityClient<EntityGetPayload<T>>> : CheckSelect<T, Prisma__EntityClient<Entity | null >, Prisma__EntityClient<EntityGetPayload<T> | null >>

    /**
     * Find zero or more Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entities
     * const entities = await prisma.entity.findMany()
     * 
     * // Get first 10 Entities
     * const entities = await prisma.entity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entityWithIdOnly = await prisma.entity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EntityFindManyArgs>(
      args?: SelectSubset<T, EntityFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Entity>>, PrismaPromise<Array<EntityGetPayload<T>>>>

    /**
     * Create a Entity.
     * @param {EntityCreateArgs} args - Arguments to create a Entity.
     * @example
     * // Create one Entity
     * const Entity = await prisma.entity.create({
     *   data: {
     *     // ... data to create a Entity
     *   }
     * })
     * 
    **/
    create<T extends EntityCreateArgs>(
      args: SelectSubset<T, EntityCreateArgs>
    ): CheckSelect<T, Prisma__EntityClient<Entity>, Prisma__EntityClient<EntityGetPayload<T>>>

    /**
     * Create many Entities.
     *     @param {EntityCreateManyArgs} args - Arguments to create many Entities.
     *     @example
     *     // Create many Entities
     *     const entity = await prisma.entity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EntityCreateManyArgs>(
      args?: SelectSubset<T, EntityCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Entity.
     * @param {EntityDeleteArgs} args - Arguments to delete one Entity.
     * @example
     * // Delete one Entity
     * const Entity = await prisma.entity.delete({
     *   where: {
     *     // ... filter to delete one Entity
     *   }
     * })
     * 
    **/
    delete<T extends EntityDeleteArgs>(
      args: SelectSubset<T, EntityDeleteArgs>
    ): CheckSelect<T, Prisma__EntityClient<Entity>, Prisma__EntityClient<EntityGetPayload<T>>>

    /**
     * Update one Entity.
     * @param {EntityUpdateArgs} args - Arguments to update one Entity.
     * @example
     * // Update one Entity
     * const entity = await prisma.entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EntityUpdateArgs>(
      args: SelectSubset<T, EntityUpdateArgs>
    ): CheckSelect<T, Prisma__EntityClient<Entity>, Prisma__EntityClient<EntityGetPayload<T>>>

    /**
     * Delete zero or more Entities.
     * @param {EntityDeleteManyArgs} args - Arguments to filter Entities to delete.
     * @example
     * // Delete a few Entities
     * const { count } = await prisma.entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EntityDeleteManyArgs>(
      args?: SelectSubset<T, EntityDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entities
     * const entity = await prisma.entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EntityUpdateManyArgs>(
      args: SelectSubset<T, EntityUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Entity.
     * @param {EntityUpsertArgs} args - Arguments to update or create a Entity.
     * @example
     * // Update or create a Entity
     * const entity = await prisma.entity.upsert({
     *   create: {
     *     // ... data to create a Entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entity we want to update
     *   }
     * })
    **/
    upsert<T extends EntityUpsertArgs>(
      args: SelectSubset<T, EntityUpsertArgs>
    ): CheckSelect<T, Prisma__EntityClient<Entity>, Prisma__EntityClient<EntityGetPayload<T>>>

    /**
     * Count the number of Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityCountArgs} args - Arguments to filter Entities to count.
     * @example
     * // Count the number of Entities
     * const count = await prisma.entity.count({
     *   where: {
     *     // ... the filter for the Entities we want to count
     *   }
     * })
    **/
    count<T extends EntityCountArgs>(
      args?: Subset<T, EntityCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntityAggregateArgs>(args: Subset<T, EntityAggregateArgs>): PrismaPromise<GetEntityAggregateType<T>>

    /**
     * Group by Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntityGroupByArgs['orderBy'] }
        : { orderBy?: EntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EntityClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    source<T extends SourceArgs = {}>(args?: Subset<T, SourceArgs>): CheckSelect<T, Prisma__SourceClient<Source | null >, Prisma__SourceClient<SourceGetPayload<T> | null >>;

    properties<T extends PropertyFindManyArgs = {}>(args?: Subset<T, PropertyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Property>>, PrismaPromise<Array<PropertyGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Entity findUnique
   */
  export type EntityFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Entity
     * 
    **/
    select?: EntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EntityInclude | null
    /**
     * Throw an Error if a Entity can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Entity to fetch.
     * 
    **/
    where: EntityWhereUniqueInput
  }


  /**
   * Entity findFirst
   */
  export type EntityFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Entity
     * 
    **/
    select?: EntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EntityInclude | null
    /**
     * Throw an Error if a Entity can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Entity to fetch.
     * 
    **/
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     * 
    **/
    orderBy?: Enumerable<EntityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     * 
    **/
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     * 
    **/
    distinct?: Enumerable<EntityScalarFieldEnum>
  }


  /**
   * Entity findMany
   */
  export type EntityFindManyArgs = {
    /**
     * Select specific fields to fetch from the Entity
     * 
    **/
    select?: EntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EntityInclude | null
    /**
     * Filter, which Entities to fetch.
     * 
    **/
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     * 
    **/
    orderBy?: Enumerable<EntityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entities.
     * 
    **/
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EntityScalarFieldEnum>
  }


  /**
   * Entity create
   */
  export type EntityCreateArgs = {
    /**
     * Select specific fields to fetch from the Entity
     * 
    **/
    select?: EntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EntityInclude | null
    /**
     * The data needed to create a Entity.
     * 
    **/
    data: XOR<EntityCreateInput, EntityUncheckedCreateInput>
  }


  /**
   * Entity createMany
   */
  export type EntityCreateManyArgs = {
    data: Enumerable<EntityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Entity update
   */
  export type EntityUpdateArgs = {
    /**
     * Select specific fields to fetch from the Entity
     * 
    **/
    select?: EntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EntityInclude | null
    /**
     * The data needed to update a Entity.
     * 
    **/
    data: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
    /**
     * Choose, which Entity to update.
     * 
    **/
    where: EntityWhereUniqueInput
  }


  /**
   * Entity updateMany
   */
  export type EntityUpdateManyArgs = {
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyInput>
    where?: EntityWhereInput
  }


  /**
   * Entity upsert
   */
  export type EntityUpsertArgs = {
    /**
     * Select specific fields to fetch from the Entity
     * 
    **/
    select?: EntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EntityInclude | null
    /**
     * The filter to search for the Entity to update in case it exists.
     * 
    **/
    where: EntityWhereUniqueInput
    /**
     * In case the Entity found by the `where` argument doesn't exist, create a new Entity with this data.
     * 
    **/
    create: XOR<EntityCreateInput, EntityUncheckedCreateInput>
    /**
     * In case the Entity was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
  }


  /**
   * Entity delete
   */
  export type EntityDeleteArgs = {
    /**
     * Select specific fields to fetch from the Entity
     * 
    **/
    select?: EntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EntityInclude | null
    /**
     * Filter which Entity to delete.
     * 
    **/
    where: EntityWhereUniqueInput
  }


  /**
   * Entity deleteMany
   */
  export type EntityDeleteManyArgs = {
    where?: EntityWhereInput
  }


  /**
   * Entity without action
   */
  export type EntityArgs = {
    /**
     * Select specific fields to fetch from the Entity
     * 
    **/
    select?: EntitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EntityInclude | null
  }



  /**
   * Model Property
   */


  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    entity_id: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: bigint | null
    entity_id: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    entity_id: number | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    entity_id: number | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    name: number
    entity_id: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    entity_id?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    entity_id?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    name?: true
    entity_id?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    name?: true
    entity_id?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    name?: true
    entity_id?: true
    _all?: true
  }

  export type PropertyAggregateArgs = {
    /**
     * Filter which Property to aggregate.
     * 
    **/
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     * 
    **/
    orderBy?: Enumerable<PropertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }


    
    
  export type PropertyGroupByArgs = {
    where?: PropertyWhereInput
    orderBy?: Enumerable<PropertyOrderByWithAggregationInput>
    by: Array<PropertyScalarFieldEnum>
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }


  export type PropertyGroupByOutputType = {
    id: bigint
    name: string
    entity_id: number
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Promise<
    Array<
      PickArray<PropertyGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PropertyGroupByOutputType[P]> 
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      > 
    >


  export type PropertySelect = {
    id?: boolean
    name?: boolean
    entity?: boolean | EntityArgs
    entity_id?: boolean
  }

  export type PropertyInclude = {
    entity?: boolean | EntityArgs
  }

  export type PropertyGetPayload<
    S extends boolean | null | undefined | PropertyArgs,
    U = keyof S
      > = S extends true
        ? Property
    : S extends undefined
    ? never
    : S extends PropertyArgs | PropertyFindManyArgs
    ?'include' extends U
    ? Property  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'entity'
        ? EntityGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Property ?Property [P]
  : 
          P extends 'entity'
        ? EntityGetPayload<S['select'][P]> : never
  } 
    : Property
  : Property


  type PropertyCountArgs = Merge<
    Omit<PropertyFindManyArgs, 'select' | 'include'> & {
      select?: PropertyCountAggregateInputType | true
    }
  >

  export interface PropertyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PropertyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PropertyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Property'> extends True ? CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>> : CheckSelect<T, Prisma__PropertyClient<Property | null >, Prisma__PropertyClient<PropertyGetPayload<T> | null >>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PropertyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PropertyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Property'> extends True ? CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>> : CheckSelect<T, Prisma__PropertyClient<Property | null >, Prisma__PropertyClient<PropertyGetPayload<T> | null >>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PropertyFindManyArgs>(
      args?: SelectSubset<T, PropertyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Property>>, PrismaPromise<Array<PropertyGetPayload<T>>>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
    **/
    create<T extends PropertyCreateArgs>(
      args: SelectSubset<T, PropertyCreateArgs>
    ): CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>>

    /**
     * Create many Properties.
     *     @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     *     @example
     *     // Create many Properties
     *     const property = await prisma.property.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PropertyCreateManyArgs>(
      args?: SelectSubset<T, PropertyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
    **/
    delete<T extends PropertyDeleteArgs>(
      args: SelectSubset<T, PropertyDeleteArgs>
    ): CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PropertyUpdateArgs>(
      args: SelectSubset<T, PropertyUpdateArgs>
    ): CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PropertyDeleteManyArgs>(
      args?: SelectSubset<T, PropertyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PropertyUpdateManyArgs>(
      args: SelectSubset<T, PropertyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
    **/
    upsert<T extends PropertyUpsertArgs>(
      args: SelectSubset<T, PropertyUpsertArgs>
    ): CheckSelect<T, Prisma__PropertyClient<Property>, Prisma__PropertyClient<PropertyGetPayload<T>>>

    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PropertyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    entity<T extends EntityArgs = {}>(args?: Subset<T, EntityArgs>): CheckSelect<T, Prisma__EntityClient<Entity | null >, Prisma__EntityClient<EntityGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * Throw an Error if a Property can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Property to fetch.
     * 
    **/
    where: PropertyWhereUniqueInput
  }


  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * Throw an Error if a Property can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Property to fetch.
     * 
    **/
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     * 
    **/
    orderBy?: Enumerable<PropertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     * 
    **/
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     * 
    **/
    distinct?: Enumerable<PropertyScalarFieldEnum>
  }


  /**
   * Property findMany
   */
  export type PropertyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * Filter, which Properties to fetch.
     * 
    **/
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     * 
    **/
    orderBy?: Enumerable<PropertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     * 
    **/
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PropertyScalarFieldEnum>
  }


  /**
   * Property create
   */
  export type PropertyCreateArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * The data needed to create a Property.
     * 
    **/
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }


  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs = {
    data: Enumerable<PropertyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Property update
   */
  export type PropertyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * The data needed to update a Property.
     * 
    **/
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     * 
    **/
    where: PropertyWhereUniqueInput
  }


  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs = {
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    where?: PropertyWhereInput
  }


  /**
   * Property upsert
   */
  export type PropertyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * The filter to search for the Property to update in case it exists.
     * 
    **/
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     * 
    **/
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }


  /**
   * Property delete
   */
  export type PropertyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
    /**
     * Filter which Property to delete.
     * 
    **/
    where: PropertyWhereUniqueInput
  }


  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs = {
    where?: PropertyWhereInput
  }


  /**
   * Property without action
   */
  export type PropertyArgs = {
    /**
     * Select specific fields to fetch from the Property
     * 
    **/
    select?: PropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PropertyInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SourceScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    name: 'name',
    user: 'user',
    pass: 'pass',
    host: 'host',
    port: 'port',
    database: 'database',
    dialect: 'dialect'
  };

  export type SourceScalarFieldEnum = (typeof SourceScalarFieldEnum)[keyof typeof SourceScalarFieldEnum]


  export const EntityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    source_id: 'source_id'
  };

  export type EntityScalarFieldEnum = (typeof EntityScalarFieldEnum)[keyof typeof EntityScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    entity_id: 'entity_id'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringFilter | string
    sources?: SourceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    sources?: SourceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type SourceWhereInput = {
    AND?: Enumerable<SourceWhereInput>
    OR?: Enumerable<SourceWhereInput>
    NOT?: Enumerable<SourceWhereInput>
    id?: IntFilter | number
    owner?: XOR<UserRelationFilter, UserWhereInput>
    owner_id?: IntFilter | number
    name?: StringFilter | string
    user?: StringFilter | string
    pass?: StringFilter | string
    host?: StringFilter | string
    port?: StringFilter | string
    database?: StringFilter | string
    dialect?: EnumDialectFilter | Dialect
    entities?: EntityListRelationFilter
  }

  export type SourceOrderByWithRelationInput = {
    id?: SortOrder
    owner?: UserOrderByWithRelationInput
    owner_id?: SortOrder
    name?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    host?: SortOrder
    port?: SortOrder
    database?: SortOrder
    dialect?: SortOrder
    entities?: EntityOrderByRelationAggregateInput
  }

  export type SourceWhereUniqueInput = {
    id?: number
  }

  export type SourceOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    host?: SortOrder
    port?: SortOrder
    database?: SortOrder
    dialect?: SortOrder
    _count?: SourceCountOrderByAggregateInput
    _avg?: SourceAvgOrderByAggregateInput
    _max?: SourceMaxOrderByAggregateInput
    _min?: SourceMinOrderByAggregateInput
    _sum?: SourceSumOrderByAggregateInput
  }

  export type SourceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SourceScalarWhereWithAggregatesInput>
    OR?: Enumerable<SourceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SourceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    owner_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    user?: StringWithAggregatesFilter | string
    pass?: StringWithAggregatesFilter | string
    host?: StringWithAggregatesFilter | string
    port?: StringWithAggregatesFilter | string
    database?: StringWithAggregatesFilter | string
    dialect?: EnumDialectWithAggregatesFilter | Dialect
  }

  export type EntityWhereInput = {
    AND?: Enumerable<EntityWhereInput>
    OR?: Enumerable<EntityWhereInput>
    NOT?: Enumerable<EntityWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    source?: XOR<SourceRelationFilter, SourceWhereInput>
    source_id?: IntFilter | number
    properties?: PropertyListRelationFilter
  }

  export type EntityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    source?: SourceOrderByWithRelationInput
    source_id?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type EntityWhereUniqueInput = {
    id?: number
  }

  export type EntityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    source_id?: SortOrder
    _count?: EntityCountOrderByAggregateInput
    _avg?: EntityAvgOrderByAggregateInput
    _max?: EntityMaxOrderByAggregateInput
    _min?: EntityMinOrderByAggregateInput
    _sum?: EntitySumOrderByAggregateInput
  }

  export type EntityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EntityScalarWhereWithAggregatesInput>
    OR?: Enumerable<EntityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EntityScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    source_id?: IntWithAggregatesFilter | number
  }

  export type PropertyWhereInput = {
    AND?: Enumerable<PropertyWhereInput>
    OR?: Enumerable<PropertyWhereInput>
    NOT?: Enumerable<PropertyWhereInput>
    id?: BigIntFilter | bigint | number
    name?: StringFilter | string
    entity?: XOR<EntityRelationFilter, EntityWhereInput>
    entity_id?: IntFilter | number
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    entity?: EntityOrderByWithRelationInput
    entity_id?: SortOrder
  }

  export type PropertyWhereUniqueInput = {
    id?: bigint | number
  }

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    entity_id?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PropertyScalarWhereWithAggregatesInput>
    OR?: Enumerable<PropertyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PropertyScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    name?: StringWithAggregatesFilter | string
    entity_id?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    email: string
    name: string
    sources?: SourceCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    sources?: SourceUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sources?: SourceUpdateManyWithoutOwnerInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sources?: SourceUncheckedUpdateManyWithoutOwnerInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SourceCreateInput = {
    name: string
    user: string
    pass: string
    host: string
    port: string
    database: string
    dialect: Dialect
    owner: UserCreateNestedOneWithoutSourcesInput
    entities?: EntityCreateNestedManyWithoutSourceInput
  }

  export type SourceUncheckedCreateInput = {
    id?: number
    owner_id: number
    name: string
    user: string
    pass: string
    host: string
    port: string
    database: string
    dialect: Dialect
    entities?: EntityUncheckedCreateNestedManyWithoutSourceInput
  }

  export type SourceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    dialect?: EnumDialectFieldUpdateOperationsInput | Dialect
    owner?: UserUpdateOneRequiredWithoutSourcesInput
    entities?: EntityUpdateManyWithoutSourceInput
  }

  export type SourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    dialect?: EnumDialectFieldUpdateOperationsInput | Dialect
    entities?: EntityUncheckedUpdateManyWithoutSourceInput
  }

  export type SourceCreateManyInput = {
    id?: number
    owner_id: number
    name: string
    user: string
    pass: string
    host: string
    port: string
    database: string
    dialect: Dialect
  }

  export type SourceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    dialect?: EnumDialectFieldUpdateOperationsInput | Dialect
  }

  export type SourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    dialect?: EnumDialectFieldUpdateOperationsInput | Dialect
  }

  export type EntityCreateInput = {
    name: string
    source: SourceCreateNestedOneWithoutEntitiesInput
    properties?: PropertyCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateInput = {
    id?: number
    name: string
    source_id: number
    properties?: PropertyUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    source?: SourceUpdateOneRequiredWithoutEntitiesInput
    properties?: PropertyUpdateManyWithoutEntityInput
  }

  export type EntityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    source_id?: IntFieldUpdateOperationsInput | number
    properties?: PropertyUncheckedUpdateManyWithoutEntityInput
  }

  export type EntityCreateManyInput = {
    id?: number
    name: string
    source_id: number
  }

  export type EntityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EntityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    source_id?: IntFieldUpdateOperationsInput | number
  }

  export type PropertyCreateInput = {
    id?: bigint | number
    name: string
    entity: EntityCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: bigint | number
    name: string
    entity_id: number
  }

  export type PropertyUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    entity?: EntityUpdateOneRequiredWithoutPropertiesInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
  }

  export type PropertyCreateManyInput = {
    id?: bigint | number
    name: string
    entity_id: number
  }

  export type PropertyUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type SourceListRelationFilter = {
    every?: SourceWhereInput
    some?: SourceWhereInput
    none?: SourceWhereInput
  }

  export type SourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EnumDialectFilter = {
    equals?: Dialect
    in?: Enumerable<Dialect>
    notIn?: Enumerable<Dialect>
    not?: NestedEnumDialectFilter | Dialect
  }

  export type EntityListRelationFilter = {
    every?: EntityWhereInput
    some?: EntityWhereInput
    none?: EntityWhereInput
  }

  export type EntityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    host?: SortOrder
    port?: SortOrder
    database?: SortOrder
    dialect?: SortOrder
  }

  export type SourceAvgOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
  }

  export type SourceMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    host?: SortOrder
    port?: SortOrder
    database?: SortOrder
    dialect?: SortOrder
  }

  export type SourceMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    host?: SortOrder
    port?: SortOrder
    database?: SortOrder
    dialect?: SortOrder
  }

  export type SourceSumOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
  }

  export type EnumDialectWithAggregatesFilter = {
    equals?: Dialect
    in?: Enumerable<Dialect>
    notIn?: Enumerable<Dialect>
    not?: NestedEnumDialectWithAggregatesFilter | Dialect
    _count?: NestedIntFilter
    _min?: NestedEnumDialectFilter
    _max?: NestedEnumDialectFilter
  }

  export type SourceRelationFilter = {
    is?: SourceWhereInput
    isNot?: SourceWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    source_id?: SortOrder
  }

  export type EntityAvgOrderByAggregateInput = {
    id?: SortOrder
    source_id?: SortOrder
  }

  export type EntityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    source_id?: SortOrder
  }

  export type EntityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    source_id?: SortOrder
  }

  export type EntitySumOrderByAggregateInput = {
    id?: SortOrder
    source_id?: SortOrder
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type EntityRelationFilter = {
    is?: EntityWhereInput
    isNot?: EntityWhereInput
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    entity_id?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    entity_id?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    entity_id?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type SourceCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<SourceCreateWithoutOwnerInput>, Enumerable<SourceUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<SourceCreateOrConnectWithoutOwnerInput>
    createMany?: SourceCreateManyOwnerInputEnvelope
    connect?: Enumerable<SourceWhereUniqueInput>
  }

  export type SourceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<SourceCreateWithoutOwnerInput>, Enumerable<SourceUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<SourceCreateOrConnectWithoutOwnerInput>
    createMany?: SourceCreateManyOwnerInputEnvelope
    connect?: Enumerable<SourceWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SourceUpdateManyWithoutOwnerInput = {
    create?: XOR<Enumerable<SourceCreateWithoutOwnerInput>, Enumerable<SourceUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<SourceCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<SourceUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: SourceCreateManyOwnerInputEnvelope
    connect?: Enumerable<SourceWhereUniqueInput>
    set?: Enumerable<SourceWhereUniqueInput>
    disconnect?: Enumerable<SourceWhereUniqueInput>
    delete?: Enumerable<SourceWhereUniqueInput>
    update?: Enumerable<SourceUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<SourceUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<SourceScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SourceUncheckedUpdateManyWithoutOwnerInput = {
    create?: XOR<Enumerable<SourceCreateWithoutOwnerInput>, Enumerable<SourceUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<SourceCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<SourceUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: SourceCreateManyOwnerInputEnvelope
    connect?: Enumerable<SourceWhereUniqueInput>
    set?: Enumerable<SourceWhereUniqueInput>
    disconnect?: Enumerable<SourceWhereUniqueInput>
    delete?: Enumerable<SourceWhereUniqueInput>
    update?: Enumerable<SourceUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<SourceUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<SourceScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSourcesInput = {
    create?: XOR<UserCreateWithoutSourcesInput, UserUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSourcesInput
    connect?: UserWhereUniqueInput
  }

  export type EntityCreateNestedManyWithoutSourceInput = {
    create?: XOR<Enumerable<EntityCreateWithoutSourceInput>, Enumerable<EntityUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<EntityCreateOrConnectWithoutSourceInput>
    createMany?: EntityCreateManySourceInputEnvelope
    connect?: Enumerable<EntityWhereUniqueInput>
  }

  export type EntityUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<Enumerable<EntityCreateWithoutSourceInput>, Enumerable<EntityUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<EntityCreateOrConnectWithoutSourceInput>
    createMany?: EntityCreateManySourceInputEnvelope
    connect?: Enumerable<EntityWhereUniqueInput>
  }

  export type EnumDialectFieldUpdateOperationsInput = {
    set?: Dialect
  }

  export type UserUpdateOneRequiredWithoutSourcesInput = {
    create?: XOR<UserCreateWithoutSourcesInput, UserUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSourcesInput
    upsert?: UserUpsertWithoutSourcesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSourcesInput, UserUncheckedUpdateWithoutSourcesInput>
  }

  export type EntityUpdateManyWithoutSourceInput = {
    create?: XOR<Enumerable<EntityCreateWithoutSourceInput>, Enumerable<EntityUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<EntityCreateOrConnectWithoutSourceInput>
    upsert?: Enumerable<EntityUpsertWithWhereUniqueWithoutSourceInput>
    createMany?: EntityCreateManySourceInputEnvelope
    connect?: Enumerable<EntityWhereUniqueInput>
    set?: Enumerable<EntityWhereUniqueInput>
    disconnect?: Enumerable<EntityWhereUniqueInput>
    delete?: Enumerable<EntityWhereUniqueInput>
    update?: Enumerable<EntityUpdateWithWhereUniqueWithoutSourceInput>
    updateMany?: Enumerable<EntityUpdateManyWithWhereWithoutSourceInput>
    deleteMany?: Enumerable<EntityScalarWhereInput>
  }

  export type EntityUncheckedUpdateManyWithoutSourceInput = {
    create?: XOR<Enumerable<EntityCreateWithoutSourceInput>, Enumerable<EntityUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<EntityCreateOrConnectWithoutSourceInput>
    upsert?: Enumerable<EntityUpsertWithWhereUniqueWithoutSourceInput>
    createMany?: EntityCreateManySourceInputEnvelope
    connect?: Enumerable<EntityWhereUniqueInput>
    set?: Enumerable<EntityWhereUniqueInput>
    disconnect?: Enumerable<EntityWhereUniqueInput>
    delete?: Enumerable<EntityWhereUniqueInput>
    update?: Enumerable<EntityUpdateWithWhereUniqueWithoutSourceInput>
    updateMany?: Enumerable<EntityUpdateManyWithWhereWithoutSourceInput>
    deleteMany?: Enumerable<EntityScalarWhereInput>
  }

  export type SourceCreateNestedOneWithoutEntitiesInput = {
    create?: XOR<SourceCreateWithoutEntitiesInput, SourceUncheckedCreateWithoutEntitiesInput>
    connectOrCreate?: SourceCreateOrConnectWithoutEntitiesInput
    connect?: SourceWhereUniqueInput
  }

  export type PropertyCreateNestedManyWithoutEntityInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutEntityInput>, Enumerable<PropertyUncheckedCreateWithoutEntityInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutEntityInput>
    createMany?: PropertyCreateManyEntityInputEnvelope
    connect?: Enumerable<PropertyWhereUniqueInput>
  }

  export type PropertyUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutEntityInput>, Enumerable<PropertyUncheckedCreateWithoutEntityInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutEntityInput>
    createMany?: PropertyCreateManyEntityInputEnvelope
    connect?: Enumerable<PropertyWhereUniqueInput>
  }

  export type SourceUpdateOneRequiredWithoutEntitiesInput = {
    create?: XOR<SourceCreateWithoutEntitiesInput, SourceUncheckedCreateWithoutEntitiesInput>
    connectOrCreate?: SourceCreateOrConnectWithoutEntitiesInput
    upsert?: SourceUpsertWithoutEntitiesInput
    connect?: SourceWhereUniqueInput
    update?: XOR<SourceUpdateWithoutEntitiesInput, SourceUncheckedUpdateWithoutEntitiesInput>
  }

  export type PropertyUpdateManyWithoutEntityInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutEntityInput>, Enumerable<PropertyUncheckedCreateWithoutEntityInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutEntityInput>
    upsert?: Enumerable<PropertyUpsertWithWhereUniqueWithoutEntityInput>
    createMany?: PropertyCreateManyEntityInputEnvelope
    connect?: Enumerable<PropertyWhereUniqueInput>
    set?: Enumerable<PropertyWhereUniqueInput>
    disconnect?: Enumerable<PropertyWhereUniqueInput>
    delete?: Enumerable<PropertyWhereUniqueInput>
    update?: Enumerable<PropertyUpdateWithWhereUniqueWithoutEntityInput>
    updateMany?: Enumerable<PropertyUpdateManyWithWhereWithoutEntityInput>
    deleteMany?: Enumerable<PropertyScalarWhereInput>
  }

  export type PropertyUncheckedUpdateManyWithoutEntityInput = {
    create?: XOR<Enumerable<PropertyCreateWithoutEntityInput>, Enumerable<PropertyUncheckedCreateWithoutEntityInput>>
    connectOrCreate?: Enumerable<PropertyCreateOrConnectWithoutEntityInput>
    upsert?: Enumerable<PropertyUpsertWithWhereUniqueWithoutEntityInput>
    createMany?: PropertyCreateManyEntityInputEnvelope
    connect?: Enumerable<PropertyWhereUniqueInput>
    set?: Enumerable<PropertyWhereUniqueInput>
    disconnect?: Enumerable<PropertyWhereUniqueInput>
    delete?: Enumerable<PropertyWhereUniqueInput>
    update?: Enumerable<PropertyUpdateWithWhereUniqueWithoutEntityInput>
    updateMany?: Enumerable<PropertyUpdateManyWithWhereWithoutEntityInput>
    deleteMany?: Enumerable<PropertyScalarWhereInput>
  }

  export type EntityCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<EntityCreateWithoutPropertiesInput, EntityUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: EntityCreateOrConnectWithoutPropertiesInput
    connect?: EntityWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EntityUpdateOneRequiredWithoutPropertiesInput = {
    create?: XOR<EntityCreateWithoutPropertiesInput, EntityUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: EntityCreateOrConnectWithoutPropertiesInput
    upsert?: EntityUpsertWithoutPropertiesInput
    connect?: EntityWhereUniqueInput
    update?: XOR<EntityUpdateWithoutPropertiesInput, EntityUncheckedUpdateWithoutPropertiesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumDialectFilter = {
    equals?: Dialect
    in?: Enumerable<Dialect>
    notIn?: Enumerable<Dialect>
    not?: NestedEnumDialectFilter | Dialect
  }

  export type NestedEnumDialectWithAggregatesFilter = {
    equals?: Dialect
    in?: Enumerable<Dialect>
    notIn?: Enumerable<Dialect>
    not?: NestedEnumDialectWithAggregatesFilter | Dialect
    _count?: NestedIntFilter
    _min?: NestedEnumDialectFilter
    _max?: NestedEnumDialectFilter
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type SourceCreateWithoutOwnerInput = {
    name: string
    user: string
    pass: string
    host: string
    port: string
    database: string
    dialect: Dialect
    entities?: EntityCreateNestedManyWithoutSourceInput
  }

  export type SourceUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    user: string
    pass: string
    host: string
    port: string
    database: string
    dialect: Dialect
    entities?: EntityUncheckedCreateNestedManyWithoutSourceInput
  }

  export type SourceCreateOrConnectWithoutOwnerInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutOwnerInput, SourceUncheckedCreateWithoutOwnerInput>
  }

  export type SourceCreateManyOwnerInputEnvelope = {
    data: Enumerable<SourceCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type SourceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SourceWhereUniqueInput
    update: XOR<SourceUpdateWithoutOwnerInput, SourceUncheckedUpdateWithoutOwnerInput>
    create: XOR<SourceCreateWithoutOwnerInput, SourceUncheckedCreateWithoutOwnerInput>
  }

  export type SourceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SourceWhereUniqueInput
    data: XOR<SourceUpdateWithoutOwnerInput, SourceUncheckedUpdateWithoutOwnerInput>
  }

  export type SourceUpdateManyWithWhereWithoutOwnerInput = {
    where: SourceScalarWhereInput
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyWithoutSourcesInput>
  }

  export type SourceScalarWhereInput = {
    AND?: Enumerable<SourceScalarWhereInput>
    OR?: Enumerable<SourceScalarWhereInput>
    NOT?: Enumerable<SourceScalarWhereInput>
    id?: IntFilter | number
    owner_id?: IntFilter | number
    name?: StringFilter | string
    user?: StringFilter | string
    pass?: StringFilter | string
    host?: StringFilter | string
    port?: StringFilter | string
    database?: StringFilter | string
    dialect?: EnumDialectFilter | Dialect
  }

  export type UserCreateWithoutSourcesInput = {
    email: string
    name: string
  }

  export type UserUncheckedCreateWithoutSourcesInput = {
    id?: number
    email: string
    name: string
  }

  export type UserCreateOrConnectWithoutSourcesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSourcesInput, UserUncheckedCreateWithoutSourcesInput>
  }

  export type EntityCreateWithoutSourceInput = {
    name: string
    properties?: PropertyCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutSourceInput = {
    id?: number
    name: string
    properties?: PropertyUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutSourceInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutSourceInput, EntityUncheckedCreateWithoutSourceInput>
  }

  export type EntityCreateManySourceInputEnvelope = {
    data: Enumerable<EntityCreateManySourceInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSourcesInput = {
    update: XOR<UserUpdateWithoutSourcesInput, UserUncheckedUpdateWithoutSourcesInput>
    create: XOR<UserCreateWithoutSourcesInput, UserUncheckedCreateWithoutSourcesInput>
  }

  export type UserUpdateWithoutSourcesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutSourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EntityUpsertWithWhereUniqueWithoutSourceInput = {
    where: EntityWhereUniqueInput
    update: XOR<EntityUpdateWithoutSourceInput, EntityUncheckedUpdateWithoutSourceInput>
    create: XOR<EntityCreateWithoutSourceInput, EntityUncheckedCreateWithoutSourceInput>
  }

  export type EntityUpdateWithWhereUniqueWithoutSourceInput = {
    where: EntityWhereUniqueInput
    data: XOR<EntityUpdateWithoutSourceInput, EntityUncheckedUpdateWithoutSourceInput>
  }

  export type EntityUpdateManyWithWhereWithoutSourceInput = {
    where: EntityScalarWhereInput
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyWithoutEntitiesInput>
  }

  export type EntityScalarWhereInput = {
    AND?: Enumerable<EntityScalarWhereInput>
    OR?: Enumerable<EntityScalarWhereInput>
    NOT?: Enumerable<EntityScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    source_id?: IntFilter | number
  }

  export type SourceCreateWithoutEntitiesInput = {
    name: string
    user: string
    pass: string
    host: string
    port: string
    database: string
    dialect: Dialect
    owner: UserCreateNestedOneWithoutSourcesInput
  }

  export type SourceUncheckedCreateWithoutEntitiesInput = {
    id?: number
    owner_id: number
    name: string
    user: string
    pass: string
    host: string
    port: string
    database: string
    dialect: Dialect
  }

  export type SourceCreateOrConnectWithoutEntitiesInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutEntitiesInput, SourceUncheckedCreateWithoutEntitiesInput>
  }

  export type PropertyCreateWithoutEntityInput = {
    id?: bigint | number
    name: string
  }

  export type PropertyUncheckedCreateWithoutEntityInput = {
    id?: bigint | number
    name: string
  }

  export type PropertyCreateOrConnectWithoutEntityInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutEntityInput, PropertyUncheckedCreateWithoutEntityInput>
  }

  export type PropertyCreateManyEntityInputEnvelope = {
    data: Enumerable<PropertyCreateManyEntityInput>
    skipDuplicates?: boolean
  }

  export type SourceUpsertWithoutEntitiesInput = {
    update: XOR<SourceUpdateWithoutEntitiesInput, SourceUncheckedUpdateWithoutEntitiesInput>
    create: XOR<SourceCreateWithoutEntitiesInput, SourceUncheckedCreateWithoutEntitiesInput>
  }

  export type SourceUpdateWithoutEntitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    dialect?: EnumDialectFieldUpdateOperationsInput | Dialect
    owner?: UserUpdateOneRequiredWithoutSourcesInput
  }

  export type SourceUncheckedUpdateWithoutEntitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    dialect?: EnumDialectFieldUpdateOperationsInput | Dialect
  }

  export type PropertyUpsertWithWhereUniqueWithoutEntityInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutEntityInput, PropertyUncheckedUpdateWithoutEntityInput>
    create: XOR<PropertyCreateWithoutEntityInput, PropertyUncheckedCreateWithoutEntityInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutEntityInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutEntityInput, PropertyUncheckedUpdateWithoutEntityInput>
  }

  export type PropertyUpdateManyWithWhereWithoutEntityInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: Enumerable<PropertyScalarWhereInput>
    OR?: Enumerable<PropertyScalarWhereInput>
    NOT?: Enumerable<PropertyScalarWhereInput>
    id?: BigIntFilter | bigint | number
    name?: StringFilter | string
    entity_id?: IntFilter | number
  }

  export type EntityCreateWithoutPropertiesInput = {
    name: string
    source: SourceCreateNestedOneWithoutEntitiesInput
  }

  export type EntityUncheckedCreateWithoutPropertiesInput = {
    id?: number
    name: string
    source_id: number
  }

  export type EntityCreateOrConnectWithoutPropertiesInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutPropertiesInput, EntityUncheckedCreateWithoutPropertiesInput>
  }

  export type EntityUpsertWithoutPropertiesInput = {
    update: XOR<EntityUpdateWithoutPropertiesInput, EntityUncheckedUpdateWithoutPropertiesInput>
    create: XOR<EntityCreateWithoutPropertiesInput, EntityUncheckedCreateWithoutPropertiesInput>
  }

  export type EntityUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    source?: SourceUpdateOneRequiredWithoutEntitiesInput
  }

  export type EntityUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    source_id?: IntFieldUpdateOperationsInput | number
  }

  export type SourceCreateManyOwnerInput = {
    id?: number
    name: string
    user: string
    pass: string
    host: string
    port: string
    database: string
    dialect: Dialect
  }

  export type SourceUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    dialect?: EnumDialectFieldUpdateOperationsInput | Dialect
    entities?: EntityUpdateManyWithoutSourceInput
  }

  export type SourceUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    dialect?: EnumDialectFieldUpdateOperationsInput | Dialect
    entities?: EntityUncheckedUpdateManyWithoutSourceInput
  }

  export type SourceUncheckedUpdateManyWithoutSourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    dialect?: EnumDialectFieldUpdateOperationsInput | Dialect
  }

  export type EntityCreateManySourceInput = {
    id?: number
    name: string
  }

  export type EntityUpdateWithoutSourceInput = {
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUpdateManyWithoutEntityInput
  }

  export type EntityUncheckedUpdateWithoutSourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUncheckedUpdateManyWithoutEntityInput
  }

  export type EntityUncheckedUpdateManyWithoutEntitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyCreateManyEntityInput = {
    id?: bigint | number
    name: string
  }

  export type PropertyUpdateWithoutEntityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyUncheckedUpdateWithoutEntityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyUncheckedUpdateManyWithoutPropertiesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}