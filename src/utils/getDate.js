export const getDate = (date) => {
  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const expectedDate = new Date(date).toLocaleDateString("en-US", options);
  return expectedDate;
};

export const getTime = (date) => {
  // const options = {
  //   day: "2-digit",
  //   month: "long",
  //   year: "numeric",
  // };
  const time = new Date(date).toLocaleTimeString("en-US");
  // console.log(time);
  return time;
};
