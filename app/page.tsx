// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Chat from '../components/Chat';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>AI Writing Assistance</title>
        <meta name="description" content="AI Writing Assistance UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to AI Writing Assistance</h1>
        <Chat />
      </main>
    </div>
  );
};

export default Home;
