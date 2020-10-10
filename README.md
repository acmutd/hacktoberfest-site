# Hacktoberfest Site

Code for the website that helps inform participants about the ACM Hacktoberfest event.

## Project Structure

This project uses [NextJS](https://nextjs.org/), a React-based framework for generating sites. This allows for fast development with easy routing, as well as a happy path for SSR should this site become more interactive.

This project uses Tailwind CSS for most of its styles.

## Development

First install all of the necessary dependencies with `yarn`.

To set up Firebase, go to the Firebase console and copy the application credentials. Create an `.env` file with these details under the following environment variables:

```text
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_DATABASE_URL
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSENGER_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
```

**Do not** commit `.env` to source control.

To start the local dev server, run `yarn dev`. By default, the site can be accessed at `http://localhost:3000`.

Avoid committing in-progress changes `master` directly, as any changes to `master` could be deployed to the live site at any time.

## Deployment

We use GitHub Pages to deploy from the `gh-pages`. The command below does all the work for you and also annotates the deploy commit with the correct commit from `master`.
To deploy the site, run `yarn deploy` on the `master` branch with **no uncomitted changes**.
Make sure Firebase credentials are provided through `.env` for the dynamic features of the site.
