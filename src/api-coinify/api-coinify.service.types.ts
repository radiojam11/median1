/* eslint-disable prettier/prettier */
export interface IRateSpecificCurrency {
  success: boolean;
  data: { disclaimer: string; name: string; buy: number; sell: number };
}

export interface IAllRates {
  success: boolean;
  data: {
    disclaimer: string;
    valuta: { name: string; buy: number; sell: number };
  };
}
