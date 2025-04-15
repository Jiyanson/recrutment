import Header from "../Header/Header";
import DreamJob from "../LandingPage/DreamJob";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-bleu-50">
      <Header />
      <DreamJob />
    </div>
  );
};

export default Homepage;