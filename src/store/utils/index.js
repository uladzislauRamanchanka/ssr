export const formLink = (
  { sortType, sortOrder, activeGenre, searchString, limit = 18 },
  arrayTab
) => {
  let params = `?limit=${limit}`;

  if (sortType) params += `&sortBy=${sortType}`;
  if (sortOrder) params += `&sortOrder=${sortOrder}`;

  if (arrayTab && arrayTab !== "ALL") params += `&filter=${[arrayTab]}`;
  else if (activeGenre && activeGenre !== "ALL")
    params += `&filter=${[activeGenre]}`;

  if (searchString) params += `&search=${searchString}&searchBy=title`;
  return params;
};
