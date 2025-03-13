const initialState = {
    hotels: [],
    loading: false,
    error: null,
  };
  
  const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_HOTELS_REQUEST":
        return { ...state, loading: true, error: null };
      case "FETCH_HOTELS_SUCCESS":
        return { ...state, hotels: action.payload, loading: false };
      case "FETCH_HOTELS_FAILURE":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default hotelsReducer;
  