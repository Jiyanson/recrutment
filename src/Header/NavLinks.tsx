import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: 'Find Jobs', url: 'find-jobs' },
    { name: 'Find Talent', url: 'find-talent' },
    { name: 'Upload Job', url: 'upload-job' },
    { name: 'About us', url: 'about-us' }
  ];
  const location = useLocation();

  return (
    <div>
      <div className='flex gap-5'>
        {links.map((link, index) => (
          <Link 
            key={index} 
            to={link.url}
            className={`
              text-white 
              hover:text-blue-400 
              transition-colors 
              duration-200
              ${location.pathname.includes(link.url) 
                ? "text-blue-400 font-semibold border-b-2 border-blue-400" 
                : ""
              }
            `}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
