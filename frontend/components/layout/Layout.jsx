import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;