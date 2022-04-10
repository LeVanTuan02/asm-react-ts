export const isAuthenticate = () => {
    return JSON.parse(JSON.parse(localStorage.getItem("persist:root") as string).auth).value;
}