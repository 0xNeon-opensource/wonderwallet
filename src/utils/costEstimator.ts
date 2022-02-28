import axios from 'axios';
import { COINGECKO_BASE_URL, WINSTONS_PER_AR } from '../constants';
import { getArweavePriceForBytesInWinstons } from './arweaveUtils';
import { getPathSizeInBytes } from '../utils/fileUtils';

interface CoinGeckoARToUSDPriceResponse {
  arweave: {
    usd: number;
  };
}

const getCostToSavePathToArweaveInWinstons = async (path: string): Promise<number> => {
  const sizeInBytes = getPathSizeInBytes(path);
  return await getArweavePriceForBytesInWinstons(sizeInBytes);
};

const winstonsToAR = (winstons: number): number => {
  return winstons / WINSTONS_PER_AR;
};

const getCostOfARInDollars = async (): Promise<number> => {
  const response = await axios.get<CoinGeckoARToUSDPriceResponse>(
    COINGECKO_BASE_URL + 'simple/price?ids=arweave&vs_currencies=usd',
  );
  return response.data.arweave.usd;
};

const getCostToSavePathToArweaveInAR = async (path: string) => {
  const priceInWinstons = await getCostToSavePathToArweaveInWinstons(path);
  return winstonsToAR(priceInWinstons);
};

const getCostToSavePathToArweaveInDollars = async (path: string) => {
  const priceInWinstons = await getCostToSavePathToArweaveInWinstons(path);
  const priceInAR = winstonsToAR(priceInWinstons);
  const arToUSD = await getCostOfARInDollars();
  return priceInAR * arToUSD;
};

export {
  getCostToSavePathToArweaveInWinstons,
  winstonsToAR,
  getCostOfARInDollars,
  getCostToSavePathToArweaveInAR,
  getCostToSavePathToArweaveInDollars,
};
