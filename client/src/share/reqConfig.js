export const reqConfig = (getState) => {
   // Get token from localstorage
   const token = getState().auth.token;

   // headers
   const config = {
      headers: {
         "Content-type": "application/json",
      },
   };

   // if token, add to header
   if (token) {
      config.headers["x-auth-token"] = token;
   }

   return config;
};
