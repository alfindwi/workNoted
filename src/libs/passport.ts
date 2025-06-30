import passport from "passport";
import { Strategy as GoogleStrategy, Profile as GoogleProfile } from "passport-google-oauth20";
import { Strategy as GitHubStrategy, Profile as GitHubProfile } from "passport-github2";
import { findOrCreateOAuthUser } from "../service/authService";
import { prisma } from "../libs/prisma";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT!,
      clientSecret: process.env.GOOGLE_SECRET!,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: GoogleProfile,
      done: (error: any, user?: Express.User | false) => void
    ) => {
      try {
        const { token, user } = await findOrCreateOAuthUser({
          provider: "google",
          providerId: profile.id,
          email: profile.emails?.[0]?.value ?? "",
          username: profile.displayName ?? "google_user",
        });

        return done(null, { ...user, token });
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT!,
      clientSecret: process.env.GITHUB_SECRET!,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: GitHubProfile,
      done: (error: any, user?: Express.User | false) => void
    ) => {
      try {
        const { token, user } = await findOrCreateOAuthUser({
          provider: "github",
          providerId: profile.id,
          email: profile.emails?.[0]?.value ?? `${profile.username}@github.com`,
          username: profile.username ?? "github_user",
        });

        return done(null, { ...user, token });
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  const user = await prisma.user.findUnique({ where: { id } });
  done(null, user ?? false);
});
