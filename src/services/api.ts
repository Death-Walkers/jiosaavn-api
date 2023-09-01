export const api = async <T>(
  path: string,
  {
    isVersion4 = true,
    query,
  }: {
    isVersion4?: boolean;
    query?: Record<string, string>;
  }
) => {
  const baseURL = "https://www.jiosaavn.com/api.php";
  const params = new URLSearchParams({
    _format: "json",
    _marker: "0",
    ctx: "web6dot0",
    ...(isVersion4 ? { api_version: "4" } : {}),
    ...query,
  });

  const url = `${baseURL}?__call=${path}&${params}`;

  const response = await fetch(url, {
    headers: {
      cookie: "L=english; gdpr_acceptance=true; DL=english",
    },
  });

  const data: T = await response.json();

  return data;
};
