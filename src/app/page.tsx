import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Challenge from '@/components/Challenge';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Countdown />
      <Challenge />
    </main>
  );
}
