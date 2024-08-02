import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in-sign-up" element={<SignInSignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
