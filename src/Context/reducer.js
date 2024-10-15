export const reducer = (state, action) => {
    if (action.type == "loading") {
        return {
            ...state,
            isLoading: false
        }
    }
    if (action.type == "resOk") {
        return {
            ...state,
            isLoading: false,
            product: action.payload,
            filterProduct: action.payload,
        }
    }

    // Single Page part 
    if (action.type == "Single_loading") {
        return {
            ...state,
            isLoadingSingle: false
        }
    }
    if (action.type == "Single_resOk") {
        return {
            ...state,
            singleProduct: action.payload,
        }
    }
    return state
}