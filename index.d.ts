interface TarakTranslateOptions {
   text: string;
   email: string;
   sourceLang: string;
   targetLang: string;
}

declare function tarakTranslate(options: TarakTranslateOptions): Promise<string>;

export default tarakTranslate;
