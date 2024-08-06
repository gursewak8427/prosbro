import React, { Suspense } from 'react'
import MainContent from './MainContent'

function page() {
  return (
    <Suspense>
      <MainContent/>
    </Suspense>
  )
}

export default page