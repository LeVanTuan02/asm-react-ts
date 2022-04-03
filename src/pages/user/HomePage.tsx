import { useEffect } from "react";
import HomeBanner from "../../components/user/home/HomeBanner";
import HomeCategory from "../../components/user/home/HomeCategory";
import HomeFeedback from "../../components/user/home/HomeFeedback";
import HomeNews from "../../components/user/home/HomeNews";
import HomeProducts from "../../components/user/home/HomeProducts";
import HomeShow from "../../components/user/home/HomeShow";
import HomeWhy from "../../components/user/home/HomeWhy";

type HomePageProps = {
    onSetShowWishlist: (args: any) => any,
    onUpdateTitle: (title: string) => void
}

const HomePage = ({ onSetShowWishlist, onUpdateTitle }: HomePageProps) => {
    useEffect(() => {
        onUpdateTitle("Trang chủ - Trà sữa Yotea");
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