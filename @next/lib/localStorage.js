export function getLocalStorage() {
  let data = null;
  try {
    if (typeof window !== "undefined") {
      data = localStorage.getItem(key);
      if (data) {
        data = JSON.parse(data);
      }
    }
  } catch (error) {
    // If stored data is not a stringified JSON this might fail,
    // that's why we catch the error
    console.log(error);
  }
  return data;
}

export function setLocalStorage() {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (error) {
    /* empty */
    console.log(error);
  }
}

export function removeLocalStorage() {
  try {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  } catch (error) {
    // If stored data is not a stringified JSON this might fail,
    // that's why we catch the error
    console.log(error);
  }
}

export function clearLocalStorage() {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
}
