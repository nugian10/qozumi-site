# QOZUMI — Small Robots. Endless Personalities.

A charming collection of robot companions in a unique world, where every
character has its own story.

## Planned specifications (not yet on-chain)

- **Total supply:** 3,333
- **Price:** 0.0003 BNB per mint (plus network gas, which is separate)
- **Maximum:** 20 per wallet
- **Chain:** BNB Smart Chain (Chain ID 56)
- **Minting:** Reserved for Binance Agentic Wallets holding a SPACE ID
  Agent ID (.ai). Instant reveal. No fusion, no sound mechanic, and no
  token or airdrop promise.
- **Smart contract:** NOT deployed yet. There is no contract address in
  this repository. Do not mint from this site until a verified contract
  address is published here.

## Site

Static, mobile-first, English-only. No build step.

- `index.html` — home, tiers, traits, honest rules, FAQ
- `mint.html` — mint preview calculator (1–20) and wallet format check
- `collection.html` — Common, Rare, Epic, Legendary
- `agent.html` — copyable Agent Mint command (contract TBD)
- `css/style.css`, `js/config.js`, `js/app.js`
- `images/` — character-only tier images cropped from the artwork
  supplied for QOZUMI (no poster text, tier labels, pedestals, or
  buttons; not a poster screenshot, not a generic AI artwork set)

## Run locally

```sh
python3 -m http.server --directory .
```

Then open http://127.0.0.1:8000/
