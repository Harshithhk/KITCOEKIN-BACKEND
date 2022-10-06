import React from 'react';


function BasicLayout({children}) {
  return (
    <div
      id="header"
      className="h-screen flex-1 bg-[#f8f9fa]  overflow-y-auto"
    >
      <div className="h-screen flex-1 bg-[#f8f9fa]  ">
        {children}
      </div>
    </div>
  );
}

export default BasicLayout;