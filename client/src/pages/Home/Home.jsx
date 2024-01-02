import Hero from "./Hero";
import HorizontalScroller from "./HorizontalScroller";
import CategoriesSection from "./CategoriesSection";

const Home = () => {
  
  return (
    <>
    <Hero />
    <HorizontalScroller category={'Small'}/>
    <CategoriesSection />
    <HorizontalScroller category={'Medium'}/>
    <HorizontalScroller category = {'Large'}/>
    
    {/* <SearchBar /> */}
    </>
  );
}
 
export default Home;