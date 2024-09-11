import { ENVIORNMENT_ID, HERO_TYPE, LOCALE, cmaClient } from '../client';
import { CF_SPACE_ID } from '../cma-config';

export const getReelID = async () => {
  const reelID = await cmaClient.entry.getMany({
    spaceId: CF_SPACE_ID,
    environmentId: ENVIORNMENT_ID,
    query: {
      content_type: HERO_TYPE,
    },
  });

  if (reelID.items.length === 0) {
    return null;
  }

  return reelID.items[0].fields.heroReel[LOCALE].sys.id;
};
