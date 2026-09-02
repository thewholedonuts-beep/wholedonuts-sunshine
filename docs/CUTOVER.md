# External cutover requirements

This repository is ready for review and does not perform a live deployment.

## GitHub Pages

After merging, enable GitHub Pages in the repository settings with **GitHub Actions**
as the source. The Pages workflow uploads `apps/public-site/`, so its `CNAME` is part
of the deployed artifact. Verify the custom domain and HTTPS status in GitHub before
making the required DNS change at the domain provider. Do not redirect or retire the
existing site until the new Pages URL is confirmed.

## Public-site privacy

The public site does not use Supabase, accounts, forms, analytics, or a contribution
queue. Do not configure a client key or tracking service for it. If a prior deployment
used a Supabase project, revoke its keys, disable public authentication, and delete or
secure collected data before relaunching.

## Merch services

Host the API, dashboard, and private PostgreSQL database as separate services. Apply
`data/postgres/migrations/` with a controlled release job, provide API runtime
secrets through the hosting provider, and set the dashboard's public API URL at
build time. The example Docker definitions are not an external deployment action.

Configure Shopify and Printful only after the API is reachable over its final HTTPS
URL: create the Shopify custom app and its least-privilege credentials, store Shopify
and Printful secrets in the provider secret manager, then register verified webhooks
to the API. **No live checkout or fulfillment exists until these external settings,
hosting, secrets, and webhooks are configured.**
