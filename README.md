# Deals - Token Transferring Magic 🎩✨

Welcome to Deals, a magical adventure where token transferring becomes easy and fun! This project uses Hardhat to perform token transfers between Ethereum addresses.

## Getting Started

### Prerequisites

- Node.js v14 or higher
- npm v6 or higher

### Installation

To install Deals as an npm package, simply run:
```
npm install hardhat-token-dealer
```

## Running a Hardhat Node

Deals requires a Hardhat node to function:

1. Install Hardhat globally:
```
npm install -g hardhat
```

2. Run the Hardhat node:
```
npx hardhat node --verbose &
```

🚨 **Warning:** This project uses "public" private keys provided by Hardhat. Do not use these private keys for real-world transactions or on mainnet, as they are not secure.

## Usage

Once you have set up the Hardhat node, you can use the `deal` command to perform token transfers:

```
npx hardhat deal --token WETH --amount 1 --to <to>
```

Add the `--no-decimals` flag to supply raw numbers without decimals applied:

```
npx hardhat deal --token USDC --to <to> --amount 1000000 --no-decimals
```

## Contributing

If you need, add your tokens into struct TOKENS in node_modules/deals/src/deals-utils.js - they will be added
Feel free to create a pull request or open an issue on GitHub. We welcome your input and suggestions! And remember, this project was crafted with love by an AI. 😄

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy the magical world of Deals, and happy token transferring! 🎉