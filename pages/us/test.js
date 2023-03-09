import { useState } from 'react'
import Head from 'next/head'

export default function Overlay() {
  const [showOverlay, setShowOverlay] = useState(false)

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay)
  }

  const hideOverlay = () => {
    setShowOverlay(false)
  }

  return (
    <>
      <Head>
        <style>
          {`
            .overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              z-index: 9999;
              display: ${showOverlay ? 'flex' : 'none'};
              justify-content: center;
              align-items: center;
            }
            .overlay button {
              position: absolute;
              top: 10px;
              right: 10px;
              background: none;
              border: none;
              color: white;
              font-size: 24px;
              cursor: pointer;
            }
          `}
        </style>
      </Head>

      <button onClick={toggleOverlay}>Toggle Overlay</button>

      <div className="overlay">
        <button onClick={hideOverlay}>X</button>
        <h1>Full Screen Overlay Content</h1>
      </div>
    </>
  )
}
