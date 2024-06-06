import React, { useEffect, useState, createContext } from "react";
import {
  storeUserInfo,
  clearUserInfo,
  checkAlreadyLogin,
  getUserInfo,
} from "/Users/louisyang/Desktop/zillomis-workspace/app-ui/common/UserFunction";

const AuthContext = createContext();
const AuthState = (props) => {
  const [isLogin, setIslogin] = useState(false);
  const [userInfo, setuserInfo] = useState({});

  useEffect(() => {
    checkAlreadyLogin().then((res) => {
      if (res) {
        getUserInfo().then((loginInfo) => {
          setuserInfo(loginInfo); //重開APP時從AsyncStorage將使用者資訊帶回去
          //如果你一開始記住登入資訊是取消的，下次登入進來要回登入畫面重打
          setIslogin(loginInfo.IsRemberMe);
        });
      } else {
        setIslogin(false);
      }
    });
  }, []);

  const onAuthentication = async (loginInfo) => {
    storeUserInfo(loginInfo);
    setuserInfo(loginInfo); //存一份登入資訊放在userInfo上下文裡
    setIslogin(true);
  };

  const onLogOut = () => {
    clearUserInfo();
    setIslogin(false);
    setuserInfo({});
  };

  return (
    <AuthContext.Provider
      value={{
        onAuthentication,
        isLogin,
        onLogOut,
        userInfo,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthState;
