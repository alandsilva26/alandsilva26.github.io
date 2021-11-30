import React from 'react';
import RootLayout from '../layouts/root_layout';

const Index = () => {
  return (
    <RootLayout>
      <main className="flex h-screen p-3 items-center bg-test">
        {/* <div className="opening-screen w-screen h-screen bg-winter-sky"></div> */}
        <div className="opening-screen"></div>
        <div className="border-4 border-purple-400 container mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font">
            Hi, I am
            <br />
            <span>
              <span className="text-winter-sky">Alan</span> Dsilva
            </span>
          </h1>
        </div>
      </main>
    </RootLayout>
  );
};

export default Index;
