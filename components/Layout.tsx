import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">Weather App</header>
      <main className="container mx-auto p-4">{children}</main>
      <footer className="text-center py-4">© 2023 Weather App. All rights reserved.</footer>
    </div>
  );
};

export default Layout;
