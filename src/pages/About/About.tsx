import { AboutHeader } from "./AboutHeader";
import { AboutWhoAmI } from "./AboutWhoAmI";
import { AboutTechStack } from "./AboutTechStack";
import { AboutOpenSource } from "./AboutOpenSource";
import { PageContainer } from "@/components/layout/PageContainer";

const WOW_START_YEAR = 2007; // tweak if you started earlier/later

const getWowYears = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - WOW_START_YEAR;
};

export const About: React.FC = () => {
  const wowYears = getWowYears();

  return (
    <PageContainer>
      <AboutHeader />
      <AboutWhoAmI wowYears={wowYears} />
      <AboutTechStack />
      <AboutOpenSource />
    </PageContainer>
  );
};
