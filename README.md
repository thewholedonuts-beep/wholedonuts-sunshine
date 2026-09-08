# Whole Donuts Sunshine

Launch companion repository for **wenevergonnaclose.com**. It contains the public entry, separately operated merch and tooling examples, infrastructure, and domain-routing configuration.

## Repository layout

| Area | Purpose |
|---|---|
| `apps/public-site/` | Public entry served by GitHub Pages, Docker, and the domain router at [wenevergonnaclose.com](https://wenevergonnaclose.com/). Includes the shareable stick-figure World, `CNAME`, templates, and the GitHub contribution route. |
| `apps/merch/api/` | Express API for sponsor merchandise operations and integration webhooks (Shopify, Printful). |
| `apps/merch/web/` | Next.js merch dashboard for managing orders, sponsors, and referrals. |
| `apps/universe/` | Go ecosystem tools: domain orchestrator, funnel CLI, analytics dashboard, network and scaling orchestrators, domain config packages, and deployment workflows. |
| `apps/web/` | Preserved earlier landing-page source, exposed by Docker only under `/landing/`. |
| `apps/landing/` | Preserved gateway prototype; not a production serving target. |
| `data/postgres/migrations/` | Forward-only PostgreSQL migrations for the merch API. |
| `infra/docker/` | Container build configuration and nginx config. |
| `tools/domain-funnels/` | Offline validation of inactive, sanitized configuration examples only. |
| `Dockerfile` | Multi-stage production container build. |
| `docker-compose.yml` | Local development environment (public site, merch API, Postgres). |
| `.env.example` | Environment variable template — copy to `.env` for local dev. |

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for full layout details,
[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the production launch guide,
[docs/API.md](docs/API.md) for API documentation, and
[docs/CUTOVER.md](docs/CUTOVER.md) for external launch requirements.

Configured brand domains resolve through `backend/router/config/domains.yaml`.
Until their dedicated applications are live, the router sends browser traffic back
to the matching Whole Donuts or Nurtured Chef section of the canonical entry.
