import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Header from '../components/Header/Header'
import LeftSide from '../components/LeftSide'

function Layout({children}) {
    const [isAuth, setIsAuth] = useState(false)
    const router = useRouter();
    const { path } = router.asPath; // Assuming your route parameter is named "id"
    console.log("id", path)
  return (
    <>
        {/* <div id="loader"></div> */}
        {router.asPath !="/"?(
            <>
                <Header />
                <LeftSide />
            </>
        ):""}
        {children}
    </>
  )
}

export default Layout
