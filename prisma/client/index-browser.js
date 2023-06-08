
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.AccountScalarFieldEnum = {
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

exports.Prisma.DistrictScalarFieldEnum = {
  id: 'id',
  name: 'name',
  unique_name: 'unique_name',
  state_id: 'state_id'
};

exports.Prisma.ExampleScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MallScalarFieldEnum = {
  id: 'id',
  name: 'name',
  label: 'label',
  value: 'value',
  district_id: 'district_id',
  state_id: 'state_id'
};

exports.Prisma.QiblatScalarFieldEnum = {
  id: 'id',
  surau_id: 'surau_id',
  latitude: 'latitude',
  longitude: 'longitude',
  degree: 'degree'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.RatingScalarFieldEnum = {
  id: 'id',
  rating: 'rating',
  review: 'review',
  created_at: 'created_at',
  surau_id: 'surau_id'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.StateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  unique_name: 'unique_name'
};

exports.Prisma.SurauPhotoScalarFieldEnum = {
  id: 'id',
  file_path: 'file_path',
  caption: 'caption',
  created_at: 'created_at',
  surau_id: 'surau_id',
  rating_id: 'rating_id'
};

exports.Prisma.SurauScalarFieldEnum = {
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

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};


exports.Prisma.ModelName = {
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
