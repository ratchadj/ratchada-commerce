# Ratchada Commerce
[Demo](https://ratchada-commerce.web.app/)

## Description

Frontend Website integrate with ecommerce platform e.g. Shopify, Magento
![Design](https://github.com/ratchadj/ratchada-commerce/blob/master/README-P1.png?raw=true)

## Getting Started

### Dependencies

* material-ui
* shopify-buy
* firebase-tools

### Installing

1. Get a API Key at [https://www.shopify.com/](https://www.shopify.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/ratchadj/ratchada-commerce.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```JS
    SHOPIFY_API_PUBLIC_KEY=
    SHOPIFY_SHOP_DOMAIN=xxxx.myshopify.com/
   ```

### Executing program

* Development
```
npm start
```
* Deployment
```
npm run build
firebase deploy
```
## Authors

Contributors names and contact info

[@ratchada-jududom](https://www.linkedin.com/in/ratchada-jududom/)

## Roadmap
- [x] Landing Page
- [x] Integration with Shopify
- [ ] Integration with Magento
- [ ] Search
- [ ] Checkout Page
- [ ] Integration with Shipping
- [ ] Integration with Payment

## Version History

* 0.1
    * Initial Release
