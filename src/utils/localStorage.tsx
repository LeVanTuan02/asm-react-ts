export const isAuthenticate = () => {
    const auth = JSON.parse(localStorage.getItem("auth") as string);

    if (!auth) return false;

    return auth;
}