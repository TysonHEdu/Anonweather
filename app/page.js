import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'darkgrey', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Link href="/selectPage" style={{ color: 'aquamarine', fontSize: '150px' }}> ANONWEATHER </Link>
    </div>
  );
};

export default HomePage;
