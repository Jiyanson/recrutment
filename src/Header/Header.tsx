import React from 'react';
import { IconAnchor, IconAsset } from '@tabler/icons-react';
import { IconBell, IconSettings } from '@tabler/icons-react'; // Added missing icons
import { Avatar } from '@mantine/core'; // Added missing Avatar component

const Header = () => {
  return (
    <div className="w-full bg-black px-6 text-white h-28 flex justify-between items-center">
     <div className="flex gap-3 items-center text-blue-400">
        <IconAnchor className='h-10 w-10' stroke={1.25} />
        <div className='text-3xl font-semibold'>JobFinder</div>
      </div>

      <div className='flex gap-5'>
        <a href="">Find Talent</a>
        <a href="">Upload Job</a>
        <a href="">About us</a>
      </div>

      <div className="flex gap-5 items-center">
  {/* Notification Bell */}
  <IconBell className="hover:text-gray-400 transition-colors cursor-pointer" />
  
  {/* User Profile Section */}
  <div className="flex items-center gap-2">
    <div className="text-sm">Marsha</div>
    <Avatar 
      src="avatar.png" 
      alt="Marsha's profile picture"
      className="hover:opacity-80 transition-opacity cursor-pointer"
      size="md"
    />
  </div>
  

  <IconSettings className="hover:text-gray-400 transition-colors cursor-pointer" />
  
  
  <IconBell className="hover:text-gray-400 transition-colors cursor-pointer" />
</div>

    </div>
  );
};

export default Header;
