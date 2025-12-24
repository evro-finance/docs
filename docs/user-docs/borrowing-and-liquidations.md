---
sidebar_position: 2
---

# Borrowing & Liquidations

The Evro Protocol allows users to borrow the EVRO stablecoin, on their own terms. Borrowers can choose and adjust the rate they are willing to pay for their loans. Borrowers can choose to pay 0%, 5%, 20%, etc.. Borrowers will establish market rates in accordance with their individual risk tolerance without relying on governance or algorithm rate management. \
\
Each collateral also has its own respective borrow market which allows room for a market of rates to develop.

All of this makes for a highly capital efficient, secure and decentralized borrowing experience.

#### Troves and Collateral:&#x20;

When a borrower deposits collateral (xDAI, sDAI, GNO, osGNO, wBTC or wstETH) a Trove is created. Each Trove has a particular Gnosis Chain address owner, and each owner can have multiple Troves.&#x20;

Each Trove can only have 1 type of collateral deposited in it.\
\
Each Trove allows you to manage a loan, adjusting collateral and debt values as needed, as well as setting your own interest rate.&#x20;

Troves are also transferable NFTs, and can be found in the wallet of the owner. Be cautious with this: transferring the NFT also transfers the ownership of the position.

#### What types of collateral can I use on EVRO?

EVRO accepts the following collaterals:

- wBTC (Gnosis Bridged wBTC)&#x20;
- osGNO (Stakewise Staked GNO)&#x20;
- GNO (Gnosis DAO Governance Token)&#x20;
- sDAI (Savings DAI )&#x20;
- xDAI&#x20;
- wstETH

New collateral types can never be added. But existing ones can be removed, or re-added, based on risk factors.

#### Is there a minimum debt?

Yes, a minimum debt of 2000 EVRO is required for borrowing.

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

Evro primarily uses a combination of Chainlink push-based market oracles and LST exchange rates to price collateral. Oracles to prevent value leakage and maintain proper price feeds for our collaterals. Chainlink is also used as a backup in some cases. Check out the [oracles](https://docs.evro.finance/docs/technical-documentation/oracles) section for more info. <mark>LINK TO BE UPDATED HERE</mark>&#x20;

Troves get liquidated if the LTV goes above the maximum value.

Evro uses Stability Pools as its primary liquidation mechanism to absorb liquidated debt and collateral. Each borrow-market has its own dedicated Stability Pool earning liquidation gains (in the respective collateral) in exchange for burning debt. That means Stability Pool depositors earn 100% of the fees from liquidations on the protocol, and earn those fees in the liquidated collateral (for example, GNO).

Just-In-Time liquidations and a redistribution of debt and collateral across borrowers of the same market handle liquidations as a last resort if the Stability Pool were ever empty. <mark>this sections feels confusing to me, perhaps we can improve on it</mark>&#x20;

A liquidated borrower usually incurs a penalty of 5% and will be able to claim the remaining collateral after liquidation.&#x20;

<mark>A special case is when a Redistribution is necessary, then:</mark>

- <mark>For ETH, the loss amounts to 10% of the debt (at most). That corresponds to a max. loss of 9.09% expressed in terms of collateral.</mark>
- <mark>For rETH/wstETH the loss is 20% of the debt, corresponding to a max. loss of 16.67% expressed in terms of collateral. - THESE DON'T APPLY, BUT DO WE HAVE ANY SPECIAL CONDITIONS WE WANNA ADDRESS HERE?</mark>

![Chart](https://github.com/user-attachments/assets/4a46b158-c13c-47b5-8e8e-bf4fc3128ab5)

#### How am I compensated for liquidating a Trove? <a href="#how-am-i-compensated-for-liquidating-a-trove" id="how-am-i-compensated-for-liquidating-a-trove"></a>

The liquidation of Troves is connected with certain gas costs which the initiator has to cover. The protocol offers a gas compensation given by the following formula:

`0.0375 WXDAI + min(0.5% trove_collateral, 2_units_of_LST_or_WXDAI)`

The `0.001 WXDAI` is funded by a [refundable gas deposit](https://docs.evro.finance/docs/user-docs/borrowing-and-liquidations#what-is-the-refundable-gas-deposit) while the variable `0.5%` part comes from the liquidated collateral, slightly reducing the liquidation gain for Stability Providers. &#x20;

#### What is the max Loan-To-Value (LTV)? <a href="#what-is-the-max-loan-to-value-ltv" id="what-is-the-max-loan-to-value-ltv"></a>

That depends on the collateral type you will use.

xDAI has an LTV of 90.91% while other assets have other LTVs. Check out the full [Collateral Parameters](https://docs.evro.finance/docs/technical-documentation/collaterals) chart for all details on current settings. <mark>LINK TO BE UPDATED HERE</mark>&#x20;

#### What is the refundable gas deposit? <a href="#what-is-the-refundable-gas-deposit" id="what-is-the-refundable-gas-deposit"></a>

To open a new Trove, the protocol requires a liquidation reserve of 0.001 xDAI regardless of the chosen collateral, which is set aside to cover the gas costs of a potential liquidation. The deposit is returned when the Trove is closed by the user (including upon redemptions). The deposit goes to liquidation bots if a trove is liquidated. <mark>Recheck how are we going to do this with xDAI as our gas token, and what the final amounts will be</mark>&#x20;

#### How much will I pay for my loan? <a href="#how-much-will-i-pay-for-my-loan" id="how-much-will-i-pay-for-my-loan"></a>

When creating a new position or increasing the amount borrowed, borrowers pay the first week of interest up front to prevent the protocol from leaking value to arbitrage bots. Other than this minimal protection, Evro has no upfront fees. Instead, you pay interest on an ongoing basis, making it suitable for short-term loans as well.

The interest you pay is determined by the rate you set yourself. For example, if you borrow 10,000 Evro at a 5% interest rate, you'll pay \~500 EVRO in interest after one year. This interest is added to your outstanding debt.

#### What are user-set rates? <a href="#what-are-user-set-rates" id="what-are-user-set-rates"></a>

On Evro, users set their own interest rates, giving them full control over costs and improving predictability. This feature allows for adaptability to various market conditions and helps stabilize EVRO's peg.

User-set interest rates facilitate a capital-efficient equilibrium between EVRO borrowers and holders in a fully market-driven manner. Additionally, these rates serve as the primary revenue source for EVRO holders, generating a continuous, sustainable real yield for EVRO depositors and liquidity providers.

Borrowers should set their rates based on their [redemption](https://docs.evro.finance/docs/user-docs/redemption-and-delegation#what-are-redemptions) risk tolerance. <mark>LINKs TO BE UPDATED HERE</mark>&#x20;

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

![Rate](https://github.com/user-attachments/assets/2dd663be-fae8-4290-9d60-0d5f7f71089a)

<mark>IMAGE TO BE UPDATED HERE</mark> \
Redemptions usually occur when EVRO is trading below 1 EUR minus the current redemption fee. Keeping an eye on the past [redemption activity](https://dune.com/liquity/liquity-v2#redemptions) can help you assess the overall redemption risk, serving as an additional data point for your rate selection. <mark>LINK AND IMAGE TO BE UPDATED HERE</mark>&#x20;

In general, those willing to actively monitor their positions, or borrowing for shorter periods of time, may opt for lower rates. Conversely users optimizing for a more passive, long-term position would be better off with setting a higher relative interest rate.

#### What could the average interest rate be? <a href="#what-could-the-average-interest-rate-be" id="what-could-the-average-interest-rate-be"></a>

These will be set, continuously, by the market and will vary over time. We would expect that, on average, rates should be similar to borrowing on Sky or Aave using ETH or staked ETH. However, due to the flexibility of user-set rates, it is possible that some users will pay significantly lower rates during certain periods.

Given that 75% of the interest revenue is directly paid out to EVRO depositors, we further expect that stablecoin deposit yields should be comparable, if not higher than what competing CDP's and lending markets offer. Thanks to the attractiveness of EVRO and assuming the emergence of external use cases (monetary premium), this could lead to lower borrow rates overall than offered by other platforms. Learn more about the spread between borrowers and lenders in this [article](https://www.liquity.org/blog/liquity-v2-a-de-facto-reference-rate-for-defi) by Liquity V2.

#### What determines the riskiness of my Trove? <a href="#what-determines-the-riskiness-of-my-trove" id="what-determines-the-riskiness-of-my-trove"></a>

There are two key parameters to consider:

- **Loan-to-value (LTV)**: This is based on your debt-to-collateral ratio and affects your risk of [liquidation](https://docs.evro.finance/docs/user-docs/borrowing-and-liquidations#how-do-liquidations-work-in-evro). <mark>INTERNAL LINK TO BE UPDATED HERE</mark>&#x20;
- **Interest rate (IR)**: You set this rate yourself, and it influences your risk of being [redeemed](https://docs.evro.finance/docs/user-docs/redemption-and-delegation#what-are-redemptions). <mark>INTERNAL LINK TO BE UPDATED HERE</mark>&#x20;

You have the flexibility to set these parameters as you see fit, allowing you to control the relative riskiness of each Trove. You can create multiple Troves under the same address, enabling you to manage different risk profiles for different portions of your portfolio.

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FPtoSsrpN4nxIZviPrc1s%252FLoan%2520personas.png%3Falt%3Dmedia%26token%3D649cb0e4-eb3e-44e4-8fe6-4432dbaed967&width=768&dpr=4&quality=100&sign=bb12995f&sv=2)

<mark>IMAGE TO BE UPDATED HERE</mark>&#x20;

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

If the Stability Pool doesn't cover the full entire debt and gets completely emptied by the liquidation, the system falls back to the following liquidations modes.

The liquidator can freely choose between two fallback liquidation modes for the debt exceeding the funds in the Stability Pool:

1. Just-in-time (JIT) liquidation: the liquidator sends an amount of EVRO corresponding to the (remaining) debt in exchange for 105% of its nominal value in <mark>(staked) ETH. WHAT IS OUR ACTUAL MECHANICS FOR JIT LIQUIDATIONS?</mark>
2. Redistribution: the liquidator triggers a redistribution, through which the Trove's entire debt and collateral is redistributed to all fellow borrowers of the respective collateral market, in proportion to their own collateral amounts. Thus, the respective borrowers will receive a share of the liquidated collateral and see their debts increase proportionally.

#### Shutdown Borrow Markets <a href="#shutdown-borrow-markets" id="shutdown-borrow-markets"></a>

The system may shut down borrow markets whose total collateralization ratio (TCR) falls below 110% (for xDAI) or other amounts for other collaterals based on risk parameters. <mark>LET'S DOUBLE CHECK HOW IT AFFECTS US FOR EACH COLLATERAL</mark> The shutdown is performed by incentivizing redemptions against the respective collateral (see [this](https://liquity.gitbook.io/v2-whitepaper/liquity-v2-whitepaper/functionality-and-use-cases#c9aukpugrj32) for more details) <mark>THE LINK HERE GOES OUT TO LIQUITY'S DOCS - LET'S CHECK IF WE WANT TO KEEP THIS DEPENDENCY</mark>
