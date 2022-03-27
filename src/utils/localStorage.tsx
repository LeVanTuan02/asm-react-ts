export const isAuthenticate = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (!auth) return false;

    return auth;
}