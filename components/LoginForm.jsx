import { Checkbox, Input,  Typography } from "antd";
import { observer } from "mobx-react";
import router from "next/router";
import React, { useState } from "react";
import userStore from "../mobx/UserStore";
import userService from "../services/UserService";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthenticate = () => {
    userService.logUserIn(username, password, userStore, router);
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
