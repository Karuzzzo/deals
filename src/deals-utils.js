
exports.ERC20ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "event Transfer(address indexed from, address indexed to, uint256 value)"
];

exports.TOKENS = [
  {
    symbol: "WETH",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    decimals: 18,
  },
  {
    symbol: "BUSD",
    address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    decimals: 18,
    holder: "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503"
  },
  {
    symbol: "USDC",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
    holder: "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503"
  },
  {
    symbol: "USDT",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: 6,
    holder: "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503"
  },
  {
    symbol: "DAI",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    decimals: 18,
    holder: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643"
  },
  // Add more tokens as needed
];
