import { useMatches } from "@remix-run/react";
import axios from "axios";
import { useMemo } from "react";
import { getSession } from "../session.server";

export function useMatchesData(id) {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}

export function useOptionalUser() {
  const data = useMatchesData("root");

  if (!data.user) {
    return undefined;
  }
  return data.user;
}

export async function getIPAddress() {
  return axios
    .get("https://api.ipify.org?format=json")
    .then((res) => res.data.ip);
}
