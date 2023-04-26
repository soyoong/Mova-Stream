import React, { useEffect } from 'react'

function Test() {
  useEffect(() => {
    console.log(React)
  }, [])

  return <div>Test</div>
}

export default Test
