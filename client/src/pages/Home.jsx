import Header from "../components/Header";
import SectionBanner from "../components/SectionBanner";
import SectionCategory from "../components/SectionCategory";
import SectionChoise from "../components/SectionChoise";
import SectionContent from "../components/SectionContent";


const Home = () => {

    return (
        <div>
            <Header />
            <SectionBanner />
            <SectionCategory />
            <SectionContent />
            <SectionChoise />
        </div>
    );
};

export default Home;
