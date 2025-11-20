import React, { useState } from 'react';
import { Onboarding } from './screens/Onboarding';
import { Auth } from './screens/Auth';
import { Dashboard } from './screens/Dashboard';
import { Learning } from './screens/Learning';
import { Teaching } from './screens/Teaching';
import { Showcase } from './screens/Showcase';
import { Marketplace } from './screens/Marketplace';
import { Jobs } from './screens/Jobs';
import { Chat } from './screens/Chat';
import { Wellness } from './screens/Wellness';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Notifications } from './screens/Notifications';
import { Navigation } from './components/Navigation';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  if (showOnboarding) {
    return <Onboarding onComplete={() => setShowOnboarding(false)} />;
  }

  if (!isAuthenticated) {
    return <Auth onAuthComplete={() => setIsAuthenticated(true)} />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'learning':
        return <Learning />;
      case 'teaching':
        return <Teaching />;
      case 'showcase':
        return <Showcase />;
      case 'marketplace':
        return <Marketplace />;
      case 'jobs':
        return <Jobs />;
      case 'chat':
        return <Chat />;
      case 'wellness':
        return <Wellness />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'notifications':
        return <Notifications />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="pb-20">
      {renderScreen()}
      <Navigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />
    </div>
  );
}

export default App;
