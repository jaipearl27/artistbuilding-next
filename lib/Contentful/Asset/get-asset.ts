import { ENVIORNMENT_ID, LOCALE, cmaClient } from '../client';
import { CF_SPACE_ID } from '../cma-config';

export const getAsset = async (id: string) => {
  const asset = await cmaClient.asset.get({
    spaceId: CF_SPACE_ID,
    environmentId: ENVIORNMENT_ID,
    assetId: id,
  });

  if (!asset) {
    throw new Error(`Asset with id ${id} not found`);
  }

  const URL = `https:${asset.fields.file[LOCALE].url}`;
  return URL;
};
