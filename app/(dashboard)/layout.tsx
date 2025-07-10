import React from "react"

function layout({children} : {children : React.ReactNode}) {
  return (
    <div>
      <h4>Navbar</h4>
      {children}
    </div>
  )
}

export default layout
