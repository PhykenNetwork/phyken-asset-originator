import Dashboard from '@/components/Dashboard/dashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metaquity network ',
  description: 'Fractionalizing Real World Assets',
};

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
