import { useNavigate } from "react-router-dom";

const useNavigateWithScroll = () => {
  const navigate = useNavigate();

  const navigateWithScroll = (path: string, state?: any) => {
    navigate(path, { state });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return navigateWithScroll;
};

export default useNavigateWithScroll;