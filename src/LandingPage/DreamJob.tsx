import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const DreamJob = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center px-4 sm:px-10 lg:px-20 py-12 md:py-24 bg-blue-950">
            {/* Text Content */}
            <div className="flex flex-col w-full lg:w-[45%] space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-50 leading-tight">
                    Find your 
                    <span className="text-blue-400"> dream </span> 
                    <span className="text-blue-400">job</span> with us
                </h1>
                
                <p className="text-blue-200 text-lg md:text-xl max-w-[35rem]">
                    Good life begins with a good company. Start explore thousands of jobs in one place.
                </p>

                {/* Search Form */}
                <div className="flex gap-3 mt-4">
                    <TextInput 
                        className="bg-blue-900 rounded-lg p-1 px-2 text-blue-50 [&_input]:text-blue-50 [&_input::placeholder]:text-blue-300" 
                        variant="unstyled" 
                        placeholder="Software Engineer" 
                    />
                    <TextInput 
                        className="bg-blue-900 rounded-lg p-1 px-2 text-blue-50 [&_input]:text-blue-50 [&_input::placeholder]:text-blue-300" 
                        variant="unstyled" 
                        placeholder="Fulltime" 
                    />
                    <div className="flex items-center justify-center h-full w-20 bg-yellow-400 text-blue-900 rounded-lg p-2 hover:bg-yellow-500 cursor-pointer">
                        <IconSearch className="h-[85%] w-[85%]" />
                    </div>
                </div>

               
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[55%] mt-12 lg:mt-0 flex justify-center lg:justify-end">
                <div className="w-full max-w-[30rem]">
                    <img 
                        src="/boy.jpg" 
                        alt="Happy job seeker" 
                        className="rounded-xl shadow-2xl shadow-blue-900/50 hover:scale-105 transition-transform duration-500 w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default DreamJob;