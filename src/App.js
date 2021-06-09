import React from "react";
import { useEffect, useState } from "react";
import { Nav, ProductList } from "./components";

import client from "./services/ShopifyApi";

const displayProductPerPage = 4;
const collectionId = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2NTUyMTIzNDEyOQ==";

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const [cartItemAmount, setCartItemAmount] = useState(0);
  const [cartURL, setCartURL] = useState("");
  const [checkoutId, setCheckoutId] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await client.collection
        .fetchWithProducts(collectionId, { productsFirst: 10 })
        .then((collection) => {
          return collection.products;
        });
      const productlist = res;

      setAllProducts(productlist);
      setProducts(productlist.slice(0, displayProductPerPage));
      handleTotalPage(productlist);
    };

    const fetchCart = async () => {
      const storate = window.localStorage;
      let checkoutId = storate.getItem("checkout_id");
      if (!checkoutId) {
        const checkout = await client.checkout.create();
        storate.setItem("checkout_id", checkout.id);
        checkoutId = checkout.id;
        setCartURL(checkout.webUrl);
      }
      setCheckoutId(checkoutId);

      client.checkout.fetch(checkoutId).then((cart) => {
        const cartAmount = calculateCartItems(cart.lineItems);
        setCartItemAmount(cartAmount);
        setCartURL(cart.webUrl);
      });
    };

    fetchProducts();
    fetchCart();
  }, []);

  const handlePageChange = (event, value) => {
    const clickedPage = value;
    const maxPage = displayProductPerPage * clickedPage;
    const minPage =
      clickedPage === 1 ? 0 : displayProductPerPage * (clickedPage - 1);
    setProducts(allProducts.slice(minPage, maxPage));
    setCurrentPage(value);
  };

  const handleAddToCart = async (productId, quantity) => {
    const cart = await client.checkout.addLineItems(checkoutId, [
      {
        variantId: productId,
        quantity,
      },
    ]);

    if (cart) {
      const cartAmount = calculateCartItems(cart.lineItems);
      setCartItemAmount(cartAmount);
      setCartURL(cart.webUrl);
    }
  };

  const calculateCartItems = (cart) => {
    let cartAmount = 0;
    for (let item in cart) {
      if (cart.hasOwnProperty(item)) {
        const qty = cart[item].quantity;
        if (qty > 0) {
          cartAmount += qty;
        }
      }
    }
    return cartAmount;
  };

  const handleTotalPage = (products) => {
    const len = Object.keys(products).length;
    const totalPage = Math.ceil(len / displayProductPerPage);
    setTotalPage(totalPage);
  };

  return (
    <main>
      <Nav totalCart={cartItemAmount} cartURL={cartURL} />
      <ProductList
        products={products}
        currentPage={currentPage}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
        handleAddToCart={handleAddToCart}
      />
    </main>
  );
};

export default App;
