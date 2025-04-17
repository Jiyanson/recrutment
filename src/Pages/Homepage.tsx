import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
const Homepage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-bleu-50">
      <Header />
      <DreamJob />
      <Companies /> 
      <JobCategory />
     
    </div>
  );
};

export default Homepage;