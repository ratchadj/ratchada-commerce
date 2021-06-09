import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.SHOPIFY_SHOP_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_API_PUBLIC_KEY,
});

export default client;