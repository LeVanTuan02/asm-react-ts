import axios from "axios";

const API_URL = "https://provinces.open-api.vn/api";

export const getDistrictByProvince = async (provinceCode: number) => {
    const data = await axios.get(`${API_URL}/p/${provinceCode}/?depth=2`);
    return data;
};

export const getWardByDistrict = async (districCode: number) => {
    const data = await axios.get(`${API_URL}/d/${districCode}/?depth=2`);
    return data;
};

export const getWardById = async (id: number) => {
    const { data } = await axios.get(`${API_URL}/w/${id}`);
    return data;
};

export const getDistrictById = async (id: number) => {
    const { data } = await axios.get(`${API_URL}/d/${id}`);
    return data;
};

export const getProvinceById = async (id: number) => {
    const { data } = await axios.get(`${API_URL}/p/${id}`);
    return data;
};

export const getAllProvince = async () => {
    const response = await axios.get(`${API_URL}/p`);
    return response;
};

export const getAllDistrict = async () => {
    const response = await axios.get(`${API_URL}/p`);
    return response;
};