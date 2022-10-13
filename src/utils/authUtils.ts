const setTokenToCookie = (token: String) => {
  document.cookie += `token=${token.toString()};`;
};

const getTokenFromCookie = () => {
  const cookieString = document.cookie;
  const cookieSplitedValues = cookieString.split('=');
  const indexOfProperty = cookieSplitedValues.indexOf('token');

  return cookieSplitedValues[indexOfProperty + 1] || null;
};

export const authUtils = {
  setTokenToCookie,
  getTokenFromCookie,
};
