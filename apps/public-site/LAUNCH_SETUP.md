# Launch setup

## Privacy boundary

The public site has no accounts, forms, analytics, QR generation service, or server-side contribution queue. Do not add public keys, credential configuration, or a data-collection service to its deployment artifact.

If a previous launch configured Supabase for this site, the owner must revoke its keys, disable public authentication, and delete or secure any collected data before relaunching. Contributions belong in GitHub pull requests and must be reviewed before publication.

## Domain cutover

Enable Pages from GitHub Actions and verify its generated URL and HTTPS status before
changing DNS at the domain provider. Retain existing email and verification records
(MX, SPF, DKIM, DMARC, and TXT). The repository does not configure DNS or redirects;
see [the repository cutover guide](../../docs/CUTOVER.md).
