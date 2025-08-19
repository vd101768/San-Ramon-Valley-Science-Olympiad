import * as Dialog from '@radix-ui/react-dialog';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Layout({ children }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="container flex-1">{children}</div>
      <Footer />
    </main>
  );
}
