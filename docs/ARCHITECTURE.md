# Canonical repository architecture

| Area | Purpose |
|---|---|
| `apps/public-site/` | Independent GitHub Pages Sunshine companion, including the local stick-figure World and links back to the canonical Universe. |
| `apps/landing/` | Preserved gateway prototype; not served in production. |
| `apps/web/` | Preserved earlier landing-page source; excluded from production serving. |
| `apps/merch/api/` | Express API for sponsor merchandise operations and integration webhooks. |
| `apps/merch/web/` | Next.js merch dashboard. |
| `apps/universe/` | Go ecosystem tools: domain orchestrator, funnel CLI, analytics dashboard, network and scaling orchestrators, domain config packages, and deployment workflows. |
| `backend/router/` | Domain-based routing engine — maps configured domains to services via `config/domains.yaml`. |
| `data/postgres/migrations/` | Forward-only PostgreSQL migrations for the merch API. |
| `infra/docker/` | Container build configuration and nginx config. |
| `tools/domain-funnels/` | Offline validation of inactive, sanitized configuration examples only. |
| `Dockerfile` | Multi-stage production container (public-site, merch-api, Go tools). |
| `docker-compose.yml` | Local development environment. |
| `.env.example` | Environment variable template. |
| `docs/DEPLOYMENT.md` | Production deployment guide. |
| `docs/API.md` | API reference. |

## Ecosystem overview

```
wenevergonnaclose.com  (canonical Whole Donuts Universe)
         ↑
Sunshine GitHub Pages companion
         ↑
configured brand-domain router fallbacks
```

Domain → service mappings live in `backend/router/config/domains.yaml`. The router
does not claim the canonical domain. When deliberately deployed for a configured
brand domain, it sends browser requests to the verified canonical Universe root.
