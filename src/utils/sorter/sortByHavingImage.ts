import type {District, Mall, State, Surau, SurauPhoto} from "../../../prisma/client";

export type SurauResponse = (Surau & { state: State, district: District, mall: Mall | null, images: SurauPhoto[] })

export const sortByHavingImage = (leftRecord: SurauResponse, rightRecord: SurauResponse) => {
  if (leftRecord.images.length === 0 && rightRecord.images.length > 0) {
    return 1;
  }
  if (leftRecord.images.length > 0 && rightRecord.images.length === 0) {
    return -1;
  }
  return 0;
}