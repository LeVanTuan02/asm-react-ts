import axios from "axios";

export const uploadFile = async (fileName: string) => {
    const formData = new FormData();
    formData.append("file", fileName);
    formData.append("upload_preset", "kkio3wiw");
    const { data } = await axios.post("https://api.cloudinary.com/v1_1/levantuan/image/upload", formData);
    return data.url;
}