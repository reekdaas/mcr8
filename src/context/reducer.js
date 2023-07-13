export const initialValue = {
  filterBySearch: "",
  fliterBySelect: "both",
};

export function searchReducer(state, { type, payload }) {
  switch (type) {
    case "FILTER_SEARCH": {
      return { ...state, filterBySearch: payload };
    }
    case "FILTER_SELECT": {
      return { ...state, fliterBySelect: payload };
    }

    default:
      return state;
  }
}
