import { Account } from '../types/Account';
import lsAccounts from './storage/accounts.json';

const login = (reqAccount: Account): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const isExist =
      lsAccounts.filter(
        // eslint-disable-next-line no-self-compare
        (acc) => acc.username === reqAccount.username && acc.password === reqAccount.password
      ).length > 0;

    if (isExist) {
      setTimeout(() => {
        resolve(
          new Response(
            JSON.stringify({
              token: 'login-ticket',
            }),
            { status: 200, statusText: 'OK' }
          )
        );
      }, 500);
    } else {
      // reject(
      //   new Response(JSON.stringify({ error: 'Account not found' }), {
      //     status: 403,
      //   })
      // );
      throw new Error('Invalid username or password');
    }
  });
};

export const auth = {
  login,
};
