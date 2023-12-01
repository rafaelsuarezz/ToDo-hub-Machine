import react from "react";

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = react.useReducer(reducer, initialState({ initialValue }))

  const { 
    item,
    loading,
    error,
    sincronizedItem,
  } = state

  // ACTION CREATORS

  const onError = (error) => dispatch ({ type: actionTypes.error, payload: error })
  const onSuccess = (item) => dispatch ({ type: actionTypes.success, payload: item })
  const onSave = (item) => dispatch ({ type: actionTypes.save, payload: item })
  const onSincronize = () => dispatch ({ type: actionTypes.sincronize})

  
  react.useEffect( () => {

    setTimeout( () => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
      
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        onSuccess(parsedItem)

      } catch (error) {
        onError(error)
      }
    }, 1000) 
  }, [sincronizedItem] )


  const saveItem = (newItem) => {
  
    localStorage.setItem(itemName, JSON.stringify(newItem))
    onSave(newItem)
  }

  const sincronizeItem = () => {
    onSincronize()
  }
  return {item, saveItem, loading, error, sincronizeItem}
}

const initialState = ({ initialValue })  => ({
  item: initialValue,
  loading: true,
  error: false,
  sincronizedItem : true,
})

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
}

const reducerObject = (state, payload) => ({

  [actionTypes.error]: {
    ...state,
    error: true
  },

  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },

  [actionTypes.save]: {
    ...state,
    item: payload,
  },

  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
})

const reducer  = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage };