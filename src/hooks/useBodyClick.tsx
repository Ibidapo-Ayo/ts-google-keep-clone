import { useEffect } from "react"

export const useBodyClick = (setterFunction:React.Dispatch<React.SetStateAction<boolean>>, id:string)=>{
    useEffect(() => {
        document.body.addEventListener("click", (event) => {
          const excludedDiv = document.getElementById(id)
    
          if (!excludedDiv || !excludedDiv.contains(event?.target as Node)) {
            setterFunction(false)
          }
        })
    
        return () => {
          document.body.removeEventListener('click', (event) => {
            const excludedDiv = document.getElementById(id)
    
            if (!excludedDiv || !excludedDiv.contains(event?.target as Node)) {
              setterFunction(false)
            }
          });
        };
      }, [])

      return 
}