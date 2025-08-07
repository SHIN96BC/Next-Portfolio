import NextAuth from 'next-auth';
import nextAuthOptions from '@Src/app/auth/config/next-auth';

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
