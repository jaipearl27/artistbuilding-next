import { getAsset } from '../Asset/get-asset';
import {
  cmaClient,
  ENVIORNMENT_ID,
  HIGHLIGHTS_TYPE,
  LOCALE,
  WORKS_TYPE,
} from '../client';
import { CF_SPACE_ID } from '../cma-config';

export const getHighlights = async () => {
  const highlights = await cmaClient.entry.getMany({
    spaceId: CF_SPACE_ID,
    environmentId: ENVIORNMENT_ID,
    query: {
      content_type: HIGHLIGHTS_TYPE,
      limit: 6,
    },
  });

  //Format the data
  const data = await Promise.all(
    highlights.items.map(async (item) => {
      try {
        const videoID = item.fields.video[LOCALE].sys.id;
        const URL = await getAsset(videoID);

        return {
          id: item.sys.id,
          brand: item.fields.brand[LOCALE],
          brandHex: item.fields.brandHex[LOCALE],
          video: URL,
          heading: item.fields.heading[LOCALE],
          paragraph: item.fields.paragraph[LOCALE],
        };
      } catch (error) {
        console.error(
          `Failed to retrieve asset URL for item ${item.sys.id}: ${error}`
        );
        return null;
      }
    })
  );

  return { data: data.filter(Boolean), total: highlights.total };
};

export const getWork = async () => {
  const work = await cmaClient.entry.getMany({
    spaceId: CF_SPACE_ID,
    environmentId: ENVIORNMENT_ID,
    query: {
      content_type: WORKS_TYPE,
    },
  });

  //Format the data
  const data = await Promise.all(
    work.items.map(async (item) => {
      try {
        return {
          id: item.sys.id,
          title: item.fields.title[LOCALE],
          subtitle: item.fields.subtitle[LOCALE],
          videoId: item.fields.videoId[LOCALE],
        };
      } catch (error) {
        console.error(
          `Failed to retrieve asset URL for item ${item.sys.id}: ${error}`
        );
        return null;
      }
    })
  );

  return data;
};
