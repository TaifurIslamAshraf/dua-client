"use server";

import { env } from "@/config/env";

export const getAllCategory = async () => {
  try {
    const res = await fetch(`${env.serverApi}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: ["Category"] },
      cache: "force-cache",
    });

    return await res.json();
  } catch (error) {
    console.log("get category fetch", error);
  }
};

export const getSubCategoryByCategoryId = async (categoryId?: string) => {
  try {
    const res = await fetch(
      `${env.serverApi}/categories/${categoryId}/subcategories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { tags: ["SubCategory"] },
        cache: "force-cache",
      }
    );

    return await res.json();
  } catch (error) {
    console.log("get category fetch", error);
  }
};
