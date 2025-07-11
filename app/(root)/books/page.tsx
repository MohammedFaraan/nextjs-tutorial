import React from 'react'

async function page() {
    const response = await fetch("http://localhost:3000/api/books");
    const data = await response.json(); 
    console.log(data)
    return (
    <div>
      <h3>Books Page</h3>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  )
}

export default page
