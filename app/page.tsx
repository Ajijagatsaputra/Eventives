import Hero from "./components/Hero/page";
import SearchFilter from "./components/SearchFilter/page";
import UpcomingEvent from "./components/UpcomingEvent/page";
import EventDetails from "./components/EventDetails/page";
import BrandSection from "./components/BrandSection/page";
import BlogDetails from "./components/Blog/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <>
     
      <Hero />
      <SearchFilter />
      <UpcomingEvent />
      <EventDetails />
      <BrandSection />
      <BlogDetails />
      <Footer />
    </>
  );
}
