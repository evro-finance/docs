---
sidebar_position: 1
---

# Technical Docs & Audits

## Technical Papers

[Liquity v2 Whitepaper](<https://bafybeibjommrelqjw22vewpddgfdnm5geoz747gv2zeuy7njwivpfcy3xa.ipfs.w3s.link/Liquity%20v2%20-%20Whitepaper%20rev.%200.3%20(November%2C%202024)%20(1).pdf>) - EVRO is built on Liquity v2 principles

## Code Base

**EVRO Protocol:**
- [EVRO Core Repository](https://github.com/evro-finance/evro/tree/main/contracts) - Main protocol contracts
- [EVRO Frontend](https://github.com/evro-finance/evro/tree/main/frontend) - User interface

**Liquity v2 (Base Protocol):**
- [BOLD Core](https://github.com/liquity/bold) - Base protocol EVRO is forked from
- [Liquity Governance](https://github.com/liquity/V2-gov/tree/main)

## Audit Reports

### EVRO-Specific Audits

- **[Sherlock - EVRO Finance Collaborative Audit](https://sherlock-files.ams3.digitaloceanspaces.com/reports/2026.01.18%20-%20Final%20-%20Evro%20Finance%20Collaborative%20Audit%20Report%201768704551.pdf)**, December 2025
  - Lead Auditors: 0x37 and 0xSimao
  - Scope: EVRO-specific modifications including CoGNO token, WBTCWrapper, price feeds for GNO/osGNO/sDAI/wstETH, and zappers
  - Findings: 3 High, 5 Medium, 3 Low (all resolved)
  - [GitHub Release](https://github.com/evro-finance/evro/releases/tag/audit-report)

### Liquity v2 Base Protocol Audits

EVRO inherits the security guarantees of Liquity v2, which has undergone extensive auditing:

- [ChainSecurity - Code Assessment](https://www.chainsecurity.com/security-audit/liquity-bold-smart-contracts) — several audits between Aug 2024 and May 2025
- [Dedaub - Core Protocol Audit Report I](https://dedaub.com/audits/liquity/liquity-v2-aug-28-2024/), August 2024
- [Dedaub - Core Protocol Audit Report II](https://dedaub.com/audits/liquity/liquity-v2-second-audit-nov-11-2024/), November 2024
- [Certora - Formal Verification](https://certora.cdn.prismic.io/certora/Z1tLJJbqstJ98b8J_LiquityVerificationReport.pdf), December 2024
- [Coinspect - Bold Core Smart Contract Audit](https://www.coinspect.com/doc/Coinspect%20-%20Smart%20Contract%20Audit%20-%20Liquity%20-%20Bold%20-%20v241231.pdf), December 2024
- [Coinspect - Bold Governance Audit](https://www.coinspect.com/doc/Coinspect%20-%20Smart%20Contract%20Audit%20-%20Liquity%20-%20Bold%20Governance%20-%20v250120.pdf), January 2025
- [ChainSecurity - Governance Smart Contract Audit](https://www.chainsecurity.com/security-audit/liquity-v2-governance), January 2025
- [Dedaub - Governance Audit 1](https://dedaub.com/audits/liquity/liquity-v2-governance-1st-audit-aug-12-2024/), August 2024
- [Dedaub - Governance Audit 2](https://dedaub.com/audits/liquity/liquity-v2-governance-2nd-audit-nov-11-2024/), November 2024
- [Dedaub - Governance Audit 3](https://dedaub.com/audits/liquity/liquity-v2-governance-3rd-audit-dec-22-2024/), January 2025
- [Recon - Liquity Security Review](https://github.com/GalloDaSballo/bold-review), October 2024
- [Dedaub - Cantina fixes review](https://dedaub.com/audits/liquity/liquity-v2-cantina-fixes-review-may-13-2025/), May 2025
- [Cantina Competition](https://cantina.xyz/portfolio/fca4f98a-7d24-49f1-9a3b-80e5e65b2b30), March-April 2025
- [Coinspect - Redemption Helper](https://drive.google.com/file/d/1tKLYZj_peUnUKCBmfWbmdi1KvCYJ7WfV/view), October 2025

## Economic Modelling and Simulation

- [Chaos Labs: Mechanism Design Review](https://cdn.sanity.io/files/zmh9mnff/production/ca6a4815e62b05f33fb3ec56c5a4c42d6b7ddbec.pdf), October 2024

## Contract Addresses
#### Contract addresses

**Network: Gnosis Chain (Chain ID: 100)**

**EVRO Token**
- EVRO Token: [0xdaca5f19e7a33277dc7477067f200ea735dc6982](https://gnosisscan.io/address/0xdaca5f19e7a33277dc7477067f200ea735dc6982)

**Shared contracts**
- collateralRegistry: [0x9ae5b0cf832391040af0873c97c4bb4b9a397680](https://gnosisscan.io/address/0x9ae5b0cf832391040af0873c97c4bb4b9a397680)
- evroToken: [0xdaca5f19e7a33277dc7477067f200ea735dc6982](https://gnosisscan.io/address/0xdaca5f19e7a33277dc7477067f200ea735dc6982)
- hintHelpers: [0xcf761070094b74c15a10a062d97f3c13ed509c2f](https://gnosisscan.io/address/0xcf761070094b74c15a10a062d97f3c13ed509c2f)
- multiTroveGetter: [0x143bf8f09461631cde4b9b4dd86fa62a3632ac26](https://gnosisscan.io/address/0x143bf8f09461631cde4b9b4dd86fa62a3632ac26)
- debtInFrontHelper: [0x219b3be8518a9d285aa8f8ce2deadfe4e004c3c4](https://gnosisscan.io/address/0x219b3be8518a9d285aa8f8ce2deadfe4e004c3c4)

**WXDAI branch**
- collToken: [0xe91d153e0b41518a2ce8dd3d7944fa863463a97d](https://gnosisscan.io/address/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d)
- addressesRegistry: [0x1f498bf36e334bbecf3b3fbfed89dceace00265d](https://gnosisscan.io/address/0x1f498bf36e334bbecf3b3fbfed89dceace00265d)
- activePool: [0x474846384cfddf9d225fae1f434e1b427fb1f475](https://gnosisscan.io/address/0x474846384cfddf9d225fae1f434e1b427fb1f475)
- borrowerOperations: [0x612d2dcfb3dbc579b65a89380f1171347cc7d280](https://gnosisscan.io/address/0x612d2dcfb3dbc579b65a89380f1171347cc7d280)
- collSurplusPool: [0xdf10999b0cb4cb9a42daf2abac21b5c10537ee52](https://gnosisscan.io/address/0xdf10999b0cb4cb9a42daf2abac21b5c10537ee52)
- defaultPool: [0xc63fc7b6050c6d1569d5d63dd0a884e482228970](https://gnosisscan.io/address/0xc63fc7b6050c6d1569d5d63dd0a884e482228970)
- sortedTroves: [0xc014a390e169264fb748f43d7169e351648d3562](https://gnosisscan.io/address/0xc014a390e169264fb748f43d7169e351648d3562)
- stabilityPool: [0x26a47c21e26b315b8e536dca87ba918e49713b7e](https://gnosisscan.io/address/0x26a47c21e26b315b8e536dca87ba918e49713b7e)
- troveManager: [0x5fb05da0545a7c7787f0091df80a246f8dc43a3d](https://gnosisscan.io/address/0x5fb05da0545a7c7787f0091df80a246f8dc43a3d)
- troveNFT: [0xe17d301373e57a737dc60764d50e32be820416eb](https://gnosisscan.io/address/0xe17d301373e57a737dc60764d50e32be820416eb)
- metadataNFT: [0xbf7506556cc28790a1aced4483648435e9aadf94](https://gnosisscan.io/address/0xbf7506556cc28790a1aced4483648435e9aadf94)
- priceFeed: [0x1005ee26571b1af17efbad0d7417edc08ff626c1](https://gnosisscan.io/address/0x1005ee26571b1af17efbad0d7417edc08ff626c1)
- gasPool: [0x07e8baa1c99a112e3623bdae85712e106bb538ba](https://gnosisscan.io/address/0x07e8baa1c99a112e3623bdae85712e106bb538ba)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- wethZapper: [0xb47884655ec6dd2822afd5de04860fa0a2187c59](https://gnosisscan.io/address/0xb47884655ec6dd2822afd5de04860fa0a2187c59)

**GNO branch**
- collToken: [0x9c58bacc331c9aa871afd802db6379a98e80cedb](https://gnosisscan.io/address/0x9c58bacc331c9aa871afd802db6379a98e80cedb)
- addressesRegistry: [0x0a0135f8138f2747e758d6ac6acd8d9e2fad38d7](https://gnosisscan.io/address/0x0a0135f8138f2747e758d6ac6acd8d9e2fad38d7)
- activePool: [0xcdff1d2660668566e81433edadd9a212869cc17a](https://gnosisscan.io/address/0xcdff1d2660668566e81433edadd9a212869cc17a)
- borrowerOperations: [0xc87b8baad859196418e255bcbc7ed732c39e191f](https://gnosisscan.io/address/0xc87b8baad859196418e255bcbc7ed732c39e191f)
- collSurplusPool: [0x4a89dc78df3b72e1b5f4d5381e619ab8464e18f3](https://gnosisscan.io/address/0x4a89dc78df3b72e1b5f4d5381e619ab8464e18f3)
- defaultPool: [0xb58585173f69da23028abf4f4c93cc93bcb668db](https://gnosisscan.io/address/0xb58585173f69da23028abf4f4c93cc93bcb668db)
- sortedTroves: [0x981a02639a60c0c3adf818de89d4f99f7a3ac49a](https://gnosisscan.io/address/0x981a02639a60c0c3adf818de89d4f99f7a3ac49a)
- stabilityPool: [0x9917aba496240fa29c10f1f6312eb83abb749b58](https://gnosisscan.io/address/0x9917aba496240fa29c10f1f6312eb83abb749b58)
- troveManager: [0x91c287b9d31dbaee9ea62bd6b5ea76461c5962af](https://gnosisscan.io/address/0x91c287b9d31dbaee9ea62bd6b5ea76461c5962af)
- troveNFT: [0xf6d7ceb2d77a6320ea7f1c9e136e9c6bb67677df](https://gnosisscan.io/address/0xf6d7ceb2d77a6320ea7f1c9e136e9c6bb67677df)
- metadataNFT: [0x7c95025dc46bc8a7914023fc3015e1b9c9a8061f](https://gnosisscan.io/address/0x7c95025dc46bc8a7914023fc3015e1b9c9a8061f)
- priceFeed: [0x43d0114085b4b878d8d850401670e818e53045d4](https://gnosisscan.io/address/0x43d0114085b4b878d8d850401670e818e53045d4)
- gasPool: [0xa91ec7df73739a2b52ca0a6a66aea8a5371b720b](https://gnosisscan.io/address/0xa91ec7df73739a2b52ca0a6a66aea8a5371b720b)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- gasCompZapper: [0x3bf218c559c1e49debf444fcd149e67eaacef5ba](https://gnosisscan.io/address/0x3bf218c559c1e49debf444fcd149e67eaacef5ba)
- coGNO: [0x25c9f20fbb313f4138a0f156ee4120fa87d81b6b](https://gnosisscan.io/address/0x25c9f20fbb313f4138a0f156ee4120fa87d81b6b)

**sDAI branch**
- collToken: [0xaf204776c7245bf4147c2612bf6e5972ee483701](https://gnosisscan.io/address/0xaf204776c7245bf4147c2612bf6e5972ee483701)
- addressesRegistry: [0xf46e9f0603be393e5bbadb251661c232e8a6d343](https://gnosisscan.io/address/0xf46e9f0603be393e5bbadb251661c232e8a6d343)
- activePool: [0x0af79e581a35fac9495f05752ea4cab8abc1b7d4](https://gnosisscan.io/address/0x0af79e581a35fac9495f05752ea4cab8abc1b7d4)
- borrowerOperations: [0x6e50fe6bfa4e69bf6dc32d3a95a63fc2fcb5ed01](https://gnosisscan.io/address/0x6e50fe6bfa4e69bf6dc32d3a95a63fc2fcb5ed01)
- collSurplusPool: [0xdb55d03fe62fdd8055dfa1d4594e5f896b37ff45](https://gnosisscan.io/address/0xdb55d03fe62fdd8055dfa1d4594e5f896b37ff45)
- defaultPool: [0xc3abb6753f86bab11283f253e1286f235561c5bb](https://gnosisscan.io/address/0xc3abb6753f86bab11283f253e1286f235561c5bb)
- sortedTroves: [0x49f6ada0c84930dd7465c26682072e4d5ead8377](https://gnosisscan.io/address/0x49f6ada0c84930dd7465c26682072e4d5ead8377)
- stabilityPool: [0x2e687202b71eecf3dfaa846a2a96096efa5d6df2](https://gnosisscan.io/address/0x2e687202b71eecf3dfaa846a2a96096efa5d6df2)
- troveManager: [0xbe035f27600a2db1988916ed97c2cfe6d2674970](https://gnosisscan.io/address/0xbe035f27600a2db1988916ed97c2cfe6d2674970)
- troveNFT: [0x7bb0b1a7b69d84261c7c0206c3c3030e0d2b24a6](https://gnosisscan.io/address/0x7bb0b1a7b69d84261c7c0206c3c3030e0d2b24a6)
- metadataNFT: [0xa0907687f90a0d5324841bdaebcae39e9e239e8b](https://gnosisscan.io/address/0xa0907687f90a0d5324841bdaebcae39e9e239e8b)
- priceFeed: [0xe788056d838e669b618d7393e36e6469b1e3c9c8](https://gnosisscan.io/address/0xe788056d838e669b618d7393e36e6469b1e3c9c8)
- gasPool: [0xba0631750010489f5264440aa598b988e79661f5](https://gnosisscan.io/address/0xba0631750010489f5264440aa598b988e79661f5)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- gasCompZapper: [0xcdffc42d1c1b74cf82144c13a344dcf6a3beb004](https://gnosisscan.io/address/0xcdffc42d1c1b74cf82144c13a344dcf6a3beb004)

**WBTC branch**
- wbtcWrapper: [0xcfa17d000980085f13ae66beb68a3fee48fab8ec](https://gnosisscan.io/address/0xcfa17d000980085f13ae66beb68a3fee48fab8ec)
- collToken: [0xcfa17d000980085f13ae66beb68a3fee48fab8ec](https://gnosisscan.io/address/0xcfa17d000980085f13ae66beb68a3fee48fab8ec)
- addressesRegistry: [0x141a378b59db0cc54eef1b885db6e7dd945e3bd4](https://gnosisscan.io/address/0x141a378b59db0cc54eef1b885db6e7dd945e3bd4)
- activePool: [0xd3f50aa899673999c45d422955df070fdeec42f6](https://gnosisscan.io/address/0xd3f50aa899673999c45d422955df070fdeec42f6)
- borrowerOperations: [0xfc9f712acc707bbe6124b21c1e0dc335f745a2b4](https://gnosisscan.io/address/0xfc9f712acc707bbe6124b21c1e0dc335f745a2b4)
- collSurplusPool: [0x6a5f0d7e1359b00c61d38db23dac47c8558261e9](https://gnosisscan.io/address/0x6a5f0d7e1359b00c61d38db23dac47c8558261e9)
- defaultPool: [0x878028f9ea9f5a801d2ac6094a8e1b0cc28027bd](https://gnosisscan.io/address/0x878028f9ea9f5a801d2ac6094a8e1b0cc28027bd)
- sortedTroves: [0x61aeb7a5a3ada3272f517be625438a6bedb1c3b4](https://gnosisscan.io/address/0x61aeb7a5a3ada3272f517be625438a6bedb1c3b4)
- stabilityPool: [0xe7f7e850e7b211d41e29a31a9e7938dfcd934539](https://gnosisscan.io/address/0xe7f7e850e7b211d41e29a31a9e7938dfcd934539)
- troveManager: [0x83571b02fb04a92ba505843c07aa865c5ec1b131](https://gnosisscan.io/address/0x83571b02fb04a92ba505843c07aa865c5ec1b131)
- troveNFT: [0x288aa112a2f8e0ebd4bc797690ed27752285d42f](https://gnosisscan.io/address/0x288aa112a2f8e0ebd4bc797690ed27752285d42f)
- metadataNFT: [0xe91b0d12074c17f00ddee02246efbf82d605353a](https://gnosisscan.io/address/0xe91b0d12074c17f00ddee02246efbf82d605353a)
- priceFeed: [0x3d37b30088068ed9850d1312cd9e7e183795274f](https://gnosisscan.io/address/0x3d37b30088068ed9850d1312cd9e7e183795274f)
- gasPool: [0xbc9fb227f36feabb2db5d1599d8c071800de936b](https://gnosisscan.io/address/0xbc9fb227f36feabb2db5d1599d8c071800de936b)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- wbtcZapper: [0xdf5f4c29187f3ef222b6a734ef1d2860a43e9585](https://gnosisscan.io/address/0xdf5f4c29187f3ef222b6a734ef1d2860a43e9585)

**osGNO branch**
- collToken: [0xf490c80aae5f2616d3e3bda2483e30c4cb21d1a0](https://gnosisscan.io/address/0xf490c80aae5f2616d3e3bda2483e30c4cb21d1a0)
- addressesRegistry: [0x5557dc30fbc65f5f6367f1066b30f7d4ad22bf65](https://gnosisscan.io/address/0x5557dc30fbc65f5f6367f1066b30f7d4ad22bf65)
- activePool: [0x83cc967a3e6d6e4b9fb28428c65fedec01a86830](https://gnosisscan.io/address/0x83cc967a3e6d6e4b9fb28428c65fedec01a86830)
- borrowerOperations: [0xb09050abd02e9d728fca57e836f821fa4830ce6a](https://gnosisscan.io/address/0xb09050abd02e9d728fca57e836f821fa4830ce6a)
- collSurplusPool: [0x33067a34e1809592dd32cae6c8b6f6ce46321eb5](https://gnosisscan.io/address/0x33067a34e1809592dd32cae6c8b6f6ce46321eb5)
- defaultPool: [0xb1896e3c0e0746298d58a120aa7293e9ba5e7788](https://gnosisscan.io/address/0xb1896e3c0e0746298d58a120aa7293e9ba5e7788)
- sortedTroves: [0x3aa2c64c2c04ee1a5614dd8fd20f490b621d6f62](https://gnosisscan.io/address/0x3aa2c64c2c04ee1a5614dd8fd20f490b621d6f62)
- stabilityPool: [0x8bada3ae3dd00f6fc2b4a5705a612b5582316a83](https://gnosisscan.io/address/0x8bada3ae3dd00f6fc2b4a5705a612b5582316a83)
- troveManager: [0x364173c1b46f6fc8c12eabfe02ea8b2acde3f2fb](https://gnosisscan.io/address/0x364173c1b46f6fc8c12eabfe02ea8b2acde3f2fb)
- troveNFT: [0x4e6afedf44565f8d597fb3586de6bdb1be83083b](https://gnosisscan.io/address/0x4e6afedf44565f8d597fb3586de6bdb1be83083b)
- metadataNFT: [0x345b41c4f095d89b9bcddfd827adddfd8f5ea3ba](https://gnosisscan.io/address/0x345b41c4f095d89b9bcddfd827adddfd8f5ea3ba)
- priceFeed: [0x9daf46e260fcf82d41876fec711897cbf8146e96](https://gnosisscan.io/address/0x9daf46e260fcf82d41876fec711897cbf8146e96)
- gasPool: [0x74561574cfad7f99c92add9c23e35078881152d5](https://gnosisscan.io/address/0x74561574cfad7f99c92add9c23e35078881152d5)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- gasCompZapper: [0xc53baeb564660bb58a401583fccb34753ba28e82](https://gnosisscan.io/address/0xc53baeb564660bb58a401583fccb34753ba28e82)
- coGNO: [0xde00fcf678bc7220964879552ea9e9679f227e5f](https://gnosisscan.io/address/0xde00fcf678bc7220964879552ea9e9679f227e5f)

**wstETH branch**
- collToken: [0x6c76971f98945ae98dd7d4dfca8711ebea946ea6](https://gnosisscan.io/address/0x6c76971f98945ae98dd7d4dfca8711ebea946ea6)
- addressesRegistry: [0xd36d8ee44c5be128706910a8d75ea9845bdbd906](https://gnosisscan.io/address/0xd36d8ee44c5be128706910a8d75ea9845bdbd906)
- activePool: [0xf4aa4b75bea0ff80408909260eecde1408e87874](https://gnosisscan.io/address/0xf4aa4b75bea0ff80408909260eecde1408e87874)
- borrowerOperations: [0x8228b4918380164dea7b2e3d0abde5ab6046fd24](https://gnosisscan.io/address/0x8228b4918380164dea7b2e3d0abde5ab6046fd24)
- collSurplusPool: [0x7f1d5988d9d9b99fb46de084011697896a57334e](https://gnosisscan.io/address/0x7f1d5988d9d9b99fb46de084011697896a57334e)
- defaultPool: [0x2e7482b0400568a1d7733778899da08c0f2af174](https://gnosisscan.io/address/0x2e7482b0400568a1d7733778899da08c0f2af174)
- sortedTroves: [0x82cb0249d3a76b5450b39a827db528654628766f](https://gnosisscan.io/address/0x82cb0249d3a76b5450b39a827db528654628766f)
- stabilityPool: [0xfe3155bc651424d10a044a32a05a0772c0351922](https://gnosisscan.io/address/0xfe3155bc651424d10a044a32a05a0772c0351922)
- troveManager: [0xf9419cbb1edc917eda8ea0addb08ddcc0213dc9d](https://gnosisscan.io/address/0xf9419cbb1edc917eda8ea0addb08ddcc0213dc9d)
- troveNFT: [0x313b2abcae8a05a1113f26c4726ec2a4c76475b5](https://gnosisscan.io/address/0x313b2abcae8a05a1113f26c4726ec2a4c76475b5)
- metadataNFT: [0xa6db3f5beec3a1e103bac2f5edb9be35fe2afc11](https://gnosisscan.io/address/0xa6db3f5beec3a1e103bac2f5edb9be35fe2afc11)
- priceFeed: [0x69ff01d18488425ce8bde5104e9ee998ae981687](https://gnosisscan.io/address/0x69ff01d18488425ce8bde5104e9ee998ae981687)
- gasPool: [0x16d02fc7740e90bf415025ec9e04a85934f431bb](https://gnosisscan.io/address/0x16d02fc7740e90bf415025ec9e04a85934f431bb)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- gasCompZapper: [0x712e2e94308e68b1f00cef467f400b095396a1c1](https://gnosisscan.io/address/0x712e2e94308e68b1f00cef467f400b095396a1c1)

**Governance**
- governance: [0xdd100e25ef57fb43fd17a14ae62b273e9cc0d890](https://gnosisscan.io/address/0xdd100e25ef57fb43fd17a14ae62b273e9cc0d890)

## wBTC Wrapper Implementation <a href="#wbtc-wrapper-implementation" id="wbtc-wrapper-implementation"></a>

EVRO uses a specialized wrapper contract to handle wBTC (8 decimals) and convert it to an 18-decimal token for internal protocol use.

### Contract Addresses

- **wbtcWrapper**: [0xcfa17d000980085f13ae66beb68a3fee48fab8ec](https://gnosisscan.io/address/0xcfa17d000980085f13ae66beb68a3fee48fab8ec)
- **wbtcZapper**: [0xdf5f4c29187f3ef222b6a734ef1d2860a43e9585](https://gnosisscan.io/address/0xdf5f4c29187f3ef222b6a734ef1d2860a43e9585)

### How It Works

**Wrapper Contract (`wbtcWrapper`)**:
- Wraps 8-decimal wBTC into an 18-decimal ERC20 token (`wWBTC`)
- The wrapper itself acts as the collateral token for the wBTC branch
- Implements standard ERC20 interface with 18 decimals
- Maintains 1:1 convertibility (1 wBTC = 10^10 wWBTC internally)
- Users deposit wBTC → automatically wrapped to wWBTC
- Users withdraw wWBTC → automatically unwrapped to wBTC

**Zapper Contract (`wbtcZapper`)**:
- Provides convenience functions for one-transaction operations
- Enables opening a Trove and borrowing EVRO in a single transaction
- Handles all wrapping/unwrapping automatically
- Reduces gas costs by batching operations

### Technical Details

**Decimal Conversion**:
```
wBTC (8 decimals) → wWBTC (18 decimals)
1 wBTC = 1.00000000 (8 decimals)
1 wBTC = 1.000000000000000000 (18 decimals as wWBTC)
Conversion factor: 10^10
```

**User Flow**:
1. User approves wBTC to BorrowerOperations or wbtcZapper
2. User calls deposit/borrow functions with wBTC amount
3. Contract automatically wraps wBTC → wWBTC
4. wWBTC is deposited as collateral in the Trove
5. On withdrawal/liquidation, wWBTC → wBTC conversion happens automatically

**Why This Design**:
- All EVRO protocol contracts use 18-decimal math internally
- wBTC is the only 8-decimal token in the system
- The wrapper maintains consistency without modifying core protocol logic
- Trustless and transparent conversion
- No additional user steps required

### Integration Notes

Developers integrating with EVRO should:
- Use the wbtcWrapper address as the collateral token for wBTC branch
- When reading user balances, remember the wrapper shows 18-decimal values
- Frontend should display values in standard 8-decimal wBTC format for UX
- The wbtcZapper simplifies multi-step operations for better user experience

For user-facing documentation, see [wBTC Wrapper Details](/docs/user-docs/borrowing-and-liquidations#wbtc-wrapper-technical-details).

## coGNO Implementation <a href="#cogno-implementation" id="cogno-implementation"></a>

EVRO implements coGNO (Collateral GNO) as a view-only ERC20 token that allows GNO and osGNO depositors to retain their Gnosis Chain governance voting power while their assets are locked as collateral.

### Contract Addresses

**GNO Branch**:
- coGNO Token: [0x25c9f20fbb313f4138a0f156ee4120fa87d81b6b](https://gnosisscan.io/address/0x25c9f20fbb313f4138a0f156ee4120fa87d81b6b)
- GNO Collateral: [0x9c58bacc331c9aa871afd802db6379a98e80cedb](https://gnosisscan.io/address/0x9c58bacc331c9aa871afd802db6379a98e80cedb)

**osGNO Branch**:
- coGNO Token: [0xde00fcf678bc7220964879552ea9e9679f227e5f](https://gnosisscan.io/address/0xde00fcf678bc7220964879552ea9e9679f227e5f)
- osGNO Collateral: [0xf490c80aae5f2616d3e3bda2483e30c4cb21d1a0](https://gnosisscan.io/address/0xf490c80aae5f2616d3e3bda2483e30c4cb21d1a0)

### How It Works

**Token Mechanics**:
- coGNO is a **view-only ERC20 token** - no actual minting, burning, or transfers occur
- `balanceOf(address)` returns the sum of GNO/osGNO collateral across all Troves owned by that address
- `totalSupply()` returns the total collateral in the entire branch
- Non-transferable by design - all transfer functions revert
- Always reflects the current state of deposited collateral automatically

**Implementation Details**:

```solidity
// balanceOf returns actual collateral held in protocol
function balanceOf(address account) public view override returns (uint256) {
    // Query all Troves owned by account
    uint256[] memory troveIds = troveNFT.ownerToTroveIds(account);
    
    // Sum up collateral across all Troves
    uint256 totalCollateral = 0;
    for (uint256 i = 0; i < troveIds.length; i++) {
        LatestTroveData memory troveData = troveManager.getLatestTroveData(troveIds[i]);
        totalCollateral += troveData.entireColl;
    }
    
    return totalCollateral;
}

// totalSupply returns entire branch collateral
function totalSupply() public view override returns (uint256) {
    return troveManager.getEntireBranchColl();
}

// All transfers revert
function transfer(address to, uint256 amount) public override returns (bool) {
    revert("Token is non-transferable");
}
```

**User Flow**:
1. User deposits X GNO/osGNO into a Trove
2. coGNO `balanceOf(user)` now returns X (no minting event)
3. User delegates their coGNO for governance participation
4. User deposits more or withdraws collateral
5. coGNO `balanceOf(user)` automatically reflects the new amount
6. User withdraws all collateral
7. coGNO `balanceOf(user)` returns 0 (no burning event)

**Governance Integration**:
- coGNO tokens are recognized by Gnosis Chain governance contracts
- Holders can delegate their coGNO voting power to validators
- Voting weight equals the amount of GNO/osGNO deposited
- Balance automatically updates with collateral changes

### Technical Details

**View-Only Pattern Benefits**:
- **Gas Efficient**: No minting/burning transactions required
- **Always Accurate**: Balance reflects live collateral state
- **No State Changes**: Read-only operations, no storage updates needed
- **Automatic Updates**: Balance changes when collateral changes
- **Simple**: No token management or claiming required

**Security Considerations**:
- coGNO cannot be transferred, preventing collateral manipulation
- Balance calculation queries TroveManager directly (source of truth)
- No token state to corrupt or exploit
- Voting power is independent of Trove health or liquidation risk
- Multiple Troves owned by same address are automatically summed

**Edge Cases**:
- If user has multiple Troves, coGNO balance = sum of all collateral
- During liquidation, coGNO balance automatically decreases (no burn event)
- Zero balance when user has no open Troves
- Delegation persists even if collateral amount changes

### Integration Notes

**For Frontend Developers**:
- Query `coGNO.balanceOf(userAddress)` to display voting power
- No need to watch for mint/burn events (they don't exist)
- Balance updates automatically - just refresh the query
- Provide delegation interface for coGNO governance
- Display as "Governance Weight" rather than "Token Balance"

**For Governance Integrations**:
- Treat coGNO as a standard ERC20 for `balanceOf()` queries
- Use for delegation and voting weight calculations
- Don't expect Transfer events (token is non-transferable)
- Query balance on-demand for most current voting power

**For Liquidators**:
- coGNO balance automatically decreases during liquidation
- No need to interact with coGNO contract during liquidation
- Liquidator receives underlying GNO/osGNO from TroveManager
- User's coGNO balance reflects their remaining collateral post-liquidation

### Why This Design

**Problem**: Traditional lending protocols lock collateral, preventing governance participation. Minting representative tokens adds complexity, gas costs, and potential security risks.

**Solution**: Use a view-only ERC20 token where `balanceOf()` dynamically calculates voting power from actual collateral. This approach:
- **Eliminates gas costs** for minting/burning
- **Guarantees accuracy** since balance = actual collateral
- **Simplifies implementation** with no token state to manage
- **Prevents exploits** since there's no token state to manipulate
- **Maintains composability** since it's still a valid ERC20 interface

This elegant design makes EVRO particularly attractive to GNO holders and strengthens the symbiotic relationship between EVRO and Gnosis Chain, while being maximally gas-efficient and secure.

For user-facing documentation, see [coGNO Governance Tokens](/docs/user-docs/borrowing-and-liquidations#cogno-governance-tokens).

**Constants**
- ETH_GAS_COMPENSATION: 3.5 xDAI
- MIN_DEBT: 200 EVRO
- INTEREST_RATE_ADJ_COOLDOWN: 604800 seconds (7 days)
- UPFRONT_INTEREST_PERIOD: 604800 seconds (7 days)
- MAX_ANNUAL_INTEREST_RATE: 250%
- MIN_ANNUAL_INTEREST_RATE: 0.5%
- SP_YIELD_SPLIT: 75%

#### Oracles

EVRO leverages Api3's OEV (Oracle Extractable Value) oracles as its primary price feed solution. Api3 not only provides EVRO reliable, price data but also generates additional revenue for the protocol through OEV rewards. By capturing value that would otherwise leak to MEV bots and arbitrageurs, Api3's oracles help maximize protocol efficiency while maintaining robust price accuracy.

To learn more about Api3 check out this website here: [https://api3.org/](https://api3.org/)

### Oracle Addresses <a href="#oracle-addresses" id="oracle-addresses"></a>

All oracles are deployed on **Gnosis Chain**.

| Oracle Type       | Address                                      | Description                      | Provider   |
| ----------------- | -------------------------------------------- | -------------------------------- | ---------- |
| GNO/USD           | `0x9145522A13E1D3E2DFcC0B26171Aa7979a969C89` | GNO/USD price oracle             | API3       |
| osGNO/GNO         | `0x9B1b13afA6a57e54C03AD0428a4766C39707D272` | osGNO/GNO exchange rate          | API3       |
| EUR/USD           | `0xab70BCB260073d036d1660201e9d5405F5829b7a` | EUR/USD conversion rate          | Chainlink  |
| DAI/USD           | `0xA17C85dDb5623A405342D107b40218F22E4A2305` | DAI/USD price oracle             | API3       |
| sDAI/DAI          | `0x88274E698105C0eeEae2F9f3bCb17dA934EEa525` | sDAI/DAI exchange rate           | API3       |
| BTC/USD           | `0xD1913b99254F1C1292130b39cC8AF82FB6d69E1f` | BTC/USD price oracle             | API3       |
| WBTC/USD          | `0xf7DE3005c55ED9762F7B36D6272A9cCE3Bfbf7Ee` | WBTC/USD price oracle            | API3       |
| ETH/USD           | `0x81037986FeE5CD75d064521262C325F5b0D2Af06` | ETH/USD price oracle             | API3       |
| stETH/USD         | `0x686E7f54a42172Da59d616C26727d4B2a2bAa177` | stETH/USD price oracle           | API3       |
| wstETH/stETH      | `0x08333e90Ec659fdd686199bDbb491FCa7f70aC2E` | wstETH/stETH exchange rate       | API3       |
| wstETH Rate Provider | `0x0064AC007fF665CF8D0D3Af5E0AD1c26a3f853eA` | wstETH rate provider          | Chainlink  |

### Staleness Thresholds <a href="#staleness-thresholds" id="staleness-thresholds"></a>

All oracles have a **25-hour staleness threshold** to ensure price feeds remain current and reliable. If an oracle hasn't been updated within 25 hours, the protocol will revert transactions until fresh data is available.

### Oracle Providers <a href="#oracle-providers" id="oracle-providers"></a>

- **API3**: Primary oracle provider, which also pays EVRO OEV rewards
- **Chainlink**: Backup oracle provider and used for stETH/USD price feeds

### Usage <a href="#usage" id="usage"></a>

These oracles are used as part of the PriceFeeds in the EVRO protocol for:

- Collateral valuation
- Liquidation calculations
- Risk management
- Price stability monitoring

## Collateral Parameters

EVRO uses multiple collateral types, each with specific risk parameters. MCR (Minimum Collateral Ratio) is the primary requirement for each trove, with additional system-wide requirements for each collateral branch.

### Risk Parameters by Collateral

| Token  | CCR Tag | Initial Debt Limit | MCR   | SCR   | CCR   | BCR   | Max LTV | Liq. Penalty (SP) | Liq. Penalty (Redistribution) |
| ------ | ------- | ------------------ | ----- | ----- | ----- | ----- | ------- | ----------------- | ----------------------------- |
| WXDAI  | WETH    | €100M              | 110%  | 110%  | 150%  | 120%  | 90.91%  | 5%                | 10%                           |
| GNO    | GNO     | €25M               | 140%  | 115%  | 165%  | 150%  | 71.43%  | 5%                | 10%                           |
| sDAI   | SDAI    | €25M               | 130%  | 115%  | 160%  | 140%  | 76.92%  | 5%                | 10%                           |
| wWBTC  | WBTC    | €25M               | 115%  | 110%  | 150%  | 125%  | 86.96%  | 5%                | 10%                           |
| osGNO  | OSGNO   | €25M               | 140%  | 115%  | 165%  | 150%  | 71.43%  | 5%                | 10%                           |
| wstETH | SETH    | €25M               | 130%  | 115%  | 160%  | 140%  | 76.92%  | 5%                | 20%                           |

**Key Definitions:**
- **MCR** (Minimum Collateral Ratio): Individual trove liquidation threshold
- **SCR** (Shutdown Collateral Ratio): Threshold for emergency shutdown of a collateral branch
- **CCR** (Critical Collateral Ratio): System-wide recovery mode threshold
- **BCR** (Batch Collateral Ratio): MCR + 10% buffer for batch operations
- **Max LTV** (Loan-to-Value): Maximum borrowing capacity (1/MCR)
- **Liq. Penalty (SP)**: Penalty for liquidations via Stability Pool
- **Liq. Penalty (Redistribution)**: Penalty for redistribution liquidations

### Protocol Constants

- **Minimum Debt**: 200 EVRO per trove
- **Gas Compensation**: 3.5 xDAI (locked on trove opening, returned on closure)
- **Interest Rate Range**: 0.5% - 250% annual
- **Upfront Interest Period**: 7 days
- **Interest Rate Adjustment Cooldown**: 7 days
- **Stability Pool Yield Split**: 75% to depositors, 25% to protocol
- **Redemption Fee Floor**: 0.5%

### Debt Limits

For security, governance can adjust debt limits for each collateral:
- Can set to **0** in emergencies (allows only repayment, no new borrowing)
- Can increase up to the **initial debt limit** or **2x current debt limit**
- Cannot be decreased below current outstanding debt
