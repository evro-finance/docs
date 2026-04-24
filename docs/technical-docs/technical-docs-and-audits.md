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
- EVRO Token: [0xde7515ac950cd4c5ac6afff16bc17d00221d504e](https://gnosisscan.io/address/0xde7515ac950cd4c5ac6afff16bc17d00221d504e)

**Shared contracts**
- collateralRegistry: [0x66ad60d99f42575b63a337ddb2998ea617734fb7](https://gnosisscan.io/address/0x66ad60d99f42575b63a337ddb2998ea617734fb7)
- evroToken: [0xde7515ac950cd4c5ac6afff16bc17d00221d504e](https://gnosisscan.io/address/0xde7515ac950cd4c5ac6afff16bc17d00221d504e)
- hintHelpers: [0x51d8dad5011073effd523d2adef31f0f7046bd15](https://gnosisscan.io/address/0x51d8dad5011073effd523d2adef31f0f7046bd15)
- multiTroveGetter: [0x16922ff39d1741dd39e94183edf9d381e257fb13](https://gnosisscan.io/address/0x16922ff39d1741dd39e94183edf9d381e257fb13)
- debtInFrontHelper: [0x4ed9f20e6ada75fd5c6d8949ffab3f2b05ecf536](https://gnosisscan.io/address/0x4ed9f20e6ada75fd5c6d8949ffab3f2b05ecf536)

**WXDAI branch**
- collToken: [0xe91d153e0b41518a2ce8dd3d7944fa863463a97d](https://gnosisscan.io/address/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d)
- addressesRegistry: [0xab717bccdd363f6eea71935082121bb3babf52f4](https://gnosisscan.io/address/0xab717bccdd363f6eea71935082121bb3babf52f4)
- activePool: [0x28749f57cc7a98db14e793ce67877e29cff328fb](https://gnosisscan.io/address/0x28749f57cc7a98db14e793ce67877e29cff328fb)
- borrowerOperations: [0x9ae76f0a51a8cf0fe1efa37da1d75ebdd0475394](https://gnosisscan.io/address/0x9ae76f0a51a8cf0fe1efa37da1d75ebdd0475394)
- collSurplusPool: [0xce48197c5597582975eed109d3fa18b9e4e913b8](https://gnosisscan.io/address/0xce48197c5597582975eed109d3fa18b9e4e913b8)
- defaultPool: [0xbe020468aa3ef1ef4ca1bcd8c272746f7f32bdf6](https://gnosisscan.io/address/0xbe020468aa3ef1ef4ca1bcd8c272746f7f32bdf6)
- sortedTroves: [0xcc7fefc8532e7a3ef91ddfcee8fb6a6dfe8f9fb8](https://gnosisscan.io/address/0xcc7fefc8532e7a3ef91ddfcee8fb6a6dfe8f9fb8)
- stabilityPool: [0xc1566799ddd9664207ea9e607813bc48d03f8dea](https://gnosisscan.io/address/0xc1566799ddd9664207ea9e607813bc48d03f8dea)
- troveManager: [0x62074c7798d7c1405a2f22616cf36b5519be567b](https://gnosisscan.io/address/0x62074c7798d7c1405a2f22616cf36b5519be567b)
- troveNFT: [0xc4ea0c6f2485c5eaaaffa47c75b117a7486ad98f](https://gnosisscan.io/address/0xc4ea0c6f2485c5eaaaffa47c75b117a7486ad98f)
- metadataNFT: [0xdbcc5e83710b2e1ea41a7d36c9abb0a6542fb44c](https://gnosisscan.io/address/0xdbcc5e83710b2e1ea41a7d36c9abb0a6542fb44c)
- priceFeed: [0xfcee93fba733cdbd5aea0e75d521df3c87a0273e](https://gnosisscan.io/address/0xfcee93fba733cdbd5aea0e75d521df3c87a0273e)
- gasPool: [0x49855c6265b46554ccba4786d8e46ea568decd22](https://gnosisscan.io/address/0x49855c6265b46554ccba4786d8e46ea568decd22)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- wethZapper: [0x4021d0c2f3879409901b776350160d7a234e3ac6](https://gnosisscan.io/address/0x4021d0c2f3879409901b776350160d7a234e3ac6)

**GNO branch**
- collToken: [0x9c58bacc331c9aa871afd802db6379a98e80cedb](https://gnosisscan.io/address/0x9c58bacc331c9aa871afd802db6379a98e80cedb)
- addressesRegistry: [0xd84ef962216b3bb929b757491c740254df8b4177](https://gnosisscan.io/address/0xd84ef962216b3bb929b757491c740254df8b4177)
- activePool: [0x766f216963892a38c9bb8a769c70385aae6c5f95](https://gnosisscan.io/address/0x766f216963892a38c9bb8a769c70385aae6c5f95)
- borrowerOperations: [0xde1372b66340a4da5da7c3e7cd84cb3de1ae25f6](https://gnosisscan.io/address/0xde1372b66340a4da5da7c3e7cd84cb3de1ae25f6)
- collSurplusPool: [0x681a6c030ffa1fd6a9f142b841c2fe741de32a72](https://gnosisscan.io/address/0x681a6c030ffa1fd6a9f142b841c2fe741de32a72)
- defaultPool: [0xde58e5cca95656e381f63dfeb4bc15d732efb1e4](https://gnosisscan.io/address/0xde58e5cca95656e381f63dfeb4bc15d732efb1e4)
- sortedTroves: [0x1489d75418f4b49c86c42fb1bcac994a085be4cb](https://gnosisscan.io/address/0x1489d75418f4b49c86c42fb1bcac994a085be4cb)
- stabilityPool: [0x81bfdb38f437a0c20070256d7c19f8cf20a26de1](https://gnosisscan.io/address/0x81bfdb38f437a0c20070256d7c19f8cf20a26de1)
- troveManager: [0x87c05e7fad575d3a44e84bffa0a88518c769346c](https://gnosisscan.io/address/0x87c05e7fad575d3a44e84bffa0a88518c769346c)
- troveNFT: [0xfbb01477a64bb1ae7466d83f347337442acaf8bb](https://gnosisscan.io/address/0xfbb01477a64bb1ae7466d83f347337442acaf8bb)
- metadataNFT: [0xfca57593208a32f821ccfe7c4b06c6d9e8792d40](https://gnosisscan.io/address/0xfca57593208a32f821ccfe7c4b06c6d9e8792d40)
- priceFeed: [0x7785b34d04bfe318a3b5d5e33eede18be7f66133](https://gnosisscan.io/address/0x7785b34d04bfe318a3b5d5e33eede18be7f66133)
- gasPool: [0x9d8bfa16da9ee6caa03076a9616f3eb292049df9](https://gnosisscan.io/address/0x9d8bfa16da9ee6caa03076a9616f3eb292049df9)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- gasCompZapper: [0xc5df18f4659b7fa5f3f80a9f61841de6fc9ae4eb](https://gnosisscan.io/address/0xc5df18f4659b7fa5f3f80a9f61841de6fc9ae4eb)
- coGNO: [0xc30fc573ec88d59328c0396115105298c12c861c](https://gnosisscan.io/address/0xc30fc573ec88d59328c0396115105298c12c861c)

**sDAI branch**
- collToken: [0xaf204776c7245bf4147c2612bf6e5972ee483701](https://gnosisscan.io/address/0xaf204776c7245bf4147c2612bf6e5972ee483701)
- addressesRegistry: [0x939cfd81fc75473046404ee832e41c42c0bde6b0](https://gnosisscan.io/address/0x939cfd81fc75473046404ee832e41c42c0bde6b0)
- activePool: [0xe84f4227c92ac8c2fa3229634c965bff49574b5b](https://gnosisscan.io/address/0xe84f4227c92ac8c2fa3229634c965bff49574b5b)
- borrowerOperations: [0x60c831bad5f098ec7cd1f98aac98bc659c7330d6](https://gnosisscan.io/address/0x60c831bad5f098ec7cd1f98aac98bc659c7330d6)
- collSurplusPool: [0xc06670a47831392d805692dc7042df599977c382](https://gnosisscan.io/address/0xc06670a47831392d805692dc7042df599977c382)
- defaultPool: [0x0d3677b58b2ba5debae6c5d0102d00ecc3b4f936](https://gnosisscan.io/address/0x0d3677b58b2ba5debae6c5d0102d00ecc3b4f936)
- sortedTroves: [0xf4125e5ec6f0a22daa4f2aef672642406757584b](https://gnosisscan.io/address/0xf4125e5ec6f0a22daa4f2aef672642406757584b)
- stabilityPool: [0x340ef18e50984b82640d69b6b06af86e3f6f1f6e](https://gnosisscan.io/address/0x340ef18e50984b82640d69b6b06af86e3f6f1f6e)
- troveManager: [0x78b20d0647615c72ee4bafa8116a76090f33654a](https://gnosisscan.io/address/0x78b20d0647615c72ee4bafa8116a76090f33654a)
- troveNFT: [0x7d70e74b3999a712c74656943d80d58286660c1c](https://gnosisscan.io/address/0x7d70e74b3999a712c74656943d80d58286660c1c)
- metadataNFT: [0x4438d6daa3807013de99aaad86b8a362a27eb364](https://gnosisscan.io/address/0x4438d6daa3807013de99aaad86b8a362a27eb364)
- priceFeed: [0x506fc78a1ca1c5538dc012638549e223542a8eef](https://gnosisscan.io/address/0x506fc78a1ca1c5538dc012638549e223542a8eef)
- gasPool: [0x90663c08b2ac126a90c6b12c640e88bc95b13f80](https://gnosisscan.io/address/0x90663c08b2ac126a90c6b12c640e88bc95b13f80)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- gasCompZapper: [0xb83308e214c9b12fbbd61f6b9456bfe6bea7c2d5](https://gnosisscan.io/address/0xb83308e214c9b12fbbd61f6b9456bfe6bea7c2d5)

**WBTC branch**
- wbtcWrapper: [0x92e79ddea8307d54f7648bfea879a819daa97d13](https://gnosisscan.io/address/0x92e79ddea8307d54f7648bfea879a819daa97d13)
- collToken: [0x92e79ddea8307d54f7648bfea879a819daa97d13](https://gnosisscan.io/address/0x92e79ddea8307d54f7648bfea879a819daa97d13)
- addressesRegistry: [0x3360c2c7ac0529d868555a0ea71658994c4e3dc4](https://gnosisscan.io/address/0x3360c2c7ac0529d868555a0ea71658994c4e3dc4)
- activePool: [0x7cc42ac7e148c03490ca2f524b983a12c87c8840](https://gnosisscan.io/address/0x7cc42ac7e148c03490ca2f524b983a12c87c8840)
- borrowerOperations: [0xe5fb221241642e2960a1ba4f8075c19efe1a2c7a](https://gnosisscan.io/address/0xe5fb221241642e2960a1ba4f8075c19efe1a2c7a)
- collSurplusPool: [0x1fd2cb51bb19d5da2541271a74d884b17ed3cde5](https://gnosisscan.io/address/0x1fd2cb51bb19d5da2541271a74d884b17ed3cde5)
- defaultPool: [0x72edec97e5b540fe35249e4847959b4ae78fc82d](https://gnosisscan.io/address/0x72edec97e5b540fe35249e4847959b4ae78fc82d)
- sortedTroves: [0xc696ad452dc46cada5a4a6a50171113ed322ea5085](https://gnosisscan.io/address/0xc696ad452dc46cada5a4a6a50171113ed322ea5085)
- stabilityPool: [0x4502ba4e4d09ca1a65e2f4aa95111ed322ea5085](https://gnosisscan.io/address/0x4502ba4e4d09ca1a65e2f4aa95111ed322ea5085)
- troveManager: [0xc76a006b6e6c5d0ffab82061d4d3ff493275cade](https://gnosisscan.io/address/0xc76a006b6e6c5d0ffab82061d4d3ff493275cade)
- troveNFT: [0xa5d13d9e60f0086b73cb61dd06f647b4c086c704](https://gnosisscan.io/address/0xa5d13d9e60f0086b73cb61dd06f647b4c086c704)
- metadataNFT: [0x71edbb9f0cb5381f126c00f7f674f4becdac9e1d](https://gnosisscan.io/address/0x71edbb9f0cb5381f126c00f7f674f4becdac9e1d)
- priceFeed: [0x6fb26b763c56363a3e6947cf465cdd3402ad704d](https://gnosisscan.io/address/0x6fb26b763c56363a3e6947cf465cdd3402ad704d)
- gasPool: [0x5581ffc7cc62c4304820316a197054a8b3734a84](https://gnosisscan.io/address/0x5581ffc7cc62c4304820316a197054a8b3734a84)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- wbtcZapper: [0x5c77c09701b8c450d14c29d932280311935f5299](https://gnosisscan.io/address/0x5c77c09701b8c450d14c29d932280311935f5299)

**osGNO branch**
- collToken: [0xf490c80aae5f2616d3e3bda2483e30c4cb21d1a0](https://gnosisscan.io/address/0xf490c80aae5f2616d3e3bda2483e30c4cb21d1a0)
- addressesRegistry: [0x787782a264ce5aab4431ae7efc853ede043917d1](https://gnosisscan.io/address/0x787782a264ce5aab4431ae7efc853ede043917d1)
- activePool: [0xcd1609828a1a036beb3c2f4c7058b33dce6c8756](https://gnosisscan.io/address/0xcd1609828a1a036beb3c2f4c7058b33dce6c8756)
- borrowerOperations: [0x2fd74aa2c036444fedcf638351067ef1ae6b1fa7](https://gnosisscan.io/address/0x2fd74aa2c036444fedcf638351067ef1ae6b1fa7)
- collSurplusPool: [0xfea248c82f3b7d7ee040406f9bedc60b82a3639c](https://gnosisscan.io/address/0xfea248c82f3b7d7ee040406f9bedc60b82a3639c)
- defaultPool: [0x6c623f93dfee477aa9ea9fad9a4f38a5f3578737](https://gnosisscan.io/address/0x6c623f93dfee477aa9ea9fad9a4f38a5f3578737)
- sortedTroves: [0x234289f89472f38cf6e76ccbcefc987e26633cd0](https://gnosisscan.io/address/0x234289f89472f38cf6e76ccbcefc987e26633cd0)
- stabilityPool: [0xd09505eea1e3613e89628c22c184e6847430c18a](https://gnosisscan.io/address/0xd09505eea1e3613e89628c22c184e6847430c18a)
- troveManager: [0xa0e8533cb3d768e5d59842d2a0a4211d54387d1d](https://gnosisscan.io/address/0xa0e8533cb3d768e5d59842d2a0a4211d54387d1d)
- troveNFT: [0xffc18a84e3575a311d80050ca39457bc08b70207](https://gnosisscan.io/address/0xffc18a84e3575a311d80050ca39457bc08b70207)
- metadataNFT: [0x4b8ab7b559e21081df54986ec18127fdddb0f812](https://gnosisscan.io/address/0x4b8ab7b559e21081df54986ec18127fdddb0f812)
- priceFeed: [0xa3c856829706c52f49fb3c3d35a35a4748705fcb](https://gnosisscan.io/address/0xa3c856829706c52f49fb3c3d35a35a4748705fcb)
- gasPool: [0xb9ac38039139a562f5d95d922600e3dd273babda](https://gnosisscan.io/address/0xb9ac38039139a562f5d95d922600e3dd273babda)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- gasCompZapper: [0x22973c6f5091bc47bba2029e337f62ff34bffec8](https://gnosisscan.io/address/0x22973c6f5091bc47bba2029e337f62ff34bffec8)
- coGNO: [0x4356908a186e477e30c34aa09208379194324ae7](https://gnosisscan.io/address/0x4356908a186e477e30c34aa09208379194324ae7)

**wstETH branch**
- collToken: [0x6c76971f98945ae98dd7d4dfca8711ebea946ea6](https://gnosisscan.io/address/0x6c76971f98945ae98dd7d4dfca8711ebea946ea6)
- addressesRegistry: [0x54dab1bb775fe8f94c15771de3b4a9a67af4b374](https://gnosisscan.io/address/0x54dab1bb775fe8f94c15771de3b4a9a67af4b374)
- activePool: [0x3a260f01aa2bd3cfc3a44b92e7f1efbee6e1f2e5](https://gnosisscan.io/address/0x3a260f01aa2bd3cfc3a44b92e7f1efbee6e1f2e5)
- borrowerOperations: [0x1532e21aac495c0593926a5772947148ac5f6504](https://gnosisscan.io/address/0x1532e21aac495c0593926a5772947148ac5f6504)
- collSurplusPool: [0xa795e94bee9b74d67bc3353971fca4497b56ef9a](https://gnosisscan.io/address/0xa795e94bee9b74d67bc3353971fca4497b56ef9a)
- defaultPool: [0xa88816c5c7c4233731821c9415f2b218d6f5d1ca](https://gnosisscan.io/address/0xa88816c5c7c4233731821c9415f2b218d6f5d1ca)
- sortedTroves: [0xad88ac17195b7f9a83b844400669906bcc0c69d6](https://gnosisscan.io/address/0xad88ac17195b7f9a83b844400669906bcc0c69d6)
- stabilityPool: [0xde2e90047e2b8b8355305233fdcea0c95f546c82](https://gnosisscan.io/address/0xde2e90047e2b8b8355305233fdcea0c95f546c82)
- troveManager: [0x1df2cb9aacb7124dc61ab7ade4db7343444ac050](https://gnosisscan.io/address/0x1df2cb9aacb7124dc61ab7ade4db7343444ac050)
- troveNFT: [0x28fbe05d53f3be65ccf2585f08d2aac3cccd32a2](https://gnosisscan.io/address/0x28fbe05d53f3be65ccf2585f08d2aac3cccd32a2)
- metadataNFT: [0x5203a40d6c0df304dd4d7a3c65c326667787562a](https://gnosisscan.io/address/0x5203a40d6c0df304dd4d7a3c65c326667787562a)
- priceFeed: [0x77618c5e0258156522892fa55046d3246d59e3e3](https://gnosisscan.io/address/0x77618c5e0258156522892fa55046d3246d59e3e3)
- gasPool: [0x484138e7ba48ce0f7394fefee6550bbca1898fb4](https://gnosisscan.io/address/0x484138e7ba48ce0f7394fefee6550bbca1898fb4)
- interestRouter: [0x3e722ea23c1c7806c1221d796b8bec7a6bf21041](https://gnosisscan.io/address/0x3e722ea23c1c7806c1221d796b8bec7a6bf21041)
- gasCompZapper: [0x7c63c4d7108f06d22515a6fb18b133bca2399945](https://gnosisscan.io/address/0x7c63c4d7108f06d22515a6fb18b133bca2399945)

**Governance**
- governance: [0xdd100e25ef57fb43fd17a14ae62b273e9cc0d890](https://gnosisscan.io/address/0xdd100e25ef57fb43fd17a14ae62b273e9cc0d890)

## wBTC Wrapper Implementation <a href="#wbtc-wrapper-implementation" id="wbtc-wrapper-implementation"></a>

EVRO uses a specialized wrapper contract to handle wBTC (8 decimals) and convert it to an 18-decimal token for internal protocol use.

### Contract Addresses

- **wbtcWrapper**: [0x92e79ddea8307d54f7648bfea879a819daa97d13](https://gnosisscan.io/address/0x92e79ddea8307d54f7648bfea879a819daa97d13)
- **wbtcZapper**: [0x5c77c09701b8c450d14c29d932280311935f5299](https://gnosisscan.io/address/0x5c77c09701b8c450d14c29d932280311935f5299)

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
- coGNO Token: [0xc30fc573ec88d59328c0396115105298c12c861c](https://gnosisscan.io/address/0xc30fc573ec88d59328c0396115105298c12c861c)
- GNO Collateral: [0x9c58bacc331c9aa871afd802db6379a98e80cedb](https://gnosisscan.io/address/0x9c58bacc331c9aa871afd802db6379a98e80cedb)

**osGNO Branch**:
- coGNO Token: [0x4356908a186e477e30c34aa09208379194324ae7](https://gnosisscan.io/address/0x4356908a186e477e30c34aa09208379194324ae7)
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
