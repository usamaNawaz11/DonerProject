import { useState } from "react"

export const UseDashboard = () => {
  const [headerButtonPress, setHeaderButtonPress] = useState("student") 
  return { headerButtonPress, setHeaderButtonPress }
}
