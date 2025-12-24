---
sidebar_position: 3
---

# EVRO & Earn

#### What is EVRO? <a href="#what-is-usnd" id="what-is-usnd"></a>

EVRO is a stablecoin that follow's EUR's price closely and is issued by the Evro protocol. It's decentralized, overcollateralized, and backed only by a basket of crypto native assets.

EVRO is a resilient stablecoin by design:

- Only backed by crypto assets ("no real world assets" like US Treasuries).
- Not subject to collateral changes and protocol upgrades (immutable).
- Directly redeemable for the underlying assets at any time by any one permissionlessly (always convertible in a fast and liquid way).
- Can only be created by users depositing more collateral.

#### What are EVRO's main benefits compared to other stablecoins? <a href="#what-are-usnds-main-benefits-compared-to-other-stablecoins" id="what-are-usnds-main-benefits-compared-to-other-stablecoins"></a>

- EVRO is backed by wxDAI, sDAI, wBTC, GNO, osGNO and wstETH.&#x20;
- It is always redeemable for the underlying assets, meaning you can always swap it as if worth 1 EUR, for the collateral backing it.
- The contracts used to issue EVRO are immutable, not allowing any changes and significantly reducing attack vectors.
- EVRO will have native incentives via Protocol Incentivized Liquidity (PIL) directed by governance, ensuring that there will always be sufficient liquidity to handle transactions.
- EVRO is Gnosis Chain native, and is built specifically for the fast and cheap Gnosis Chain and to activate value flow in the network Gnosis related tech and dApps.

#### What is EVRO's peg mechanism? <a href="#what-is-usnds-peg-mechanism" id="what-is-usnds-peg-mechanism"></a>

EVRO uses Liquity V2's market-driven monetary policy through user-set interest rates to maintain EVRO's peg and to dynamically respond to situations where the token is above or below 1.00 EUR, instead of American Dollars.&#x20;

When EVRO trades above 1 EUR, borrowers tend to reduce their rates due to lower redemption risk, making borrowing more and holding EVRO less attractive. This helps correct the price downwards.

In contrast, when EVRO trades below 1.00 EUR, arbitrageurs will initiate redemptions to restore the peg. Borrowers' exposure to redemption risk prompts them to increase interest rates, boosting demand for EUR (and Earn deposits) and pushing its price upward.

![USND Price Chart](https://github.com/user-attachments/assets/b78b6905-618a-4a79-aad6-92a8ae12f017)

<mark>IMAGE TO BE UPDATED HERE</mark>&#x20;

#### How can I earn yield with EVRO? <a href="#how-can-i-earn-yield-with-evro" id="how-can-i-earn-yield-with-evro"></a>

- Stability Pool deposits (Earn): Earn protocol revenue by depositing EVRO into the various Stability Pools.
- Protocol Incentivized Liquidity (PIL): Supply liquidity for EVRO onto the incentivized <mark>external DEXes like Bunni and Camelot. IS THIS RELEVANT TO US, IF YES PROB NOT THESE DEXES HEHE</mark>&#x20;
- Stake RETVRN (coming soon): Accrue voting power over liquidity incentives by staking RETVRN. Where does the yield for the Stability Pool deposits come from?

#### Where does the yield for the Stability Pool deposits come from? <a href="#how-can-i-earn-yield-with-evro" id="how-can-i-earn-yield-with-evro"></a>

The yield comes from three sources:

1. **Interest payments**: Each borrow-market funnels 75% of the of its revenue to its Stability Pool depositors (Earners). This is paid out in EVRO.
2. **Liquidation fees**: Your EVRO will be used to liquidate under-collateralized loans, effectively buying their collateral with a \~5% discount. This is paid out in the collateral associated with the stability pool.&#x20;
3. **Inflationary Incentives**: Upcoming RETVRN tokens can be added as a bonus reward to depositors, at the discretion of the DAO.

All the yield is fully sustainable, scalable and "real", with no token emissions and lockups.

#### Is there a lockup period? <a href="#is-there-a-lockup-period" id="is-there-a-lockup-period"></a>

There is no lockup period. Users are free to withdraw their EVRO deposits from the Stability Pool whenever they want.

#### What is the estimated yield on EVRO Earn? <a href="#what-is-the-estimated-yield-on-earn" id="what-is-the-estimated-yield-on-earn"></a>

The yield is a representation of the rates borrowers are paying. Since 75% of the borrowers' interest payments go to Earn, the effective yield can exceed the average interest rate paid in a borrow market if less than 75% of the EVRO supply is deposited to the respective Stability Pool. This yield amplification sets Liquity V2 and Evro apart from competitors and money markets where lending rates cannot be higher than borrow rates.

Check historic rates on Liquity V2 [here](https://dune.com/liquity/liquity-v2#interest-rates). <mark>Let's add also our Dune Dashboard here</mark>

#### Why are there multiple Stability Pools? <a href="#why-are-there-multiple-stability-pools" id="why-are-there-multiple-stability-pools"></a>

The goals are to:

- Establish separate borrow markets for different collateral assets with their own market driven interest rates, using the Stability Pool backing to dynamically split redemptions across the available collaterals <mark>(link to "Redemption").</mark>
- Compartmentalize the risks as much as possible when depositing to the respective Stability Pools (Earn) by giving the depositors control over which collateral assets they want exposure to in case of liquidations.

#### How have Stability Pools evolved in Liquity based systems like Evro, from Liquity V1 to V2? <a href="#how-have-stability-pools-evolved-in-liquity-based-systems-like-evro-from-liquity-v1-to-v2" id="how-have-stability-pools-evolved-in-liquity-based-systems-like-evro-from-liquity-v1-to-v2"></a>

In V2, the concept of Stability Pools is expanded to accommodate multiple Liquid Staking Tokens (LSTs), Vanguard crypto tokens, as well as ETH as collateral, and keeping the interest revenue and liquidations proceeds inside the respective borrow market (collateral). Each collateral asset thus has its own Stability Pool to distribute yield to EVRO depositors.

Additionally, user-set interest rates in V2 influence the yield dynamics for Stability Pools depositors (Earn) as the yield is now fully sustainable coming from user-set interest rates (in EVRO) rather than token emissions.

#### How do risks differ for the different Stability Pools? <a href="#how-do-risks-differ-for-the-different-stability-pools" id="how-do-risks-differ-for-the-different-stability-pools"></a>

Users can deposit their stablecoins into the Stability Pool of their choice, aligning with their risk preference and the types of collateral they're comfortable being exposed to. By selecting pools associated with a specific collateral, participants can tailor their risk exposure and potential reward profile.

By offering separate pools for different collateral types, the system allows users to choose their exposure based on the perceived risk and potential returns of each LST or xDAI. This compartmentalization helps manage systemic risk, ensuring that impacts from liquidations in one asset class don't disproportionately affect the entire ecosystem.

It is important to note that all EVRO holders including depositors still remain dependent on EVRO to keep its peg, remaining exposed to both all collaterals and xDAI.
