import React from 'react'

export default function Home() {
  React.useEffect(() => {
    fetch('http://localhost:4000/api/accounts')
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])
  return null
}
