"use client";

import Footer from "../Footer";
import Header from "../Header";
import LoginPrompt from "../LoginPrompt";
import ConsultationModal from "../ConsultationModal";
import FloatingScheduleButton from "../FloatingScheduleButton";
import StructuredData from "../StructuredData";
import { LoginGateProvider, useLoginGate } from "@/contexts/LoginGateContext";
import { ConsultationProvider, useConsultation } from "@/contexts/ConsultationContext";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutContent = ({ children }: LayoutProps) => {
  const { isLoginPromptOpen, loginMode, closeLoginPrompt } = useLoginGate();
  const { isConsultationModalOpen, closeConsultationModal } = useConsultation();

  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content" role="main">
        {children}
      </main>
      <Footer />
      <FloatingScheduleButton />
      <LoginPrompt isOpen={isLoginPromptOpen} onClose={closeLoginPrompt} initialMode={loginMode} />
      <ConsultationModal isOpen={isConsultationModalOpen} onClose={closeConsultationModal} />
    </>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <LoginGateProvider>
      <ConsultationProvider>
        <LayoutContent>{children}</LayoutContent>
      </ConsultationProvider>
    </LoginGateProvider>
  );
};

export default Layout;
