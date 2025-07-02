import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "@/store/auth/slice";
import { Loader2Icon } from "lucide-react";

export function OAuthSuccess() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      Cookies.set("token", token, { expires: 1 });
      dispatch(SET_TOKEN(token));

      setTimeout(() => {
        navigate("/");
      }, 200);
    } else {
      navigate("/login");
    }
  }, [navigate, dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2Icon className="animate-spin" />
    </div>
  );
}
