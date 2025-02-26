import React, {useEffect, useState} from 'react'

function App() {

  const [testServerRes, setTestServerRes] = useState({})

  // Fetch api
  useEffect(() => {
    console.log("API fetch ran")
    fetch("/api").then(
      response => response.json()
    ).then (
      data => {
        setTestServerRes(data)
      }
    )
  }, [])
  return(
    <div>
      <p>Running</p>
    </div>
  )
}

export default App