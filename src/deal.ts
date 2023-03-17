import { TASK_DEAL } from "./task-names";
import { task, types } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Contract, Signer, ethers } from "ethers";
import { ERC20ABI, TOKENS, Token } from "./deals-utils";
import "@nomiclabs/hardhat-ethers";

task(TASK_DEAL, `Gets token from list [${TOKENS.map((t: Token) => t.symbol).join(", ")}] and deals --amount to --address`)
  .addOptionalParam("to", "Destination", "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
  .addOptionalParam("amount", "Token amount, with decimals", "1")
  .addOptionalParam("symbol", "Token symbol", "WETH")
  .addOptionalParam("nodec", "Disable decimal usage and provide a huge number", false, types.boolean)
  .setAction(async function (
    { to, amount, symbol, positionalArgs, nodec }: { to: string; amount: string; symbol: string; positionalArgs: string; nodec: boolean },
    hre: HardhatRuntimeEnvironment
  ) {
    // Easter egg, idk where to put this help
    if (symbol == "DEAL") {
      help();
      return;
    }

    // Destructure the ethers object first
    const { ethers, network } = hre;

    console.log(`Fetching ${amount} ${symbol} to ${to}`);

    // Call the getSigners function from the ethers object
    const [owner]: Signer[] = await ethers.getSigners();
    const token = TOKENS.find((token: Token) => {
      return token.symbol === symbol;
    }
    );
    if (token == undefined) {
        console.log("Unknown token, consider adding it to TOKENS struct");
        return;
    }
    const token_contract = new Contract(token.address, ERC20ABI, owner);
    // Defaults to token addr itself, but can fail
    const sender_addr = token.holder ? token.holder : token.address;

    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [sender_addr],
    });

    const sender = await ethers.getSigner(sender_addr);
    const true_amount = nodec ? ethers.BigNumber.from(amount) : ethers.utils.parseUnits(amount, token.decimals);
    await (await token_contract.connect(sender).transfer(to, true_amount)).wait();

    console.log(`${sender.address} dealt ${true_amount} (${amount}) ${symbol} to ${to}`);
  });

function help() {
  console.log(`
    🎩 Welcome to deals - where token transferring becomes a magical adventure! 🌈
    ------------------------------------------------------------------------------

    🔮 Experience the wonder of:
    - Spellbindingly smooth token movements! ✨ (This line was created by an AI 🧠)
    - Deals that hit the mark, no wonder! 🎯 (This one too! 😎)
    - A token transferring that never stops! 🥳 (And this one as well! 🎉)
    - Actually AI wrote, like, this whole project. And it works! 
    - This is terrifying 😱

    🎮 Controls for the deals adventure:
    1. Use fully qualified syntax --symbol --amount and --to
    2. '--no-decimals' can be added to supply raw numbers without decimals applied.
       Example: npx hardhat deal <to> 1000000  USDC --nodec
    3. Use the 'deal' command followed by the token symbol, destination, and amount. (does not work)
       Example: npx hardhat deal <to> 1 USDC Note: why hardhat does not support positional args?
       like wtf

 ‼️‼️‼️  And also don't forget to setup a hardhat node, this version can work only with hardhat ‼️‼️‼️
  `);
  }
