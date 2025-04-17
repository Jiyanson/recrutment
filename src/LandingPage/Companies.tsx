import Marquee from 'react-fast-marquee';
import { companies } from '../Data/Data';

const Companies = () => {
    return (
        <div className="mt-20 px-8">
            <div className="text-xl text-center font-semibold text-mine-shaft-700">
                Trusted By <span className="text-bright-blue-600">1000+</span> Companies
            </div>

            {/* Marquee Container */}
            <Marquee 
                autoFill={true}
                speed={40}
                pauseOnHover={true}
                className="mt-8"
            >
                {companies.map((company, index) => (
                    <div key={index} className="mx-8 px-3 py-1 flex-shrink-0">
                        <img 
                            className="h-14 max-w-[150px] object-contain" 
                            src={`/Companies/${company}.png`} 
                            alt={company} 
                            loading="lazy"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Companies;
