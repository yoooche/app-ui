import AsyncStorage from "@react-native-async-storage/async-storage";

async function storeUserInfo(user) {
  try {
    await AsyncStorage.setItem("userData", JSON.stringify(user));
  } catch (error) {
    console.error("something wrong: " + error);
  }
}

async function getUserInfo() {
  try {
    let userData = await AsyncStorage.getItem("userData");
    const userResult = JSON.parse(userData);
    return userResult;
  } catch (error) {
    console.error("something wrong: " + error);
  }
}

async function checkAlreadyLogin() {
  let checkResult = false;
  await AsyncStorage.getItem("userData").then((value) => {
    if (value !== null || value !== undefined) {
      checkResult = true;
    }
  });
  return checkResult;
}

function clearUserInfo() {
  AsyncStorage.clear();
}

export { storeUserInfo, getUserInfo, checkAlreadyLogin, clearUserInfo };
