import React, { useEffect } from 'react';
import { useWattLensStore } from './store/useWattLensStore';
import { BackgroundDecoration } from './components/BackgroundDecoration';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { DemoController } from './components/demo/DemoController';
import { OnboardingModal } from './components/common/OnboardingModal';
import { PrintReportView } from './components/PrintReportView';
import { ErrorBoundary } from './components/common/ErrorBoundary';

// Pages
import { DashboardPage } from './pages/DashboardPage';
import { BillsPage } from './pages/BillsPage';
import { EquipmentPage } from './pages/EquipmentPage';
import { EstimatesPage } from './pages/EstimatesPage';
import { EmissionsPage } from './pages/EmissionsPage';
import { ActionPlanPage } from './pages/ActionPlanPage';
import { MeasureNextPage } from './pages/MeasureNextPage';
import { AppGuidePage } from './pages/AppGuidePage';

export function App() {
  const { activeTab, setActiveTab, setIsOnboardingOpen } = useWattLensStore();

  useEffect(() => {
    // Show onboarding modal only on initial visit; never auto-start demo tour
    try {
      const seen = localStorage.getItem('wattlens_onboarding_seen');
      if (!seen) {
        setIsOnboardingOpen(true);
      }
    } catch (e) {
      // localStorage may fail in restricted sandbox / private mode
    }
  }, [setIsOnboardingOpen]);

  const renderActivePage = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />;
      case 'bills':
        return <BillsPage />;
      case 'equipment':
        return <EquipmentPage />;
      case 'estimates':
        return <EstimatesPage />;
      case 'emissions':
        return <EmissionsPage />;
      case 'action-plan':
        return <ActionPlanPage />;
      case 'measure-next':
        return <MeasureNextPage />;
      case 'guide':
        return <AppGuidePage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-brand-mint selection:text-brand-dark">
      {/* Decorative SVG & CSS Sunrise Backdrop */}
      <BackgroundDecoration />

      {/* Main App Container */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left Sidebar Nav */}
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar />
          <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto overflow-y-auto">
            <ErrorBoundary onReset={() => setActiveTab('dashboard')}>
              {renderActivePage()}
            </ErrorBoundary>
          </main>
        </div>
      </div>

      {/* Guided Tour Controller Overlay */}
      <DemoController />

      {/* First-Run Onboarding Modal */}
      <OnboardingModal />

      {/* Browser Printable PDF Report */}
      <PrintReportView />
    </div>
  );
}

export default App;
