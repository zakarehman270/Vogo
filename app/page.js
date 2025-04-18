'use client';

import { AuthGuardWrapper } from "@guards";
import { DashboardSection } from "@sections";
import VOGONavbar from "./Components/Header";
import GlobalVocationCTA from "./Components/GlobalVocationCTA";
import ImpactStats from "./Components/ImpactStats";
import PricingPlan from "./Components/PricingPlan";
import VOGOFooter from "./Components/Footer";
export default function Home() {

  return (
    <>
      <div className="sticky top-0 z-50">
        <VOGONavbar />
      </div>
      <div className="mt-20">
        <GlobalVocationCTA />
      </div>
      <div className="mt-20">
        <ImpactStats />
      </div>
      <div className="mt-20">
        <PricingPlan />
      </div>
      <div className="mt-20">
        <VOGOFooter />
      </div>
    </>
    // <AuthGuardWrapper>
    //   <DashboardSection />
    // </AuthGuardWrapper>
  );
}
