import axios from "axios";

export const uploadFile = async (fileName: string) => {
    const formData = new FormData();
    formData.append("file", fileName);
    formData.append("upload_preset", "kkio3wiw");
    const { data } = await axios.post("https://api.cloudinary.com/v1_1/levantuan/image/upload", formData);
    return data.url;
}

export const formatCurrency = (currency: number) => currency.toLocaleString("it-IT", { style: "currency", currency: "VND" });

// format date
export const formatDate = (dateString: Date) => {
    const date = new Date(dateString);

    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${hours}:${minutes}:${seconds}`;
};