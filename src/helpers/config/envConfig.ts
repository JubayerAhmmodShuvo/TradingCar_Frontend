export const getBaseUrl = ():string => {
  
  return process.env.NEXT_PUBLIC_API_BASEURL || " http://localhost:3001/";
}