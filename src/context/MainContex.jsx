/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const MainContext = createContext( {} )

export const MainProvider = ( { children } ) =>
{
  const [ showMenu, setShowMenu ] = useState( false )
  const [ search, setSearch ] = useState( "" )
  const [ toggleHero, setToggleHero ] = useState( false )
  const [accordionNumber, setAccordionNumber] = useState(null)
  
  const handleSearchState = (e) =>
  {
    setSearch(e.target.value)
  }
  
  const toggleMenu = () =>
  {
    setShowMenu(!showMenu)
  }
  return (
    <MainContext.Provider value={{ showMenu, toggleMenu, search, handleSearchState, toggleHero,setToggleHero,accordionNumber,setAccordionNumber }}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContext
