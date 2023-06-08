
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Example
 * 
 */
export type Example = {
  id: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Surau
 * 
 */
export type Surau = {
  id: string
  name: string
  unique_name: string
  brief_direction: string | null
  is_approved: boolean
  is_approved_at: Date | null
  created_at: Date
  updated_at: Date
  state_id: string
  district_id: string
  mall_id: string | null
  is_qiblat_certified: boolean
}

/**
 * Model Qiblat
 * 
 */
export type Qiblat = {
  id: string
  surau_id: string
  latitude: number
  longitude: number
  degree: number
}

/**
 * Model Rating
 * 
 */
export type Rating = {
  id: string
  rating: number
  review: string | null
  created_at: Date
  surau_id: string
}

/**
 * Model SurauPhoto
 * 
 */
export type SurauPhoto = {
  id: string
  file_path: string
  caption: string | null
  created_at: Date
  surau_id: string
  rating_id: string | null
}

/**
 * Model State
 * 
 */
export type State = {
  id: string
  name: string
  unique_name: string
}

/**
 * Model District
 * 
 */
export type District = {
  id: string
  name: string
  unique_name: string
  state_id: string
}

/**
 * Model Mall
 * 
 */
export type Mall = {
  id: string
  name: string
  label: string
  value: string
  district_id: string
  state_id: string
}

/**
 * Model Account
 * 
 */
export type Account = {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  sessionToken: string
  userId: string
  expires: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
}

/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = {
  identifier: string
  token: string
  expires: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Examples
 * const examples = await prisma.example.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Examples
   * const examples = await prisma.example.findMany()
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
  $disconnect(): Promise<void>;

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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.example`: Exposes CRUD operations for the **Example** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Examples
    * const examples = await prisma.example.findMany()
    * ```
    */
  get example(): Prisma.ExampleDelegate<GlobalReject>;

  /**
   * `prisma.surau`: Exposes CRUD operations for the **Surau** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suraus
    * const suraus = await prisma.surau.findMany()
    * ```
    */
  get surau(): Prisma.SurauDelegate<GlobalReject>;

  /**
   * `prisma.qiblat`: Exposes CRUD operations for the **Qiblat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qiblats
    * const qiblats = await prisma.qiblat.findMany()
    * ```
    */
  get qiblat(): Prisma.QiblatDelegate<GlobalReject>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<GlobalReject>;

  /**
   * `prisma.surauPhoto`: Exposes CRUD operations for the **SurauPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurauPhotos
    * const surauPhotos = await prisma.surauPhoto.findMany()
    * ```
    */
  get surauPhoto(): Prisma.SurauPhotoDelegate<GlobalReject>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<GlobalReject>;

  /**
   * `prisma.district`: Exposes CRUD operations for the **District** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Districts
    * const districts = await prisma.district.findMany()
    * ```
    */
  get district(): Prisma.DistrictDelegate<GlobalReject>;

  /**
   * `prisma.mall`: Exposes CRUD operations for the **Mall** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Malls
    * const malls = await prisma.mall.findMany()
    * ```
    */
  get mall(): Prisma.MallDelegate<GlobalReject>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

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
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
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
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Example: 'Example',
    Surau: 'Surau',
    Qiblat: 'Qiblat',
    Rating: 'Rating',
    SurauPhoto: 'SurauPhoto',
    State: 'State',
    District: 'District',
    Mall: 'Mall',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
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
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
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
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
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
     * Overwrites the datasource url from your schema.prisma file
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
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
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

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SurauCountOutputType
   */


  export type SurauCountOutputType = {
    images: number
    ratings: number
    qiblat: number
  }

  export type SurauCountOutputTypeSelect = {
    images?: boolean
    ratings?: boolean
    qiblat?: boolean
  }

  export type SurauCountOutputTypeGetPayload<S extends boolean | null | undefined | SurauCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SurauCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SurauCountOutputTypeArgs)
    ? SurauCountOutputType 
    : S extends { select: any } & (SurauCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SurauCountOutputType ? SurauCountOutputType[P] : never
  } 
      : SurauCountOutputType




  // Custom InputTypes

  /**
   * SurauCountOutputType without action
   */
  export type SurauCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SurauCountOutputType
     */
    select?: SurauCountOutputTypeSelect | null
  }



  /**
   * Count Type RatingCountOutputType
   */


  export type RatingCountOutputType = {
    images: number
  }

  export type RatingCountOutputTypeSelect = {
    images?: boolean
  }

  export type RatingCountOutputTypeGetPayload<S extends boolean | null | undefined | RatingCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RatingCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RatingCountOutputTypeArgs)
    ? RatingCountOutputType 
    : S extends { select: any } & (RatingCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RatingCountOutputType ? RatingCountOutputType[P] : never
  } 
      : RatingCountOutputType




  // Custom InputTypes

  /**
   * RatingCountOutputType without action
   */
  export type RatingCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RatingCountOutputType
     */
    select?: RatingCountOutputTypeSelect | null
  }



  /**
   * Count Type StateCountOutputType
   */


  export type StateCountOutputType = {
    malls: number
    districts: number
    surau: number
  }

  export type StateCountOutputTypeSelect = {
    malls?: boolean
    districts?: boolean
    surau?: boolean
  }

  export type StateCountOutputTypeGetPayload<S extends boolean | null | undefined | StateCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StateCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StateCountOutputTypeArgs)
    ? StateCountOutputType 
    : S extends { select: any } & (StateCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StateCountOutputType ? StateCountOutputType[P] : never
  } 
      : StateCountOutputType




  // Custom InputTypes

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect | null
  }



  /**
   * Count Type DistrictCountOutputType
   */


  export type DistrictCountOutputType = {
    malls: number
    surau: number
  }

  export type DistrictCountOutputTypeSelect = {
    malls?: boolean
    surau?: boolean
  }

  export type DistrictCountOutputTypeGetPayload<S extends boolean | null | undefined | DistrictCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DistrictCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DistrictCountOutputTypeArgs)
    ? DistrictCountOutputType 
    : S extends { select: any } & (DistrictCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DistrictCountOutputType ? DistrictCountOutputType[P] : never
  } 
      : DistrictCountOutputType




  // Custom InputTypes

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DistrictCountOutputType
     */
    select?: DistrictCountOutputTypeSelect | null
  }



  /**
   * Count Type MallCountOutputType
   */


  export type MallCountOutputType = {
    surau: number
  }

  export type MallCountOutputTypeSelect = {
    surau?: boolean
  }

  export type MallCountOutputTypeGetPayload<S extends boolean | null | undefined | MallCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MallCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MallCountOutputTypeArgs)
    ? MallCountOutputType 
    : S extends { select: any } & (MallCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MallCountOutputType ? MallCountOutputType[P] : never
  } 
      : MallCountOutputType




  // Custom InputTypes

  /**
   * MallCountOutputType without action
   */
  export type MallCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MallCountOutputType
     */
    select?: MallCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect = {
    accounts?: boolean
    sessions?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Example
   */


  export type AggregateExample = {
    _count: ExampleCountAggregateOutputType | null
    _min: ExampleMinAggregateOutputType | null
    _max: ExampleMaxAggregateOutputType | null
  }

  export type ExampleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExampleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExampleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExampleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExampleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExampleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExampleAggregateArgs = {
    /**
     * Filter which Example to aggregate.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: Enumerable<ExampleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Examples
    **/
    _count?: true | ExampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExampleMaxAggregateInputType
  }

  export type GetExampleAggregateType<T extends ExampleAggregateArgs> = {
        [P in keyof T & keyof AggregateExample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExample[P]>
      : GetScalarType<T[P], AggregateExample[P]>
  }




  export type ExampleGroupByArgs = {
    where?: ExampleWhereInput
    orderBy?: Enumerable<ExampleOrderByWithAggregationInput>
    by: ExampleScalarFieldEnum[]
    having?: ExampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExampleCountAggregateInputType | true
    _min?: ExampleMinAggregateInputType
    _max?: ExampleMaxAggregateInputType
  }


  export type ExampleGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    _count: ExampleCountAggregateOutputType | null
    _min: ExampleMinAggregateOutputType | null
    _max: ExampleMaxAggregateOutputType | null
  }

  type GetExampleGroupByPayload<T extends ExampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExampleGroupByOutputType[P]>
            : GetScalarType<T[P], ExampleGroupByOutputType[P]>
        }
      >
    >


  export type ExampleSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type ExampleGetPayload<S extends boolean | null | undefined | ExampleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Example :
    S extends undefined ? never :
    S extends { include: any } & (ExampleArgs | ExampleFindManyArgs)
    ? Example 
    : S extends { select: any } & (ExampleArgs | ExampleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Example ? Example[P] : never
  } 
      : Example


  type ExampleCountArgs = 
    Omit<ExampleFindManyArgs, 'select' | 'include'> & {
      select?: ExampleCountAggregateInputType | true
    }

  export interface ExampleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Example that matches the filter.
     * @param {ExampleFindUniqueArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExampleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExampleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Example'> extends True ? Prisma__ExampleClient<ExampleGetPayload<T>> : Prisma__ExampleClient<ExampleGetPayload<T> | null, null>

    /**
     * Find one Example that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExampleFindUniqueOrThrowArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExampleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExampleFindUniqueOrThrowArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Find the first Example that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindFirstArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExampleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExampleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Example'> extends True ? Prisma__ExampleClient<ExampleGetPayload<T>> : Prisma__ExampleClient<ExampleGetPayload<T> | null, null>

    /**
     * Find the first Example that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindFirstOrThrowArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExampleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExampleFindFirstOrThrowArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Find zero or more Examples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Examples
     * const examples = await prisma.example.findMany()
     * 
     * // Get first 10 Examples
     * const examples = await prisma.example.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exampleWithIdOnly = await prisma.example.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExampleFindManyArgs>(
      args?: SelectSubset<T, ExampleFindManyArgs>
    ): Prisma.PrismaPromise<Array<ExampleGetPayload<T>>>

    /**
     * Create a Example.
     * @param {ExampleCreateArgs} args - Arguments to create a Example.
     * @example
     * // Create one Example
     * const Example = await prisma.example.create({
     *   data: {
     *     // ... data to create a Example
     *   }
     * })
     * 
    **/
    create<T extends ExampleCreateArgs>(
      args: SelectSubset<T, ExampleCreateArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Create many Examples.
     *     @param {ExampleCreateManyArgs} args - Arguments to create many Examples.
     *     @example
     *     // Create many Examples
     *     const example = await prisma.example.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExampleCreateManyArgs>(
      args?: SelectSubset<T, ExampleCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Example.
     * @param {ExampleDeleteArgs} args - Arguments to delete one Example.
     * @example
     * // Delete one Example
     * const Example = await prisma.example.delete({
     *   where: {
     *     // ... filter to delete one Example
     *   }
     * })
     * 
    **/
    delete<T extends ExampleDeleteArgs>(
      args: SelectSubset<T, ExampleDeleteArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Update one Example.
     * @param {ExampleUpdateArgs} args - Arguments to update one Example.
     * @example
     * // Update one Example
     * const example = await prisma.example.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExampleUpdateArgs>(
      args: SelectSubset<T, ExampleUpdateArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Delete zero or more Examples.
     * @param {ExampleDeleteManyArgs} args - Arguments to filter Examples to delete.
     * @example
     * // Delete a few Examples
     * const { count } = await prisma.example.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExampleDeleteManyArgs>(
      args?: SelectSubset<T, ExampleDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Examples
     * const example = await prisma.example.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExampleUpdateManyArgs>(
      args: SelectSubset<T, ExampleUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Example.
     * @param {ExampleUpsertArgs} args - Arguments to update or create a Example.
     * @example
     * // Update or create a Example
     * const example = await prisma.example.upsert({
     *   create: {
     *     // ... data to create a Example
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Example we want to update
     *   }
     * })
    **/
    upsert<T extends ExampleUpsertArgs>(
      args: SelectSubset<T, ExampleUpsertArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Count the number of Examples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleCountArgs} args - Arguments to filter Examples to count.
     * @example
     * // Count the number of Examples
     * const count = await prisma.example.count({
     *   where: {
     *     // ... the filter for the Examples we want to count
     *   }
     * })
    **/
    count<T extends ExampleCountArgs>(
      args?: Subset<T, ExampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Example.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExampleAggregateArgs>(args: Subset<T, ExampleAggregateArgs>): Prisma.PrismaPromise<GetExampleAggregateType<T>>

    /**
     * Group by Example.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleGroupByArgs} args - Group by arguments.
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
      T extends ExampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExampleGroupByArgs['orderBy'] }
        : { orderBy?: ExampleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Example.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExampleClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * Example base type for findUnique actions
   */
  export type ExampleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect | null
    /**
     * Filter, which Example to fetch.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example findUnique
   */
  export interface ExampleFindUniqueArgs extends ExampleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Example findUniqueOrThrow
   */
  export type ExampleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect | null
    /**
     * Filter, which Example to fetch.
     */
    where: ExampleWhereUniqueInput
  }


  /**
   * Example base type for findFirst actions
   */
  export type ExampleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect | null
    /**
     * Filter, which Example to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: Enumerable<ExampleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examples.
     */
    distinct?: Enumerable<ExampleScalarFieldEnum>
  }

  /**
   * Example findFirst
   */
  export interface ExampleFindFirstArgs extends ExampleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Example findFirstOrThrow
   */
  export type ExampleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect | null
    /**
     * Filter, which Example to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: Enumerable<ExampleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examples.
     */
    distinct?: Enumerable<ExampleScalarFieldEnum>
  }


  /**
   * Example findMany
   */
  export type ExampleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect | null
    /**
     * Filter, which Examples to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: Enumerable<ExampleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    distinct?: Enumerable<ExampleScalarFieldEnum>
  }


  /**
   * Example create
   */
  export type ExampleCreateArgs = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect | null
    /**
     * The data needed to create a Example.
     */
    data: XOR<ExampleCreateInput, ExampleUncheckedCreateInput>
  }


  /**
   * Example createMany
   */
  export type ExampleCreateManyArgs = {
    /**
     * The data used to create many Examples.
     */
    data: Enumerable<ExampleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Example update
   */
  export type ExampleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect | null
    /**
     * The data needed to update a Example.
     */
    data: XOR<ExampleUpdateInput, ExampleUncheckedUpdateInput>
    /**
     * Choose, which Example to update.
     */
    where: ExampleWhereUniqueInput
  }


  /**
   * Example updateMany
   */
  export type ExampleUpdateManyArgs = {
    /**
     * The data used to update Examples.
     */
    data: XOR<ExampleUpdateManyMutationInput, ExampleUncheckedUpdateManyInput>
    /**
     * Filter which Examples to update
     */
    where?: ExampleWhereInput
  }


  /**
   * Example upsert
   */
  export type ExampleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect | null
    /**
     * The filter to search for the Example to update in case it exists.
     */
    where: ExampleWhereUniqueInput
    /**
     * In case the Example found by the `where` argument doesn't exist, create a new Example with this data.
     */
    create: XOR<ExampleCreateInput, ExampleUncheckedCreateInput>
    /**
     * In case the Example was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExampleUpdateInput, ExampleUncheckedUpdateInput>
  }


  /**
   * Example delete
   */
  export type ExampleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect | null
    /**
     * Filter which Example to delete.
     */
    where: ExampleWhereUniqueInput
  }


  /**
   * Example deleteMany
   */
  export type ExampleDeleteManyArgs = {
    /**
     * Filter which Examples to delete
     */
    where?: ExampleWhereInput
  }


  /**
   * Example without action
   */
  export type ExampleArgs = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect | null
  }



  /**
   * Model Surau
   */


  export type AggregateSurau = {
    _count: SurauCountAggregateOutputType | null
    _min: SurauMinAggregateOutputType | null
    _max: SurauMaxAggregateOutputType | null
  }

  export type SurauMinAggregateOutputType = {
    id: string | null
    name: string | null
    unique_name: string | null
    brief_direction: string | null
    is_approved: boolean | null
    is_approved_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    state_id: string | null
    district_id: string | null
    mall_id: string | null
    is_qiblat_certified: boolean | null
  }

  export type SurauMaxAggregateOutputType = {
    id: string | null
    name: string | null
    unique_name: string | null
    brief_direction: string | null
    is_approved: boolean | null
    is_approved_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    state_id: string | null
    district_id: string | null
    mall_id: string | null
    is_qiblat_certified: boolean | null
  }

  export type SurauCountAggregateOutputType = {
    id: number
    name: number
    unique_name: number
    brief_direction: number
    is_approved: number
    is_approved_at: number
    created_at: number
    updated_at: number
    state_id: number
    district_id: number
    mall_id: number
    is_qiblat_certified: number
    _all: number
  }


  export type SurauMinAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
    brief_direction?: true
    is_approved?: true
    is_approved_at?: true
    created_at?: true
    updated_at?: true
    state_id?: true
    district_id?: true
    mall_id?: true
    is_qiblat_certified?: true
  }

  export type SurauMaxAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
    brief_direction?: true
    is_approved?: true
    is_approved_at?: true
    created_at?: true
    updated_at?: true
    state_id?: true
    district_id?: true
    mall_id?: true
    is_qiblat_certified?: true
  }

  export type SurauCountAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
    brief_direction?: true
    is_approved?: true
    is_approved_at?: true
    created_at?: true
    updated_at?: true
    state_id?: true
    district_id?: true
    mall_id?: true
    is_qiblat_certified?: true
    _all?: true
  }

  export type SurauAggregateArgs = {
    /**
     * Filter which Surau to aggregate.
     */
    where?: SurauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suraus to fetch.
     */
    orderBy?: Enumerable<SurauOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suraus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suraus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suraus
    **/
    _count?: true | SurauCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurauMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurauMaxAggregateInputType
  }

  export type GetSurauAggregateType<T extends SurauAggregateArgs> = {
        [P in keyof T & keyof AggregateSurau]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurau[P]>
      : GetScalarType<T[P], AggregateSurau[P]>
  }




  export type SurauGroupByArgs = {
    where?: SurauWhereInput
    orderBy?: Enumerable<SurauOrderByWithAggregationInput>
    by: SurauScalarFieldEnum[]
    having?: SurauScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurauCountAggregateInputType | true
    _min?: SurauMinAggregateInputType
    _max?: SurauMaxAggregateInputType
  }


  export type SurauGroupByOutputType = {
    id: string
    name: string
    unique_name: string
    brief_direction: string | null
    is_approved: boolean
    is_approved_at: Date | null
    created_at: Date
    updated_at: Date
    state_id: string
    district_id: string
    mall_id: string | null
    is_qiblat_certified: boolean
    _count: SurauCountAggregateOutputType | null
    _min: SurauMinAggregateOutputType | null
    _max: SurauMaxAggregateOutputType | null
  }

  type GetSurauGroupByPayload<T extends SurauGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SurauGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurauGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurauGroupByOutputType[P]>
            : GetScalarType<T[P], SurauGroupByOutputType[P]>
        }
      >
    >


  export type SurauSelect = {
    id?: boolean
    name?: boolean
    unique_name?: boolean
    brief_direction?: boolean
    is_approved?: boolean
    is_approved_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    state_id?: boolean
    district_id?: boolean
    mall_id?: boolean
    is_qiblat_certified?: boolean
    images?: boolean | Surau$imagesArgs
    ratings?: boolean | Surau$ratingsArgs
    state?: boolean | StateArgs
    district?: boolean | DistrictArgs
    mall?: boolean | MallArgs
    qiblat?: boolean | Surau$qiblatArgs
    _count?: boolean | SurauCountOutputTypeArgs
  }


  export type SurauInclude = {
    images?: boolean | Surau$imagesArgs
    ratings?: boolean | Surau$ratingsArgs
    state?: boolean | StateArgs
    district?: boolean | DistrictArgs
    mall?: boolean | MallArgs
    qiblat?: boolean | Surau$qiblatArgs
    _count?: boolean | SurauCountOutputTypeArgs
  }

  export type SurauGetPayload<S extends boolean | null | undefined | SurauArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Surau :
    S extends undefined ? never :
    S extends { include: any } & (SurauArgs | SurauFindManyArgs)
    ? Surau  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'images' ? Array < SurauPhotoGetPayload<S['include'][P]>>  :
        P extends 'ratings' ? Array < RatingGetPayload<S['include'][P]>>  :
        P extends 'state' ? StateGetPayload<S['include'][P]> :
        P extends 'district' ? DistrictGetPayload<S['include'][P]> :
        P extends 'mall' ? MallGetPayload<S['include'][P]> | null :
        P extends 'qiblat' ? Array < QiblatGetPayload<S['include'][P]>>  :
        P extends '_count' ? SurauCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SurauArgs | SurauFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'images' ? Array < SurauPhotoGetPayload<S['select'][P]>>  :
        P extends 'ratings' ? Array < RatingGetPayload<S['select'][P]>>  :
        P extends 'state' ? StateGetPayload<S['select'][P]> :
        P extends 'district' ? DistrictGetPayload<S['select'][P]> :
        P extends 'mall' ? MallGetPayload<S['select'][P]> | null :
        P extends 'qiblat' ? Array < QiblatGetPayload<S['select'][P]>>  :
        P extends '_count' ? SurauCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Surau ? Surau[P] : never
  } 
      : Surau


  type SurauCountArgs = 
    Omit<SurauFindManyArgs, 'select' | 'include'> & {
      select?: SurauCountAggregateInputType | true
    }

  export interface SurauDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Surau that matches the filter.
     * @param {SurauFindUniqueArgs} args - Arguments to find a Surau
     * @example
     * // Get one Surau
     * const surau = await prisma.surau.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SurauFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SurauFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Surau'> extends True ? Prisma__SurauClient<SurauGetPayload<T>> : Prisma__SurauClient<SurauGetPayload<T> | null, null>

    /**
     * Find one Surau that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SurauFindUniqueOrThrowArgs} args - Arguments to find a Surau
     * @example
     * // Get one Surau
     * const surau = await prisma.surau.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SurauFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SurauFindUniqueOrThrowArgs>
    ): Prisma__SurauClient<SurauGetPayload<T>>

    /**
     * Find the first Surau that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauFindFirstArgs} args - Arguments to find a Surau
     * @example
     * // Get one Surau
     * const surau = await prisma.surau.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SurauFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SurauFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Surau'> extends True ? Prisma__SurauClient<SurauGetPayload<T>> : Prisma__SurauClient<SurauGetPayload<T> | null, null>

    /**
     * Find the first Surau that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauFindFirstOrThrowArgs} args - Arguments to find a Surau
     * @example
     * // Get one Surau
     * const surau = await prisma.surau.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SurauFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SurauFindFirstOrThrowArgs>
    ): Prisma__SurauClient<SurauGetPayload<T>>

    /**
     * Find zero or more Suraus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suraus
     * const suraus = await prisma.surau.findMany()
     * 
     * // Get first 10 Suraus
     * const suraus = await prisma.surau.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surauWithIdOnly = await prisma.surau.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SurauFindManyArgs>(
      args?: SelectSubset<T, SurauFindManyArgs>
    ): Prisma.PrismaPromise<Array<SurauGetPayload<T>>>

    /**
     * Create a Surau.
     * @param {SurauCreateArgs} args - Arguments to create a Surau.
     * @example
     * // Create one Surau
     * const Surau = await prisma.surau.create({
     *   data: {
     *     // ... data to create a Surau
     *   }
     * })
     * 
    **/
    create<T extends SurauCreateArgs>(
      args: SelectSubset<T, SurauCreateArgs>
    ): Prisma__SurauClient<SurauGetPayload<T>>

    /**
     * Create many Suraus.
     *     @param {SurauCreateManyArgs} args - Arguments to create many Suraus.
     *     @example
     *     // Create many Suraus
     *     const surau = await prisma.surau.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SurauCreateManyArgs>(
      args?: SelectSubset<T, SurauCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Surau.
     * @param {SurauDeleteArgs} args - Arguments to delete one Surau.
     * @example
     * // Delete one Surau
     * const Surau = await prisma.surau.delete({
     *   where: {
     *     // ... filter to delete one Surau
     *   }
     * })
     * 
    **/
    delete<T extends SurauDeleteArgs>(
      args: SelectSubset<T, SurauDeleteArgs>
    ): Prisma__SurauClient<SurauGetPayload<T>>

    /**
     * Update one Surau.
     * @param {SurauUpdateArgs} args - Arguments to update one Surau.
     * @example
     * // Update one Surau
     * const surau = await prisma.surau.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SurauUpdateArgs>(
      args: SelectSubset<T, SurauUpdateArgs>
    ): Prisma__SurauClient<SurauGetPayload<T>>

    /**
     * Delete zero or more Suraus.
     * @param {SurauDeleteManyArgs} args - Arguments to filter Suraus to delete.
     * @example
     * // Delete a few Suraus
     * const { count } = await prisma.surau.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SurauDeleteManyArgs>(
      args?: SelectSubset<T, SurauDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suraus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suraus
     * const surau = await prisma.surau.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SurauUpdateManyArgs>(
      args: SelectSubset<T, SurauUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Surau.
     * @param {SurauUpsertArgs} args - Arguments to update or create a Surau.
     * @example
     * // Update or create a Surau
     * const surau = await prisma.surau.upsert({
     *   create: {
     *     // ... data to create a Surau
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Surau we want to update
     *   }
     * })
    **/
    upsert<T extends SurauUpsertArgs>(
      args: SelectSubset<T, SurauUpsertArgs>
    ): Prisma__SurauClient<SurauGetPayload<T>>

    /**
     * Count the number of Suraus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauCountArgs} args - Arguments to filter Suraus to count.
     * @example
     * // Count the number of Suraus
     * const count = await prisma.surau.count({
     *   where: {
     *     // ... the filter for the Suraus we want to count
     *   }
     * })
    **/
    count<T extends SurauCountArgs>(
      args?: Subset<T, SurauCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurauCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Surau.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurauAggregateArgs>(args: Subset<T, SurauAggregateArgs>): Prisma.PrismaPromise<GetSurauAggregateType<T>>

    /**
     * Group by Surau.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauGroupByArgs} args - Group by arguments.
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
      T extends SurauGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurauGroupByArgs['orderBy'] }
        : { orderBy?: SurauGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SurauGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurauGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Surau.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SurauClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    images<T extends Surau$imagesArgs= {}>(args?: Subset<T, Surau$imagesArgs>): Prisma.PrismaPromise<Array<SurauPhotoGetPayload<T>>| Null>;

    ratings<T extends Surau$ratingsArgs= {}>(args?: Subset<T, Surau$ratingsArgs>): Prisma.PrismaPromise<Array<RatingGetPayload<T>>| Null>;

    state<T extends StateArgs= {}>(args?: Subset<T, StateArgs>): Prisma__StateClient<StateGetPayload<T> | Null>;

    district<T extends DistrictArgs= {}>(args?: Subset<T, DistrictArgs>): Prisma__DistrictClient<DistrictGetPayload<T> | Null>;

    mall<T extends MallArgs= {}>(args?: Subset<T, MallArgs>): Prisma__MallClient<MallGetPayload<T> | Null>;

    qiblat<T extends Surau$qiblatArgs= {}>(args?: Subset<T, Surau$qiblatArgs>): Prisma.PrismaPromise<Array<QiblatGetPayload<T>>| Null>;

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
   * Surau base type for findUnique actions
   */
  export type SurauFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    /**
     * Filter, which Surau to fetch.
     */
    where: SurauWhereUniqueInput
  }

  /**
   * Surau findUnique
   */
  export interface SurauFindUniqueArgs extends SurauFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Surau findUniqueOrThrow
   */
  export type SurauFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    /**
     * Filter, which Surau to fetch.
     */
    where: SurauWhereUniqueInput
  }


  /**
   * Surau base type for findFirst actions
   */
  export type SurauFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    /**
     * Filter, which Surau to fetch.
     */
    where?: SurauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suraus to fetch.
     */
    orderBy?: Enumerable<SurauOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suraus.
     */
    cursor?: SurauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suraus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suraus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suraus.
     */
    distinct?: Enumerable<SurauScalarFieldEnum>
  }

  /**
   * Surau findFirst
   */
  export interface SurauFindFirstArgs extends SurauFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Surau findFirstOrThrow
   */
  export type SurauFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    /**
     * Filter, which Surau to fetch.
     */
    where?: SurauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suraus to fetch.
     */
    orderBy?: Enumerable<SurauOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suraus.
     */
    cursor?: SurauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suraus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suraus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suraus.
     */
    distinct?: Enumerable<SurauScalarFieldEnum>
  }


  /**
   * Surau findMany
   */
  export type SurauFindManyArgs = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    /**
     * Filter, which Suraus to fetch.
     */
    where?: SurauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suraus to fetch.
     */
    orderBy?: Enumerable<SurauOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suraus.
     */
    cursor?: SurauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suraus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suraus.
     */
    skip?: number
    distinct?: Enumerable<SurauScalarFieldEnum>
  }


  /**
   * Surau create
   */
  export type SurauCreateArgs = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    /**
     * The data needed to create a Surau.
     */
    data: XOR<SurauCreateInput, SurauUncheckedCreateInput>
  }


  /**
   * Surau createMany
   */
  export type SurauCreateManyArgs = {
    /**
     * The data used to create many Suraus.
     */
    data: Enumerable<SurauCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Surau update
   */
  export type SurauUpdateArgs = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    /**
     * The data needed to update a Surau.
     */
    data: XOR<SurauUpdateInput, SurauUncheckedUpdateInput>
    /**
     * Choose, which Surau to update.
     */
    where: SurauWhereUniqueInput
  }


  /**
   * Surau updateMany
   */
  export type SurauUpdateManyArgs = {
    /**
     * The data used to update Suraus.
     */
    data: XOR<SurauUpdateManyMutationInput, SurauUncheckedUpdateManyInput>
    /**
     * Filter which Suraus to update
     */
    where?: SurauWhereInput
  }


  /**
   * Surau upsert
   */
  export type SurauUpsertArgs = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    /**
     * The filter to search for the Surau to update in case it exists.
     */
    where: SurauWhereUniqueInput
    /**
     * In case the Surau found by the `where` argument doesn't exist, create a new Surau with this data.
     */
    create: XOR<SurauCreateInput, SurauUncheckedCreateInput>
    /**
     * In case the Surau was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurauUpdateInput, SurauUncheckedUpdateInput>
  }


  /**
   * Surau delete
   */
  export type SurauDeleteArgs = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    /**
     * Filter which Surau to delete.
     */
    where: SurauWhereUniqueInput
  }


  /**
   * Surau deleteMany
   */
  export type SurauDeleteManyArgs = {
    /**
     * Filter which Suraus to delete
     */
    where?: SurauWhereInput
  }


  /**
   * Surau.images
   */
  export type Surau$imagesArgs = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
    where?: SurauPhotoWhereInput
    orderBy?: Enumerable<SurauPhotoOrderByWithRelationInput>
    cursor?: SurauPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SurauPhotoScalarFieldEnum>
  }


  /**
   * Surau.ratings
   */
  export type Surau$ratingsArgs = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude | null
    where?: RatingWhereInput
    orderBy?: Enumerable<RatingOrderByWithRelationInput>
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RatingScalarFieldEnum>
  }


  /**
   * Surau.qiblat
   */
  export type Surau$qiblatArgs = {
    /**
     * Select specific fields to fetch from the Qiblat
     */
    select?: QiblatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QiblatInclude | null
    where?: QiblatWhereInput
    orderBy?: Enumerable<QiblatOrderByWithRelationInput>
    cursor?: QiblatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<QiblatScalarFieldEnum>
  }


  /**
   * Surau without action
   */
  export type SurauArgs = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
  }



  /**
   * Model Qiblat
   */


  export type AggregateQiblat = {
    _count: QiblatCountAggregateOutputType | null
    _avg: QiblatAvgAggregateOutputType | null
    _sum: QiblatSumAggregateOutputType | null
    _min: QiblatMinAggregateOutputType | null
    _max: QiblatMaxAggregateOutputType | null
  }

  export type QiblatAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    degree: number | null
  }

  export type QiblatSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    degree: number | null
  }

  export type QiblatMinAggregateOutputType = {
    id: string | null
    surau_id: string | null
    latitude: number | null
    longitude: number | null
    degree: number | null
  }

  export type QiblatMaxAggregateOutputType = {
    id: string | null
    surau_id: string | null
    latitude: number | null
    longitude: number | null
    degree: number | null
  }

  export type QiblatCountAggregateOutputType = {
    id: number
    surau_id: number
    latitude: number
    longitude: number
    degree: number
    _all: number
  }


  export type QiblatAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    degree?: true
  }

  export type QiblatSumAggregateInputType = {
    latitude?: true
    longitude?: true
    degree?: true
  }

  export type QiblatMinAggregateInputType = {
    id?: true
    surau_id?: true
    latitude?: true
    longitude?: true
    degree?: true
  }

  export type QiblatMaxAggregateInputType = {
    id?: true
    surau_id?: true
    latitude?: true
    longitude?: true
    degree?: true
  }

  export type QiblatCountAggregateInputType = {
    id?: true
    surau_id?: true
    latitude?: true
    longitude?: true
    degree?: true
    _all?: true
  }

  export type QiblatAggregateArgs = {
    /**
     * Filter which Qiblat to aggregate.
     */
    where?: QiblatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qiblats to fetch.
     */
    orderBy?: Enumerable<QiblatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QiblatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qiblats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qiblats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Qiblats
    **/
    _count?: true | QiblatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QiblatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QiblatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QiblatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QiblatMaxAggregateInputType
  }

  export type GetQiblatAggregateType<T extends QiblatAggregateArgs> = {
        [P in keyof T & keyof AggregateQiblat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQiblat[P]>
      : GetScalarType<T[P], AggregateQiblat[P]>
  }




  export type QiblatGroupByArgs = {
    where?: QiblatWhereInput
    orderBy?: Enumerable<QiblatOrderByWithAggregationInput>
    by: QiblatScalarFieldEnum[]
    having?: QiblatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QiblatCountAggregateInputType | true
    _avg?: QiblatAvgAggregateInputType
    _sum?: QiblatSumAggregateInputType
    _min?: QiblatMinAggregateInputType
    _max?: QiblatMaxAggregateInputType
  }


  export type QiblatGroupByOutputType = {
    id: string
    surau_id: string
    latitude: number
    longitude: number
    degree: number
    _count: QiblatCountAggregateOutputType | null
    _avg: QiblatAvgAggregateOutputType | null
    _sum: QiblatSumAggregateOutputType | null
    _min: QiblatMinAggregateOutputType | null
    _max: QiblatMaxAggregateOutputType | null
  }

  type GetQiblatGroupByPayload<T extends QiblatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QiblatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QiblatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QiblatGroupByOutputType[P]>
            : GetScalarType<T[P], QiblatGroupByOutputType[P]>
        }
      >
    >


  export type QiblatSelect = {
    id?: boolean
    surau_id?: boolean
    latitude?: boolean
    longitude?: boolean
    degree?: boolean
    surau?: boolean | SurauArgs
  }


  export type QiblatInclude = {
    surau?: boolean | SurauArgs
  }

  export type QiblatGetPayload<S extends boolean | null | undefined | QiblatArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Qiblat :
    S extends undefined ? never :
    S extends { include: any } & (QiblatArgs | QiblatFindManyArgs)
    ? Qiblat  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'surau' ? SurauGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QiblatArgs | QiblatFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'surau' ? SurauGetPayload<S['select'][P]> :  P extends keyof Qiblat ? Qiblat[P] : never
  } 
      : Qiblat


  type QiblatCountArgs = 
    Omit<QiblatFindManyArgs, 'select' | 'include'> & {
      select?: QiblatCountAggregateInputType | true
    }

  export interface QiblatDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Qiblat that matches the filter.
     * @param {QiblatFindUniqueArgs} args - Arguments to find a Qiblat
     * @example
     * // Get one Qiblat
     * const qiblat = await prisma.qiblat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QiblatFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QiblatFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Qiblat'> extends True ? Prisma__QiblatClient<QiblatGetPayload<T>> : Prisma__QiblatClient<QiblatGetPayload<T> | null, null>

    /**
     * Find one Qiblat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QiblatFindUniqueOrThrowArgs} args - Arguments to find a Qiblat
     * @example
     * // Get one Qiblat
     * const qiblat = await prisma.qiblat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QiblatFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QiblatFindUniqueOrThrowArgs>
    ): Prisma__QiblatClient<QiblatGetPayload<T>>

    /**
     * Find the first Qiblat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QiblatFindFirstArgs} args - Arguments to find a Qiblat
     * @example
     * // Get one Qiblat
     * const qiblat = await prisma.qiblat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QiblatFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QiblatFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Qiblat'> extends True ? Prisma__QiblatClient<QiblatGetPayload<T>> : Prisma__QiblatClient<QiblatGetPayload<T> | null, null>

    /**
     * Find the first Qiblat that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QiblatFindFirstOrThrowArgs} args - Arguments to find a Qiblat
     * @example
     * // Get one Qiblat
     * const qiblat = await prisma.qiblat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QiblatFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QiblatFindFirstOrThrowArgs>
    ): Prisma__QiblatClient<QiblatGetPayload<T>>

    /**
     * Find zero or more Qiblats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QiblatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qiblats
     * const qiblats = await prisma.qiblat.findMany()
     * 
     * // Get first 10 Qiblats
     * const qiblats = await prisma.qiblat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qiblatWithIdOnly = await prisma.qiblat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QiblatFindManyArgs>(
      args?: SelectSubset<T, QiblatFindManyArgs>
    ): Prisma.PrismaPromise<Array<QiblatGetPayload<T>>>

    /**
     * Create a Qiblat.
     * @param {QiblatCreateArgs} args - Arguments to create a Qiblat.
     * @example
     * // Create one Qiblat
     * const Qiblat = await prisma.qiblat.create({
     *   data: {
     *     // ... data to create a Qiblat
     *   }
     * })
     * 
    **/
    create<T extends QiblatCreateArgs>(
      args: SelectSubset<T, QiblatCreateArgs>
    ): Prisma__QiblatClient<QiblatGetPayload<T>>

    /**
     * Create many Qiblats.
     *     @param {QiblatCreateManyArgs} args - Arguments to create many Qiblats.
     *     @example
     *     // Create many Qiblats
     *     const qiblat = await prisma.qiblat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QiblatCreateManyArgs>(
      args?: SelectSubset<T, QiblatCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Qiblat.
     * @param {QiblatDeleteArgs} args - Arguments to delete one Qiblat.
     * @example
     * // Delete one Qiblat
     * const Qiblat = await prisma.qiblat.delete({
     *   where: {
     *     // ... filter to delete one Qiblat
     *   }
     * })
     * 
    **/
    delete<T extends QiblatDeleteArgs>(
      args: SelectSubset<T, QiblatDeleteArgs>
    ): Prisma__QiblatClient<QiblatGetPayload<T>>

    /**
     * Update one Qiblat.
     * @param {QiblatUpdateArgs} args - Arguments to update one Qiblat.
     * @example
     * // Update one Qiblat
     * const qiblat = await prisma.qiblat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QiblatUpdateArgs>(
      args: SelectSubset<T, QiblatUpdateArgs>
    ): Prisma__QiblatClient<QiblatGetPayload<T>>

    /**
     * Delete zero or more Qiblats.
     * @param {QiblatDeleteManyArgs} args - Arguments to filter Qiblats to delete.
     * @example
     * // Delete a few Qiblats
     * const { count } = await prisma.qiblat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QiblatDeleteManyArgs>(
      args?: SelectSubset<T, QiblatDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qiblats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QiblatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qiblats
     * const qiblat = await prisma.qiblat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QiblatUpdateManyArgs>(
      args: SelectSubset<T, QiblatUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Qiblat.
     * @param {QiblatUpsertArgs} args - Arguments to update or create a Qiblat.
     * @example
     * // Update or create a Qiblat
     * const qiblat = await prisma.qiblat.upsert({
     *   create: {
     *     // ... data to create a Qiblat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qiblat we want to update
     *   }
     * })
    **/
    upsert<T extends QiblatUpsertArgs>(
      args: SelectSubset<T, QiblatUpsertArgs>
    ): Prisma__QiblatClient<QiblatGetPayload<T>>

    /**
     * Count the number of Qiblats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QiblatCountArgs} args - Arguments to filter Qiblats to count.
     * @example
     * // Count the number of Qiblats
     * const count = await prisma.qiblat.count({
     *   where: {
     *     // ... the filter for the Qiblats we want to count
     *   }
     * })
    **/
    count<T extends QiblatCountArgs>(
      args?: Subset<T, QiblatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QiblatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qiblat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QiblatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QiblatAggregateArgs>(args: Subset<T, QiblatAggregateArgs>): Prisma.PrismaPromise<GetQiblatAggregateType<T>>

    /**
     * Group by Qiblat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QiblatGroupByArgs} args - Group by arguments.
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
      T extends QiblatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QiblatGroupByArgs['orderBy'] }
        : { orderBy?: QiblatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QiblatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQiblatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Qiblat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QiblatClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    surau<T extends SurauArgs= {}>(args?: Subset<T, SurauArgs>): Prisma__SurauClient<SurauGetPayload<T> | Null>;

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
   * Qiblat base type for findUnique actions
   */
  export type QiblatFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Qiblat
     */
    select?: QiblatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QiblatInclude | null
    /**
     * Filter, which Qiblat to fetch.
     */
    where: QiblatWhereUniqueInput
  }

  /**
   * Qiblat findUnique
   */
  export interface QiblatFindUniqueArgs extends QiblatFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Qiblat findUniqueOrThrow
   */
  export type QiblatFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Qiblat
     */
    select?: QiblatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QiblatInclude | null
    /**
     * Filter, which Qiblat to fetch.
     */
    where: QiblatWhereUniqueInput
  }


  /**
   * Qiblat base type for findFirst actions
   */
  export type QiblatFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Qiblat
     */
    select?: QiblatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QiblatInclude | null
    /**
     * Filter, which Qiblat to fetch.
     */
    where?: QiblatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qiblats to fetch.
     */
    orderBy?: Enumerable<QiblatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qiblats.
     */
    cursor?: QiblatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qiblats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qiblats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qiblats.
     */
    distinct?: Enumerable<QiblatScalarFieldEnum>
  }

  /**
   * Qiblat findFirst
   */
  export interface QiblatFindFirstArgs extends QiblatFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Qiblat findFirstOrThrow
   */
  export type QiblatFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Qiblat
     */
    select?: QiblatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QiblatInclude | null
    /**
     * Filter, which Qiblat to fetch.
     */
    where?: QiblatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qiblats to fetch.
     */
    orderBy?: Enumerable<QiblatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qiblats.
     */
    cursor?: QiblatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qiblats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qiblats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qiblats.
     */
    distinct?: Enumerable<QiblatScalarFieldEnum>
  }


  /**
   * Qiblat findMany
   */
  export type QiblatFindManyArgs = {
    /**
     * Select specific fields to fetch from the Qiblat
     */
    select?: QiblatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QiblatInclude | null
    /**
     * Filter, which Qiblats to fetch.
     */
    where?: QiblatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qiblats to fetch.
     */
    orderBy?: Enumerable<QiblatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Qiblats.
     */
    cursor?: QiblatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qiblats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qiblats.
     */
    skip?: number
    distinct?: Enumerable<QiblatScalarFieldEnum>
  }


  /**
   * Qiblat create
   */
  export type QiblatCreateArgs = {
    /**
     * Select specific fields to fetch from the Qiblat
     */
    select?: QiblatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QiblatInclude | null
    /**
     * The data needed to create a Qiblat.
     */
    data: XOR<QiblatCreateInput, QiblatUncheckedCreateInput>
  }


  /**
   * Qiblat createMany
   */
  export type QiblatCreateManyArgs = {
    /**
     * The data used to create many Qiblats.
     */
    data: Enumerable<QiblatCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Qiblat update
   */
  export type QiblatUpdateArgs = {
    /**
     * Select specific fields to fetch from the Qiblat
     */
    select?: QiblatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QiblatInclude | null
    /**
     * The data needed to update a Qiblat.
     */
    data: XOR<QiblatUpdateInput, QiblatUncheckedUpdateInput>
    /**
     * Choose, which Qiblat to update.
     */
    where: QiblatWhereUniqueInput
  }


  /**
   * Qiblat updateMany
   */
  export type QiblatUpdateManyArgs = {
    /**
     * The data used to update Qiblats.
     */
    data: XOR<QiblatUpdateManyMutationInput, QiblatUncheckedUpdateManyInput>
    /**
     * Filter which Qiblats to update
     */
    where?: QiblatWhereInput
  }


  /**
   * Qiblat upsert
   */
  export type QiblatUpsertArgs = {
    /**
     * Select specific fields to fetch from the Qiblat
     */
    select?: QiblatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QiblatInclude | null
    /**
     * The filter to search for the Qiblat to update in case it exists.
     */
    where: QiblatWhereUniqueInput
    /**
     * In case the Qiblat found by the `where` argument doesn't exist, create a new Qiblat with this data.
     */
    create: XOR<QiblatCreateInput, QiblatUncheckedCreateInput>
    /**
     * In case the Qiblat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QiblatUpdateInput, QiblatUncheckedUpdateInput>
  }


  /**
   * Qiblat delete
   */
  export type QiblatDeleteArgs = {
    /**
     * Select specific fields to fetch from the Qiblat
     */
    select?: QiblatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QiblatInclude | null
    /**
     * Filter which Qiblat to delete.
     */
    where: QiblatWhereUniqueInput
  }


  /**
   * Qiblat deleteMany
   */
  export type QiblatDeleteManyArgs = {
    /**
     * Filter which Qiblats to delete
     */
    where?: QiblatWhereInput
  }


  /**
   * Qiblat without action
   */
  export type QiblatArgs = {
    /**
     * Select specific fields to fetch from the Qiblat
     */
    select?: QiblatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QiblatInclude | null
  }



  /**
   * Model Rating
   */


  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    rating: number | null
  }

  export type RatingSumAggregateOutputType = {
    rating: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    rating: number | null
    review: string | null
    created_at: Date | null
    surau_id: string | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    review: string | null
    created_at: Date | null
    surau_id: string | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    rating: number
    review: number
    created_at: number
    surau_id: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    rating?: true
  }

  export type RatingSumAggregateInputType = {
    rating?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    created_at?: true
    surau_id?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    created_at?: true
    surau_id?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    created_at?: true
    surau_id?: true
    _all?: true
  }

  export type RatingAggregateArgs = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: Enumerable<RatingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs = {
    where?: RatingWhereInput
    orderBy?: Enumerable<RatingOrderByWithAggregationInput>
    by: RatingScalarFieldEnum[]
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }


  export type RatingGroupByOutputType = {
    id: string
    rating: number
    review: string | null
    created_at: Date
    surau_id: string
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect = {
    id?: boolean
    rating?: boolean
    review?: boolean
    created_at?: boolean
    surau_id?: boolean
    surau?: boolean | SurauArgs
    images?: boolean | Rating$imagesArgs
    _count?: boolean | RatingCountOutputTypeArgs
  }


  export type RatingInclude = {
    surau?: boolean | SurauArgs
    images?: boolean | Rating$imagesArgs
    _count?: boolean | RatingCountOutputTypeArgs
  }

  export type RatingGetPayload<S extends boolean | null | undefined | RatingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Rating :
    S extends undefined ? never :
    S extends { include: any } & (RatingArgs | RatingFindManyArgs)
    ? Rating  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'surau' ? SurauGetPayload<S['include'][P]> :
        P extends 'images' ? Array < SurauPhotoGetPayload<S['include'][P]>>  :
        P extends '_count' ? RatingCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RatingArgs | RatingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'surau' ? SurauGetPayload<S['select'][P]> :
        P extends 'images' ? Array < SurauPhotoGetPayload<S['select'][P]>>  :
        P extends '_count' ? RatingCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Rating ? Rating[P] : never
  } 
      : Rating


  type RatingCountArgs = 
    Omit<RatingFindManyArgs, 'select' | 'include'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RatingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RatingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Rating'> extends True ? Prisma__RatingClient<RatingGetPayload<T>> : Prisma__RatingClient<RatingGetPayload<T> | null, null>

    /**
     * Find one Rating that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RatingFindUniqueOrThrowArgs>
    ): Prisma__RatingClient<RatingGetPayload<T>>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RatingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RatingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Rating'> extends True ? Prisma__RatingClient<RatingGetPayload<T>> : Prisma__RatingClient<RatingGetPayload<T> | null, null>

    /**
     * Find the first Rating that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RatingFindFirstOrThrowArgs>
    ): Prisma__RatingClient<RatingGetPayload<T>>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RatingFindManyArgs>(
      args?: SelectSubset<T, RatingFindManyArgs>
    ): Prisma.PrismaPromise<Array<RatingGetPayload<T>>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
    **/
    create<T extends RatingCreateArgs>(
      args: SelectSubset<T, RatingCreateArgs>
    ): Prisma__RatingClient<RatingGetPayload<T>>

    /**
     * Create many Ratings.
     *     @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     *     @example
     *     // Create many Ratings
     *     const rating = await prisma.rating.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RatingCreateManyArgs>(
      args?: SelectSubset<T, RatingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
    **/
    delete<T extends RatingDeleteArgs>(
      args: SelectSubset<T, RatingDeleteArgs>
    ): Prisma__RatingClient<RatingGetPayload<T>>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RatingUpdateArgs>(
      args: SelectSubset<T, RatingUpdateArgs>
    ): Prisma__RatingClient<RatingGetPayload<T>>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RatingDeleteManyArgs>(
      args?: SelectSubset<T, RatingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RatingUpdateManyArgs>(
      args: SelectSubset<T, RatingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
    **/
    upsert<T extends RatingUpsertArgs>(
      args: SelectSubset<T, RatingUpsertArgs>
    ): Prisma__RatingClient<RatingGetPayload<T>>

    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RatingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    surau<T extends SurauArgs= {}>(args?: Subset<T, SurauArgs>): Prisma__SurauClient<SurauGetPayload<T> | Null>;

    images<T extends Rating$imagesArgs= {}>(args?: Subset<T, Rating$imagesArgs>): Prisma.PrismaPromise<Array<SurauPhotoGetPayload<T>>| Null>;

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
   * Rating base type for findUnique actions
   */
  export type RatingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUnique
   */
  export interface RatingFindUniqueArgs extends RatingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }


  /**
   * Rating base type for findFirst actions
   */
  export type RatingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: Enumerable<RatingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: Enumerable<RatingScalarFieldEnum>
  }

  /**
   * Rating findFirst
   */
  export interface RatingFindFirstArgs extends RatingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: Enumerable<RatingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: Enumerable<RatingScalarFieldEnum>
  }


  /**
   * Rating findMany
   */
  export type RatingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: Enumerable<RatingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: Enumerable<RatingScalarFieldEnum>
  }


  /**
   * Rating create
   */
  export type RatingCreateArgs = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }


  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs = {
    /**
     * The data used to create many Ratings.
     */
    data: Enumerable<RatingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Rating update
   */
  export type RatingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }


  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
  }


  /**
   * Rating upsert
   */
  export type RatingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }


  /**
   * Rating delete
   */
  export type RatingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }


  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
  }


  /**
   * Rating.images
   */
  export type Rating$imagesArgs = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
    where?: SurauPhotoWhereInput
    orderBy?: Enumerable<SurauPhotoOrderByWithRelationInput>
    cursor?: SurauPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SurauPhotoScalarFieldEnum>
  }


  /**
   * Rating without action
   */
  export type RatingArgs = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude | null
  }



  /**
   * Model SurauPhoto
   */


  export type AggregateSurauPhoto = {
    _count: SurauPhotoCountAggregateOutputType | null
    _min: SurauPhotoMinAggregateOutputType | null
    _max: SurauPhotoMaxAggregateOutputType | null
  }

  export type SurauPhotoMinAggregateOutputType = {
    id: string | null
    file_path: string | null
    caption: string | null
    created_at: Date | null
    surau_id: string | null
    rating_id: string | null
  }

  export type SurauPhotoMaxAggregateOutputType = {
    id: string | null
    file_path: string | null
    caption: string | null
    created_at: Date | null
    surau_id: string | null
    rating_id: string | null
  }

  export type SurauPhotoCountAggregateOutputType = {
    id: number
    file_path: number
    caption: number
    created_at: number
    surau_id: number
    rating_id: number
    _all: number
  }


  export type SurauPhotoMinAggregateInputType = {
    id?: true
    file_path?: true
    caption?: true
    created_at?: true
    surau_id?: true
    rating_id?: true
  }

  export type SurauPhotoMaxAggregateInputType = {
    id?: true
    file_path?: true
    caption?: true
    created_at?: true
    surau_id?: true
    rating_id?: true
  }

  export type SurauPhotoCountAggregateInputType = {
    id?: true
    file_path?: true
    caption?: true
    created_at?: true
    surau_id?: true
    rating_id?: true
    _all?: true
  }

  export type SurauPhotoAggregateArgs = {
    /**
     * Filter which SurauPhoto to aggregate.
     */
    where?: SurauPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurauPhotos to fetch.
     */
    orderBy?: Enumerable<SurauPhotoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurauPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurauPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurauPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurauPhotos
    **/
    _count?: true | SurauPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurauPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurauPhotoMaxAggregateInputType
  }

  export type GetSurauPhotoAggregateType<T extends SurauPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateSurauPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurauPhoto[P]>
      : GetScalarType<T[P], AggregateSurauPhoto[P]>
  }




  export type SurauPhotoGroupByArgs = {
    where?: SurauPhotoWhereInput
    orderBy?: Enumerable<SurauPhotoOrderByWithAggregationInput>
    by: SurauPhotoScalarFieldEnum[]
    having?: SurauPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurauPhotoCountAggregateInputType | true
    _min?: SurauPhotoMinAggregateInputType
    _max?: SurauPhotoMaxAggregateInputType
  }


  export type SurauPhotoGroupByOutputType = {
    id: string
    file_path: string
    caption: string | null
    created_at: Date
    surau_id: string
    rating_id: string | null
    _count: SurauPhotoCountAggregateOutputType | null
    _min: SurauPhotoMinAggregateOutputType | null
    _max: SurauPhotoMaxAggregateOutputType | null
  }

  type GetSurauPhotoGroupByPayload<T extends SurauPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SurauPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurauPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurauPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], SurauPhotoGroupByOutputType[P]>
        }
      >
    >


  export type SurauPhotoSelect = {
    id?: boolean
    file_path?: boolean
    caption?: boolean
    created_at?: boolean
    surau_id?: boolean
    rating_id?: boolean
    surau?: boolean | SurauArgs
    rating?: boolean | RatingArgs
  }


  export type SurauPhotoInclude = {
    surau?: boolean | SurauArgs
    rating?: boolean | RatingArgs
  }

  export type SurauPhotoGetPayload<S extends boolean | null | undefined | SurauPhotoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SurauPhoto :
    S extends undefined ? never :
    S extends { include: any } & (SurauPhotoArgs | SurauPhotoFindManyArgs)
    ? SurauPhoto  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'surau' ? SurauGetPayload<S['include'][P]> :
        P extends 'rating' ? RatingGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (SurauPhotoArgs | SurauPhotoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'surau' ? SurauGetPayload<S['select'][P]> :
        P extends 'rating' ? RatingGetPayload<S['select'][P]> | null :  P extends keyof SurauPhoto ? SurauPhoto[P] : never
  } 
      : SurauPhoto


  type SurauPhotoCountArgs = 
    Omit<SurauPhotoFindManyArgs, 'select' | 'include'> & {
      select?: SurauPhotoCountAggregateInputType | true
    }

  export interface SurauPhotoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SurauPhoto that matches the filter.
     * @param {SurauPhotoFindUniqueArgs} args - Arguments to find a SurauPhoto
     * @example
     * // Get one SurauPhoto
     * const surauPhoto = await prisma.surauPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SurauPhotoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SurauPhotoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SurauPhoto'> extends True ? Prisma__SurauPhotoClient<SurauPhotoGetPayload<T>> : Prisma__SurauPhotoClient<SurauPhotoGetPayload<T> | null, null>

    /**
     * Find one SurauPhoto that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SurauPhotoFindUniqueOrThrowArgs} args - Arguments to find a SurauPhoto
     * @example
     * // Get one SurauPhoto
     * const surauPhoto = await prisma.surauPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SurauPhotoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SurauPhotoFindUniqueOrThrowArgs>
    ): Prisma__SurauPhotoClient<SurauPhotoGetPayload<T>>

    /**
     * Find the first SurauPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauPhotoFindFirstArgs} args - Arguments to find a SurauPhoto
     * @example
     * // Get one SurauPhoto
     * const surauPhoto = await prisma.surauPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SurauPhotoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SurauPhotoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SurauPhoto'> extends True ? Prisma__SurauPhotoClient<SurauPhotoGetPayload<T>> : Prisma__SurauPhotoClient<SurauPhotoGetPayload<T> | null, null>

    /**
     * Find the first SurauPhoto that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauPhotoFindFirstOrThrowArgs} args - Arguments to find a SurauPhoto
     * @example
     * // Get one SurauPhoto
     * const surauPhoto = await prisma.surauPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SurauPhotoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SurauPhotoFindFirstOrThrowArgs>
    ): Prisma__SurauPhotoClient<SurauPhotoGetPayload<T>>

    /**
     * Find zero or more SurauPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauPhotoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurauPhotos
     * const surauPhotos = await prisma.surauPhoto.findMany()
     * 
     * // Get first 10 SurauPhotos
     * const surauPhotos = await prisma.surauPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surauPhotoWithIdOnly = await prisma.surauPhoto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SurauPhotoFindManyArgs>(
      args?: SelectSubset<T, SurauPhotoFindManyArgs>
    ): Prisma.PrismaPromise<Array<SurauPhotoGetPayload<T>>>

    /**
     * Create a SurauPhoto.
     * @param {SurauPhotoCreateArgs} args - Arguments to create a SurauPhoto.
     * @example
     * // Create one SurauPhoto
     * const SurauPhoto = await prisma.surauPhoto.create({
     *   data: {
     *     // ... data to create a SurauPhoto
     *   }
     * })
     * 
    **/
    create<T extends SurauPhotoCreateArgs>(
      args: SelectSubset<T, SurauPhotoCreateArgs>
    ): Prisma__SurauPhotoClient<SurauPhotoGetPayload<T>>

    /**
     * Create many SurauPhotos.
     *     @param {SurauPhotoCreateManyArgs} args - Arguments to create many SurauPhotos.
     *     @example
     *     // Create many SurauPhotos
     *     const surauPhoto = await prisma.surauPhoto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SurauPhotoCreateManyArgs>(
      args?: SelectSubset<T, SurauPhotoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SurauPhoto.
     * @param {SurauPhotoDeleteArgs} args - Arguments to delete one SurauPhoto.
     * @example
     * // Delete one SurauPhoto
     * const SurauPhoto = await prisma.surauPhoto.delete({
     *   where: {
     *     // ... filter to delete one SurauPhoto
     *   }
     * })
     * 
    **/
    delete<T extends SurauPhotoDeleteArgs>(
      args: SelectSubset<T, SurauPhotoDeleteArgs>
    ): Prisma__SurauPhotoClient<SurauPhotoGetPayload<T>>

    /**
     * Update one SurauPhoto.
     * @param {SurauPhotoUpdateArgs} args - Arguments to update one SurauPhoto.
     * @example
     * // Update one SurauPhoto
     * const surauPhoto = await prisma.surauPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SurauPhotoUpdateArgs>(
      args: SelectSubset<T, SurauPhotoUpdateArgs>
    ): Prisma__SurauPhotoClient<SurauPhotoGetPayload<T>>

    /**
     * Delete zero or more SurauPhotos.
     * @param {SurauPhotoDeleteManyArgs} args - Arguments to filter SurauPhotos to delete.
     * @example
     * // Delete a few SurauPhotos
     * const { count } = await prisma.surauPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SurauPhotoDeleteManyArgs>(
      args?: SelectSubset<T, SurauPhotoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurauPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurauPhotos
     * const surauPhoto = await prisma.surauPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SurauPhotoUpdateManyArgs>(
      args: SelectSubset<T, SurauPhotoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SurauPhoto.
     * @param {SurauPhotoUpsertArgs} args - Arguments to update or create a SurauPhoto.
     * @example
     * // Update or create a SurauPhoto
     * const surauPhoto = await prisma.surauPhoto.upsert({
     *   create: {
     *     // ... data to create a SurauPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurauPhoto we want to update
     *   }
     * })
    **/
    upsert<T extends SurauPhotoUpsertArgs>(
      args: SelectSubset<T, SurauPhotoUpsertArgs>
    ): Prisma__SurauPhotoClient<SurauPhotoGetPayload<T>>

    /**
     * Count the number of SurauPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauPhotoCountArgs} args - Arguments to filter SurauPhotos to count.
     * @example
     * // Count the number of SurauPhotos
     * const count = await prisma.surauPhoto.count({
     *   where: {
     *     // ... the filter for the SurauPhotos we want to count
     *   }
     * })
    **/
    count<T extends SurauPhotoCountArgs>(
      args?: Subset<T, SurauPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurauPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurauPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurauPhotoAggregateArgs>(args: Subset<T, SurauPhotoAggregateArgs>): Prisma.PrismaPromise<GetSurauPhotoAggregateType<T>>

    /**
     * Group by SurauPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurauPhotoGroupByArgs} args - Group by arguments.
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
      T extends SurauPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurauPhotoGroupByArgs['orderBy'] }
        : { orderBy?: SurauPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SurauPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurauPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SurauPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SurauPhotoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    surau<T extends SurauArgs= {}>(args?: Subset<T, SurauArgs>): Prisma__SurauClient<SurauGetPayload<T> | Null>;

    rating<T extends RatingArgs= {}>(args?: Subset<T, RatingArgs>): Prisma__RatingClient<RatingGetPayload<T> | Null>;

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
   * SurauPhoto base type for findUnique actions
   */
  export type SurauPhotoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
    /**
     * Filter, which SurauPhoto to fetch.
     */
    where: SurauPhotoWhereUniqueInput
  }

  /**
   * SurauPhoto findUnique
   */
  export interface SurauPhotoFindUniqueArgs extends SurauPhotoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SurauPhoto findUniqueOrThrow
   */
  export type SurauPhotoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
    /**
     * Filter, which SurauPhoto to fetch.
     */
    where: SurauPhotoWhereUniqueInput
  }


  /**
   * SurauPhoto base type for findFirst actions
   */
  export type SurauPhotoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
    /**
     * Filter, which SurauPhoto to fetch.
     */
    where?: SurauPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurauPhotos to fetch.
     */
    orderBy?: Enumerable<SurauPhotoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurauPhotos.
     */
    cursor?: SurauPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurauPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurauPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurauPhotos.
     */
    distinct?: Enumerable<SurauPhotoScalarFieldEnum>
  }

  /**
   * SurauPhoto findFirst
   */
  export interface SurauPhotoFindFirstArgs extends SurauPhotoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SurauPhoto findFirstOrThrow
   */
  export type SurauPhotoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
    /**
     * Filter, which SurauPhoto to fetch.
     */
    where?: SurauPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurauPhotos to fetch.
     */
    orderBy?: Enumerable<SurauPhotoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurauPhotos.
     */
    cursor?: SurauPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurauPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurauPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurauPhotos.
     */
    distinct?: Enumerable<SurauPhotoScalarFieldEnum>
  }


  /**
   * SurauPhoto findMany
   */
  export type SurauPhotoFindManyArgs = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
    /**
     * Filter, which SurauPhotos to fetch.
     */
    where?: SurauPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurauPhotos to fetch.
     */
    orderBy?: Enumerable<SurauPhotoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurauPhotos.
     */
    cursor?: SurauPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurauPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurauPhotos.
     */
    skip?: number
    distinct?: Enumerable<SurauPhotoScalarFieldEnum>
  }


  /**
   * SurauPhoto create
   */
  export type SurauPhotoCreateArgs = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
    /**
     * The data needed to create a SurauPhoto.
     */
    data: XOR<SurauPhotoCreateInput, SurauPhotoUncheckedCreateInput>
  }


  /**
   * SurauPhoto createMany
   */
  export type SurauPhotoCreateManyArgs = {
    /**
     * The data used to create many SurauPhotos.
     */
    data: Enumerable<SurauPhotoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SurauPhoto update
   */
  export type SurauPhotoUpdateArgs = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
    /**
     * The data needed to update a SurauPhoto.
     */
    data: XOR<SurauPhotoUpdateInput, SurauPhotoUncheckedUpdateInput>
    /**
     * Choose, which SurauPhoto to update.
     */
    where: SurauPhotoWhereUniqueInput
  }


  /**
   * SurauPhoto updateMany
   */
  export type SurauPhotoUpdateManyArgs = {
    /**
     * The data used to update SurauPhotos.
     */
    data: XOR<SurauPhotoUpdateManyMutationInput, SurauPhotoUncheckedUpdateManyInput>
    /**
     * Filter which SurauPhotos to update
     */
    where?: SurauPhotoWhereInput
  }


  /**
   * SurauPhoto upsert
   */
  export type SurauPhotoUpsertArgs = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
    /**
     * The filter to search for the SurauPhoto to update in case it exists.
     */
    where: SurauPhotoWhereUniqueInput
    /**
     * In case the SurauPhoto found by the `where` argument doesn't exist, create a new SurauPhoto with this data.
     */
    create: XOR<SurauPhotoCreateInput, SurauPhotoUncheckedCreateInput>
    /**
     * In case the SurauPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurauPhotoUpdateInput, SurauPhotoUncheckedUpdateInput>
  }


  /**
   * SurauPhoto delete
   */
  export type SurauPhotoDeleteArgs = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
    /**
     * Filter which SurauPhoto to delete.
     */
    where: SurauPhotoWhereUniqueInput
  }


  /**
   * SurauPhoto deleteMany
   */
  export type SurauPhotoDeleteManyArgs = {
    /**
     * Filter which SurauPhotos to delete
     */
    where?: SurauPhotoWhereInput
  }


  /**
   * SurauPhoto without action
   */
  export type SurauPhotoArgs = {
    /**
     * Select specific fields to fetch from the SurauPhoto
     */
    select?: SurauPhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauPhotoInclude | null
  }



  /**
   * Model State
   */


  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateMinAggregateOutputType = {
    id: string | null
    name: string | null
    unique_name: string | null
  }

  export type StateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    unique_name: string | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    name: number
    unique_name: number
    _all: number
  }


  export type StateMinAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
    _all?: true
  }

  export type StateAggregateArgs = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: Enumerable<StateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs = {
    where?: StateWhereInput
    orderBy?: Enumerable<StateOrderByWithAggregationInput>
    by: StateScalarFieldEnum[]
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }


  export type StateGroupByOutputType = {
    id: string
    name: string
    unique_name: string
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect = {
    id?: boolean
    name?: boolean
    unique_name?: boolean
    malls?: boolean | State$mallsArgs
    districts?: boolean | State$districtsArgs
    surau?: boolean | State$surauArgs
    _count?: boolean | StateCountOutputTypeArgs
  }


  export type StateInclude = {
    malls?: boolean | State$mallsArgs
    districts?: boolean | State$districtsArgs
    surau?: boolean | State$surauArgs
    _count?: boolean | StateCountOutputTypeArgs
  }

  export type StateGetPayload<S extends boolean | null | undefined | StateArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? State :
    S extends undefined ? never :
    S extends { include: any } & (StateArgs | StateFindManyArgs)
    ? State  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'malls' ? Array < MallGetPayload<S['include'][P]>>  :
        P extends 'districts' ? Array < DistrictGetPayload<S['include'][P]>>  :
        P extends 'surau' ? Array < SurauGetPayload<S['include'][P]>>  :
        P extends '_count' ? StateCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StateArgs | StateFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'malls' ? Array < MallGetPayload<S['select'][P]>>  :
        P extends 'districts' ? Array < DistrictGetPayload<S['select'][P]>>  :
        P extends 'surau' ? Array < SurauGetPayload<S['select'][P]>>  :
        P extends '_count' ? StateCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof State ? State[P] : never
  } 
      : State


  type StateCountArgs = 
    Omit<StateFindManyArgs, 'select' | 'include'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'State'> extends True ? Prisma__StateClient<StateGetPayload<T>> : Prisma__StateClient<StateGetPayload<T> | null, null>

    /**
     * Find one State that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StateFindUniqueOrThrowArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'State'> extends True ? Prisma__StateClient<StateGetPayload<T>> : Prisma__StateClient<StateGetPayload<T> | null, null>

    /**
     * Find the first State that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StateFindFirstOrThrowArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StateFindManyArgs>(
      args?: SelectSubset<T, StateFindManyArgs>
    ): Prisma.PrismaPromise<Array<StateGetPayload<T>>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
    **/
    create<T extends StateCreateArgs>(
      args: SelectSubset<T, StateCreateArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Create many States.
     *     @param {StateCreateManyArgs} args - Arguments to create many States.
     *     @example
     *     // Create many States
     *     const state = await prisma.state.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StateCreateManyArgs>(
      args?: SelectSubset<T, StateCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
    **/
    delete<T extends StateDeleteArgs>(
      args: SelectSubset<T, StateDeleteArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StateUpdateArgs>(
      args: SelectSubset<T, StateUpdateArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StateDeleteManyArgs>(
      args?: SelectSubset<T, StateDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StateUpdateManyArgs>(
      args: SelectSubset<T, StateUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
    **/
    upsert<T extends StateUpsertArgs>(
      args: SelectSubset<T, StateUpsertArgs>
    ): Prisma__StateClient<StateGetPayload<T>>

    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
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
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StateClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    malls<T extends State$mallsArgs= {}>(args?: Subset<T, State$mallsArgs>): Prisma.PrismaPromise<Array<MallGetPayload<T>>| Null>;

    districts<T extends State$districtsArgs= {}>(args?: Subset<T, State$districtsArgs>): Prisma.PrismaPromise<Array<DistrictGetPayload<T>>| Null>;

    surau<T extends State$surauArgs= {}>(args?: Subset<T, State$surauArgs>): Prisma.PrismaPromise<Array<SurauGetPayload<T>>| Null>;

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
   * State base type for findUnique actions
   */
  export type StateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUnique
   */
  export interface StateFindUniqueArgs extends StateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }


  /**
   * State base type for findFirst actions
   */
  export type StateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: Enumerable<StateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: Enumerable<StateScalarFieldEnum>
  }

  /**
   * State findFirst
   */
  export interface StateFindFirstArgs extends StateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: Enumerable<StateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: Enumerable<StateScalarFieldEnum>
  }


  /**
   * State findMany
   */
  export type StateFindManyArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: Enumerable<StateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: Enumerable<StateScalarFieldEnum>
  }


  /**
   * State create
   */
  export type StateCreateArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }


  /**
   * State createMany
   */
  export type StateCreateManyArgs = {
    /**
     * The data used to create many States.
     */
    data: Enumerable<StateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * State update
   */
  export type StateUpdateArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }


  /**
   * State updateMany
   */
  export type StateUpdateManyArgs = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
  }


  /**
   * State upsert
   */
  export type StateUpsertArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }


  /**
   * State delete
   */
  export type StateDeleteArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }


  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
  }


  /**
   * State.malls
   */
  export type State$mallsArgs = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
    where?: MallWhereInput
    orderBy?: Enumerable<MallOrderByWithRelationInput>
    cursor?: MallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MallScalarFieldEnum>
  }


  /**
   * State.districts
   */
  export type State$districtsArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    where?: DistrictWhereInput
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    cursor?: DistrictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DistrictScalarFieldEnum>
  }


  /**
   * State.surau
   */
  export type State$surauArgs = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    where?: SurauWhereInput
    orderBy?: Enumerable<SurauOrderByWithRelationInput>
    cursor?: SurauWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SurauScalarFieldEnum>
  }


  /**
   * State without action
   */
  export type StateArgs = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StateInclude | null
  }



  /**
   * Model District
   */


  export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  export type DistrictMinAggregateOutputType = {
    id: string | null
    name: string | null
    unique_name: string | null
    state_id: string | null
  }

  export type DistrictMaxAggregateOutputType = {
    id: string | null
    name: string | null
    unique_name: string | null
    state_id: string | null
  }

  export type DistrictCountAggregateOutputType = {
    id: number
    name: number
    unique_name: number
    state_id: number
    _all: number
  }


  export type DistrictMinAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
    state_id?: true
  }

  export type DistrictMaxAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
    state_id?: true
  }

  export type DistrictCountAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
    state_id?: true
    _all?: true
  }

  export type DistrictAggregateArgs = {
    /**
     * Filter which District to aggregate.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Districts
    **/
    _count?: true | DistrictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictMaxAggregateInputType
  }

  export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrict[P]>
      : GetScalarType<T[P], AggregateDistrict[P]>
  }




  export type DistrictGroupByArgs = {
    where?: DistrictWhereInput
    orderBy?: Enumerable<DistrictOrderByWithAggregationInput>
    by: DistrictScalarFieldEnum[]
    having?: DistrictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictCountAggregateInputType | true
    _min?: DistrictMinAggregateInputType
    _max?: DistrictMaxAggregateInputType
  }


  export type DistrictGroupByOutputType = {
    id: string
    name: string
    unique_name: string
    state_id: string
    _count: DistrictCountAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  type GetDistrictGroupByPayload<T extends DistrictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DistrictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictGroupByOutputType[P]>
        }
      >
    >


  export type DistrictSelect = {
    id?: boolean
    name?: boolean
    unique_name?: boolean
    state_id?: boolean
    state?: boolean | StateArgs
    malls?: boolean | District$mallsArgs
    surau?: boolean | District$surauArgs
    _count?: boolean | DistrictCountOutputTypeArgs
  }


  export type DistrictInclude = {
    state?: boolean | StateArgs
    malls?: boolean | District$mallsArgs
    surau?: boolean | District$surauArgs
    _count?: boolean | DistrictCountOutputTypeArgs
  }

  export type DistrictGetPayload<S extends boolean | null | undefined | DistrictArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? District :
    S extends undefined ? never :
    S extends { include: any } & (DistrictArgs | DistrictFindManyArgs)
    ? District  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'state' ? StateGetPayload<S['include'][P]> :
        P extends 'malls' ? Array < MallGetPayload<S['include'][P]>>  :
        P extends 'surau' ? Array < SurauGetPayload<S['include'][P]>>  :
        P extends '_count' ? DistrictCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DistrictArgs | DistrictFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'state' ? StateGetPayload<S['select'][P]> :
        P extends 'malls' ? Array < MallGetPayload<S['select'][P]>>  :
        P extends 'surau' ? Array < SurauGetPayload<S['select'][P]>>  :
        P extends '_count' ? DistrictCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof District ? District[P] : never
  } 
      : District


  type DistrictCountArgs = 
    Omit<DistrictFindManyArgs, 'select' | 'include'> & {
      select?: DistrictCountAggregateInputType | true
    }

  export interface DistrictDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one District that matches the filter.
     * @param {DistrictFindUniqueArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DistrictFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DistrictFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'District'> extends True ? Prisma__DistrictClient<DistrictGetPayload<T>> : Prisma__DistrictClient<DistrictGetPayload<T> | null, null>

    /**
     * Find one District that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DistrictFindUniqueOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DistrictFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DistrictFindUniqueOrThrowArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Find the first District that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DistrictFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DistrictFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'District'> extends True ? Prisma__DistrictClient<DistrictGetPayload<T>> : Prisma__DistrictClient<DistrictGetPayload<T> | null, null>

    /**
     * Find the first District that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DistrictFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DistrictFindFirstOrThrowArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Find zero or more Districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Districts
     * const districts = await prisma.district.findMany()
     * 
     * // Get first 10 Districts
     * const districts = await prisma.district.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const districtWithIdOnly = await prisma.district.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DistrictFindManyArgs>(
      args?: SelectSubset<T, DistrictFindManyArgs>
    ): Prisma.PrismaPromise<Array<DistrictGetPayload<T>>>

    /**
     * Create a District.
     * @param {DistrictCreateArgs} args - Arguments to create a District.
     * @example
     * // Create one District
     * const District = await prisma.district.create({
     *   data: {
     *     // ... data to create a District
     *   }
     * })
     * 
    **/
    create<T extends DistrictCreateArgs>(
      args: SelectSubset<T, DistrictCreateArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Create many Districts.
     *     @param {DistrictCreateManyArgs} args - Arguments to create many Districts.
     *     @example
     *     // Create many Districts
     *     const district = await prisma.district.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DistrictCreateManyArgs>(
      args?: SelectSubset<T, DistrictCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a District.
     * @param {DistrictDeleteArgs} args - Arguments to delete one District.
     * @example
     * // Delete one District
     * const District = await prisma.district.delete({
     *   where: {
     *     // ... filter to delete one District
     *   }
     * })
     * 
    **/
    delete<T extends DistrictDeleteArgs>(
      args: SelectSubset<T, DistrictDeleteArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Update one District.
     * @param {DistrictUpdateArgs} args - Arguments to update one District.
     * @example
     * // Update one District
     * const district = await prisma.district.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DistrictUpdateArgs>(
      args: SelectSubset<T, DistrictUpdateArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Delete zero or more Districts.
     * @param {DistrictDeleteManyArgs} args - Arguments to filter Districts to delete.
     * @example
     * // Delete a few Districts
     * const { count } = await prisma.district.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DistrictDeleteManyArgs>(
      args?: SelectSubset<T, DistrictDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DistrictUpdateManyArgs>(
      args: SelectSubset<T, DistrictUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one District.
     * @param {DistrictUpsertArgs} args - Arguments to update or create a District.
     * @example
     * // Update or create a District
     * const district = await prisma.district.upsert({
     *   create: {
     *     // ... data to create a District
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the District we want to update
     *   }
     * })
    **/
    upsert<T extends DistrictUpsertArgs>(
      args: SelectSubset<T, DistrictUpsertArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Count the number of Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictCountArgs} args - Arguments to filter Districts to count.
     * @example
     * // Count the number of Districts
     * const count = await prisma.district.count({
     *   where: {
     *     // ... the filter for the Districts we want to count
     *   }
     * })
    **/
    count<T extends DistrictCountArgs>(
      args?: Subset<T, DistrictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistrictAggregateArgs>(args: Subset<T, DistrictAggregateArgs>): Prisma.PrismaPromise<GetDistrictAggregateType<T>>

    /**
     * Group by District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictGroupByArgs} args - Group by arguments.
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
      T extends DistrictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistrictGroupByArgs['orderBy'] }
        : { orderBy?: DistrictGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistrictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for District.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DistrictClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    state<T extends StateArgs= {}>(args?: Subset<T, StateArgs>): Prisma__StateClient<StateGetPayload<T> | Null>;

    malls<T extends District$mallsArgs= {}>(args?: Subset<T, District$mallsArgs>): Prisma.PrismaPromise<Array<MallGetPayload<T>>| Null>;

    surau<T extends District$surauArgs= {}>(args?: Subset<T, District$surauArgs>): Prisma.PrismaPromise<Array<SurauGetPayload<T>>| Null>;

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
   * District base type for findUnique actions
   */
  export type DistrictFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findUnique
   */
  export interface DistrictFindUniqueArgs extends DistrictFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * District findUniqueOrThrow
   */
  export type DistrictFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }


  /**
   * District base type for findFirst actions
   */
  export type DistrictFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: Enumerable<DistrictScalarFieldEnum>
  }

  /**
   * District findFirst
   */
  export interface DistrictFindFirstArgs extends DistrictFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * District findFirstOrThrow
   */
  export type DistrictFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: Enumerable<DistrictScalarFieldEnum>
  }


  /**
   * District findMany
   */
  export type DistrictFindManyArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter, which Districts to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    distinct?: Enumerable<DistrictScalarFieldEnum>
  }


  /**
   * District create
   */
  export type DistrictCreateArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * The data needed to create a District.
     */
    data: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
  }


  /**
   * District createMany
   */
  export type DistrictCreateManyArgs = {
    /**
     * The data used to create many Districts.
     */
    data: Enumerable<DistrictCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * District update
   */
  export type DistrictUpdateArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * The data needed to update a District.
     */
    data: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
    /**
     * Choose, which District to update.
     */
    where: DistrictWhereUniqueInput
  }


  /**
   * District updateMany
   */
  export type DistrictUpdateManyArgs = {
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
  }


  /**
   * District upsert
   */
  export type DistrictUpsertArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * The filter to search for the District to update in case it exists.
     */
    where: DistrictWhereUniqueInput
    /**
     * In case the District found by the `where` argument doesn't exist, create a new District with this data.
     */
    create: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
    /**
     * In case the District was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
  }


  /**
   * District delete
   */
  export type DistrictDeleteArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter which District to delete.
     */
    where: DistrictWhereUniqueInput
  }


  /**
   * District deleteMany
   */
  export type DistrictDeleteManyArgs = {
    /**
     * Filter which Districts to delete
     */
    where?: DistrictWhereInput
  }


  /**
   * District.malls
   */
  export type District$mallsArgs = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
    where?: MallWhereInput
    orderBy?: Enumerable<MallOrderByWithRelationInput>
    cursor?: MallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MallScalarFieldEnum>
  }


  /**
   * District.surau
   */
  export type District$surauArgs = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    where?: SurauWhereInput
    orderBy?: Enumerable<SurauOrderByWithRelationInput>
    cursor?: SurauWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SurauScalarFieldEnum>
  }


  /**
   * District without action
   */
  export type DistrictArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
  }



  /**
   * Model Mall
   */


  export type AggregateMall = {
    _count: MallCountAggregateOutputType | null
    _min: MallMinAggregateOutputType | null
    _max: MallMaxAggregateOutputType | null
  }

  export type MallMinAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    value: string | null
    district_id: string | null
    state_id: string | null
  }

  export type MallMaxAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    value: string | null
    district_id: string | null
    state_id: string | null
  }

  export type MallCountAggregateOutputType = {
    id: number
    name: number
    label: number
    value: number
    district_id: number
    state_id: number
    _all: number
  }


  export type MallMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
    value?: true
    district_id?: true
    state_id?: true
  }

  export type MallMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
    value?: true
    district_id?: true
    state_id?: true
  }

  export type MallCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    value?: true
    district_id?: true
    state_id?: true
    _all?: true
  }

  export type MallAggregateArgs = {
    /**
     * Filter which Mall to aggregate.
     */
    where?: MallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Malls to fetch.
     */
    orderBy?: Enumerable<MallOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Malls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Malls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Malls
    **/
    _count?: true | MallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MallMaxAggregateInputType
  }

  export type GetMallAggregateType<T extends MallAggregateArgs> = {
        [P in keyof T & keyof AggregateMall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMall[P]>
      : GetScalarType<T[P], AggregateMall[P]>
  }




  export type MallGroupByArgs = {
    where?: MallWhereInput
    orderBy?: Enumerable<MallOrderByWithAggregationInput>
    by: MallScalarFieldEnum[]
    having?: MallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MallCountAggregateInputType | true
    _min?: MallMinAggregateInputType
    _max?: MallMaxAggregateInputType
  }


  export type MallGroupByOutputType = {
    id: string
    name: string
    label: string
    value: string
    district_id: string
    state_id: string
    _count: MallCountAggregateOutputType | null
    _min: MallMinAggregateOutputType | null
    _max: MallMaxAggregateOutputType | null
  }

  type GetMallGroupByPayload<T extends MallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MallGroupByOutputType[P]>
            : GetScalarType<T[P], MallGroupByOutputType[P]>
        }
      >
    >


  export type MallSelect = {
    id?: boolean
    name?: boolean
    label?: boolean
    value?: boolean
    district_id?: boolean
    state_id?: boolean
    district?: boolean | DistrictArgs
    state?: boolean | StateArgs
    surau?: boolean | Mall$surauArgs
    _count?: boolean | MallCountOutputTypeArgs
  }


  export type MallInclude = {
    district?: boolean | DistrictArgs
    state?: boolean | StateArgs
    surau?: boolean | Mall$surauArgs
    _count?: boolean | MallCountOutputTypeArgs
  }

  export type MallGetPayload<S extends boolean | null | undefined | MallArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mall :
    S extends undefined ? never :
    S extends { include: any } & (MallArgs | MallFindManyArgs)
    ? Mall  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'district' ? DistrictGetPayload<S['include'][P]> :
        P extends 'state' ? StateGetPayload<S['include'][P]> :
        P extends 'surau' ? Array < SurauGetPayload<S['include'][P]>>  :
        P extends '_count' ? MallCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MallArgs | MallFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'district' ? DistrictGetPayload<S['select'][P]> :
        P extends 'state' ? StateGetPayload<S['select'][P]> :
        P extends 'surau' ? Array < SurauGetPayload<S['select'][P]>>  :
        P extends '_count' ? MallCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Mall ? Mall[P] : never
  } 
      : Mall


  type MallCountArgs = 
    Omit<MallFindManyArgs, 'select' | 'include'> & {
      select?: MallCountAggregateInputType | true
    }

  export interface MallDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mall that matches the filter.
     * @param {MallFindUniqueArgs} args - Arguments to find a Mall
     * @example
     * // Get one Mall
     * const mall = await prisma.mall.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MallFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MallFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mall'> extends True ? Prisma__MallClient<MallGetPayload<T>> : Prisma__MallClient<MallGetPayload<T> | null, null>

    /**
     * Find one Mall that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MallFindUniqueOrThrowArgs} args - Arguments to find a Mall
     * @example
     * // Get one Mall
     * const mall = await prisma.mall.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MallFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MallFindUniqueOrThrowArgs>
    ): Prisma__MallClient<MallGetPayload<T>>

    /**
     * Find the first Mall that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MallFindFirstArgs} args - Arguments to find a Mall
     * @example
     * // Get one Mall
     * const mall = await prisma.mall.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MallFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MallFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mall'> extends True ? Prisma__MallClient<MallGetPayload<T>> : Prisma__MallClient<MallGetPayload<T> | null, null>

    /**
     * Find the first Mall that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MallFindFirstOrThrowArgs} args - Arguments to find a Mall
     * @example
     * // Get one Mall
     * const mall = await prisma.mall.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MallFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MallFindFirstOrThrowArgs>
    ): Prisma__MallClient<MallGetPayload<T>>

    /**
     * Find zero or more Malls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MallFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Malls
     * const malls = await prisma.mall.findMany()
     * 
     * // Get first 10 Malls
     * const malls = await prisma.mall.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mallWithIdOnly = await prisma.mall.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MallFindManyArgs>(
      args?: SelectSubset<T, MallFindManyArgs>
    ): Prisma.PrismaPromise<Array<MallGetPayload<T>>>

    /**
     * Create a Mall.
     * @param {MallCreateArgs} args - Arguments to create a Mall.
     * @example
     * // Create one Mall
     * const Mall = await prisma.mall.create({
     *   data: {
     *     // ... data to create a Mall
     *   }
     * })
     * 
    **/
    create<T extends MallCreateArgs>(
      args: SelectSubset<T, MallCreateArgs>
    ): Prisma__MallClient<MallGetPayload<T>>

    /**
     * Create many Malls.
     *     @param {MallCreateManyArgs} args - Arguments to create many Malls.
     *     @example
     *     // Create many Malls
     *     const mall = await prisma.mall.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MallCreateManyArgs>(
      args?: SelectSubset<T, MallCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mall.
     * @param {MallDeleteArgs} args - Arguments to delete one Mall.
     * @example
     * // Delete one Mall
     * const Mall = await prisma.mall.delete({
     *   where: {
     *     // ... filter to delete one Mall
     *   }
     * })
     * 
    **/
    delete<T extends MallDeleteArgs>(
      args: SelectSubset<T, MallDeleteArgs>
    ): Prisma__MallClient<MallGetPayload<T>>

    /**
     * Update one Mall.
     * @param {MallUpdateArgs} args - Arguments to update one Mall.
     * @example
     * // Update one Mall
     * const mall = await prisma.mall.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MallUpdateArgs>(
      args: SelectSubset<T, MallUpdateArgs>
    ): Prisma__MallClient<MallGetPayload<T>>

    /**
     * Delete zero or more Malls.
     * @param {MallDeleteManyArgs} args - Arguments to filter Malls to delete.
     * @example
     * // Delete a few Malls
     * const { count } = await prisma.mall.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MallDeleteManyArgs>(
      args?: SelectSubset<T, MallDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Malls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Malls
     * const mall = await prisma.mall.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MallUpdateManyArgs>(
      args: SelectSubset<T, MallUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mall.
     * @param {MallUpsertArgs} args - Arguments to update or create a Mall.
     * @example
     * // Update or create a Mall
     * const mall = await prisma.mall.upsert({
     *   create: {
     *     // ... data to create a Mall
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mall we want to update
     *   }
     * })
    **/
    upsert<T extends MallUpsertArgs>(
      args: SelectSubset<T, MallUpsertArgs>
    ): Prisma__MallClient<MallGetPayload<T>>

    /**
     * Count the number of Malls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MallCountArgs} args - Arguments to filter Malls to count.
     * @example
     * // Count the number of Malls
     * const count = await prisma.mall.count({
     *   where: {
     *     // ... the filter for the Malls we want to count
     *   }
     * })
    **/
    count<T extends MallCountArgs>(
      args?: Subset<T, MallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MallAggregateArgs>(args: Subset<T, MallAggregateArgs>): Prisma.PrismaPromise<GetMallAggregateType<T>>

    /**
     * Group by Mall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MallGroupByArgs} args - Group by arguments.
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
      T extends MallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MallGroupByArgs['orderBy'] }
        : { orderBy?: MallGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Mall.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MallClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    district<T extends DistrictArgs= {}>(args?: Subset<T, DistrictArgs>): Prisma__DistrictClient<DistrictGetPayload<T> | Null>;

    state<T extends StateArgs= {}>(args?: Subset<T, StateArgs>): Prisma__StateClient<StateGetPayload<T> | Null>;

    surau<T extends Mall$surauArgs= {}>(args?: Subset<T, Mall$surauArgs>): Prisma.PrismaPromise<Array<SurauGetPayload<T>>| Null>;

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
   * Mall base type for findUnique actions
   */
  export type MallFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
    /**
     * Filter, which Mall to fetch.
     */
    where: MallWhereUniqueInput
  }

  /**
   * Mall findUnique
   */
  export interface MallFindUniqueArgs extends MallFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mall findUniqueOrThrow
   */
  export type MallFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
    /**
     * Filter, which Mall to fetch.
     */
    where: MallWhereUniqueInput
  }


  /**
   * Mall base type for findFirst actions
   */
  export type MallFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
    /**
     * Filter, which Mall to fetch.
     */
    where?: MallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Malls to fetch.
     */
    orderBy?: Enumerable<MallOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Malls.
     */
    cursor?: MallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Malls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Malls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Malls.
     */
    distinct?: Enumerable<MallScalarFieldEnum>
  }

  /**
   * Mall findFirst
   */
  export interface MallFindFirstArgs extends MallFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mall findFirstOrThrow
   */
  export type MallFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
    /**
     * Filter, which Mall to fetch.
     */
    where?: MallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Malls to fetch.
     */
    orderBy?: Enumerable<MallOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Malls.
     */
    cursor?: MallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Malls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Malls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Malls.
     */
    distinct?: Enumerable<MallScalarFieldEnum>
  }


  /**
   * Mall findMany
   */
  export type MallFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
    /**
     * Filter, which Malls to fetch.
     */
    where?: MallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Malls to fetch.
     */
    orderBy?: Enumerable<MallOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Malls.
     */
    cursor?: MallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Malls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Malls.
     */
    skip?: number
    distinct?: Enumerable<MallScalarFieldEnum>
  }


  /**
   * Mall create
   */
  export type MallCreateArgs = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
    /**
     * The data needed to create a Mall.
     */
    data: XOR<MallCreateInput, MallUncheckedCreateInput>
  }


  /**
   * Mall createMany
   */
  export type MallCreateManyArgs = {
    /**
     * The data used to create many Malls.
     */
    data: Enumerable<MallCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mall update
   */
  export type MallUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
    /**
     * The data needed to update a Mall.
     */
    data: XOR<MallUpdateInput, MallUncheckedUpdateInput>
    /**
     * Choose, which Mall to update.
     */
    where: MallWhereUniqueInput
  }


  /**
   * Mall updateMany
   */
  export type MallUpdateManyArgs = {
    /**
     * The data used to update Malls.
     */
    data: XOR<MallUpdateManyMutationInput, MallUncheckedUpdateManyInput>
    /**
     * Filter which Malls to update
     */
    where?: MallWhereInput
  }


  /**
   * Mall upsert
   */
  export type MallUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
    /**
     * The filter to search for the Mall to update in case it exists.
     */
    where: MallWhereUniqueInput
    /**
     * In case the Mall found by the `where` argument doesn't exist, create a new Mall with this data.
     */
    create: XOR<MallCreateInput, MallUncheckedCreateInput>
    /**
     * In case the Mall was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MallUpdateInput, MallUncheckedUpdateInput>
  }


  /**
   * Mall delete
   */
  export type MallDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
    /**
     * Filter which Mall to delete.
     */
    where: MallWhereUniqueInput
  }


  /**
   * Mall deleteMany
   */
  export type MallDeleteManyArgs = {
    /**
     * Filter which Malls to delete
     */
    where?: MallWhereInput
  }


  /**
   * Mall.surau
   */
  export type Mall$surauArgs = {
    /**
     * Select specific fields to fetch from the Surau
     */
    select?: SurauSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurauInclude | null
    where?: SurauWhereInput
    orderBy?: Enumerable<SurauOrderByWithRelationInput>
    cursor?: SurauWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SurauScalarFieldEnum>
  }


  /**
   * Mall without action
   */
  export type MallArgs = {
    /**
     * Select specific fields to fetch from the Mall
     */
    select?: MallSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MallInclude | null
  }



  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: AccountScalarFieldEnum[]
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserArgs
  }


  export type AccountInclude = {
    user?: boolean | UserArgs
  }

  export type AccountGetPayload<S extends boolean | null | undefined | AccountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Account :
    S extends undefined ? never :
    S extends { include: any } & (AccountArgs | AccountFindManyArgs)
    ? Account  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountArgs | AccountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Account ? Account[P] : never
  } 
      : Account


  type AccountCountArgs = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): Prisma.PrismaPromise<Array<AccountGetPayload<T>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     */
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: SessionScalarFieldEnum[]
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserArgs
  }


  export type SessionInclude = {
    user?: boolean | UserArgs
  }

  export type SessionGetPayload<S extends boolean | null | undefined | SessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Session :
    S extends undefined ? never :
    S extends { include: any } & (SessionArgs | SessionFindManyArgs)
    ? Session  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SessionArgs | SessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Session ? Session[P] : never
  } 
      : Session


  type SessionCountArgs = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): Prisma.PrismaPromise<Array<SessionGetPayload<T>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     */
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs
    sessions?: boolean | User$sessionsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    accounts?: boolean | User$accountsArgs
    sessions?: boolean | User$sessionsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'accounts' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accounts' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

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
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    accounts<T extends User$accountsArgs= {}>(args?: Subset<T, User$accountsArgs>): Prisma.PrismaPromise<Array<AccountGetPayload<T>>| Null>;

    sessions<T extends User$sessionsArgs= {}>(args?: Subset<T, User$sessionsArgs>): Prisma.PrismaPromise<Array<SessionGetPayload<T>>| Null>;

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
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model VerificationToken
   */


  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs = {
    where?: VerificationTokenWhereInput
    orderBy?: Enumerable<VerificationTokenOrderByWithAggregationInput>
    by: VerificationTokenScalarFieldEnum[]
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }


  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VerificationToken :
    S extends undefined ? never :
    S extends { include: any } & (VerificationTokenArgs | VerificationTokenFindManyArgs)
    ? VerificationToken 
    : S extends { select: any } & (VerificationTokenArgs | VerificationTokenFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VerificationToken ? VerificationToken[P] : never
  } 
      : VerificationToken


  type VerificationTokenCountArgs = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VerificationToken'> extends True ? Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>> : Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null, null>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VerificationToken'> extends True ? Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>> : Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null, null>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs>
    ): Prisma.PrismaPromise<Array<VerificationTokenGetPayload<T>>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs>(
      args: SelectSubset<T, VerificationTokenCreateArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs>(
      args: SelectSubset<T, VerificationTokenDeleteArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs>(
      args: SelectSubset<T, VerificationTokenUpdateArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs>(
      args: SelectSubset<T, VerificationTokenUpsertArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerificationTokenClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * VerificationToken base type for findUnique actions
   */
  export type VerificationTokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUnique
   */
  export interface VerificationTokenFindUniqueArgs extends VerificationTokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken base type for findFirst actions
   */
  export type VerificationTokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }

  /**
   * VerificationToken findFirst
   */
  export interface VerificationTokenFindFirstArgs extends VerificationTokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: Enumerable<VerificationTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect | null
  }



  /**
   * Enums
   */

  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const DistrictScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unique_name: 'unique_name',
    state_id: 'state_id'
  };

  export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum]


  export const ExampleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExampleScalarFieldEnum = (typeof ExampleScalarFieldEnum)[keyof typeof ExampleScalarFieldEnum]


  export const MallScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    value: 'value',
    district_id: 'district_id',
    state_id: 'state_id'
  };

  export type MallScalarFieldEnum = (typeof MallScalarFieldEnum)[keyof typeof MallScalarFieldEnum]


  export const QiblatScalarFieldEnum: {
    id: 'id',
    surau_id: 'surau_id',
    latitude: 'latitude',
    longitude: 'longitude',
    degree: 'degree'
  };

  export type QiblatScalarFieldEnum = (typeof QiblatScalarFieldEnum)[keyof typeof QiblatScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RatingScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    review: 'review',
    created_at: 'created_at',
    surau_id: 'surau_id'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unique_name: 'unique_name'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const SurauPhotoScalarFieldEnum: {
    id: 'id',
    file_path: 'file_path',
    caption: 'caption',
    created_at: 'created_at',
    surau_id: 'surau_id',
    rating_id: 'rating_id'
  };

  export type SurauPhotoScalarFieldEnum = (typeof SurauPhotoScalarFieldEnum)[keyof typeof SurauPhotoScalarFieldEnum]


  export const SurauScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unique_name: 'unique_name',
    brief_direction: 'brief_direction',
    is_approved: 'is_approved',
    is_approved_at: 'is_approved_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    state_id: 'state_id',
    district_id: 'district_id',
    mall_id: 'mall_id',
    is_qiblat_certified: 'is_qiblat_certified'
  };

  export type SurauScalarFieldEnum = (typeof SurauScalarFieldEnum)[keyof typeof SurauScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type ExampleWhereInput = {
    AND?: Enumerable<ExampleWhereInput>
    OR?: Enumerable<ExampleWhereInput>
    NOT?: Enumerable<ExampleWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ExampleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExampleWhereUniqueInput = {
    id?: string
  }

  export type ExampleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExampleCountOrderByAggregateInput
    _max?: ExampleMaxOrderByAggregateInput
    _min?: ExampleMinOrderByAggregateInput
  }

  export type ExampleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExampleScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExampleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExampleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SurauWhereInput = {
    AND?: Enumerable<SurauWhereInput>
    OR?: Enumerable<SurauWhereInput>
    NOT?: Enumerable<SurauWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    unique_name?: StringFilter | string
    brief_direction?: StringNullableFilter | string | null
    is_approved?: BoolFilter | boolean
    is_approved_at?: DateTimeNullableFilter | Date | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    state_id?: StringFilter | string
    district_id?: StringFilter | string
    mall_id?: StringNullableFilter | string | null
    is_qiblat_certified?: BoolFilter | boolean
    images?: SurauPhotoListRelationFilter
    ratings?: RatingListRelationFilter
    state?: XOR<StateRelationFilter, StateWhereInput>
    district?: XOR<DistrictRelationFilter, DistrictWhereInput>
    mall?: XOR<MallRelationFilter, MallWhereInput> | null
    qiblat?: QiblatListRelationFilter
  }

  export type SurauOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    brief_direction?: SortOrder
    is_approved?: SortOrder
    is_approved_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    state_id?: SortOrder
    district_id?: SortOrder
    mall_id?: SortOrder
    is_qiblat_certified?: SortOrder
    images?: SurauPhotoOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    state?: StateOrderByWithRelationInput
    district?: DistrictOrderByWithRelationInput
    mall?: MallOrderByWithRelationInput
    qiblat?: QiblatOrderByRelationAggregateInput
  }

  export type SurauWhereUniqueInput = {
    id?: string
    unique_name?: string
  }

  export type SurauOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    brief_direction?: SortOrder
    is_approved?: SortOrder
    is_approved_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    state_id?: SortOrder
    district_id?: SortOrder
    mall_id?: SortOrder
    is_qiblat_certified?: SortOrder
    _count?: SurauCountOrderByAggregateInput
    _max?: SurauMaxOrderByAggregateInput
    _min?: SurauMinOrderByAggregateInput
  }

  export type SurauScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SurauScalarWhereWithAggregatesInput>
    OR?: Enumerable<SurauScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SurauScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    unique_name?: StringWithAggregatesFilter | string
    brief_direction?: StringNullableWithAggregatesFilter | string | null
    is_approved?: BoolWithAggregatesFilter | boolean
    is_approved_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    state_id?: StringWithAggregatesFilter | string
    district_id?: StringWithAggregatesFilter | string
    mall_id?: StringNullableWithAggregatesFilter | string | null
    is_qiblat_certified?: BoolWithAggregatesFilter | boolean
  }

  export type QiblatWhereInput = {
    AND?: Enumerable<QiblatWhereInput>
    OR?: Enumerable<QiblatWhereInput>
    NOT?: Enumerable<QiblatWhereInput>
    id?: StringFilter | string
    surau_id?: StringFilter | string
    latitude?: FloatFilter | number
    longitude?: FloatFilter | number
    degree?: FloatFilter | number
    surau?: XOR<SurauRelationFilter, SurauWhereInput>
  }

  export type QiblatOrderByWithRelationInput = {
    id?: SortOrder
    surau_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    degree?: SortOrder
    surau?: SurauOrderByWithRelationInput
  }

  export type QiblatWhereUniqueInput = {
    id?: string
  }

  export type QiblatOrderByWithAggregationInput = {
    id?: SortOrder
    surau_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    degree?: SortOrder
    _count?: QiblatCountOrderByAggregateInput
    _avg?: QiblatAvgOrderByAggregateInput
    _max?: QiblatMaxOrderByAggregateInput
    _min?: QiblatMinOrderByAggregateInput
    _sum?: QiblatSumOrderByAggregateInput
  }

  export type QiblatScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QiblatScalarWhereWithAggregatesInput>
    OR?: Enumerable<QiblatScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QiblatScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    surau_id?: StringWithAggregatesFilter | string
    latitude?: FloatWithAggregatesFilter | number
    longitude?: FloatWithAggregatesFilter | number
    degree?: FloatWithAggregatesFilter | number
  }

  export type RatingWhereInput = {
    AND?: Enumerable<RatingWhereInput>
    OR?: Enumerable<RatingWhereInput>
    NOT?: Enumerable<RatingWhereInput>
    id?: StringFilter | string
    rating?: IntFilter | number
    review?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    surau_id?: StringFilter | string
    surau?: XOR<SurauRelationFilter, SurauWhereInput>
    images?: SurauPhotoListRelationFilter
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    created_at?: SortOrder
    surau_id?: SortOrder
    surau?: SurauOrderByWithRelationInput
    images?: SurauPhotoOrderByRelationAggregateInput
  }

  export type RatingWhereUniqueInput = {
    id?: string
  }

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    created_at?: SortOrder
    surau_id?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RatingScalarWhereWithAggregatesInput>
    OR?: Enumerable<RatingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RatingScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    rating?: IntWithAggregatesFilter | number
    review?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    surau_id?: StringWithAggregatesFilter | string
  }

  export type SurauPhotoWhereInput = {
    AND?: Enumerable<SurauPhotoWhereInput>
    OR?: Enumerable<SurauPhotoWhereInput>
    NOT?: Enumerable<SurauPhotoWhereInput>
    id?: StringFilter | string
    file_path?: StringFilter | string
    caption?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    surau_id?: StringFilter | string
    rating_id?: StringNullableFilter | string | null
    surau?: XOR<SurauRelationFilter, SurauWhereInput>
    rating?: XOR<RatingRelationFilter, RatingWhereInput> | null
  }

  export type SurauPhotoOrderByWithRelationInput = {
    id?: SortOrder
    file_path?: SortOrder
    caption?: SortOrder
    created_at?: SortOrder
    surau_id?: SortOrder
    rating_id?: SortOrder
    surau?: SurauOrderByWithRelationInput
    rating?: RatingOrderByWithRelationInput
  }

  export type SurauPhotoWhereUniqueInput = {
    id?: string
  }

  export type SurauPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    file_path?: SortOrder
    caption?: SortOrder
    created_at?: SortOrder
    surau_id?: SortOrder
    rating_id?: SortOrder
    _count?: SurauPhotoCountOrderByAggregateInput
    _max?: SurauPhotoMaxOrderByAggregateInput
    _min?: SurauPhotoMinOrderByAggregateInput
  }

  export type SurauPhotoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SurauPhotoScalarWhereWithAggregatesInput>
    OR?: Enumerable<SurauPhotoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SurauPhotoScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    file_path?: StringWithAggregatesFilter | string
    caption?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    surau_id?: StringWithAggregatesFilter | string
    rating_id?: StringNullableWithAggregatesFilter | string | null
  }

  export type StateWhereInput = {
    AND?: Enumerable<StateWhereInput>
    OR?: Enumerable<StateWhereInput>
    NOT?: Enumerable<StateWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    unique_name?: StringFilter | string
    malls?: MallListRelationFilter
    districts?: DistrictListRelationFilter
    surau?: SurauListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    malls?: MallOrderByRelationAggregateInput
    districts?: DistrictOrderByRelationAggregateInput
    surau?: SurauOrderByRelationAggregateInput
  }

  export type StateWhereUniqueInput = {
    id?: string
    unique_name?: string
  }

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StateScalarWhereWithAggregatesInput>
    OR?: Enumerable<StateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StateScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    unique_name?: StringWithAggregatesFilter | string
  }

  export type DistrictWhereInput = {
    AND?: Enumerable<DistrictWhereInput>
    OR?: Enumerable<DistrictWhereInput>
    NOT?: Enumerable<DistrictWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    unique_name?: StringFilter | string
    state_id?: StringFilter | string
    state?: XOR<StateRelationFilter, StateWhereInput>
    malls?: MallListRelationFilter
    surau?: SurauListRelationFilter
  }

  export type DistrictOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    state_id?: SortOrder
    state?: StateOrderByWithRelationInput
    malls?: MallOrderByRelationAggregateInput
    surau?: SurauOrderByRelationAggregateInput
  }

  export type DistrictWhereUniqueInput = {
    id?: string
    unique_name?: string
  }

  export type DistrictOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    state_id?: SortOrder
    _count?: DistrictCountOrderByAggregateInput
    _max?: DistrictMaxOrderByAggregateInput
    _min?: DistrictMinOrderByAggregateInput
  }

  export type DistrictScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DistrictScalarWhereWithAggregatesInput>
    OR?: Enumerable<DistrictScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DistrictScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    unique_name?: StringWithAggregatesFilter | string
    state_id?: StringWithAggregatesFilter | string
  }

  export type MallWhereInput = {
    AND?: Enumerable<MallWhereInput>
    OR?: Enumerable<MallWhereInput>
    NOT?: Enumerable<MallWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    label?: StringFilter | string
    value?: StringFilter | string
    district_id?: StringFilter | string
    state_id?: StringFilter | string
    district?: XOR<DistrictRelationFilter, DistrictWhereInput>
    state?: XOR<StateRelationFilter, StateWhereInput>
    surau?: SurauListRelationFilter
  }

  export type MallOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    value?: SortOrder
    district_id?: SortOrder
    state_id?: SortOrder
    district?: DistrictOrderByWithRelationInput
    state?: StateOrderByWithRelationInput
    surau?: SurauOrderByRelationAggregateInput
  }

  export type MallWhereUniqueInput = {
    id?: string
  }

  export type MallOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    value?: SortOrder
    district_id?: SortOrder
    state_id?: SortOrder
    _count?: MallCountOrderByAggregateInput
    _max?: MallMaxOrderByAggregateInput
    _min?: MallMinOrderByAggregateInput
  }

  export type MallScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MallScalarWhereWithAggregatesInput>
    OR?: Enumerable<MallScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MallScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    label?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
    district_id?: StringWithAggregatesFilter | string
    state_id?: StringWithAggregatesFilter | string
  }

  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = {
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sessionToken?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sessionToken?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: Enumerable<VerificationTokenWhereInput>
    OR?: Enumerable<VerificationTokenWhereInput>
    NOT?: Enumerable<VerificationTokenWhereInput>
    identifier?: StringFilter | string
    token?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = {
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
  }

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    identifier?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ExampleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExampleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExampleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExampleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExampleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExampleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExampleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurauCreateInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_qiblat_certified?: boolean
    images?: SurauPhotoCreateNestedManyWithoutSurauInput
    ratings?: RatingCreateNestedManyWithoutSurauInput
    state: StateCreateNestedOneWithoutSurauInput
    district: DistrictCreateNestedOneWithoutSurauInput
    mall?: MallCreateNestedOneWithoutSurauInput
    qiblat?: QiblatCreateNestedManyWithoutSurauInput
  }

  export type SurauUncheckedCreateInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    state_id: string
    district_id: string
    mall_id?: string | null
    is_qiblat_certified?: boolean
    images?: SurauPhotoUncheckedCreateNestedManyWithoutSurauInput
    ratings?: RatingUncheckedCreateNestedManyWithoutSurauInput
    qiblat?: QiblatUncheckedCreateNestedManyWithoutSurauInput
  }

  export type SurauUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUpdateManyWithoutSurauNestedInput
    ratings?: RatingUpdateManyWithoutSurauNestedInput
    state?: StateUpdateOneRequiredWithoutSurauNestedInput
    district?: DistrictUpdateOneRequiredWithoutSurauNestedInput
    mall?: MallUpdateOneWithoutSurauNestedInput
    qiblat?: QiblatUpdateManyWithoutSurauNestedInput
  }

  export type SurauUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state_id?: StringFieldUpdateOperationsInput | string
    district_id?: StringFieldUpdateOperationsInput | string
    mall_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUncheckedUpdateManyWithoutSurauNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutSurauNestedInput
    qiblat?: QiblatUncheckedUpdateManyWithoutSurauNestedInput
  }

  export type SurauCreateManyInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    state_id: string
    district_id: string
    mall_id?: string | null
    is_qiblat_certified?: boolean
  }

  export type SurauUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SurauUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state_id?: StringFieldUpdateOperationsInput | string
    district_id?: StringFieldUpdateOperationsInput | string
    mall_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QiblatCreateInput = {
    id?: string
    latitude: number
    longitude: number
    degree: number
    surau: SurauCreateNestedOneWithoutQiblatInput
  }

  export type QiblatUncheckedCreateInput = {
    id?: string
    surau_id: string
    latitude: number
    longitude: number
    degree: number
  }

  export type QiblatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    degree?: FloatFieldUpdateOperationsInput | number
    surau?: SurauUpdateOneRequiredWithoutQiblatNestedInput
  }

  export type QiblatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surau_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    degree?: FloatFieldUpdateOperationsInput | number
  }

  export type QiblatCreateManyInput = {
    id?: string
    surau_id: string
    latitude: number
    longitude: number
    degree: number
  }

  export type QiblatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    degree?: FloatFieldUpdateOperationsInput | number
  }

  export type QiblatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    surau_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    degree?: FloatFieldUpdateOperationsInput | number
  }

  export type RatingCreateInput = {
    id?: string
    rating: number
    review?: string | null
    created_at?: Date | string
    surau: SurauCreateNestedOneWithoutRatingsInput
    images?: SurauPhotoCreateNestedManyWithoutRatingInput
  }

  export type RatingUncheckedCreateInput = {
    id?: string
    rating: number
    review?: string | null
    created_at?: Date | string
    surau_id: string
    images?: SurauPhotoUncheckedCreateNestedManyWithoutRatingInput
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surau?: SurauUpdateOneRequiredWithoutRatingsNestedInput
    images?: SurauPhotoUpdateManyWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surau_id?: StringFieldUpdateOperationsInput | string
    images?: SurauPhotoUncheckedUpdateManyWithoutRatingNestedInput
  }

  export type RatingCreateManyInput = {
    id?: string
    rating: number
    review?: string | null
    created_at?: Date | string
    surau_id: string
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surau_id?: StringFieldUpdateOperationsInput | string
  }

  export type SurauPhotoCreateInput = {
    id?: string
    file_path: string
    caption?: string | null
    created_at?: Date | string
    surau: SurauCreateNestedOneWithoutImagesInput
    rating?: RatingCreateNestedOneWithoutImagesInput
  }

  export type SurauPhotoUncheckedCreateInput = {
    id?: string
    file_path: string
    caption?: string | null
    created_at?: Date | string
    surau_id: string
    rating_id?: string | null
  }

  export type SurauPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surau?: SurauUpdateOneRequiredWithoutImagesNestedInput
    rating?: RatingUpdateOneWithoutImagesNestedInput
  }

  export type SurauPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surau_id?: StringFieldUpdateOperationsInput | string
    rating_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurauPhotoCreateManyInput = {
    id?: string
    file_path: string
    caption?: string | null
    created_at?: Date | string
    surau_id: string
    rating_id?: string | null
  }

  export type SurauPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurauPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surau_id?: StringFieldUpdateOperationsInput | string
    rating_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StateCreateInput = {
    id?: string
    name: string
    unique_name: string
    malls?: MallCreateNestedManyWithoutStateInput
    districts?: DistrictCreateNestedManyWithoutStateInput
    surau?: SurauCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateInput = {
    id?: string
    name: string
    unique_name: string
    malls?: MallUncheckedCreateNestedManyWithoutStateInput
    districts?: DistrictUncheckedCreateNestedManyWithoutStateInput
    surau?: SurauUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    malls?: MallUpdateManyWithoutStateNestedInput
    districts?: DistrictUpdateManyWithoutStateNestedInput
    surau?: SurauUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    malls?: MallUncheckedUpdateManyWithoutStateNestedInput
    districts?: DistrictUncheckedUpdateManyWithoutStateNestedInput
    surau?: SurauUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateCreateManyInput = {
    id?: string
    name: string
    unique_name: string
  }

  export type StateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictCreateInput = {
    id?: string
    name: string
    unique_name: string
    state: StateCreateNestedOneWithoutDistrictsInput
    malls?: MallCreateNestedManyWithoutDistrictInput
    surau?: SurauCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateInput = {
    id?: string
    name: string
    unique_name: string
    state_id: string
    malls?: MallUncheckedCreateNestedManyWithoutDistrictInput
    surau?: SurauUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    state?: StateUpdateOneRequiredWithoutDistrictsNestedInput
    malls?: MallUpdateManyWithoutDistrictNestedInput
    surau?: SurauUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    malls?: MallUncheckedUpdateManyWithoutDistrictNestedInput
    surau?: SurauUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictCreateManyInput = {
    id?: string
    name: string
    unique_name: string
    state_id: string
  }

  export type DistrictUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
  }

  export type MallCreateInput = {
    id?: string
    name: string
    label?: string
    value?: string
    district: DistrictCreateNestedOneWithoutMallsInput
    state: StateCreateNestedOneWithoutMallsInput
    surau?: SurauCreateNestedManyWithoutMallInput
  }

  export type MallUncheckedCreateInput = {
    id?: string
    name: string
    label?: string
    value?: string
    district_id: string
    state_id: string
    surau?: SurauUncheckedCreateNestedManyWithoutMallInput
  }

  export type MallUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    district?: DistrictUpdateOneRequiredWithoutMallsNestedInput
    state?: StateUpdateOneRequiredWithoutMallsNestedInput
    surau?: SurauUpdateManyWithoutMallNestedInput
  }

  export type MallUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    district_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    surau?: SurauUncheckedUpdateManyWithoutMallNestedInput
  }

  export type MallCreateManyInput = {
    id?: string
    name: string
    label?: string
    value?: string
    district_id: string
    state_id: string
  }

  export type MallUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MallUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    district_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ExampleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExampleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExampleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type SurauPhotoListRelationFilter = {
    every?: SurauPhotoWhereInput
    some?: SurauPhotoWhereInput
    none?: SurauPhotoWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type StateRelationFilter = {
    is?: StateWhereInput
    isNot?: StateWhereInput
  }

  export type DistrictRelationFilter = {
    is?: DistrictWhereInput
    isNot?: DistrictWhereInput
  }

  export type MallRelationFilter = {
    is?: MallWhereInput | null
    isNot?: MallWhereInput | null
  }

  export type QiblatListRelationFilter = {
    every?: QiblatWhereInput
    some?: QiblatWhereInput
    none?: QiblatWhereInput
  }

  export type SurauPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QiblatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurauCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    brief_direction?: SortOrder
    is_approved?: SortOrder
    is_approved_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    state_id?: SortOrder
    district_id?: SortOrder
    mall_id?: SortOrder
    is_qiblat_certified?: SortOrder
  }

  export type SurauMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    brief_direction?: SortOrder
    is_approved?: SortOrder
    is_approved_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    state_id?: SortOrder
    district_id?: SortOrder
    mall_id?: SortOrder
    is_qiblat_certified?: SortOrder
  }

  export type SurauMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    brief_direction?: SortOrder
    is_approved?: SortOrder
    is_approved_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    state_id?: SortOrder
    district_id?: SortOrder
    mall_id?: SortOrder
    is_qiblat_certified?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type SurauRelationFilter = {
    is?: SurauWhereInput
    isNot?: SurauWhereInput
  }

  export type QiblatCountOrderByAggregateInput = {
    id?: SortOrder
    surau_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    degree?: SortOrder
  }

  export type QiblatAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    degree?: SortOrder
  }

  export type QiblatMaxOrderByAggregateInput = {
    id?: SortOrder
    surau_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    degree?: SortOrder
  }

  export type QiblatMinOrderByAggregateInput = {
    id?: SortOrder
    surau_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    degree?: SortOrder
  }

  export type QiblatSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    degree?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    created_at?: SortOrder
    surau_id?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    created_at?: SortOrder
    surau_id?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    created_at?: SortOrder
    surau_id?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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

  export type RatingRelationFilter = {
    is?: RatingWhereInput | null
    isNot?: RatingWhereInput | null
  }

  export type SurauPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    file_path?: SortOrder
    caption?: SortOrder
    created_at?: SortOrder
    surau_id?: SortOrder
    rating_id?: SortOrder
  }

  export type SurauPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    file_path?: SortOrder
    caption?: SortOrder
    created_at?: SortOrder
    surau_id?: SortOrder
    rating_id?: SortOrder
  }

  export type SurauPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    file_path?: SortOrder
    caption?: SortOrder
    created_at?: SortOrder
    surau_id?: SortOrder
    rating_id?: SortOrder
  }

  export type MallListRelationFilter = {
    every?: MallWhereInput
    some?: MallWhereInput
    none?: MallWhereInput
  }

  export type DistrictListRelationFilter = {
    every?: DistrictWhereInput
    some?: DistrictWhereInput
    none?: DistrictWhereInput
  }

  export type SurauListRelationFilter = {
    every?: SurauWhereInput
    some?: SurauWhereInput
    none?: SurauWhereInput
  }

  export type MallOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistrictOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurauOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
  }

  export type DistrictCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    state_id?: SortOrder
  }

  export type DistrictMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    state_id?: SortOrder
  }

  export type DistrictMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    state_id?: SortOrder
  }

  export type MallCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    value?: SortOrder
    district_id?: SortOrder
    state_id?: SortOrder
  }

  export type MallMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    value?: SortOrder
    district_id?: SortOrder
    state_id?: SortOrder
  }

  export type MallMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    value?: SortOrder
    district_id?: SortOrder
    state_id?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SurauPhotoCreateNestedManyWithoutSurauInput = {
    create?: XOR<Enumerable<SurauPhotoCreateWithoutSurauInput>, Enumerable<SurauPhotoUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<SurauPhotoCreateOrConnectWithoutSurauInput>
    createMany?: SurauPhotoCreateManySurauInputEnvelope
    connect?: Enumerable<SurauPhotoWhereUniqueInput>
  }

  export type RatingCreateNestedManyWithoutSurauInput = {
    create?: XOR<Enumerable<RatingCreateWithoutSurauInput>, Enumerable<RatingUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutSurauInput>
    createMany?: RatingCreateManySurauInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type StateCreateNestedOneWithoutSurauInput = {
    create?: XOR<StateCreateWithoutSurauInput, StateUncheckedCreateWithoutSurauInput>
    connectOrCreate?: StateCreateOrConnectWithoutSurauInput
    connect?: StateWhereUniqueInput
  }

  export type DistrictCreateNestedOneWithoutSurauInput = {
    create?: XOR<DistrictCreateWithoutSurauInput, DistrictUncheckedCreateWithoutSurauInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutSurauInput
    connect?: DistrictWhereUniqueInput
  }

  export type MallCreateNestedOneWithoutSurauInput = {
    create?: XOR<MallCreateWithoutSurauInput, MallUncheckedCreateWithoutSurauInput>
    connectOrCreate?: MallCreateOrConnectWithoutSurauInput
    connect?: MallWhereUniqueInput
  }

  export type QiblatCreateNestedManyWithoutSurauInput = {
    create?: XOR<Enumerable<QiblatCreateWithoutSurauInput>, Enumerable<QiblatUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<QiblatCreateOrConnectWithoutSurauInput>
    createMany?: QiblatCreateManySurauInputEnvelope
    connect?: Enumerable<QiblatWhereUniqueInput>
  }

  export type SurauPhotoUncheckedCreateNestedManyWithoutSurauInput = {
    create?: XOR<Enumerable<SurauPhotoCreateWithoutSurauInput>, Enumerable<SurauPhotoUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<SurauPhotoCreateOrConnectWithoutSurauInput>
    createMany?: SurauPhotoCreateManySurauInputEnvelope
    connect?: Enumerable<SurauPhotoWhereUniqueInput>
  }

  export type RatingUncheckedCreateNestedManyWithoutSurauInput = {
    create?: XOR<Enumerable<RatingCreateWithoutSurauInput>, Enumerable<RatingUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutSurauInput>
    createMany?: RatingCreateManySurauInputEnvelope
    connect?: Enumerable<RatingWhereUniqueInput>
  }

  export type QiblatUncheckedCreateNestedManyWithoutSurauInput = {
    create?: XOR<Enumerable<QiblatCreateWithoutSurauInput>, Enumerable<QiblatUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<QiblatCreateOrConnectWithoutSurauInput>
    createMany?: QiblatCreateManySurauInputEnvelope
    connect?: Enumerable<QiblatWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SurauPhotoUpdateManyWithoutSurauNestedInput = {
    create?: XOR<Enumerable<SurauPhotoCreateWithoutSurauInput>, Enumerable<SurauPhotoUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<SurauPhotoCreateOrConnectWithoutSurauInput>
    upsert?: Enumerable<SurauPhotoUpsertWithWhereUniqueWithoutSurauInput>
    createMany?: SurauPhotoCreateManySurauInputEnvelope
    set?: Enumerable<SurauPhotoWhereUniqueInput>
    disconnect?: Enumerable<SurauPhotoWhereUniqueInput>
    delete?: Enumerable<SurauPhotoWhereUniqueInput>
    connect?: Enumerable<SurauPhotoWhereUniqueInput>
    update?: Enumerable<SurauPhotoUpdateWithWhereUniqueWithoutSurauInput>
    updateMany?: Enumerable<SurauPhotoUpdateManyWithWhereWithoutSurauInput>
    deleteMany?: Enumerable<SurauPhotoScalarWhereInput>
  }

  export type RatingUpdateManyWithoutSurauNestedInput = {
    create?: XOR<Enumerable<RatingCreateWithoutSurauInput>, Enumerable<RatingUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutSurauInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutSurauInput>
    createMany?: RatingCreateManySurauInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutSurauInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutSurauInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type StateUpdateOneRequiredWithoutSurauNestedInput = {
    create?: XOR<StateCreateWithoutSurauInput, StateUncheckedCreateWithoutSurauInput>
    connectOrCreate?: StateCreateOrConnectWithoutSurauInput
    upsert?: StateUpsertWithoutSurauInput
    connect?: StateWhereUniqueInput
    update?: XOR<StateUpdateWithoutSurauInput, StateUncheckedUpdateWithoutSurauInput>
  }

  export type DistrictUpdateOneRequiredWithoutSurauNestedInput = {
    create?: XOR<DistrictCreateWithoutSurauInput, DistrictUncheckedCreateWithoutSurauInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutSurauInput
    upsert?: DistrictUpsertWithoutSurauInput
    connect?: DistrictWhereUniqueInput
    update?: XOR<DistrictUpdateWithoutSurauInput, DistrictUncheckedUpdateWithoutSurauInput>
  }

  export type MallUpdateOneWithoutSurauNestedInput = {
    create?: XOR<MallCreateWithoutSurauInput, MallUncheckedCreateWithoutSurauInput>
    connectOrCreate?: MallCreateOrConnectWithoutSurauInput
    upsert?: MallUpsertWithoutSurauInput
    disconnect?: boolean
    delete?: boolean
    connect?: MallWhereUniqueInput
    update?: XOR<MallUpdateWithoutSurauInput, MallUncheckedUpdateWithoutSurauInput>
  }

  export type QiblatUpdateManyWithoutSurauNestedInput = {
    create?: XOR<Enumerable<QiblatCreateWithoutSurauInput>, Enumerable<QiblatUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<QiblatCreateOrConnectWithoutSurauInput>
    upsert?: Enumerable<QiblatUpsertWithWhereUniqueWithoutSurauInput>
    createMany?: QiblatCreateManySurauInputEnvelope
    set?: Enumerable<QiblatWhereUniqueInput>
    disconnect?: Enumerable<QiblatWhereUniqueInput>
    delete?: Enumerable<QiblatWhereUniqueInput>
    connect?: Enumerable<QiblatWhereUniqueInput>
    update?: Enumerable<QiblatUpdateWithWhereUniqueWithoutSurauInput>
    updateMany?: Enumerable<QiblatUpdateManyWithWhereWithoutSurauInput>
    deleteMany?: Enumerable<QiblatScalarWhereInput>
  }

  export type SurauPhotoUncheckedUpdateManyWithoutSurauNestedInput = {
    create?: XOR<Enumerable<SurauPhotoCreateWithoutSurauInput>, Enumerable<SurauPhotoUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<SurauPhotoCreateOrConnectWithoutSurauInput>
    upsert?: Enumerable<SurauPhotoUpsertWithWhereUniqueWithoutSurauInput>
    createMany?: SurauPhotoCreateManySurauInputEnvelope
    set?: Enumerable<SurauPhotoWhereUniqueInput>
    disconnect?: Enumerable<SurauPhotoWhereUniqueInput>
    delete?: Enumerable<SurauPhotoWhereUniqueInput>
    connect?: Enumerable<SurauPhotoWhereUniqueInput>
    update?: Enumerable<SurauPhotoUpdateWithWhereUniqueWithoutSurauInput>
    updateMany?: Enumerable<SurauPhotoUpdateManyWithWhereWithoutSurauInput>
    deleteMany?: Enumerable<SurauPhotoScalarWhereInput>
  }

  export type RatingUncheckedUpdateManyWithoutSurauNestedInput = {
    create?: XOR<Enumerable<RatingCreateWithoutSurauInput>, Enumerable<RatingUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<RatingCreateOrConnectWithoutSurauInput>
    upsert?: Enumerable<RatingUpsertWithWhereUniqueWithoutSurauInput>
    createMany?: RatingCreateManySurauInputEnvelope
    set?: Enumerable<RatingWhereUniqueInput>
    disconnect?: Enumerable<RatingWhereUniqueInput>
    delete?: Enumerable<RatingWhereUniqueInput>
    connect?: Enumerable<RatingWhereUniqueInput>
    update?: Enumerable<RatingUpdateWithWhereUniqueWithoutSurauInput>
    updateMany?: Enumerable<RatingUpdateManyWithWhereWithoutSurauInput>
    deleteMany?: Enumerable<RatingScalarWhereInput>
  }

  export type QiblatUncheckedUpdateManyWithoutSurauNestedInput = {
    create?: XOR<Enumerable<QiblatCreateWithoutSurauInput>, Enumerable<QiblatUncheckedCreateWithoutSurauInput>>
    connectOrCreate?: Enumerable<QiblatCreateOrConnectWithoutSurauInput>
    upsert?: Enumerable<QiblatUpsertWithWhereUniqueWithoutSurauInput>
    createMany?: QiblatCreateManySurauInputEnvelope
    set?: Enumerable<QiblatWhereUniqueInput>
    disconnect?: Enumerable<QiblatWhereUniqueInput>
    delete?: Enumerable<QiblatWhereUniqueInput>
    connect?: Enumerable<QiblatWhereUniqueInput>
    update?: Enumerable<QiblatUpdateWithWhereUniqueWithoutSurauInput>
    updateMany?: Enumerable<QiblatUpdateManyWithWhereWithoutSurauInput>
    deleteMany?: Enumerable<QiblatScalarWhereInput>
  }

  export type SurauCreateNestedOneWithoutQiblatInput = {
    create?: XOR<SurauCreateWithoutQiblatInput, SurauUncheckedCreateWithoutQiblatInput>
    connectOrCreate?: SurauCreateOrConnectWithoutQiblatInput
    connect?: SurauWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SurauUpdateOneRequiredWithoutQiblatNestedInput = {
    create?: XOR<SurauCreateWithoutQiblatInput, SurauUncheckedCreateWithoutQiblatInput>
    connectOrCreate?: SurauCreateOrConnectWithoutQiblatInput
    upsert?: SurauUpsertWithoutQiblatInput
    connect?: SurauWhereUniqueInput
    update?: XOR<SurauUpdateWithoutQiblatInput, SurauUncheckedUpdateWithoutQiblatInput>
  }

  export type SurauCreateNestedOneWithoutRatingsInput = {
    create?: XOR<SurauCreateWithoutRatingsInput, SurauUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: SurauCreateOrConnectWithoutRatingsInput
    connect?: SurauWhereUniqueInput
  }

  export type SurauPhotoCreateNestedManyWithoutRatingInput = {
    create?: XOR<Enumerable<SurauPhotoCreateWithoutRatingInput>, Enumerable<SurauPhotoUncheckedCreateWithoutRatingInput>>
    connectOrCreate?: Enumerable<SurauPhotoCreateOrConnectWithoutRatingInput>
    createMany?: SurauPhotoCreateManyRatingInputEnvelope
    connect?: Enumerable<SurauPhotoWhereUniqueInput>
  }

  export type SurauPhotoUncheckedCreateNestedManyWithoutRatingInput = {
    create?: XOR<Enumerable<SurauPhotoCreateWithoutRatingInput>, Enumerable<SurauPhotoUncheckedCreateWithoutRatingInput>>
    connectOrCreate?: Enumerable<SurauPhotoCreateOrConnectWithoutRatingInput>
    createMany?: SurauPhotoCreateManyRatingInputEnvelope
    connect?: Enumerable<SurauPhotoWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SurauUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<SurauCreateWithoutRatingsInput, SurauUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: SurauCreateOrConnectWithoutRatingsInput
    upsert?: SurauUpsertWithoutRatingsInput
    connect?: SurauWhereUniqueInput
    update?: XOR<SurauUpdateWithoutRatingsInput, SurauUncheckedUpdateWithoutRatingsInput>
  }

  export type SurauPhotoUpdateManyWithoutRatingNestedInput = {
    create?: XOR<Enumerable<SurauPhotoCreateWithoutRatingInput>, Enumerable<SurauPhotoUncheckedCreateWithoutRatingInput>>
    connectOrCreate?: Enumerable<SurauPhotoCreateOrConnectWithoutRatingInput>
    upsert?: Enumerable<SurauPhotoUpsertWithWhereUniqueWithoutRatingInput>
    createMany?: SurauPhotoCreateManyRatingInputEnvelope
    set?: Enumerable<SurauPhotoWhereUniqueInput>
    disconnect?: Enumerable<SurauPhotoWhereUniqueInput>
    delete?: Enumerable<SurauPhotoWhereUniqueInput>
    connect?: Enumerable<SurauPhotoWhereUniqueInput>
    update?: Enumerable<SurauPhotoUpdateWithWhereUniqueWithoutRatingInput>
    updateMany?: Enumerable<SurauPhotoUpdateManyWithWhereWithoutRatingInput>
    deleteMany?: Enumerable<SurauPhotoScalarWhereInput>
  }

  export type SurauPhotoUncheckedUpdateManyWithoutRatingNestedInput = {
    create?: XOR<Enumerable<SurauPhotoCreateWithoutRatingInput>, Enumerable<SurauPhotoUncheckedCreateWithoutRatingInput>>
    connectOrCreate?: Enumerable<SurauPhotoCreateOrConnectWithoutRatingInput>
    upsert?: Enumerable<SurauPhotoUpsertWithWhereUniqueWithoutRatingInput>
    createMany?: SurauPhotoCreateManyRatingInputEnvelope
    set?: Enumerable<SurauPhotoWhereUniqueInput>
    disconnect?: Enumerable<SurauPhotoWhereUniqueInput>
    delete?: Enumerable<SurauPhotoWhereUniqueInput>
    connect?: Enumerable<SurauPhotoWhereUniqueInput>
    update?: Enumerable<SurauPhotoUpdateWithWhereUniqueWithoutRatingInput>
    updateMany?: Enumerable<SurauPhotoUpdateManyWithWhereWithoutRatingInput>
    deleteMany?: Enumerable<SurauPhotoScalarWhereInput>
  }

  export type SurauCreateNestedOneWithoutImagesInput = {
    create?: XOR<SurauCreateWithoutImagesInput, SurauUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SurauCreateOrConnectWithoutImagesInput
    connect?: SurauWhereUniqueInput
  }

  export type RatingCreateNestedOneWithoutImagesInput = {
    create?: XOR<RatingCreateWithoutImagesInput, RatingUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RatingCreateOrConnectWithoutImagesInput
    connect?: RatingWhereUniqueInput
  }

  export type SurauUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<SurauCreateWithoutImagesInput, SurauUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SurauCreateOrConnectWithoutImagesInput
    upsert?: SurauUpsertWithoutImagesInput
    connect?: SurauWhereUniqueInput
    update?: XOR<SurauUpdateWithoutImagesInput, SurauUncheckedUpdateWithoutImagesInput>
  }

  export type RatingUpdateOneWithoutImagesNestedInput = {
    create?: XOR<RatingCreateWithoutImagesInput, RatingUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RatingCreateOrConnectWithoutImagesInput
    upsert?: RatingUpsertWithoutImagesInput
    disconnect?: boolean
    delete?: boolean
    connect?: RatingWhereUniqueInput
    update?: XOR<RatingUpdateWithoutImagesInput, RatingUncheckedUpdateWithoutImagesInput>
  }

  export type MallCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<MallCreateWithoutStateInput>, Enumerable<MallUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<MallCreateOrConnectWithoutStateInput>
    createMany?: MallCreateManyStateInputEnvelope
    connect?: Enumerable<MallWhereUniqueInput>
  }

  export type DistrictCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<DistrictCreateWithoutStateInput>, Enumerable<DistrictUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<DistrictCreateOrConnectWithoutStateInput>
    createMany?: DistrictCreateManyStateInputEnvelope
    connect?: Enumerable<DistrictWhereUniqueInput>
  }

  export type SurauCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<SurauCreateWithoutStateInput>, Enumerable<SurauUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutStateInput>
    createMany?: SurauCreateManyStateInputEnvelope
    connect?: Enumerable<SurauWhereUniqueInput>
  }

  export type MallUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<MallCreateWithoutStateInput>, Enumerable<MallUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<MallCreateOrConnectWithoutStateInput>
    createMany?: MallCreateManyStateInputEnvelope
    connect?: Enumerable<MallWhereUniqueInput>
  }

  export type DistrictUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<DistrictCreateWithoutStateInput>, Enumerable<DistrictUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<DistrictCreateOrConnectWithoutStateInput>
    createMany?: DistrictCreateManyStateInputEnvelope
    connect?: Enumerable<DistrictWhereUniqueInput>
  }

  export type SurauUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<SurauCreateWithoutStateInput>, Enumerable<SurauUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutStateInput>
    createMany?: SurauCreateManyStateInputEnvelope
    connect?: Enumerable<SurauWhereUniqueInput>
  }

  export type MallUpdateManyWithoutStateNestedInput = {
    create?: XOR<Enumerable<MallCreateWithoutStateInput>, Enumerable<MallUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<MallCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<MallUpsertWithWhereUniqueWithoutStateInput>
    createMany?: MallCreateManyStateInputEnvelope
    set?: Enumerable<MallWhereUniqueInput>
    disconnect?: Enumerable<MallWhereUniqueInput>
    delete?: Enumerable<MallWhereUniqueInput>
    connect?: Enumerable<MallWhereUniqueInput>
    update?: Enumerable<MallUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<MallUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<MallScalarWhereInput>
  }

  export type DistrictUpdateManyWithoutStateNestedInput = {
    create?: XOR<Enumerable<DistrictCreateWithoutStateInput>, Enumerable<DistrictUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<DistrictCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<DistrictUpsertWithWhereUniqueWithoutStateInput>
    createMany?: DistrictCreateManyStateInputEnvelope
    set?: Enumerable<DistrictWhereUniqueInput>
    disconnect?: Enumerable<DistrictWhereUniqueInput>
    delete?: Enumerable<DistrictWhereUniqueInput>
    connect?: Enumerable<DistrictWhereUniqueInput>
    update?: Enumerable<DistrictUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<DistrictUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<DistrictScalarWhereInput>
  }

  export type SurauUpdateManyWithoutStateNestedInput = {
    create?: XOR<Enumerable<SurauCreateWithoutStateInput>, Enumerable<SurauUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<SurauUpsertWithWhereUniqueWithoutStateInput>
    createMany?: SurauCreateManyStateInputEnvelope
    set?: Enumerable<SurauWhereUniqueInput>
    disconnect?: Enumerable<SurauWhereUniqueInput>
    delete?: Enumerable<SurauWhereUniqueInput>
    connect?: Enumerable<SurauWhereUniqueInput>
    update?: Enumerable<SurauUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<SurauUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<SurauScalarWhereInput>
  }

  export type MallUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<Enumerable<MallCreateWithoutStateInput>, Enumerable<MallUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<MallCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<MallUpsertWithWhereUniqueWithoutStateInput>
    createMany?: MallCreateManyStateInputEnvelope
    set?: Enumerable<MallWhereUniqueInput>
    disconnect?: Enumerable<MallWhereUniqueInput>
    delete?: Enumerable<MallWhereUniqueInput>
    connect?: Enumerable<MallWhereUniqueInput>
    update?: Enumerable<MallUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<MallUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<MallScalarWhereInput>
  }

  export type DistrictUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<Enumerable<DistrictCreateWithoutStateInput>, Enumerable<DistrictUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<DistrictCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<DistrictUpsertWithWhereUniqueWithoutStateInput>
    createMany?: DistrictCreateManyStateInputEnvelope
    set?: Enumerable<DistrictWhereUniqueInput>
    disconnect?: Enumerable<DistrictWhereUniqueInput>
    delete?: Enumerable<DistrictWhereUniqueInput>
    connect?: Enumerable<DistrictWhereUniqueInput>
    update?: Enumerable<DistrictUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<DistrictUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<DistrictScalarWhereInput>
  }

  export type SurauUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<Enumerable<SurauCreateWithoutStateInput>, Enumerable<SurauUncheckedCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<SurauUpsertWithWhereUniqueWithoutStateInput>
    createMany?: SurauCreateManyStateInputEnvelope
    set?: Enumerable<SurauWhereUniqueInput>
    disconnect?: Enumerable<SurauWhereUniqueInput>
    delete?: Enumerable<SurauWhereUniqueInput>
    connect?: Enumerable<SurauWhereUniqueInput>
    update?: Enumerable<SurauUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<SurauUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<SurauScalarWhereInput>
  }

  export type StateCreateNestedOneWithoutDistrictsInput = {
    create?: XOR<StateCreateWithoutDistrictsInput, StateUncheckedCreateWithoutDistrictsInput>
    connectOrCreate?: StateCreateOrConnectWithoutDistrictsInput
    connect?: StateWhereUniqueInput
  }

  export type MallCreateNestedManyWithoutDistrictInput = {
    create?: XOR<Enumerable<MallCreateWithoutDistrictInput>, Enumerable<MallUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<MallCreateOrConnectWithoutDistrictInput>
    createMany?: MallCreateManyDistrictInputEnvelope
    connect?: Enumerable<MallWhereUniqueInput>
  }

  export type SurauCreateNestedManyWithoutDistrictInput = {
    create?: XOR<Enumerable<SurauCreateWithoutDistrictInput>, Enumerable<SurauUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutDistrictInput>
    createMany?: SurauCreateManyDistrictInputEnvelope
    connect?: Enumerable<SurauWhereUniqueInput>
  }

  export type MallUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<Enumerable<MallCreateWithoutDistrictInput>, Enumerable<MallUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<MallCreateOrConnectWithoutDistrictInput>
    createMany?: MallCreateManyDistrictInputEnvelope
    connect?: Enumerable<MallWhereUniqueInput>
  }

  export type SurauUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<Enumerable<SurauCreateWithoutDistrictInput>, Enumerable<SurauUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutDistrictInput>
    createMany?: SurauCreateManyDistrictInputEnvelope
    connect?: Enumerable<SurauWhereUniqueInput>
  }

  export type StateUpdateOneRequiredWithoutDistrictsNestedInput = {
    create?: XOR<StateCreateWithoutDistrictsInput, StateUncheckedCreateWithoutDistrictsInput>
    connectOrCreate?: StateCreateOrConnectWithoutDistrictsInput
    upsert?: StateUpsertWithoutDistrictsInput
    connect?: StateWhereUniqueInput
    update?: XOR<StateUpdateWithoutDistrictsInput, StateUncheckedUpdateWithoutDistrictsInput>
  }

  export type MallUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<Enumerable<MallCreateWithoutDistrictInput>, Enumerable<MallUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<MallCreateOrConnectWithoutDistrictInput>
    upsert?: Enumerable<MallUpsertWithWhereUniqueWithoutDistrictInput>
    createMany?: MallCreateManyDistrictInputEnvelope
    set?: Enumerable<MallWhereUniqueInput>
    disconnect?: Enumerable<MallWhereUniqueInput>
    delete?: Enumerable<MallWhereUniqueInput>
    connect?: Enumerable<MallWhereUniqueInput>
    update?: Enumerable<MallUpdateWithWhereUniqueWithoutDistrictInput>
    updateMany?: Enumerable<MallUpdateManyWithWhereWithoutDistrictInput>
    deleteMany?: Enumerable<MallScalarWhereInput>
  }

  export type SurauUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<Enumerable<SurauCreateWithoutDistrictInput>, Enumerable<SurauUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutDistrictInput>
    upsert?: Enumerable<SurauUpsertWithWhereUniqueWithoutDistrictInput>
    createMany?: SurauCreateManyDistrictInputEnvelope
    set?: Enumerable<SurauWhereUniqueInput>
    disconnect?: Enumerable<SurauWhereUniqueInput>
    delete?: Enumerable<SurauWhereUniqueInput>
    connect?: Enumerable<SurauWhereUniqueInput>
    update?: Enumerable<SurauUpdateWithWhereUniqueWithoutDistrictInput>
    updateMany?: Enumerable<SurauUpdateManyWithWhereWithoutDistrictInput>
    deleteMany?: Enumerable<SurauScalarWhereInput>
  }

  export type MallUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<Enumerable<MallCreateWithoutDistrictInput>, Enumerable<MallUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<MallCreateOrConnectWithoutDistrictInput>
    upsert?: Enumerable<MallUpsertWithWhereUniqueWithoutDistrictInput>
    createMany?: MallCreateManyDistrictInputEnvelope
    set?: Enumerable<MallWhereUniqueInput>
    disconnect?: Enumerable<MallWhereUniqueInput>
    delete?: Enumerable<MallWhereUniqueInput>
    connect?: Enumerable<MallWhereUniqueInput>
    update?: Enumerable<MallUpdateWithWhereUniqueWithoutDistrictInput>
    updateMany?: Enumerable<MallUpdateManyWithWhereWithoutDistrictInput>
    deleteMany?: Enumerable<MallScalarWhereInput>
  }

  export type SurauUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<Enumerable<SurauCreateWithoutDistrictInput>, Enumerable<SurauUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutDistrictInput>
    upsert?: Enumerable<SurauUpsertWithWhereUniqueWithoutDistrictInput>
    createMany?: SurauCreateManyDistrictInputEnvelope
    set?: Enumerable<SurauWhereUniqueInput>
    disconnect?: Enumerable<SurauWhereUniqueInput>
    delete?: Enumerable<SurauWhereUniqueInput>
    connect?: Enumerable<SurauWhereUniqueInput>
    update?: Enumerable<SurauUpdateWithWhereUniqueWithoutDistrictInput>
    updateMany?: Enumerable<SurauUpdateManyWithWhereWithoutDistrictInput>
    deleteMany?: Enumerable<SurauScalarWhereInput>
  }

  export type DistrictCreateNestedOneWithoutMallsInput = {
    create?: XOR<DistrictCreateWithoutMallsInput, DistrictUncheckedCreateWithoutMallsInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutMallsInput
    connect?: DistrictWhereUniqueInput
  }

  export type StateCreateNestedOneWithoutMallsInput = {
    create?: XOR<StateCreateWithoutMallsInput, StateUncheckedCreateWithoutMallsInput>
    connectOrCreate?: StateCreateOrConnectWithoutMallsInput
    connect?: StateWhereUniqueInput
  }

  export type SurauCreateNestedManyWithoutMallInput = {
    create?: XOR<Enumerable<SurauCreateWithoutMallInput>, Enumerable<SurauUncheckedCreateWithoutMallInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutMallInput>
    createMany?: SurauCreateManyMallInputEnvelope
    connect?: Enumerable<SurauWhereUniqueInput>
  }

  export type SurauUncheckedCreateNestedManyWithoutMallInput = {
    create?: XOR<Enumerable<SurauCreateWithoutMallInput>, Enumerable<SurauUncheckedCreateWithoutMallInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutMallInput>
    createMany?: SurauCreateManyMallInputEnvelope
    connect?: Enumerable<SurauWhereUniqueInput>
  }

  export type DistrictUpdateOneRequiredWithoutMallsNestedInput = {
    create?: XOR<DistrictCreateWithoutMallsInput, DistrictUncheckedCreateWithoutMallsInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutMallsInput
    upsert?: DistrictUpsertWithoutMallsInput
    connect?: DistrictWhereUniqueInput
    update?: XOR<DistrictUpdateWithoutMallsInput, DistrictUncheckedUpdateWithoutMallsInput>
  }

  export type StateUpdateOneRequiredWithoutMallsNestedInput = {
    create?: XOR<StateCreateWithoutMallsInput, StateUncheckedCreateWithoutMallsInput>
    connectOrCreate?: StateCreateOrConnectWithoutMallsInput
    upsert?: StateUpsertWithoutMallsInput
    connect?: StateWhereUniqueInput
    update?: XOR<StateUpdateWithoutMallsInput, StateUncheckedUpdateWithoutMallsInput>
  }

  export type SurauUpdateManyWithoutMallNestedInput = {
    create?: XOR<Enumerable<SurauCreateWithoutMallInput>, Enumerable<SurauUncheckedCreateWithoutMallInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutMallInput>
    upsert?: Enumerable<SurauUpsertWithWhereUniqueWithoutMallInput>
    createMany?: SurauCreateManyMallInputEnvelope
    set?: Enumerable<SurauWhereUniqueInput>
    disconnect?: Enumerable<SurauWhereUniqueInput>
    delete?: Enumerable<SurauWhereUniqueInput>
    connect?: Enumerable<SurauWhereUniqueInput>
    update?: Enumerable<SurauUpdateWithWhereUniqueWithoutMallInput>
    updateMany?: Enumerable<SurauUpdateManyWithWhereWithoutMallInput>
    deleteMany?: Enumerable<SurauScalarWhereInput>
  }

  export type SurauUncheckedUpdateManyWithoutMallNestedInput = {
    create?: XOR<Enumerable<SurauCreateWithoutMallInput>, Enumerable<SurauUncheckedCreateWithoutMallInput>>
    connectOrCreate?: Enumerable<SurauCreateOrConnectWithoutMallInput>
    upsert?: Enumerable<SurauUpsertWithWhereUniqueWithoutMallInput>
    createMany?: SurauCreateManyMallInputEnvelope
    set?: Enumerable<SurauWhereUniqueInput>
    disconnect?: Enumerable<SurauWhereUniqueInput>
    delete?: Enumerable<SurauWhereUniqueInput>
    connect?: Enumerable<SurauWhereUniqueInput>
    update?: Enumerable<SurauUpdateWithWhereUniqueWithoutMallInput>
    updateMany?: Enumerable<SurauUpdateManyWithWhereWithoutMallInput>
    deleteMany?: Enumerable<SurauScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
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

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type SurauPhotoCreateWithoutSurauInput = {
    id?: string
    file_path: string
    caption?: string | null
    created_at?: Date | string
    rating?: RatingCreateNestedOneWithoutImagesInput
  }

  export type SurauPhotoUncheckedCreateWithoutSurauInput = {
    id?: string
    file_path: string
    caption?: string | null
    created_at?: Date | string
    rating_id?: string | null
  }

  export type SurauPhotoCreateOrConnectWithoutSurauInput = {
    where: SurauPhotoWhereUniqueInput
    create: XOR<SurauPhotoCreateWithoutSurauInput, SurauPhotoUncheckedCreateWithoutSurauInput>
  }

  export type SurauPhotoCreateManySurauInputEnvelope = {
    data: Enumerable<SurauPhotoCreateManySurauInput>
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutSurauInput = {
    id?: string
    rating: number
    review?: string | null
    created_at?: Date | string
    images?: SurauPhotoCreateNestedManyWithoutRatingInput
  }

  export type RatingUncheckedCreateWithoutSurauInput = {
    id?: string
    rating: number
    review?: string | null
    created_at?: Date | string
    images?: SurauPhotoUncheckedCreateNestedManyWithoutRatingInput
  }

  export type RatingCreateOrConnectWithoutSurauInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutSurauInput, RatingUncheckedCreateWithoutSurauInput>
  }

  export type RatingCreateManySurauInputEnvelope = {
    data: Enumerable<RatingCreateManySurauInput>
    skipDuplicates?: boolean
  }

  export type StateCreateWithoutSurauInput = {
    id?: string
    name: string
    unique_name: string
    malls?: MallCreateNestedManyWithoutStateInput
    districts?: DistrictCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutSurauInput = {
    id?: string
    name: string
    unique_name: string
    malls?: MallUncheckedCreateNestedManyWithoutStateInput
    districts?: DistrictUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutSurauInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutSurauInput, StateUncheckedCreateWithoutSurauInput>
  }

  export type DistrictCreateWithoutSurauInput = {
    id?: string
    name: string
    unique_name: string
    state: StateCreateNestedOneWithoutDistrictsInput
    malls?: MallCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutSurauInput = {
    id?: string
    name: string
    unique_name: string
    state_id: string
    malls?: MallUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutSurauInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutSurauInput, DistrictUncheckedCreateWithoutSurauInput>
  }

  export type MallCreateWithoutSurauInput = {
    id?: string
    name: string
    label?: string
    value?: string
    district: DistrictCreateNestedOneWithoutMallsInput
    state: StateCreateNestedOneWithoutMallsInput
  }

  export type MallUncheckedCreateWithoutSurauInput = {
    id?: string
    name: string
    label?: string
    value?: string
    district_id: string
    state_id: string
  }

  export type MallCreateOrConnectWithoutSurauInput = {
    where: MallWhereUniqueInput
    create: XOR<MallCreateWithoutSurauInput, MallUncheckedCreateWithoutSurauInput>
  }

  export type QiblatCreateWithoutSurauInput = {
    id?: string
    latitude: number
    longitude: number
    degree: number
  }

  export type QiblatUncheckedCreateWithoutSurauInput = {
    id?: string
    latitude: number
    longitude: number
    degree: number
  }

  export type QiblatCreateOrConnectWithoutSurauInput = {
    where: QiblatWhereUniqueInput
    create: XOR<QiblatCreateWithoutSurauInput, QiblatUncheckedCreateWithoutSurauInput>
  }

  export type QiblatCreateManySurauInputEnvelope = {
    data: Enumerable<QiblatCreateManySurauInput>
    skipDuplicates?: boolean
  }

  export type SurauPhotoUpsertWithWhereUniqueWithoutSurauInput = {
    where: SurauPhotoWhereUniqueInput
    update: XOR<SurauPhotoUpdateWithoutSurauInput, SurauPhotoUncheckedUpdateWithoutSurauInput>
    create: XOR<SurauPhotoCreateWithoutSurauInput, SurauPhotoUncheckedCreateWithoutSurauInput>
  }

  export type SurauPhotoUpdateWithWhereUniqueWithoutSurauInput = {
    where: SurauPhotoWhereUniqueInput
    data: XOR<SurauPhotoUpdateWithoutSurauInput, SurauPhotoUncheckedUpdateWithoutSurauInput>
  }

  export type SurauPhotoUpdateManyWithWhereWithoutSurauInput = {
    where: SurauPhotoScalarWhereInput
    data: XOR<SurauPhotoUpdateManyMutationInput, SurauPhotoUncheckedUpdateManyWithoutImagesInput>
  }

  export type SurauPhotoScalarWhereInput = {
    AND?: Enumerable<SurauPhotoScalarWhereInput>
    OR?: Enumerable<SurauPhotoScalarWhereInput>
    NOT?: Enumerable<SurauPhotoScalarWhereInput>
    id?: StringFilter | string
    file_path?: StringFilter | string
    caption?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    surau_id?: StringFilter | string
    rating_id?: StringNullableFilter | string | null
  }

  export type RatingUpsertWithWhereUniqueWithoutSurauInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutSurauInput, RatingUncheckedUpdateWithoutSurauInput>
    create: XOR<RatingCreateWithoutSurauInput, RatingUncheckedCreateWithoutSurauInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutSurauInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutSurauInput, RatingUncheckedUpdateWithoutSurauInput>
  }

  export type RatingUpdateManyWithWhereWithoutSurauInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutRatingsInput>
  }

  export type RatingScalarWhereInput = {
    AND?: Enumerable<RatingScalarWhereInput>
    OR?: Enumerable<RatingScalarWhereInput>
    NOT?: Enumerable<RatingScalarWhereInput>
    id?: StringFilter | string
    rating?: IntFilter | number
    review?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    surau_id?: StringFilter | string
  }

  export type StateUpsertWithoutSurauInput = {
    update: XOR<StateUpdateWithoutSurauInput, StateUncheckedUpdateWithoutSurauInput>
    create: XOR<StateCreateWithoutSurauInput, StateUncheckedCreateWithoutSurauInput>
  }

  export type StateUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    malls?: MallUpdateManyWithoutStateNestedInput
    districts?: DistrictUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    malls?: MallUncheckedUpdateManyWithoutStateNestedInput
    districts?: DistrictUncheckedUpdateManyWithoutStateNestedInput
  }

  export type DistrictUpsertWithoutSurauInput = {
    update: XOR<DistrictUpdateWithoutSurauInput, DistrictUncheckedUpdateWithoutSurauInput>
    create: XOR<DistrictCreateWithoutSurauInput, DistrictUncheckedCreateWithoutSurauInput>
  }

  export type DistrictUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    state?: StateUpdateOneRequiredWithoutDistrictsNestedInput
    malls?: MallUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    malls?: MallUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type MallUpsertWithoutSurauInput = {
    update: XOR<MallUpdateWithoutSurauInput, MallUncheckedUpdateWithoutSurauInput>
    create: XOR<MallCreateWithoutSurauInput, MallUncheckedCreateWithoutSurauInput>
  }

  export type MallUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    district?: DistrictUpdateOneRequiredWithoutMallsNestedInput
    state?: StateUpdateOneRequiredWithoutMallsNestedInput
  }

  export type MallUncheckedUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    district_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
  }

  export type QiblatUpsertWithWhereUniqueWithoutSurauInput = {
    where: QiblatWhereUniqueInput
    update: XOR<QiblatUpdateWithoutSurauInput, QiblatUncheckedUpdateWithoutSurauInput>
    create: XOR<QiblatCreateWithoutSurauInput, QiblatUncheckedCreateWithoutSurauInput>
  }

  export type QiblatUpdateWithWhereUniqueWithoutSurauInput = {
    where: QiblatWhereUniqueInput
    data: XOR<QiblatUpdateWithoutSurauInput, QiblatUncheckedUpdateWithoutSurauInput>
  }

  export type QiblatUpdateManyWithWhereWithoutSurauInput = {
    where: QiblatScalarWhereInput
    data: XOR<QiblatUpdateManyMutationInput, QiblatUncheckedUpdateManyWithoutQiblatInput>
  }

  export type QiblatScalarWhereInput = {
    AND?: Enumerable<QiblatScalarWhereInput>
    OR?: Enumerable<QiblatScalarWhereInput>
    NOT?: Enumerable<QiblatScalarWhereInput>
    id?: StringFilter | string
    surau_id?: StringFilter | string
    latitude?: FloatFilter | number
    longitude?: FloatFilter | number
    degree?: FloatFilter | number
  }

  export type SurauCreateWithoutQiblatInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_qiblat_certified?: boolean
    images?: SurauPhotoCreateNestedManyWithoutSurauInput
    ratings?: RatingCreateNestedManyWithoutSurauInput
    state: StateCreateNestedOneWithoutSurauInput
    district: DistrictCreateNestedOneWithoutSurauInput
    mall?: MallCreateNestedOneWithoutSurauInput
  }

  export type SurauUncheckedCreateWithoutQiblatInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    state_id: string
    district_id: string
    mall_id?: string | null
    is_qiblat_certified?: boolean
    images?: SurauPhotoUncheckedCreateNestedManyWithoutSurauInput
    ratings?: RatingUncheckedCreateNestedManyWithoutSurauInput
  }

  export type SurauCreateOrConnectWithoutQiblatInput = {
    where: SurauWhereUniqueInput
    create: XOR<SurauCreateWithoutQiblatInput, SurauUncheckedCreateWithoutQiblatInput>
  }

  export type SurauUpsertWithoutQiblatInput = {
    update: XOR<SurauUpdateWithoutQiblatInput, SurauUncheckedUpdateWithoutQiblatInput>
    create: XOR<SurauCreateWithoutQiblatInput, SurauUncheckedCreateWithoutQiblatInput>
  }

  export type SurauUpdateWithoutQiblatInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUpdateManyWithoutSurauNestedInput
    ratings?: RatingUpdateManyWithoutSurauNestedInput
    state?: StateUpdateOneRequiredWithoutSurauNestedInput
    district?: DistrictUpdateOneRequiredWithoutSurauNestedInput
    mall?: MallUpdateOneWithoutSurauNestedInput
  }

  export type SurauUncheckedUpdateWithoutQiblatInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state_id?: StringFieldUpdateOperationsInput | string
    district_id?: StringFieldUpdateOperationsInput | string
    mall_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUncheckedUpdateManyWithoutSurauNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutSurauNestedInput
  }

  export type SurauCreateWithoutRatingsInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_qiblat_certified?: boolean
    images?: SurauPhotoCreateNestedManyWithoutSurauInput
    state: StateCreateNestedOneWithoutSurauInput
    district: DistrictCreateNestedOneWithoutSurauInput
    mall?: MallCreateNestedOneWithoutSurauInput
    qiblat?: QiblatCreateNestedManyWithoutSurauInput
  }

  export type SurauUncheckedCreateWithoutRatingsInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    state_id: string
    district_id: string
    mall_id?: string | null
    is_qiblat_certified?: boolean
    images?: SurauPhotoUncheckedCreateNestedManyWithoutSurauInput
    qiblat?: QiblatUncheckedCreateNestedManyWithoutSurauInput
  }

  export type SurauCreateOrConnectWithoutRatingsInput = {
    where: SurauWhereUniqueInput
    create: XOR<SurauCreateWithoutRatingsInput, SurauUncheckedCreateWithoutRatingsInput>
  }

  export type SurauPhotoCreateWithoutRatingInput = {
    id?: string
    file_path: string
    caption?: string | null
    created_at?: Date | string
    surau: SurauCreateNestedOneWithoutImagesInput
  }

  export type SurauPhotoUncheckedCreateWithoutRatingInput = {
    id?: string
    file_path: string
    caption?: string | null
    created_at?: Date | string
    surau_id: string
  }

  export type SurauPhotoCreateOrConnectWithoutRatingInput = {
    where: SurauPhotoWhereUniqueInput
    create: XOR<SurauPhotoCreateWithoutRatingInput, SurauPhotoUncheckedCreateWithoutRatingInput>
  }

  export type SurauPhotoCreateManyRatingInputEnvelope = {
    data: Enumerable<SurauPhotoCreateManyRatingInput>
    skipDuplicates?: boolean
  }

  export type SurauUpsertWithoutRatingsInput = {
    update: XOR<SurauUpdateWithoutRatingsInput, SurauUncheckedUpdateWithoutRatingsInput>
    create: XOR<SurauCreateWithoutRatingsInput, SurauUncheckedCreateWithoutRatingsInput>
  }

  export type SurauUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUpdateManyWithoutSurauNestedInput
    state?: StateUpdateOneRequiredWithoutSurauNestedInput
    district?: DistrictUpdateOneRequiredWithoutSurauNestedInput
    mall?: MallUpdateOneWithoutSurauNestedInput
    qiblat?: QiblatUpdateManyWithoutSurauNestedInput
  }

  export type SurauUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state_id?: StringFieldUpdateOperationsInput | string
    district_id?: StringFieldUpdateOperationsInput | string
    mall_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUncheckedUpdateManyWithoutSurauNestedInput
    qiblat?: QiblatUncheckedUpdateManyWithoutSurauNestedInput
  }

  export type SurauPhotoUpsertWithWhereUniqueWithoutRatingInput = {
    where: SurauPhotoWhereUniqueInput
    update: XOR<SurauPhotoUpdateWithoutRatingInput, SurauPhotoUncheckedUpdateWithoutRatingInput>
    create: XOR<SurauPhotoCreateWithoutRatingInput, SurauPhotoUncheckedCreateWithoutRatingInput>
  }

  export type SurauPhotoUpdateWithWhereUniqueWithoutRatingInput = {
    where: SurauPhotoWhereUniqueInput
    data: XOR<SurauPhotoUpdateWithoutRatingInput, SurauPhotoUncheckedUpdateWithoutRatingInput>
  }

  export type SurauPhotoUpdateManyWithWhereWithoutRatingInput = {
    where: SurauPhotoScalarWhereInput
    data: XOR<SurauPhotoUpdateManyMutationInput, SurauPhotoUncheckedUpdateManyWithoutImagesInput>
  }

  export type SurauCreateWithoutImagesInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_qiblat_certified?: boolean
    ratings?: RatingCreateNestedManyWithoutSurauInput
    state: StateCreateNestedOneWithoutSurauInput
    district: DistrictCreateNestedOneWithoutSurauInput
    mall?: MallCreateNestedOneWithoutSurauInput
    qiblat?: QiblatCreateNestedManyWithoutSurauInput
  }

  export type SurauUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    state_id: string
    district_id: string
    mall_id?: string | null
    is_qiblat_certified?: boolean
    ratings?: RatingUncheckedCreateNestedManyWithoutSurauInput
    qiblat?: QiblatUncheckedCreateNestedManyWithoutSurauInput
  }

  export type SurauCreateOrConnectWithoutImagesInput = {
    where: SurauWhereUniqueInput
    create: XOR<SurauCreateWithoutImagesInput, SurauUncheckedCreateWithoutImagesInput>
  }

  export type RatingCreateWithoutImagesInput = {
    id?: string
    rating: number
    review?: string | null
    created_at?: Date | string
    surau: SurauCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutImagesInput = {
    id?: string
    rating: number
    review?: string | null
    created_at?: Date | string
    surau_id: string
  }

  export type RatingCreateOrConnectWithoutImagesInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutImagesInput, RatingUncheckedCreateWithoutImagesInput>
  }

  export type SurauUpsertWithoutImagesInput = {
    update: XOR<SurauUpdateWithoutImagesInput, SurauUncheckedUpdateWithoutImagesInput>
    create: XOR<SurauCreateWithoutImagesInput, SurauUncheckedCreateWithoutImagesInput>
  }

  export type SurauUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    ratings?: RatingUpdateManyWithoutSurauNestedInput
    state?: StateUpdateOneRequiredWithoutSurauNestedInput
    district?: DistrictUpdateOneRequiredWithoutSurauNestedInput
    mall?: MallUpdateOneWithoutSurauNestedInput
    qiblat?: QiblatUpdateManyWithoutSurauNestedInput
  }

  export type SurauUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state_id?: StringFieldUpdateOperationsInput | string
    district_id?: StringFieldUpdateOperationsInput | string
    mall_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    ratings?: RatingUncheckedUpdateManyWithoutSurauNestedInput
    qiblat?: QiblatUncheckedUpdateManyWithoutSurauNestedInput
  }

  export type RatingUpsertWithoutImagesInput = {
    update: XOR<RatingUpdateWithoutImagesInput, RatingUncheckedUpdateWithoutImagesInput>
    create: XOR<RatingCreateWithoutImagesInput, RatingUncheckedCreateWithoutImagesInput>
  }

  export type RatingUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surau?: SurauUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surau_id?: StringFieldUpdateOperationsInput | string
  }

  export type MallCreateWithoutStateInput = {
    id?: string
    name: string
    label?: string
    value?: string
    district: DistrictCreateNestedOneWithoutMallsInput
    surau?: SurauCreateNestedManyWithoutMallInput
  }

  export type MallUncheckedCreateWithoutStateInput = {
    id?: string
    name: string
    label?: string
    value?: string
    district_id: string
    surau?: SurauUncheckedCreateNestedManyWithoutMallInput
  }

  export type MallCreateOrConnectWithoutStateInput = {
    where: MallWhereUniqueInput
    create: XOR<MallCreateWithoutStateInput, MallUncheckedCreateWithoutStateInput>
  }

  export type MallCreateManyStateInputEnvelope = {
    data: Enumerable<MallCreateManyStateInput>
    skipDuplicates?: boolean
  }

  export type DistrictCreateWithoutStateInput = {
    id?: string
    name: string
    unique_name: string
    malls?: MallCreateNestedManyWithoutDistrictInput
    surau?: SurauCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutStateInput = {
    id?: string
    name: string
    unique_name: string
    malls?: MallUncheckedCreateNestedManyWithoutDistrictInput
    surau?: SurauUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutStateInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutStateInput, DistrictUncheckedCreateWithoutStateInput>
  }

  export type DistrictCreateManyStateInputEnvelope = {
    data: Enumerable<DistrictCreateManyStateInput>
    skipDuplicates?: boolean
  }

  export type SurauCreateWithoutStateInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_qiblat_certified?: boolean
    images?: SurauPhotoCreateNestedManyWithoutSurauInput
    ratings?: RatingCreateNestedManyWithoutSurauInput
    district: DistrictCreateNestedOneWithoutSurauInput
    mall?: MallCreateNestedOneWithoutSurauInput
    qiblat?: QiblatCreateNestedManyWithoutSurauInput
  }

  export type SurauUncheckedCreateWithoutStateInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    district_id: string
    mall_id?: string | null
    is_qiblat_certified?: boolean
    images?: SurauPhotoUncheckedCreateNestedManyWithoutSurauInput
    ratings?: RatingUncheckedCreateNestedManyWithoutSurauInput
    qiblat?: QiblatUncheckedCreateNestedManyWithoutSurauInput
  }

  export type SurauCreateOrConnectWithoutStateInput = {
    where: SurauWhereUniqueInput
    create: XOR<SurauCreateWithoutStateInput, SurauUncheckedCreateWithoutStateInput>
  }

  export type SurauCreateManyStateInputEnvelope = {
    data: Enumerable<SurauCreateManyStateInput>
    skipDuplicates?: boolean
  }

  export type MallUpsertWithWhereUniqueWithoutStateInput = {
    where: MallWhereUniqueInput
    update: XOR<MallUpdateWithoutStateInput, MallUncheckedUpdateWithoutStateInput>
    create: XOR<MallCreateWithoutStateInput, MallUncheckedCreateWithoutStateInput>
  }

  export type MallUpdateWithWhereUniqueWithoutStateInput = {
    where: MallWhereUniqueInput
    data: XOR<MallUpdateWithoutStateInput, MallUncheckedUpdateWithoutStateInput>
  }

  export type MallUpdateManyWithWhereWithoutStateInput = {
    where: MallScalarWhereInput
    data: XOR<MallUpdateManyMutationInput, MallUncheckedUpdateManyWithoutMallsInput>
  }

  export type MallScalarWhereInput = {
    AND?: Enumerable<MallScalarWhereInput>
    OR?: Enumerable<MallScalarWhereInput>
    NOT?: Enumerable<MallScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    label?: StringFilter | string
    value?: StringFilter | string
    district_id?: StringFilter | string
    state_id?: StringFilter | string
  }

  export type DistrictUpsertWithWhereUniqueWithoutStateInput = {
    where: DistrictWhereUniqueInput
    update: XOR<DistrictUpdateWithoutStateInput, DistrictUncheckedUpdateWithoutStateInput>
    create: XOR<DistrictCreateWithoutStateInput, DistrictUncheckedCreateWithoutStateInput>
  }

  export type DistrictUpdateWithWhereUniqueWithoutStateInput = {
    where: DistrictWhereUniqueInput
    data: XOR<DistrictUpdateWithoutStateInput, DistrictUncheckedUpdateWithoutStateInput>
  }

  export type DistrictUpdateManyWithWhereWithoutStateInput = {
    where: DistrictScalarWhereInput
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyWithoutDistrictsInput>
  }

  export type DistrictScalarWhereInput = {
    AND?: Enumerable<DistrictScalarWhereInput>
    OR?: Enumerable<DistrictScalarWhereInput>
    NOT?: Enumerable<DistrictScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    unique_name?: StringFilter | string
    state_id?: StringFilter | string
  }

  export type SurauUpsertWithWhereUniqueWithoutStateInput = {
    where: SurauWhereUniqueInput
    update: XOR<SurauUpdateWithoutStateInput, SurauUncheckedUpdateWithoutStateInput>
    create: XOR<SurauCreateWithoutStateInput, SurauUncheckedCreateWithoutStateInput>
  }

  export type SurauUpdateWithWhereUniqueWithoutStateInput = {
    where: SurauWhereUniqueInput
    data: XOR<SurauUpdateWithoutStateInput, SurauUncheckedUpdateWithoutStateInput>
  }

  export type SurauUpdateManyWithWhereWithoutStateInput = {
    where: SurauScalarWhereInput
    data: XOR<SurauUpdateManyMutationInput, SurauUncheckedUpdateManyWithoutSurauInput>
  }

  export type SurauScalarWhereInput = {
    AND?: Enumerable<SurauScalarWhereInput>
    OR?: Enumerable<SurauScalarWhereInput>
    NOT?: Enumerable<SurauScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    unique_name?: StringFilter | string
    brief_direction?: StringNullableFilter | string | null
    is_approved?: BoolFilter | boolean
    is_approved_at?: DateTimeNullableFilter | Date | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    state_id?: StringFilter | string
    district_id?: StringFilter | string
    mall_id?: StringNullableFilter | string | null
    is_qiblat_certified?: BoolFilter | boolean
  }

  export type StateCreateWithoutDistrictsInput = {
    id?: string
    name: string
    unique_name: string
    malls?: MallCreateNestedManyWithoutStateInput
    surau?: SurauCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutDistrictsInput = {
    id?: string
    name: string
    unique_name: string
    malls?: MallUncheckedCreateNestedManyWithoutStateInput
    surau?: SurauUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutDistrictsInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutDistrictsInput, StateUncheckedCreateWithoutDistrictsInput>
  }

  export type MallCreateWithoutDistrictInput = {
    id?: string
    name: string
    label?: string
    value?: string
    state: StateCreateNestedOneWithoutMallsInput
    surau?: SurauCreateNestedManyWithoutMallInput
  }

  export type MallUncheckedCreateWithoutDistrictInput = {
    id?: string
    name: string
    label?: string
    value?: string
    state_id: string
    surau?: SurauUncheckedCreateNestedManyWithoutMallInput
  }

  export type MallCreateOrConnectWithoutDistrictInput = {
    where: MallWhereUniqueInput
    create: XOR<MallCreateWithoutDistrictInput, MallUncheckedCreateWithoutDistrictInput>
  }

  export type MallCreateManyDistrictInputEnvelope = {
    data: Enumerable<MallCreateManyDistrictInput>
    skipDuplicates?: boolean
  }

  export type SurauCreateWithoutDistrictInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_qiblat_certified?: boolean
    images?: SurauPhotoCreateNestedManyWithoutSurauInput
    ratings?: RatingCreateNestedManyWithoutSurauInput
    state: StateCreateNestedOneWithoutSurauInput
    mall?: MallCreateNestedOneWithoutSurauInput
    qiblat?: QiblatCreateNestedManyWithoutSurauInput
  }

  export type SurauUncheckedCreateWithoutDistrictInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    state_id: string
    mall_id?: string | null
    is_qiblat_certified?: boolean
    images?: SurauPhotoUncheckedCreateNestedManyWithoutSurauInput
    ratings?: RatingUncheckedCreateNestedManyWithoutSurauInput
    qiblat?: QiblatUncheckedCreateNestedManyWithoutSurauInput
  }

  export type SurauCreateOrConnectWithoutDistrictInput = {
    where: SurauWhereUniqueInput
    create: XOR<SurauCreateWithoutDistrictInput, SurauUncheckedCreateWithoutDistrictInput>
  }

  export type SurauCreateManyDistrictInputEnvelope = {
    data: Enumerable<SurauCreateManyDistrictInput>
    skipDuplicates?: boolean
  }

  export type StateUpsertWithoutDistrictsInput = {
    update: XOR<StateUpdateWithoutDistrictsInput, StateUncheckedUpdateWithoutDistrictsInput>
    create: XOR<StateCreateWithoutDistrictsInput, StateUncheckedCreateWithoutDistrictsInput>
  }

  export type StateUpdateWithoutDistrictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    malls?: MallUpdateManyWithoutStateNestedInput
    surau?: SurauUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutDistrictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    malls?: MallUncheckedUpdateManyWithoutStateNestedInput
    surau?: SurauUncheckedUpdateManyWithoutStateNestedInput
  }

  export type MallUpsertWithWhereUniqueWithoutDistrictInput = {
    where: MallWhereUniqueInput
    update: XOR<MallUpdateWithoutDistrictInput, MallUncheckedUpdateWithoutDistrictInput>
    create: XOR<MallCreateWithoutDistrictInput, MallUncheckedCreateWithoutDistrictInput>
  }

  export type MallUpdateWithWhereUniqueWithoutDistrictInput = {
    where: MallWhereUniqueInput
    data: XOR<MallUpdateWithoutDistrictInput, MallUncheckedUpdateWithoutDistrictInput>
  }

  export type MallUpdateManyWithWhereWithoutDistrictInput = {
    where: MallScalarWhereInput
    data: XOR<MallUpdateManyMutationInput, MallUncheckedUpdateManyWithoutMallsInput>
  }

  export type SurauUpsertWithWhereUniqueWithoutDistrictInput = {
    where: SurauWhereUniqueInput
    update: XOR<SurauUpdateWithoutDistrictInput, SurauUncheckedUpdateWithoutDistrictInput>
    create: XOR<SurauCreateWithoutDistrictInput, SurauUncheckedCreateWithoutDistrictInput>
  }

  export type SurauUpdateWithWhereUniqueWithoutDistrictInput = {
    where: SurauWhereUniqueInput
    data: XOR<SurauUpdateWithoutDistrictInput, SurauUncheckedUpdateWithoutDistrictInput>
  }

  export type SurauUpdateManyWithWhereWithoutDistrictInput = {
    where: SurauScalarWhereInput
    data: XOR<SurauUpdateManyMutationInput, SurauUncheckedUpdateManyWithoutSurauInput>
  }

  export type DistrictCreateWithoutMallsInput = {
    id?: string
    name: string
    unique_name: string
    state: StateCreateNestedOneWithoutDistrictsInput
    surau?: SurauCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutMallsInput = {
    id?: string
    name: string
    unique_name: string
    state_id: string
    surau?: SurauUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutMallsInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutMallsInput, DistrictUncheckedCreateWithoutMallsInput>
  }

  export type StateCreateWithoutMallsInput = {
    id?: string
    name: string
    unique_name: string
    districts?: DistrictCreateNestedManyWithoutStateInput
    surau?: SurauCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutMallsInput = {
    id?: string
    name: string
    unique_name: string
    districts?: DistrictUncheckedCreateNestedManyWithoutStateInput
    surau?: SurauUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutMallsInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutMallsInput, StateUncheckedCreateWithoutMallsInput>
  }

  export type SurauCreateWithoutMallInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_qiblat_certified?: boolean
    images?: SurauPhotoCreateNestedManyWithoutSurauInput
    ratings?: RatingCreateNestedManyWithoutSurauInput
    state: StateCreateNestedOneWithoutSurauInput
    district: DistrictCreateNestedOneWithoutSurauInput
    qiblat?: QiblatCreateNestedManyWithoutSurauInput
  }

  export type SurauUncheckedCreateWithoutMallInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    state_id: string
    district_id: string
    is_qiblat_certified?: boolean
    images?: SurauPhotoUncheckedCreateNestedManyWithoutSurauInput
    ratings?: RatingUncheckedCreateNestedManyWithoutSurauInput
    qiblat?: QiblatUncheckedCreateNestedManyWithoutSurauInput
  }

  export type SurauCreateOrConnectWithoutMallInput = {
    where: SurauWhereUniqueInput
    create: XOR<SurauCreateWithoutMallInput, SurauUncheckedCreateWithoutMallInput>
  }

  export type SurauCreateManyMallInputEnvelope = {
    data: Enumerable<SurauCreateManyMallInput>
    skipDuplicates?: boolean
  }

  export type DistrictUpsertWithoutMallsInput = {
    update: XOR<DistrictUpdateWithoutMallsInput, DistrictUncheckedUpdateWithoutMallsInput>
    create: XOR<DistrictCreateWithoutMallsInput, DistrictUncheckedCreateWithoutMallsInput>
  }

  export type DistrictUpdateWithoutMallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    state?: StateUpdateOneRequiredWithoutDistrictsNestedInput
    surau?: SurauUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutMallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    surau?: SurauUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type StateUpsertWithoutMallsInput = {
    update: XOR<StateUpdateWithoutMallsInput, StateUncheckedUpdateWithoutMallsInput>
    create: XOR<StateCreateWithoutMallsInput, StateUncheckedCreateWithoutMallsInput>
  }

  export type StateUpdateWithoutMallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    districts?: DistrictUpdateManyWithoutStateNestedInput
    surau?: SurauUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutMallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    districts?: DistrictUncheckedUpdateManyWithoutStateNestedInput
    surau?: SurauUncheckedUpdateManyWithoutStateNestedInput
  }

  export type SurauUpsertWithWhereUniqueWithoutMallInput = {
    where: SurauWhereUniqueInput
    update: XOR<SurauUpdateWithoutMallInput, SurauUncheckedUpdateWithoutMallInput>
    create: XOR<SurauCreateWithoutMallInput, SurauUncheckedCreateWithoutMallInput>
  }

  export type SurauUpdateWithWhereUniqueWithoutMallInput = {
    where: SurauWhereUniqueInput
    data: XOR<SurauUpdateWithoutMallInput, SurauUncheckedUpdateWithoutMallInput>
  }

  export type SurauUpdateManyWithWhereWithoutMallInput = {
    where: SurauScalarWhereInput
    data: XOR<SurauUpdateManyMutationInput, SurauUncheckedUpdateManyWithoutSurauInput>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type SurauPhotoCreateManySurauInput = {
    id?: string
    file_path: string
    caption?: string | null
    created_at?: Date | string
    rating_id?: string | null
  }

  export type RatingCreateManySurauInput = {
    id?: string
    rating: number
    review?: string | null
    created_at?: Date | string
  }

  export type QiblatCreateManySurauInput = {
    id?: string
    latitude: number
    longitude: number
    degree: number
  }

  export type SurauPhotoUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: RatingUpdateOneWithoutImagesNestedInput
  }

  export type SurauPhotoUncheckedUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rating_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurauPhotoUncheckedUpdateManyWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rating_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SurauPhotoUpdateManyWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SurauPhotoUncheckedUpdateManyWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateManyWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QiblatUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    degree?: FloatFieldUpdateOperationsInput | number
  }

  export type QiblatUncheckedUpdateWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    degree?: FloatFieldUpdateOperationsInput | number
  }

  export type QiblatUncheckedUpdateManyWithoutQiblatInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    degree?: FloatFieldUpdateOperationsInput | number
  }

  export type SurauPhotoCreateManyRatingInput = {
    id?: string
    file_path: string
    caption?: string | null
    created_at?: Date | string
    surau_id: string
  }

  export type SurauPhotoUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surau?: SurauUpdateOneRequiredWithoutImagesNestedInput
  }

  export type SurauPhotoUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    surau_id?: StringFieldUpdateOperationsInput | string
  }

  export type MallCreateManyStateInput = {
    id?: string
    name: string
    label?: string
    value?: string
    district_id: string
  }

  export type DistrictCreateManyStateInput = {
    id?: string
    name: string
    unique_name: string
  }

  export type SurauCreateManyStateInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    district_id: string
    mall_id?: string | null
    is_qiblat_certified?: boolean
  }

  export type MallUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    district?: DistrictUpdateOneRequiredWithoutMallsNestedInput
    surau?: SurauUpdateManyWithoutMallNestedInput
  }

  export type MallUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    district_id?: StringFieldUpdateOperationsInput | string
    surau?: SurauUncheckedUpdateManyWithoutMallNestedInput
  }

  export type MallUncheckedUpdateManyWithoutMallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    district_id?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    malls?: MallUpdateManyWithoutDistrictNestedInput
    surau?: SurauUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    malls?: MallUncheckedUpdateManyWithoutDistrictNestedInput
    surau?: SurauUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateManyWithoutDistrictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
  }

  export type SurauUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUpdateManyWithoutSurauNestedInput
    ratings?: RatingUpdateManyWithoutSurauNestedInput
    district?: DistrictUpdateOneRequiredWithoutSurauNestedInput
    mall?: MallUpdateOneWithoutSurauNestedInput
    qiblat?: QiblatUpdateManyWithoutSurauNestedInput
  }

  export type SurauUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    district_id?: StringFieldUpdateOperationsInput | string
    mall_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUncheckedUpdateManyWithoutSurauNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutSurauNestedInput
    qiblat?: QiblatUncheckedUpdateManyWithoutSurauNestedInput
  }

  export type SurauUncheckedUpdateManyWithoutSurauInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    district_id?: StringFieldUpdateOperationsInput | string
    mall_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MallCreateManyDistrictInput = {
    id?: string
    name: string
    label?: string
    value?: string
    state_id: string
  }

  export type SurauCreateManyDistrictInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    state_id: string
    mall_id?: string | null
    is_qiblat_certified?: boolean
  }

  export type MallUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    state?: StateUpdateOneRequiredWithoutMallsNestedInput
    surau?: SurauUpdateManyWithoutMallNestedInput
  }

  export type MallUncheckedUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    surau?: SurauUncheckedUpdateManyWithoutMallNestedInput
  }

  export type SurauUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUpdateManyWithoutSurauNestedInput
    ratings?: RatingUpdateManyWithoutSurauNestedInput
    state?: StateUpdateOneRequiredWithoutSurauNestedInput
    mall?: MallUpdateOneWithoutSurauNestedInput
    qiblat?: QiblatUpdateManyWithoutSurauNestedInput
  }

  export type SurauUncheckedUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state_id?: StringFieldUpdateOperationsInput | string
    mall_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUncheckedUpdateManyWithoutSurauNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutSurauNestedInput
    qiblat?: QiblatUncheckedUpdateManyWithoutSurauNestedInput
  }

  export type SurauCreateManyMallInput = {
    id?: string
    name: string
    unique_name: string
    brief_direction?: string | null
    is_approved?: boolean
    is_approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    state_id: string
    district_id: string
    is_qiblat_certified?: boolean
  }

  export type SurauUpdateWithoutMallInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUpdateManyWithoutSurauNestedInput
    ratings?: RatingUpdateManyWithoutSurauNestedInput
    state?: StateUpdateOneRequiredWithoutSurauNestedInput
    district?: DistrictUpdateOneRequiredWithoutSurauNestedInput
    qiblat?: QiblatUpdateManyWithoutSurauNestedInput
  }

  export type SurauUncheckedUpdateWithoutMallInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    brief_direction?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: BoolFieldUpdateOperationsInput | boolean
    is_approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state_id?: StringFieldUpdateOperationsInput | string
    district_id?: StringFieldUpdateOperationsInput | string
    is_qiblat_certified?: BoolFieldUpdateOperationsInput | boolean
    images?: SurauPhotoUncheckedUpdateManyWithoutSurauNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutSurauNestedInput
    qiblat?: QiblatUncheckedUpdateManyWithoutSurauNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.BaseDMMF
}