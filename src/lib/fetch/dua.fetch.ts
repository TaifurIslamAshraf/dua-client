"use server";

import { env } from "@/config/env";

export const getCategoryDua = async (categoryId?: string) => {
  try {
    const res = await fetch(`${env.serverApi}/categories/${categoryId}/duas`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  } catch (error) {
    console.log("get Dua fetch", error);
  }
};
export const getSubCategoryDua = async (suncategoryId?: string) => {
  try {
    const res = await fetch(
      `${env.serverApi}/subcategories/${suncategoryId}/duas`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return await res.json();
  } catch (error) {
    console.log("get Dua fetch", error);
  }
};
