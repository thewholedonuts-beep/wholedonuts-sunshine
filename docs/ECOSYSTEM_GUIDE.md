# Whole Donuts Sunshine launch guide

## Public launch surface

The only verified public destination represented by this repository is the canonical
entry at [wenevergonnaclose.com](https://wenevergonnaclose.com/). Its public artifact
is `apps/public-site/`, which provides the +U entry, the local stick-figure World,
and a GitHub pull-request contribution route.

The public artifact has no accounts, forms, analytics, trackers, remote scripts,
checkout, storefront link, or automatic publication path. Figure customization stays
in the visitor's browser unless the visitor explicitly places it in an invitation URL.

## Route behavior

`backend/router/config/domains.yaml` is an offline mapping, not evidence that a
domain is registered, pointed at this router, or ready to launch. When this router
is deliberately deployed for a configured brand domain, browser requests redirect to
the matching canonical entry section until a dedicated destination is verified:

| Configured service | Canonical destination |
|---|---|
| `wholedonuts` and Whole Donuts merch | `https://wenevergonnaclose.com/#awd` |
| `nurturedchef` and Nurtured Chef merch | `https://wenevergonnaclose.com/#tnc` |
| `landing` | `https://wenevergonnaclose.com/` |

The canonical site's in-page return links go to `#home`, and the World return link
goes to its parent entry. Those are the only backward links used by the public flow.

## Included and excluded material

| Area | Launch disposition |
|---|---|
| `apps/public-site/` | Included: static canonical-entry artifact. |
| `backend/router/` | Included only as deployable redirect configuration; DNS and hosting remain owner-controlled. |
| `apps/landing/` and `apps/web/` | Excluded: preserved prototypes, not linked from the canonical launch. |
| `apps/merch/` | Excluded: separately operated code; no verified public storefront or checkout is linked. |
| `apps/universe/` and `tools/domain-funnels/` | Excluded: operational tooling, not a public destination. |
| `apps/public-site/templates/` | Excluded from navigation: source templates have no confirmed public destination or separate provenance review. |

Do not add content, assets, or links from an excluded area until its rights,
provenance, and destination are independently confirmed.

## Deployment boundary

GitHub Pages deploys `apps/public-site/` after its scoped workflow validates the
public JavaScript. The separate production-services workflow validates existing
service code but does not deploy the public site, preventing duplicate Pages
publishes.

Before a public relaunch, the owner must enable Pages, verify the generated URL and
HTTPS, complete the DNS cutover only after that verification, and retain necessary
mail and verification records. See [`CUTOVER.md`](CUTOVER.md).

## Contribution boundary

Public contributions are submitted only as GitHub pull requests. Contributors must
share original or authorized material and avoid private, identifying, financial,
health, legal, emergency, or harmful content. A pull request never guarantees
publication or any other outcome.
