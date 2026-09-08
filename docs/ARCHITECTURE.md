# Canonical repository architecture

| Area | Purpose |
|---|---|
| `apps/public-site/` | Public wenevergonnaclose.com entry served by GitHub Pages, Docker, and the domain router, including the shareable stick-figure World, `CNAME`, templates, and GitHub contribution guidance. |
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
wenevergonnaclose.com  (canonical public entry)
├── LEFT  — Whole Donuts ecosystem
│   wholedonuts.{org,app,me,pro,buzz}  → service: wholedonuts
│   wholedonuts.store                  → service: merch
└── RIGHT — Nurtured Chef ecosystem
    thenurturedchef.{com,foundation}   → service: nurturedchef
    thenutur3dchef.com                 → service: merch
```

Domain → service mappings live in `backend/router/config/domains.yaml`. The router
serves `apps/public-site/` for the canonical domain and sends browser requests for
brand domains back to the matching public-entry branch until dedicated applications
are deployed.
