export interface ICategory {
  id: number;
  cat_id: number;
  cat_name_en: string;
  cat_name_bn: string;
  cat_icon: string;
  no_of_dua: number;
  no_of_subcat: number;
}

export interface ISubCategory {
  cat_id: number;
  id: number;
  no_of_dua: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
}

export interface ISubcatDua {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_dua: number;
}
