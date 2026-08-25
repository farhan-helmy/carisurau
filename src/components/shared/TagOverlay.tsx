import type { FC } from "react";

type TagOverlayProps = {
  tags: string[];
};

/**
 * Standardised tag display for homepage surau cards (issue #115).
 *
 * The tags are rendered inside the image overlay so that the card
 * layout stays the same whether the content has tags or not:
 *
 * - 0 tags: nothing is rendered.
 * - 1 tag: shown as usual, but in the image overlay.
 * - >1 tags: the first tag is shown in the image overlay together
 *   with a small "+N" badge (N = number of remaining tags).
 *
 * Usage: render inside a "relative" container next to the surau
 * image, e.g. <TagOverlay tags={surau.tags} />, instead of the
 * previous inline tag row below the image.
 */
const TagOverlay: FC<TagOverlayProps> = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  const [firstTag, ...restTags] = tags;
  const extraTagsCount = restTags.length;

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-2 bg-gradient-to-t from-black/60 to-transparent p-3">
      <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-gray-900">
        {firstTag}
      </span>
      {extraTagsCount > 0 ? (
        <span className="rounded-full bg-black/40 px-2 py-0.5 text-xs font-medium text-white">
          +{extraTagsCount}
        </span>
      ) : null}
    </div>
  );
};

export default TagOverlay;
