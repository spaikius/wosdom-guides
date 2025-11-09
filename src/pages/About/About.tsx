import { AboutHeader } from './AboutHeader';
import { AboutWhoAmI } from './AboutWhoAmI';
import { AboutTechStack } from './AboutTechStack';
import { AboutOpenSource } from './AboutOpenSource';
import { PageContainer } from '@/components/layout/PageContainer';
import { WOW_START_YEAR } from '@/config/constants';

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
