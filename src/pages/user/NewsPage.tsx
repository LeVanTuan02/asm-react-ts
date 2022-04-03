import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAll } from "../../api/news";
import NavNews from "../../components/user/NavNews";
import NewsContent from "../../components/user/NewsContent";

type NewsPageProps = {
    onUpdateTitle: (title: string) => void
}

const NewsPage = ({ onUpdateTitle }: NewsPageProps) => {
    const { page } = useParams();

    useEffect(() => {
        onUpdateTitle("Tin tức - Trà sữa Yotea");
    }, []);

    return (
        <>
            <NavNews slug={""} />

            <NewsContent getNews={getAll} page={Number(page) || 1} url="tin-tuc" />
        </>
    )
}

export default NewsPage;