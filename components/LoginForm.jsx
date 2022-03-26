import { Checkbox, Input, notification, Typography } from "antd";
import axios from "axios";
import { observer } from "mobx-react";
import Router from "next/router";
import React, { useState } from "react";
import userStore from '../mobx/UserStore'

function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // TODO: burayı toparla  >:(
  const handleAuthenticate = () => {
    axios
      .get("http://localhost:3000/api/users")
      .then((res) => {
        const exist = res.data.data.find(
          (user) => user.username === username && user.password === password
        );
        if (exist) {
          Router.push("/");
          userStore.setCurrentUserId(exist);
        } else {
          notification.open({
            message: "Kullanıcı adı veya parola hatalı",
            description:
              "Girdiğin bilgileri kontrol ettikten sonra tekrar dene.",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-screen mt-40 flex justify-center items-center">
      <div className="w-1/5">
        <div>
          <Typography className="py-3">Kullanıcı adı</Typography>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            size="large"
            placeholder="Kullanıcı adı"
          />
        </div>
        <div className="mt-3">
          <Typography className="py-3">Parola</Typography>
          <Input
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            size="large"
            placeholder="Parola"
          />
        </div>
        <div className="w-full flex flex-row justify-between items-center mt-8">
          <Checkbox>Beni hatırla</Checkbox>
          <button
            onClick={handleAuthenticate}
            className="bg-spotify-green px-9 py-3 rounded-full font-gotham font-medium text-md hover:scale-105"
          >
            OTURUM AÇ
          </button>
        </div>
      </div>
    </div>
  );
}

export default observer(LoginForm);
