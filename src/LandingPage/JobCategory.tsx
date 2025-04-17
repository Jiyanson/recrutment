import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { jobCategory } from "../Data/Data";

interface JobCategoryType {
  name: string;
  icon: string;
  jobs: number;
}

const JobCategory = () => {
  const handleCategoryClick = (category: JobCategoryType) => {
    alert(`Clicked on ${category.name}`);
  };

  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-gray-800">
        Browse <span className="text-blue-500">Job</span> Category
      </div>
      <div className="text-lg mb-10 mx-auto text-gray-500 text-center w-1/2">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      <Carousel
        slideSize="20%" // Shows 5 slides per view; adjust as needed
        slideGap="md"
        align="start"
        loop
        nextControlIcon={<IconArrowRight className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
        className="focus-visible:[&_button]:outline-none [&_button]:bg-blue-500 [&_button]:border-none"
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <button
              type="button"
              onClick={() => handleCategoryClick(category)}
              className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-lg transition w-full"
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <div className="p-4 bg-blue-500 rounded-full mb-3">
                <img
                  className="h-10 w-10"
                  src={`/Category/${category.icon}.png`}
                  alt={category.name}
                />
              </div>
              <h3 className="font-medium text-gray-800">{category.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {category.jobs}+ Jobs Available
              </p>
            </button>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
