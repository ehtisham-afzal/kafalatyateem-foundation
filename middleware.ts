import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';
 
export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales
});

// export default createMiddleware({
//     // A list of all locales that are supported
//     locales: ['en', 'de' , "pk" , "ar"],

//     // Used when no locale matches
//     defaultLocale: 'en',
// });

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ar|en)/:path*']
};