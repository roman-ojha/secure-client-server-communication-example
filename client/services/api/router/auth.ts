import encryptRequest from "@/middleware/encryptRequest";

type LoginUser = {
  email: string;
  password: string;
};

class AuthRouter {
  @encryptRequest<LoginUser>(["password"])
  loginUser<T>(data: T) {
    console.log(data);
  }
}
const authRouter = new AuthRouter();
export default authRouter;
