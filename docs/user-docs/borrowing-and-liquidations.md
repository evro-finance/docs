---
sidebar_position: 2
---

# Borrowing & Liquidations

The Evro Protocol allows users to borrow the EVRO stablecoin, on their own terms. Borrowers can choose and adjust the rate they are willing to pay for their loans. Borrowers can choose to pay 0%, 5%, 20%, etc.. Borrowers will establish market rates in accordance with their individual risk tolerance without relying on governance or algorithm rate management. \
\
Each collateral also has its own respective borrow market which allows room for a market of rates to develop.

All of this makes for a highly capital efficient, secure and decentralized borrowing experience.

#### Troves and Collateral:&#x20;

When a borrower deposits collateral (xDAI, sDAI, GNO, osGNO, wBTC, or wstETH) a Trove is created. Each Trove has a particular Gnosis Chain address owner, and each owner can have multiple Troves.&#x20;

Each Trove can only have 1 type of collateral deposited in it.\
\
Each Trove allows you to manage a loan, adjusting collateral and debt values as needed, as well as setting your own interest rate.&#x20;

Troves are also transferable NFTs, and can be found in the wallet of the owner. Be cautious with this: transferring the NFT also transfers the ownership of the position.

#### What types of collateral can I use on EVRO?

EVRO accepts the following collaterals:

- **xDAI** - Native Gnosis Chain gas token
- **GNO** - Gnosis DAO governance token
- **sDAI** - Savings DAI from Spark Protocol
- **osGNO** - Stakewise liquid staked GNO
- **wBTC** - Wrapped Bitcoin bridged to Gnosis Chain
- **wstETH** - Wrapped staked ETH bridged to Gnosis Chain

**Note on wBTC**: The protocol automatically handles wrapping/unwrapping of wBTC. When you deposit wBTC (8 decimals), the protocol wraps it to an 18-decimal version for internal accounting. When you withdraw, it automatically unwraps back to standard wBTC. This happens seamlessly behind the scenes - you only need to interact with regular wBTC. See the [wBTC Wrapper](#wbtc-wrapper-technical-details) section below for technical details.

**Note on GNO/osGNO - Retain Your Voting Power**: When you deposit GNO or osGNO as collateral, you receive coGNO tokens that represent your deposit and allow you to retain voting power in Gnosis Chain governance. Your GNO remains productive even while securing your EVRO loan. See the [coGNO Governance Tokens](#cogno-governance-tokens) section below for more details.

New collateral types can never be added. But existing ones can be removed, or re-added, based on risk factors.

#### Is there a minimum debt?

Yes, a minimum debt of 200 EVRO is required for borrowing.

#### **When do I need to pay back my loan?** <a href="#when-do-i-need-to-pay-back-my-loan" id="when-do-i-need-to-pay-back-my-loan"></a>

Loans issued by the protocol do not have a repayment schedule. You can leave your Trove open and repay your debt any time, as long as you maintain a healthy Loan-to-Value (LTV) Ratio.

#### Is there a lockup period? <a href="#is-there-a-lockup-period" id="is-there-a-lockup-period"></a>

There is no lockup period. Users are free to withdraw their collateral deposits whenever they want. As an exception, withdrawals by borrowers are temporarily suspended if the total LTV of a borrow market goes above 75%.

#### How do I decide on my Loan-to-Value (LTV) Ratio? <a href="#how-do-i-decide-on-my-ltv" id="how-do-i-decide-on-my-ltv"></a>

This depends on your personal preferences, primarily your risk tolerance and how actively you want to manage your position(s). To help with the decision, you'll find preset options on the user interface that can serve as a guide.

Please note that these examples are for illustration purposes only and do not represent definitive risk or safety thresholds. It's essential to determine your own risk tolerance and comfort level as a user.

If your LTV becomes too high, your position will be liquidated.

> LTV = Loan to Value a LTV of 50% means that if you borrowed $100, your collateral is $200.

#### How do Liquidations work in Evro? <a href="#how-do-liquidations-work-in-evro" id="how-do-liquidations-work-in-evro"></a>

EVRO uses API3's OEV (Oracle Extractable Value) oracles as its primary price feed for collateral valuation, with Chainlink as backup for certain feeds like EUR/USD conversion. These oracle feeds combined with LST exchange rates ensure accurate pricing and fair liquidations. Check out the [oracle documentation](../technical-docs/technical-docs-and-audits#oracle-addresses) for more details.

Troves get liquidated when the LTV (Loan-to-Value) ratio exceeds the maximum threshold for that collateral type.

EVRO uses **Stability Pools** as its primary liquidation mechanism. Each collateral market has its own dedicated Stability Pool where users deposit EVRO to earn liquidation rewards:

- Deposited EVRO is used to pay off liquidated Troves' debt
- In return, depositors receive the liquidated collateral at a **5% discount**
- All liquidation gains go to Stability Pool depositors (not the protocol)

If a Stability Pool doesn't have enough EVRO to cover a liquidation, the system uses fallback mechanisms: **Just-In-Time (JIT) liquidations** or **Redistribution** to ensure the protocol remains solvent.

A liquidated borrower incurs a liquidation penalty and can claim any remaining collateral after liquidation. The penalty depends on the liquidation method:

**Stability Pool Liquidation** (most common):

- **5% penalty** for all collateral types
- Your debt is paid off by the Stability Pool
- Remaining collateral (minus penalty) is claimable

**Redistribution** (fallback when Stability Pool is empty):

- **10% penalty** for xDAI, GNO, sDAI, osGNO, and wBTC
- **20% penalty** for wstETH
- Your debt and collateral are redistributed among other borrowers in the same market

After liquidation, any remaining collateral above the debt value can be claimed from the surplus pool.

![Liquidation](/img/liquidation.png)

#### How am I compensated for liquidating a Trove? <a href="#how-am-i-compensated-for-liquidating-a-trove" id="how-am-i-compensated-for-liquidating-a-trove"></a>

The liquidation of Troves is connected with certain gas costs which the initiator has to cover. The protocol offers a gas compensation consisting of:

- **Fixed compensation**: 3.5 xDAI from the [gas deposit](#what-is-the-refundable-gas-deposit)
- **Variable compensation**: 0.5% of the liquidated collateral (capped at 10 tokens)

The fixed 3.5 xDAI comes from the gas deposit that was locked when the Trove was opened. The 0.5% variable portion comes from the liquidated collateral itself, slightly reducing the liquidation gain for Stability Pool depositors.

#### What is the max Loan-To-Value (LTV)? <a href="#what-is-the-max-loan-to-value-ltv" id="what-is-the-max-loan-to-value-ltv"></a>

The maximum LTV depends on the collateral type:

- **xDAI**: 90.91% (110% MCR)
- **wBTC**: 86.96% (115% MCR)
- **sDAI**: 76.92% (130% MCR)
- **wstETH**: 76.92% (130% MCR)
- **GNO**: 71.43% (140% MCR)
- **osGNO**: 71.43% (140% MCR)

Check out the full [Collateral Parameters](../technical-docs/technical-docs-and-audits#collateral-parameters) table for all risk parameters and details.

#### What is the refundable gas deposit? <a href="#what-is-the-refundable-gas-deposit" id="what-is-the-refundable-gas-deposit"></a>

To open a new Trove, the protocol requires a liquidation reserve of **3.5 xDAI** regardless of the chosen collateral. This deposit is set aside to compensate liquidators for the gas costs of a potential liquidation.

The deposit is:

- **Returned** when you close your Trove normally (including upon redemptions)
- **Given to the liquidator** if your Trove gets liquidated

This ensures liquidators are incentivized to liquidate undercollateralized positions even when gas prices are high.

#### How much will I pay for my loan? <a href="#how-much-will-i-pay-for-my-loan" id="how-much-will-i-pay-for-my-loan"></a>

When creating a new position or increasing the amount borrowed, borrowers pay the first week of interest up front to prevent the protocol from leaking value to arbitrage bots. Other than this minimal protection, Evro has no upfront fees. Instead, you pay interest on an ongoing basis, making it suitable for short-term loans as well.

The interest you pay is determined by the rate you set yourself. For example, if you borrow 10,000 Evro at a 5% interest rate, you'll pay \~500 EVRO in interest after one year. This interest is added to your outstanding debt.

#### What are user-set rates? <a href="#what-are-user-set-rates" id="what-are-user-set-rates"></a>

On Evro, users set their own interest rates, giving them full control over costs and improving predictability. This feature allows for adaptability to various market conditions and helps stabilize EVRO's peg.

User-set interest rates facilitate a capital-efficient equilibrium between EVRO borrowers and holders in a fully market-driven manner. Additionally, these rates serve as the primary revenue source for EVRO holders, generating a continuous, sustainable real yield for EVRO depositors and liquidity providers.

Borrowers should set their rates based on their [redemption](/docs/user-docs/redemptions-and-delegation#what-are-redemptions) risk tolerance.

Read more about setting your rates [here](https://www.liquity.org/blog/interest-rate-management-in-liquity-v2).

#### Can I adjust the rate? <a href="#can-i-adjust-the-rate" id="can-i-adjust-the-rate"></a>

Yes, you can always adjust your interest rate at any time. Since you as a user get to set your own interest rate, you have full autonomy over your borrowing costs.

Note however, that a fee corresponding to 7 days of average interest is charged when opening the loan, as well as on any rate adjustments that happen less than 7 days after the last adjustment.&#x20;

Without it, low-interest rate borrowers could evade redemptions by sandwiching a redemption transaction with both an upward and downward interest rate adjustment, which in turn would unduly direct the redemption against higher-interest borrowers.

#### How do I decide on the right rate for me? <a href="#how-do-i-decide-on-the-right-rate-for-me" id="how-do-i-decide-on-the-right-rate-for-me"></a>

Setting an interest rate determines a user's redemption risk and needs to be aligned with your goals and how actively you want to manage your position.

By managing your own rate, you will have to weigh the savings from a lower rate against the higher redemption risk and the increased adjustment frequency with potential additional costs (premature adjustment fees and gas costs).

Since redemptions are performed in ascending order of interest rate (for the respective collateral asset), you will typically want to keep a buffer of other borrowers with lower rates in front of you. Choosing higher rates may increase the recurring costs of your loan, but give you peace of mind regarding unexpected market fluctuations.

You can see the distribution of other users' rates in a histogram and position yourself accordingly.

![Rate](/img/interest_rate.png)

Redemptions usually occur when EVRO is trading below 1 EUR minus the current redemption fee. Keeping an eye on the past [redemption activity](https://dune.com/liquity/liquity-v2#redemptions) can help you assess the overall redemption risk, serving as an additional data point for your rate selection.

In general, those willing to actively monitor their positions, or borrowing for shorter periods of time, may opt for lower rates. Conversely users optimizing for a more passive, long-term position would be better off with setting a higher relative interest rate.

#### What could the average interest rate be? <a href="#what-could-the-average-interest-rate-be" id="what-could-the-average-interest-rate-be"></a>

These will be set, continuously, by the market and will vary over time. We would expect that, on average, rates should be similar to borrowing on Sky or Aave using ETH or staked ETH. However, due to the flexibility of user-set rates, it is possible that some users will pay significantly lower rates during certain periods.

Given that 75% of the interest revenue is directly paid out to EVRO depositors, we further expect that stablecoin deposit yields should be comparable, if not higher than what competing CDP's and lending markets offer. Thanks to the attractiveness of EVRO and assuming the emergence of external use cases (monetary premium), this could lead to lower borrow rates overall than offered by other platforms. Learn more about the spread between borrowers and lenders in this [article](https://www.liquity.org/blog/liquity-v2-a-de-facto-reference-rate-for-defi) by Liquity V2.

#### What determines the riskiness of my Trove? <a href="#what-determines-the-riskiness-of-my-trove" id="what-determines-the-riskiness-of-my-trove"></a>

There are two key parameters to consider:

- **Loan-to-value (LTV)**: This is based on your debt-to-collateral ratio and affects your risk of [liquidation](/docs/user-docs/borrowing-and-liquidations#how-do-liquidations-work-in-evro).
- **Interest rate (IR)**: You set this rate yourself, and it influences your risk of being [redeemed](/docs/user-docs/redemptions-and-delegation#what-are-redemptions).

You have the flexibility to set these parameters as you see fit, allowing you to control the relative riskiness of each Trove. You can create multiple Troves under the same address, enabling you to manage different risk profiles for different portions of your portfolio.

![](/img/risk_personas.png)

#### Are there any other fees related to borrowing? <a href="#are-there-any-other-fees-related-to-borrowing" id="are-there-any-other-fees-related-to-borrowing"></a>

To impede Trove redemption evasion strategies where borrowers try to minimize their interest payments in an unfair manner, a small "premature adjustment fee" is charged on interest rate changes that happen within less than 7 days since the last adjustment (or the opening of the Trove). The premature adjustment fee is equal t**o 7 days of average interest on the respective borrow market**. Note that this fee differs from the user's set interest rate.

The fee is denominated in EVRO and added to the Trove's debt. The same fee is charged when a new Trove is opened or when its debt is increased (only affecting the added debt).

#### How many Troves (loans) can I open with the same address? <a href="#how-many-troves-loans-can-i-open-with-the-same-address" id="how-many-troves-loans-can-i-open-with-the-same-address"></a>

You can have multiple open Troves for the same collateral or across different collateral types, all represented as separate NFTs.

#### Are Troves transferable? <a href="#are-troves-transferable" id="are-troves-transferable"></a>

Yes, they are represented as a NFT (ERC-721), hence easily transferable between wallets. When you send the NFT you also send full access to your Trove and all the funds within it.

Please note that more advanced strategies like 'selling' Troves on secondary markets like OpenSea comes with inherent risks, and caution is advised.

#### How are collateral risks mitigated? <a href="#how-are-collateral-risks-mitigated" id="how-are-collateral-risks-mitigated"></a>

Liquity V2 will have three separate borrow markets for the different collateral types with their own Stability Pools (for efficient liquidations), user-set interest rates, and LTV factors for their respective assets (ETH, wstETH, and rETH).

EVRO follow's the same logic but for its own set of collaterals (mentioned above). They all follow the same immutable patterns.

Risks are mitigated through:

- Temporary borrowing restrictions in times of low collateralization of a given market.
- A redemption logic prioritizing collateral with less Stability Pool backing.
- &#x20;Collateral shutdown as an emergency measure to maintain system balance and protect against market instability.

Keep in mind that despite all these measures, EVRO remains dependent on the mentioned collateral assets and there is no strict guarantee that it remains overcollateralized in case of a sudden collapse of a collateral asset.

#### How does the system compartmentalize risk among different LSTs? <a href="#how-does-the-system-compartmentalize-risk-among-different-lsts" id="how-does-the-system-compartmentalize-risk-among-different-lsts"></a>

This depends on the party in question:

- Borrowers: Collateral risk is limited to the collateral asset held by the borrower. A borrower isn't negatively affected by a failure of another collateral asset.
- EVRO Holders: As a multi-collateral stablecoin, EVRO is reliant on effective liquidations of undercollateralized loans in every borrow market to remain overcollateralized. Holders are subject to the risks of all supported collateral assets.
- Earners: Stability Pool depositors only get exposure to the asset they have opted for. However, as EVRO holders, they are similarly affected by potential depegging.

#### What mechanisms are in place if the Stability Pool is empty? <a href="#what-mechanisms-are-in-place-if-the-stability-pool-is-empty" id="what-mechanisms-are-in-place-if-the-stability-pool-is-empty"></a>

If the Stability Pool doesn't have enough EVRO to cover the entire debt, the system uses fallback liquidation modes for the remaining debt.

The liquidator can choose between two fallback liquidation modes:

1. **Just-in-time (JIT) liquidation**: The liquidator provides EVRO to cover the remaining debt in exchange for 105% of its nominal value in the collateral. This allows professional liquidators to profit while maintaining system solvency.

2. **Redistribution**: The liquidator triggers redistribution of the Trove's debt and collateral to all other borrowers in the same collateral market, proportional to their collateral amounts. Affected borrowers receive a share of the liquidated collateral and see their debt increase proportionally.

#### Shutdown Borrow Markets <a href="#shutdown-borrow-markets" id="shutdown-borrow-markets"></a>

The system may automatically shut down a collateral market if its total collateralization ratio (TCR) falls below the Shutdown Collateral Ratio (SCR):

- **xDAI, wBTC**: SCR of 110%
- **sDAI, wstETH**: SCR of 115%
- **GNO, osGNO**: SCR of 115%

When shutdown is triggered, the system incentivizes redemptions against that specific collateral by offering a 2% bonus, helping to restore the system's health. During shutdown, new borrowing is suspended, but users can still repay debt and close their Troves.

#### wBTC Wrapper Technical Details <a href="#wbtc-wrapper-technical-details" id="wbtc-wrapper-technical-details"></a>

EVRO uses a special wrapper contract for wBTC to handle the decimal conversion between standard wBTC (8 decimals) and the protocol's internal 18-decimal system.

**How it works:**

1. **Deposits**: When you deposit wBTC through the frontend or directly via the BorrowerOperations contract, your wBTC is automatically wrapped into an 18-decimal token (`wWBTC`) used internally by the protocol.

2. **Withdrawals**: When you withdraw or get liquidated, the protocol automatically unwraps back to standard 8-decimal wBTC that you receive in your wallet.

3. **Seamless Integration**: The wrapper contract (`wbtcWrapper` at `0x92e79ddea8307d54f7648bfea879a819daa97d13`) is also the collateral token address for the wBTC branch, making this conversion completely transparent to users.

4. **Zapper Contract**: The `wbtcZapper` (`0x5c77c09701b8c450d14c29d932280311935f5299`) provides additional convenience functions for one-transaction operations like opening a Trove and borrowing in a single step.

**Why this matters:**

- You only ever interact with standard wBTC tokens
- The protocol can maintain consistent 18-decimal precision internally
- All conversions happen automatically and trustlessly
- No additional steps or manual wrapping required

For technical documentation on the wrapper implementation, see the [Technical Docs](/docs/technical-docs/technical-docs-and-audits#wbtc-wrapper-implementation).

#### coGNO Governance Tokens <a href="#cogno-governance-tokens" id="cogno-governance-tokens"></a>

When you deposit GNO or osGNO as collateral in EVRO, you can use **coGNO** (Collateral GNO) tokens to maintain your voting rights in Gnosis Chain governance.

**How it works:**

1. **Deposit GNO/osGNO**: When you deposit GNO or osGNO into your Trove, your collateral is tracked by the protocol.

2. **coGNO Balance**: The coGNO token contract automatically reflects your deposited collateral amount - when you query your coGNO balance, it returns the total amount of GNO/osGNO you have deposited across all your Troves.

3. **Retain Voting Power**: You can delegate your coGNO balance to participate in Gnosis Chain governance decisions. Your voting power equals your deposited collateral amount.

4. **Always Up-to-Date**: Your coGNO balance automatically updates as you deposit or withdraw collateral - no manual claiming or management needed.

**Why this matters:**

- Keep your voice in Gnosis Chain governance while borrowing
- No opportunity cost - your GNO works for both securing loans AND governance
- Encourages long-term GNO holders to use EVRO
- Strengthens Gnosis ecosystem alignment

**Technical Note**: coGNO is a view-only ERC20 token - nothing is actually minted or transferred. The `balanceOf()` function simply queries your collateral in the protocol. This makes it gas-efficient and automatically accurate.

**Contract Addresses:**

- GNO coGNO: `0xc30fc573ec88d59328c0396115105298c12c861c`
- osGNO coGNO: `0x4356908a186e477e30c34aa09208379194324ae7`

For technical implementation details, see the [Technical Docs](/docs/technical-docs/technical-docs-and-audits#cogno-implementation).
