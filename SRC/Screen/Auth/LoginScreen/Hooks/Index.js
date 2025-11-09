import { useState } from "react"

export const UseLogin = () => {
  const [headerButtonPress, setHeaderButtonPress] = useState("") 
  return { headerButtonPress, setHeaderButtonPress }
}
