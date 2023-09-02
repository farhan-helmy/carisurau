import {sortByHavingImage} from "./sortByHavingImage";
import {surauFactory} from "../../../tests/factory/surau.factory";

describe('utils/sorter/sortByHavingImage', () => {
  it('can sort by prioritizing records with images', () => {
    const records = surauFactory
    expect(records[0]!.images.length).toBe(0)

    const sorted = records.sort(sortByHavingImage)

    expect(sorted[0]!.images.length).toBe(1)
    expect(sorted[1]!.images.length).toBe(0)
  })
})
