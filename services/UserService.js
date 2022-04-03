import axios from "axios";

class UserService {
  logUserIn(username, password, userStore, router) {
    axios
      .get(`http://localhost:3000/api/users`)
      .then((res) => {
        const exist = res.data.data.find(
          (user) => user.username === username && user.password === password
        );
        if (exist) {
          router.push("/");
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
  }
}

const userService = new UserService();
export default userService;
