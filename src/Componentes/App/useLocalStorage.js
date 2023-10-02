import react from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = react.useState(initialValue)

  const [loading, setLoading] = react.useState(true)

  const [error, setError] = react.useState(false)

  const [sincronizedItem, setSincronizedItem] = react.useState(true)


  
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
          setItem(parsedItem)
        }
        
        setLoading(false)
        setSincronizedItem(true)
  
      } catch (error) {
        setLoading(false)
        setError("Hay un error😢, comunicate con soporte ♥")
      }
    }, 2000) 
  }, [sincronizedItem] )


  const saveItem = (newItem) => {
  
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  const sincronizeItem = () => {
    setLoading(true)
    setSincronizedItem(false)
  }

  return {item, saveItem, loading, error, sincronizeItem}
}


export { useLocalStorage };