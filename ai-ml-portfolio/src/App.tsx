import React, { lazy, Suspense } from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom'

// Layout Components
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'

// Lazy Loaded Page Components
const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ResumePage = lazy(() => import('./pages/ResumePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

// Shared Components
import Loader from './components/shared/Loader'
import ScrollToTop from './components/shared/ScrollToTop'

// Hooks
import { useTheme } from './hooks/useTheme'

// Contexts
import { ThemeProvider } from './context/ThemeContext'

const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div 
      className={`
        app 
        ${theme === 'dark' ? 'dark' : ''} 
        min-h-screen 
        bg-background 
        text-text 
        transition-colors 
        duration-300
      `}
    >
      <Router>
        <ScrollToTop />
        <Navigation />
        
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route 
              path="/" 
              element={<HomePage />} 
            />
            <Route 
              path="/projects" 
              element={<ProjectsPage />} 
            />
            <Route 
              path="/resume" 
              element={<ResumePage />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            {/* Catch-all route */}
            <Route 
              path="*" 
              element={<Navigate to="/" replace />} 
            />
          </Routes>
        </Suspense>
        
        <Footer />
      </Router>
    </div>
  )
}

// Higher Order Component for App Providers
const AppWrapper: React.FC = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export default AppWrapper