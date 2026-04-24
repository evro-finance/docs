---
sidebar_position: 4
---

# Risk Disclosure

## Audits & Risk Disclosure

EVRO is a fork of Liquity v2 (BOLD), inheriting its battle-tested security model. The underlying Liquity v2 contracts have been extensively audited by leading security firms. EVRO-specific modifications have undergone additional security review.

### Contract Risk <a href="#contract-risk" id="contract-risk"></a>

#### Liquity v2 Base Protocol Audits

EVRO is built on Liquity v2, which has been audited by:

- **ChainSecurity** - Multiple audits (Aug 2024 - May 2025)
- **Dedaub** - Three comprehensive audits (Aug 2024, Nov 2024, Dec 2024)
- **Certora** - Formal verification (Dec 2024)
- **Coinspect** - Core protocol and governance audits (Dec 2024, Jan 2025)
- **Cantina** - Bug bounty competition (Mar-Apr 2025)
- **Chaos Labs** - Mechanism design review (Oct 2024)

For full audit reports, see the [Technical Docs & Audits](./technical-docs-and-audits.md) page.

#### EVRO-Specific Security

EVRO modifications focus on:
- EUR denomination instead of USD
- Gnosis Chain deployment
- Gnosis-native collateral types (GNO, osGNO, sDAI, wstETH bridged)
- API3 OEV oracle integration

**Note**: While EVRO inherits Liquity v2's security properties, users should understand that:
- EVRO contracts are immutable and cannot be upgraded
- The protocol has undergone independent security review
- Smart contract risk always exists - never invest more than you can afford to lose

### Centralization Risk <a href="#centralization-risk" id="centralization-risk"></a>

#### EVRO Governance <a href="#evro-governance" id="evro-governance"></a>

EVRO Protocol is designed to be minimally governed, decentralized, and immutable. The **only** parameters that EVRO governance can modify are:

1. **Debt limits** for each collateral type:
   - Can be lowered to zero at any time (emergency shutdown)
   - Can only be raised up to initial limit or 2x current limit
2. **Protocol revenue allocation**: Direction of 25% of protocol revenue to initiatives
3. **GNO delegation**: Delegation of accumulated GNO from osGNO collateral
4. **Collateral debt limit updates**: Adjust borrowing capacity per collateral

**Governance CANNOT:**
- Add new collateral types
- Mint EVRO tokens
- Change interest rates or fee structures
- Modify liquidation parameters (MCR, CCR, etc.)
- Change the 75/25 fee split to Stability Pool
- Upgrade or modify core protocol contracts

#### Gnosis Chain Network <a href="#gnosis-chain-network" id="gnosis-chain-network"></a>

EVRO operates on Gnosis Chain, a community-owned, credibly neutral network secured by over 200,000 validators. Gnosis Chain uses:
- **Consensus**: Proof of Stake with diverse validator set
- **Governance**: GnosisDAO controls protocol upgrades
- **Bridge risk**: Canonical bridge from Ethereum for wstETH and wBTC

For more on Gnosis Chain decentralization, see [Gnosis Chain documentation](https://docs.gnosischain.com/).

#### Collaterals <a href="#collaterals" id="collaterals"></a>

EVRO accepts multiple collateral types on Gnosis Chain:
- **WXDAI**: Wrapped xDAI, native gas token
- **GNO**: Gnosis DAO governance token
- **sDAI**: Savings DAI from Spark Protocol
- **osGNO**: Stakewise staked GNO (liquid staking derivative)
- **wWBTC**: Wrapped Bitcoin bridged to Gnosis
- **wstETH**: Wrapped staked ETH bridged to Gnosis

**Collateral Risks:**
- Some collaterals (osGNO, sDAI) may be upgradeable by their respective protocols
- Bridged assets (wstETH, wWBTC) carry bridge risk
- Conservative debt limits and over-collateralization ratios mitigate these risks
- In case of collateral failure, EVRO may become undercollateralized

### Oracle Risk <a href="#oracle-risk" id="oracle-risk"></a>

EVRO uses API3's OEV (Oracle Extractable Value) oracles as the primary price feed, with Chainlink as backup for certain feeds. Oracle failures or manipulation could lead to incorrect liquidations or prevent proper system operation.

### Market Risk <a href="#market-risk" id="market-risk"></a>

- **Redemptions**: Borrowers with lowest interest rates face redemption risk when EVRO trades below €1
- **Liquidations**: Borrowers must maintain adequate collateral ratios or face liquidation
- **Interest rates**: User-set rates create market dynamics - rates may fluctuate based on supply/demand
- **Peg stability**: EVRO aims to maintain a €1 peg but may deviate during extreme market conditions
