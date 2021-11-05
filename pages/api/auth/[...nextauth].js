import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials property is used to generate a suitable form on the sign in page.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: "J Smith", email: "jsmith@example.com", password:'1234' };

        if (user.password === credentials.password && user.email === credentials.username) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
         
         
          // You can also Reject this callback with an Error or with a URL:
           //throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  session: {
    jwt: true,
  },
   jwt: {
    // A secret to use for key generation - you should set this explicitly
    // Defaults to NextAuth.js secret if not explicitly specified.
    secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',    
  }  
};

export default (req, res) => NextAuth(req, res, options);
