export function setupAxios(axios, store) {
  axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BASE_URL
      : "http://localhost:3000";
  axios.defaults.headers.Accept = "application/json";
  axios.interceptors.request.use(
    (config) => {
      const { auth } = store.getState();
      if (auth.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }
      return config;
    },
    (err) => Promise.reject(err)
  );
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {}
};

export const removeState = () => {
  try {
    localStorage.removeItem("state");
  } catch (err) {}
};
