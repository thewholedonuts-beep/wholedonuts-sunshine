# Whole Donuts Sunshine launch guide

## Public launch surface

Sunshine is independently deployed on the repository's GitHub Pages URL and is a
companion to the canonical [Whole Donuts Universe](https://wenevergonnaclose.com/).
Its first screen and all return links lead to that verified gateway. Sunshine must
not be configured as the canonical domain.

The companion has no accounts, forms, analytics, trackers, remote scripts, checkout,
storefront link, or automatic publication path. Figure customization stays in the
visitor's browser unless the visitor explicitly places it in an invitation URL.

## Route behavior

`backend/router/config/domains.yaml` is an offline mapping, not evidence that a
domain is registered, pointed at this router, or ready to launch. When the router is
deliberately deployed for a configured brand domain, browser requests redirect only
to `https://wenevergonnaclose.com/`. It has no canonical-domain mapping.

## Included and excluded material

| Area | Launch disposition |
|---|---|
| `apps/public-site/` | Included: independent Sunshine companion. |
| `backend/router/` | Included only as optional redirect configuration. |
| `apps/landing/` and `apps/web/` | Excluded: preserved prototypes, not production routes. |
| `apps/merch/` | Excluded: separately operated code; no public storefront or checkout is linked. |
| `apps/universe/` and `tools/domain-funnels/` | Excluded: operational tooling, not a Sunshine public destination. |
| `apps/public-site/templates/` | Excluded from navigation: no confirmed public destination or separate provenance review. |

Do not add content, assets, or links from an excluded area until its rights,
provenance, and destination are independently confirmed.

## Deployment boundary

GitHub Pages deploys `apps/public-site/` after its scoped workflow validates the
public JavaScript. The separate production-services workflow validates existing
service code but does not deploy the public site, preventing duplicate Pages
publishes. Keep the Pages deployment at its repository URL and do not add a custom
domain that conflicts with the canonical Universe.

## Contribution boundary

Public contributions are submitted only as GitHub pull requests. Contributors must
share original or authorized material and avoid private, identifying, financial,
health, legal, emergency, or harmful content. A pull request never guarantees
publication or any other outcome.
