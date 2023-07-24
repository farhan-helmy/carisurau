import type {District, Mall, Qiblat, State, Surau, SurauPhoto} from "../../kysely/kyselyschema";
import type {DeepPartial} from "@trpc/server";

export type SurauFixtureType = DeepPartial<Surau & {state: State, qiblat: Qiblat[], district: District, mall: Mall | null, images: SurauPhoto[]}>
export const surauFixture: SurauFixtureType = {
  name: 'Surau Name',

  state: {
    name: 'Kedah',
  },
  district: {
    name: 'Jitra'
  },
  images: [
    { file_path: 'filepath'}
  ]
}