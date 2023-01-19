import React from "react"
import styled from "styled-components"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import MainPage from "./pages/MainPage"
import Navigation from "./components/Navigation"
import ErrorPage from "./pages/ErrorPage"

import LoadingPage from "./pages/LoadingPage"

const LazyResidency = React.lazy(() => import('./pages/ResidencyPage'));
const LazyTeam = React.lazy(() => import('./pages/TeamPage'));
const LazyAbout = React.lazy(() => import('./pages/AboutPage'));
const LazyServices = React.lazy(() => import('./pages/ServicesPage'));
const LazyContact = React.lazy(() => import('./pages/ContactPage'));

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
    },
    {
      path: '/repro/',
      element: <Navigation />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: 'services',
          element: <React.Suspense fallback={<LoadingPage />}><LazyServices /></React.Suspense>,
        },
        {
          path: 'team',
          element: <React.Suspense fallback={<LoadingPage />}><LazyTeam /></React.Suspense>,
        },
        {
          path: 'about-us',
          element: <React.Suspense fallback={<LoadingPage />}><LazyAbout /></React.Suspense>,
        },
        {
          path: 'contact-us',
          element: <React.Suspense fallback={<LoadingPage />}><LazyContact /></React.Suspense>,
        },
        {
          path: 'residency',
          element: <React.Suspense fallback={<LoadingPage />}><LazyResidency /></React.Suspense>,
        },
      ],
    },
  ])

  return (
    <>
    <MainWrapper>
         <RouterProvider router={router} />
    </MainWrapper>
    </>
  )
}

export default App

const MainWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
`
