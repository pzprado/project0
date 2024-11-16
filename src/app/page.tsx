'use client';

import { Section, Cell, List, Text } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';
import { Navbar } from '@/components/Navbar/Navbar';

export default function Home() {
  const t = useTranslations('i18n');

  return (
    <>
      <Navbar />
      <Page back={false}>
        <List className="absolute top-15 left-0 right-0 bottom-0">
          <Section>
            <Cell>
              <Text className="text-center mb-6">
                AI Finance
              </Text>
            </Cell>
          </Section>

        </List>
      </Page>
    </>
  );
}
