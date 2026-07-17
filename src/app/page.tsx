import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Challenge from '@/components/Challenge';
import Prizes from '@/components/Prizes';
import Schedule from '@/components/Schedule';
import Sponsors from '@/components/Sponsors';
// import Venue from '@/components/Venue';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Countdown />
      <Challenge />
      <Prizes />
      <Schedule />
      <Sponsors />
      {/* <Venue /> */}
    </main>
  );
}
