---
sidebar_position: 4
---

# Redemptions and Delegation

#### What are redemptions? <a href="#what-are-redemptions" id="what-are-redemptions"></a>

Redemptions serve the crucial purpose of keeping EVRO closely related to the value of one Euro, creating a price floor around 0.9945 EUR. They do this in a decentralized way without reliance on centralized assets, oracles, or 3rd parties.

A redemption is essentially swapping EVRO for each collateral at face value, as if 1 EVRO is exactly worth 1.00 EUR. Redemptions can be initiated by anyone, but are only profitable when EVRO is less than 1 EUR.

The redeemer sends EVRO to the protocol and in return gets a mix of collateral tokens redeemed (minus the redemption fee). The redeemed amount is split among the different collateral assets based on their current Stability Pool backing (see [link](https://docs.evro.finance/docs/user-docs/redemption-and-delegation#how-is-the-collateral-split-determined) for more info). <mark>INTERNAL LINK TO UPDATE HERE.</mark>&#x20;

![Redeption](/img/redemption_1.png)

<mark>IMAGE TO UPDATE HERE</mark>\
\
Redemptions start from the borrower paying the least interest.

Read more about how to [protect yourself](https://docs.evro.finance/docs/user-docs/redemption-and-delegation#how-can-i-stay-protected) from redemptions and what happens if [you are redeemed](https://docs.evro.finance/docs/user-docs/redemption-and-delegation#what-happens-if-my-trove-gets-redeemed). <mark>INTERNAL LINKS TO UPDATE HERE</mark>

You can also watch this [9 min video](https://www.youtube.com/watch?v=CQVmjFx987A) on redemptions by the Liquidy team.

#### What happens if two Troves have the same IR? <a href="#what-happens-if-two-troves-have-the-same-ir" id="what-happens-if-two-troves-have-the-same-ir"></a>

In this case, the "Last In, First Out" (LIFO) principle applies, meaning the Trove that set its interest rate more recently will be redeemed first.

#### When can redemptions occur? <a href="#when-can-redemptions-occur" id="when-can-redemptions-occur"></a>

A redemption can occur at any time, but will likely only happen when it is profitable to do so. This is usually the case when the price of EVRO is less than 1 EUR (minus the current redemption fee).

#### Who can initiate a redemption? <a href="#who-can-initiate-a-redemption" id="who-can-initiate-a-redemption"></a>

Any Ethereum address can initiate a redemption, provided that they have a sufficient amount of EVRO to do so. However, we expect redemptions to be mainly performed by professional bots rather than humans.

#### What happens if my Trove gets redeemed? <a href="#what-happens-if-my-trove-gets-redeemed" id="what-happens-if-my-trove-gets-redeemed"></a>

You can think of redemptions as if somebody else is repaying your debt and retrieving an equivalent amount of your collateral in return.

If your collateral is redeemed, an equivalent amount of your debt in EUR terms is repaid. The redeemer receives your collateral, less the redemption fee, which remains in your Trove. This means that at the time of redemption you have not lost any money in EUR terms, likely even made a small gain with the received redemption fee as the peg recovers.

Example with wstETH at 3000 EUR:

- Before the redemption: 10 wstETH collateral, 20000 EUR debt.
- After the redemption: 5.025 wstETH collateral, 5000 EUR debt.

You can see your collateral and debt reduced equally (in EUR terms) and the redemption fee (0.025 wstETH) being added to your collateral value.

Partially affected Troves whose debt stays above the minimum debt threshold of 2000 EVRO continue to work as before, while Troves whose debt is reduced to a lesser amount (or 0) switch to a dormant operating mode (see below for [more](https://docs.evro.finance/docs/user-docs/redemption-and-delegation#what-happens-when-redemptions-cause-a-debt-of-a-trove-to-fall-below-the-minimum-amount) info). <mark>INTERNAL LINK TO UPDATE HERE</mark>

#### How do redemptions work using three collateral assets? <a href="#how-do-redemptions-work-using-three-collateral-assets" id="how-do-redemptions-work-using-three-collateral-assets"></a>

In contrast to LUSD, EVRO is backed by a multitude of collaterals. Instead of letting the redeemer freely choose the collateral to redeem, Liquity V2 and EVRO optimize the process for economic safety. Redemptions are thus serviced through a collateral mix in a way that enhances the overall backing of EVRO.

The process starts with the Troves paying the lowest interest rates in each collateral market and continues until the full amount of EVRO is exchanged for collateral assets. Redemptions can be partial or full, as illustrated below.

<mark>In this example, the wstETH market shows a full redemption of the first Trove and a partial redemption of the second. The wstETH and ETH markets have one partial and two full redemptions, respectively UPDATE THIS TEXT TO MATCH THE UPDATED IMAGE BELOW, LET'S USE GNO RELATED EXAMPLES</mark>

![Redeemer 1](/img/redemption_2.png)

<mark>IMAGE TO UPDATE HERE</mark>

#### How is the collateral split determined? <a href="#how-is-the-collateral-split-determined" id="how-is-the-collateral-split-determined"></a>

The split is dynamic, optimizing for the economic safety of the system. The logic is straightforward: the riskier a collateral is, the more redemption volume is directed to that market. In other words, if a market's Stability Pool is relatively small compared to its total debt, it's considered riskier, as there's a higher likelihood of bad debt occurring in extreme events.

To mitigate this risk, the system redeems proportionally to the "outside debt" of each collateral type. This is calculated as the total debt borrowed against a specific collateral minus the size of the Stability Pool for that borrowing market.

Here is an example: given outside debt amounts of 100 EVRO, 50 EVRO and 100 EVRO respectively, a redemption will result in a <mark>40% (WETH), 20% (wstETH) and 40% (rETH) split. ELECT WHICH COLLATERALS TO USE HERE</mark>

![Redeemer 2](/img/redemption_3.png)

<mark>IMAGE TO UPDATE HERE</mark>

#### Is there a redemption fee? <a href="#is-there-a-redemption-fee" id="is-there-a-redemption-fee"></a>

Yes. The redemption fee mechanics are broadly the same as in Liquity V1, but with adapted parametrization leading to a faster fee decay. The redemption fee is taken as a cut of the total collateral withdrawn from the system in a redemption. Contrary to Liquity V1, (where the fee goes to the LQTY stakers) in EVRO the fee stays with the users as part of their collateral.

Redemption fees are based on the `baseRate` state variable, which is dynamically updated. The `baseRate` increases with each redemption, and exponentially decays according to time passed since the last redemption (half-life of 6 hours).

Upon each redemption of x EVRO: `baseRate` is decayed based on time passed since the last fee event and incremented by an amount proportional to the fraction of the total EVRO supply to be redeemed, i.e. `x/total_evro_supply`

The redemption fee percentage is given by `min (0.5% + baseRate, 100%)`.

<figure><img src="/img/dune_dashboard.png" alt="" /><figcaption><p>The redemption fee (red line) follows this dynamic over time as redemptions occur (blue bars).</p></figcaption></figure>

<mark>IMAGE DOESN'T NEED FULL UPDATE, BUT PUTTING SOME BRANDING ON IT WOULD BE NICE</mark>

#### How can I stay protected? <a href="#how-can-i-stay-protected" id="how-can-i-stay-protected"></a>

The risk of redemption depends on two factors: the interest rate you set and the price of EVRO at any given time.

**The interest rate** you set determines how much EVRO must be redeemed before it's your turn. The higher your rate, the more EVRO is redeemable before you, and vice versa.

You can see this in the frontend, in the example below the number is 352k

![Rate](/img/interest_rate.png)

<mark>IMAGE TO UPDATE HERE - we don't have rate management</mark>\
\
This means that <mark>352k EVRO match this to whatever we have on the image</mark> must be removed from the system before it would reach you. However, this number is relative, and you also need to consider recent redemption activity. While past events don't guarantee future outcomes, they can serve as a useful guide.

For example, if only 100K EVRO were redeemed in the last week, you're comparatively safer than if 1M were redeemed.

**The price of EVRO** is the second crucial factor. When it trades above 1 EUR, redemptions become unprofitable and should cease. If demand for EVRO is strong, it could maintain a price above 1 EUR for an extended period.

During such times, you can comfortably reduce the interest rate you're paying without increasing your risk of redemption.

#### What is delegation of interest rates? <a href="#what-is-delegation-of-interest-rates" id="what-is-delegation-of-interest-rates"></a>

Interest rate delegation is a feature in Liquity V2 that we've chosen to not deploy on our EVRO friendly fork, not only at the interest of simplicity but to discourage any type of financial service being provided through our protocol.&#x20;

Borrowers should thus keep an eye on the interest rate they've set and state of the protocol.

#### Why are redemptions not a feature of both LTV & interest rate, but only interest rate? <a href="#why-are-redemptions-not-a-feature-of-both-ltv--interest-rate-but-only-interest-rate" id="why-are-redemptions-not-a-feature-of-both-ltv--interest-rate-but-only-interest-rate"></a>

Given that the _raison d'etre_ for redemptions is to diminish EVRO supply in response to reduced demand, and interest rates drive demand, rate-based redemption processing is a more sustainable and effective lever to reach market equilibrium. Actively managing for both interest rate and LTV would weaken the ability to enforce market-level interest rates and deposit yields, while complicating the process for the system and its users

#### What's the difference in redemption fees charged between Liquity V1 and EVRO? <a href="#whats-the-difference-in-redemption-fees-charged-between-liquity-v1-and-evro" id="whats-the-difference-in-redemption-fees-charged-between-liquity-v1-and-evro"></a>

In v2, when borrowers are affected by redemptions, the redemption fee charged to the redeemer stays within the affected Troves instead of being diverted (as it would happen in Liquity).

So, in Liquity the `borrower_loss = redemption_fee + redeemer_gain`, while in EVRO it's `borrower_loss = redeemer_gain`.

#### What happens when redemptions cause a debt of a Trove to fall below the minimum amount? <a href="#what-happens-when-redemptions-cause-a-debt-of-a-trove-to-fall-below-the-minimum-amount" id="what-happens-when-redemptions-cause-a-debt-of-a-trove-to-fall-below-the-minimum-amount"></a>

If the redeemed amount exceeds the debt of an affected Trove, it doesn't get closed as in Liquity V1, but remains open with 0 EVRO debt and the remaining collateral. The owner of a fully redeemed Trove may close it by withdrawing the remaining collateral, or borrow again to bring its debt above the minimum of 2000 EVRO, topping up its collateral if needed.

In the scenario that the redeemed amount of a Trove does not exceed the debt of a Trove, but would leave it between 0 and 2000 EVRO, the Trove would remain open with the remaining debt, and the remaining collateral. The owner of the Trove may close it by paying off the remaining debt and withdrawing the remaining collateral, or borrow anew as described above.

#### How to redeem EVRO for collateral using [Gnosis Scan](https://gnosisscan.io/) <a href="#how-to-redeem-usnd-for-collateral-mix-of-eth-reth-and-wsteth-using-etherscan" id="how-to-redeem-usnd-for-collateral-mix-of-eth-reth-and-wsteth-using-etherscan"></a>

**Step 1**

To redeem EVRO you first have to give the CollateralRegistry contract an approval to use your EVRO using the approve() function of the EVRO <mark>token contract. Let's be badasses and link this for practicality</mark>

After connecting your wallet through "Connect to Web3", set\
spender to `CollateralRegistry address`and the amount to be at least as high as the amount you wish to redeem, adding 18 zeros.

**Example for 1000 EVRO:**

![](/img/approve.png)

<mark>IMAGE TO UPDATE HERE - Let's be cool and have the actual address + brand it nice and cute</mark>\
\
**Step 2**\
You can now redeem EVRO using the `CollateralRegistry` contract:

[<mark>(insert CollateralRegistry address after deployment)</mark>](https://docs.evro.finance/docs/user-docs/redemption-and-delegation) <mark>INTERNAL LINK TO UPDATE HERE</mark>\
Simply input the EVRO amount to redeem, the redemption fee percentage you are willing to accept and the maximum number of list iterations per collateral (limits the number of troves whose debt can be repaid on each branch).

Note: The redemption fee must be higher than the current fee.

**Example**

`_boldAmount:` amount to redeem \* 1e18

`_maxIterationsPerCollateral:` 0

`_maxFeePercentage:` 1% \* 1e16, i.e. 1000000000000000000\
\
<mark>CODE TEXT HERE MENTIONS BOLD - I IMAGINE WE HAVE TO CHANGE IT</mark>

![](/img/redeem.png)

<mark>IMAGE TO UPDATE HERE - Let's be cool and have the actual NAMES + brand it nice and cute</mark>
