export interface IDua {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn: string | null;
  top_en: string | null;
  dua_arabic: string | null;
  dua_indopak: string | null;
  clean_arabic: string | null;
  transliteration_bn: string | null;
  transliteration_en: string | null;
  translation_bn: string | null;
  translation_en: string | null;
  bottom_bn: string | null;
  bottom_en: string | null;
  refference_bn: string | null;
  refference_en: string | null;
  audio: string | null;
  subcat_name_bn?: string | null;
  subcat_name_en?: string | null;
}