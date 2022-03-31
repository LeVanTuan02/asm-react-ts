import { useParams } from "react-router-dom";
import { getAll } from "../../api/news";
import NavNews from "../../components/user/NavNews";
import NewsContent from "../../components/user/NewsContent";

const NewsPage = () => {
    const { page } = useParams();

    return (
        <>
            <NavNews slug={""} />

            <NewsContent getNews={getAll} page={Number(page) || 1} url="tin-tuc" />
        </>
    )
}

export default NewsPage;