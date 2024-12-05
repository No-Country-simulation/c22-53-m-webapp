
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/api";
import { Navigate} from "react-router-dom";

import DashBoard from "../views/DashBoard";

export const DashBoardLayout = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: 1
  })

  if (isLoading) return <p>Cargando...</p>
  if (error) return <Navigate to={"/auth/login"} />
  if (data) return <DashBoard />
}

