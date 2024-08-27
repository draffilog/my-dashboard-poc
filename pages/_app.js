import '../src/app/globals.css';
import Layout from '../components/Layout';
import LandingLayout from '../components/LandingLayout';

function MyApp({ Component, pageProps }) {
  const LayoutComponent = Component.useLayout === "landing" ? LandingLayout : Layout;

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;
