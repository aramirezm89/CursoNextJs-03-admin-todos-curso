"use client";

import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie("cart")) {
    const cookieCart = JSON.parse(getCookie("cart") as string) ?? "{}";
    return cookieCart;
  }

  return {};
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();

  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = (id: string) => {
 const cookieCart = getCookieCart();
 if(cookieCart[id]){
  delete cookieCart[id];
  setCookie("cart", JSON.stringify(cookieCart));
 }

};

export const removeSingleItemFromCart = (id: string) =>{
  const cookiesCart = getCookieCart();
  if(cookiesCart[id]){
    cookiesCart[id] -= 1;
    if(cookiesCart[id] <=0){
      delete cookiesCart[id];
    }
  }
  setCookie("cart", JSON.stringify(cookiesCart));
}