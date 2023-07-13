const filterBySearchQuery = (data, { filterBySearch }) => {
  if (filterBySearch.length === 0) return data;
  const newData = data.filter(({ title, eventTags }) => {
    // console.log(title.trim().toLowerCase());
    // return title.trim().toLowerCase();
    return title.trim().toLowerCase().includes(filterBySearch.toLowerCase());
  });
  return newData;
};
const filterByEventType = (data, { fliterBySelect }) => {
  if (fliterBySelect === "both") return data;
  return data.filter(({ eventType }) => eventType === fliterBySelect);
};

export default function Filter(allData, filterState) {
  // console.log(allData);
  // console.log(filterState);
  const arrayOfFunctions = [filterBySearchQuery, filterByEventType];

  arrayOfFunctions.forEach(
    (currentFunction) => (allData = currentFunction(allData, filterState))
  );
  return allData;
}
