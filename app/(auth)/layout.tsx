import React from 'react'
/// receving thr children as props and mentioning it type as React.Node
const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <main className='auth'>{children}</main>
  )
}
//// render children withing the main tag

export default Layout