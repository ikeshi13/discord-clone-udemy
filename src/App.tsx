import React, { useEffect } from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import { useSelector } from "react-redux";
import Login from "./components/login/Login";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { auth } from "./firebase";
import { login, logout } from "./features/useSlice";
import { ErrorBoundary } from "react-error-boundary";
import { fallbackRender } from "./utils/ErrorFallBack";

function App() {
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    // 空だとページを読み込んだ1回しか発火しない
  }, [dispatch]);
  return (
    <div className="App">
      {user ? (
        <>
          <ErrorBoundary FallbackComponent={fallbackRender}>
            <Sidebar />
          </ErrorBoundary>
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
