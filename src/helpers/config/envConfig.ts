export const getBaseUrl = ():string => {
  
  return (
    process.env.NEXT_PUBLIC_API_BASEURL ||
    " https://tradingcar-backend.vercel.app/api/v1"
  );
}