import Header from "../components/Header";
import SectionBanner from "../components/SectionBanner";
import SectionBlockGoods from "../components/SectionBlockGoods";
import SectionCategory from "../components/SectionCategory";
import SectionChoise from "../components/SectionChoise";
import SectionContent from "../components/SectionContent";
import SectionReviews from "../components/SectionReviews";



const Home = () => {

    return (
        <div>
            <Header />
            <SectionBanner />
            <SectionCategory />
            <SectionContent />
            <SectionChoise />
            <SectionBlockGoods />
            <SectionReviews />
        </div>
    );
};

export default Home;
