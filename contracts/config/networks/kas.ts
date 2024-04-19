import type { HardhatUserConfig } from "hardhat/types";

export default function maybeAddKas(config: HardhatUserConfig) {
  if (
    process.env.KAS_ACCESS_KEY_ID &&
    process.env.KAS_API_URL &&
    process.env.KAS_SECRET_ACCESS_KEY
  ) {
    const authorization_header =
      "Basic " +
      Buffer.from(process.env.KAS_ACCESS_KEY_ID + ":" + process.env.KAS_SECRET_ACCESS_KEY).toString(
        "base64"
      );

    if (process.env.TESTNET_PRIVATE_KEY) {
      config.networks!.kasBaobab = {
        accounts: [process.env.TESTNET_PRIVATE_KEY],
        chainId: 1001,
        httpHeaders: {
          "Authorization": authorization_header,
          "x-chain-id": "1001",
        },
        url: process.env.KAS_API_URL,
      };
    }

    if (process.env.MAINNET_PRIVATE_KEY) {
      config.networks!.kasMainnet = {
        accounts: [process.env.MAINNET_PRIVATE_KEY],
        chainId: 8217,
        httpHeaders: {
          "Authorization": authorization_header,
          "x-chain-id": "8217",
        },
        url: process.env.KAS_API_URL,
      };
    }
  }
}
