import Footer from '@/components/\bFooter';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import { container } from './layout.css';

export default function Home() {
  return (
    <div className={container}>
      <Header />
      <main></main>
      <Footer />
      <TabBar />
    </div>
  );
}
