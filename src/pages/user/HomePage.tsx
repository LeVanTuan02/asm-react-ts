import { useEffect } from "react";
import HomeBanner from "../../components/user/home/HomeBanner";
import HomeCategory from "../../components/user/home/HomeCategory";
import HomeFeedback from "../../components/user/home/HomeFeedback";
import HomeNews from "../../components/user/home/HomeNews";
import HomeProducts from "../../components/user/home/HomeProducts";
import HomeShow from "../../components/user/home/HomeShow";
import HomeWhy from "../../components/user/home/HomeWhy";
import { updateTitle } from "../../utils";

type HomePageProps = {
    onSetShowWishlist: (args: any) => any,
}

const HomePage = ({ onSetShowWishlist }: HomePageProps) => {
    useEffect(() => {
        updateTitle("Trang chủ");
    }, []);

    return (
        <>
            <HomeBanner />
            <HomeCategory />
            <HomeWhy />
            <HomeProducts onSetShowWishlist={onSetShowWishlist} />
            <HomeNews />
            <HomeFeedback />
            <HomeShow />
        </>
    )
}

export default HomePage;