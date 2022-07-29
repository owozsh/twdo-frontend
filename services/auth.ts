import { SignInData } from "../types/auth";

export async function signInRequest(data: SignInData) {
  return fetch(
    "https://ec2-3-84-11-182.compute-1.amazonaws.com:4001/users/signIn",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }
  );
}
