import { Repo } from "../interfaces";

const getLocalData = (key: string): [] => {
  try {
    const item: string = window.localStorage.getItem(key) || "";
    return JSON.parse(item);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const setLocalData = (key: string, value: Repo) => {
  try {
    const doesValueExistsInLocalStorage =
      getLocalData(key).findIndex(
        (item: any) => item["githubId"] === value["githubId"]
      ) !== -1;
    const newStorage: Repo[] = getLocalData(key);

    if (!doesValueExistsInLocalStorage) {
      newStorage.push(value);
      window.localStorage.setItem(key, JSON.stringify(newStorage));
    } else {
      const filteredArray = newStorage.filter((item: Repo) => {
        return item["githubId"] !== value["githubId"];
      });
      window.localStorage.setItem(key, JSON.stringify(filteredArray));
    }
  } catch (error) {
    console.log(error);
  }
};

export { getLocalData, setLocalData };
