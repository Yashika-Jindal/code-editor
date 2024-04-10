import React from 'react';
import { Home, FilePlus, CheckCircle, Package } from 'react-feather';

const SidePanel = () => {
  return (
    <div className="outline-black">
      <div className="py-4 ">
        {/* Home */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-800 hover:text-white">
          <Home className="h-6 w-6 mr-2" />
          <span>Home</span>
        </div>

        {/* Create Contract */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-800 hover:text-white">
          <FilePlus className="h-6 w-6 mr-2"/>
          <span>Create Contract</span>
        </div>

        {/* Test */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-800 hover:text-white">
          <CheckCircle className="h-6 w-6 mr-2" />
          <span>Solidity Compiler</span>
        </div>

        {/* Deploy */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-800 hover:text-white">
          <Package className="h-6 w-6 mr-2" />
          <span>Deploy</span>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;

