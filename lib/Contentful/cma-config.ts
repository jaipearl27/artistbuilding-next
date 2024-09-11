export const { CF_SPACE_ID, CF_CMA_TOKEN } = process.env;

//Check if environment variables are defined
if (!CF_SPACE_ID || !CF_CMA_TOKEN) {
  throw new Error(
    'Please define `CF_SPACE_ID` and `CF_CMA_TOKEN` environment variables'
  );
}
