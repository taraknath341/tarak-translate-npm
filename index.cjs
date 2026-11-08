const tarakTranslate = async ({ text, email, sourceLang, targetLang }) => {
   try {
      const baseUrl = "https://api.mymemory.translated.net/get";
      const queryString = `?q=${text}&de=${email}&langpair=${sourceLang}|${targetLang}`;

      const translateResponse = await fetch(baseUrl + queryString, {
         signal: AbortSignal.timeout(3000),
      });
      const { responseData } = await translateResponse.json();

      return responseData.translatedText;
   } catch (err) {
      console.log(err);
      return "-error--> " + err.message;
   }
};

module.exports = tarakTranslate;
