import { PageContainer } from '@/components/layout/PageContainer';
import { WOW_START_YEAR } from '@/config/constants';
import { AboutHeader } from './AboutHeader';
import { AboutOpenSource } from './AboutOpenSource';
import { AboutTechStack } from './AboutTechStack';
import { AboutWhoAmI } from './AboutWhoAmI';

const getWowYears = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - WOW_START_YEAR;
};

export const About: React.FC = () => {
  const wowYears = getWowYears();

  return (
    <PageContainer className="space-y-8 md:space-y-10 pt-4 md:pt-6">
      <AboutHeader />

      <main className="space-y-6 md:space-y-8">
        <AboutWhoAmI wowYears={wowYears} />

        <section className="grid gap-6 md:grid-cols-2">
          <AboutTechStack />
          <AboutOpenSource />
        </section>
      </main>
    </PageContainer>
  );
};
