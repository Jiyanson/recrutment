import React from 'react';
import { IconAnchor, IconBell, IconSettings } from '@tabler/icons-react';
import { Avatar, Indicator, NavLink } from '@mantine/core'; // Added Indicator component
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <div className="w-full bg-black px-6 text-white h-28 flex justify-between items-center">
      <div className="flex gap-3 items-center text-blue-400">
        <IconAnchor className='h-10 w-10' stroke={1.25} />
        <div className='text-3xl font-semibold'>JobFinder</div>
      </div>

     {NavLinks()}

      <div className="flex gap-5 items-center">
        {/* Notification Bell with Indicator */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="blue.4" offset={6} size={8} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center gap-2">
          <div>Marshal</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>

        {/* Settings Icon */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
      </div>
    </div>
  );
};

export default Header;
