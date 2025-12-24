---
sidebar_position: 4
---

# Risk Disclosure

<mark>THIS ENTIRE PAGE WILL NEED A FULL REWRITE FROM TECHNICAL TEAM MEMBERS</mark>

## Audits & Risk Disclosure

Detailed disclosures of protocol risks and user considerations. EVRO code has been audited several times by top firms.

### Contract Risk <a href="#contract-risk" id="contract-risk"></a>

Underlying Liquity contracts are audited and secure. EVRO Protocol is a fork of Liquity and inherits most of the same risks and security considerations, but with several differences.

EVRO protocol contracts (and all changes from the Liquity core contracts) are audited by Sherlock, <mark>0xSimao and other independent auditors.</mark>

EVRO audits:

- [Report: Sherlock audit with 0xSimao](https://drive.google.com/file/d/1knlIgoEGv5x33n9mhTLRqJe8T55r3HCy/view?usp=sharing) <mark>UPDATE THIS LINK</mark>
- EVRO also underwent extensive testing with automated vulnerability <mark>testing with</mark> [<mark>Octane</mark>](https://octane.security/)<mark>, with reports available for each pull request on our Github. UPDATE THIS</mark>

### Centralization Risk <a href="#centralization-risk" id="centralization-risk"></a>

#### EVRO Governance <a href="#evro-governance" id="evro-governance"></a>

EVRO Protocol is designed to be as limited, decentralized, and immutable as possible. The only parameters in the protocol which can be updated or changed by EVRO governance are:

1. Debt limits for each collateral type, which can be lowered at any time but only raised by a factor of 2x with a 7 day timelock.
2. How to direct 25% of protocol revenue.

New collateral types can NOT be added by EVRO governance. EVRO can NEVER be minted by EVRO governance. The percentage of fees that are directed to the stability pool can NOT be changed by EVRO governance.

#### <mark>Arbitrum Network</mark> <a href="#arbitrum-network" id="arbitrum-network"></a>

<mark>Arbitrum is a decentralized network, but still relies on an emergency upgrade mechanism. For more information on this, see the</mark> [<mark>L2 Beat</mark>](https://l2beat.com/scaling/projects/arbitrum) <mark>tracker for Arbitrum decentralization. UPDATE TO GNOSIS CHAIN</mark>

#### Collaterals <a href="#collaterals" id="collaterals"></a>

It is possible that some collateral tokens could be upgraded by respective DAOs or groups in the future. Conservative debt limits and over-collateralization ratios have been chosen to limit risks of this posing any issues.
