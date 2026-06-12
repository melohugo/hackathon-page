import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Challenge from '@/components/Challenge';
import Prizes from '@/components/Prizes';
import Schedule from '@/components/Schedule';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Countdown />
      <Challenge />
      <Prizes />
      <Schedule />
    </main>
  );
}
