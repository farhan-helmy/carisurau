import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
};
export type Application = {
  id: string;
  name: string;
  appKey: string;
  appSecret: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  userId: string;
};
export type District = {
  id: string;
  name: string;
  unique_name: string;
  state_id: string;
};
export type Mall = {
  id: string;
  name: string;
  label: Generated<string>;
  value: Generated<string>;
  district_id: string;
  state_id: string;
};
export type Qiblat = {
  id: string;
  surau_id: string;
  latitude: number;
  longitude: number;
  degree: number;
};
export type Rating = {
  id: string;
  rating: number;
  review: string | null;
  created_at: Generated<Timestamp>;
  surau_id: string;
  user_id: string | null;
};
export type Session = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Timestamp;
};
export type State = {
  id: string;
  name: string;
  unique_name: string;
};
export type Surau = {
  id: string;
  name: string;
  unique_name: string;
  brief_direction: string | null;
  is_approved: Generated<boolean>;
  is_approved_at: Timestamp | null;
  created_at: Generated<Timestamp>;
  updated_at: Timestamp;
  state_id: string;
  district_id: string;
  mall_id: string | null;
  is_qiblat_certified: Generated<boolean>;
  is_solat_jumaat: Generated<boolean>;
  user_id: string | null;
  application_id: string | null;
};
export type SurauPhoto = {
  id: string;
  file_path: string;
  caption: string | null;
  created_at: Generated<Timestamp>;
  surau_id: string;
  rating_id: string | null;
};
export type User = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Timestamp | null;
  image: string | null;
  createdAt: Generated<Timestamp>;
};
export type VerificationToken = {
  identifier: string;
  token: string;
  expires: Timestamp;
};
export type DB = {
  Account: Account;
  Application: Application;
  District: District;
  Mall: Mall;
  Qiblat: Qiblat;
  Rating: Rating;
  Session: Session;
  State: State;
  Surau: Surau;
  SurauPhoto: SurauPhoto;
  User: User;
  VerificationToken: VerificationToken;
};
