import encryptRequest from "@/middleware/encryptRequest";
import axios from "../axios";
import { password } from "bun";
import { encryptWithPublicKey } from "@/utils/encrypt";

type LoginUser = {
  email: string;
  password: string;
};

class AuthRouter {
  // @encryptRequest<LoginUser>(["password"])
  async loginUser(data: LoginUser) {
    try {
      const res = await axios.post("/user/auth/login", {
        email: data.email,
        password: encryptWithPublicKey(data.password),
        fields: ["password"],
      });
      console.log(res.data);
    } catch (err) {}
  }
}
const authRouter = new AuthRouter();
export default authRouter;
