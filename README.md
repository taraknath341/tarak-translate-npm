# Tarak Translate

A simple and lightweight text translation package powered by the [MyMemory Translation API](https://mymemory.translated.net/).

Translate text between different languages using a simple JavaScript function.

## Features

- 🌍 Supports multiple languages.
- ⚡ Lightweight and easy to use.
- 🚀 Uses native JavaScript `fetch()`.
- ⏱️ Built-in 3-second request timeout.
- 📦 No external dependencies.
- 🔌 Supports ES Modules.

## Installation

```bash
npm install tarak-translate
```

## Usage

```javascript
import tarakTranslate from "tarak-translate";

const result = await tarakTranslate({
   text: "Hello, World",
   email: "your-email@example.com",
   sourceLang: "en",
   targetLang: "bn",
});

console.log(result);
```

**Output:**

```text
হ্যালো, বিশ্ব
```

## Parameters

| Parameter    | Type   | Description                    |
| ------------ | ------ | ------------------------------ |
| `text`       | String | Text you want to translate     |
| `email`      | String | Your email address for the API |
| `sourceLang` | String | Source language code           |
| `targetLang` | String | Target language code           |

## Language Codes

| Language | Code |
| -------- | ---- |
| English  | `en` |
| Bengali  | `bn` |
| Hindi    | `hi` |
| Spanish  | `es` |
| French   | `fr` |
| German   | `de` |
| Japanese | `ja` |
| Chinese  | `zh` |
| Arabic   | `ar` |

## More Examples

### English to Bengali

```javascript
const result = await tarakTranslate({
   text: "How are you?",
   email: "your-email@example.com",
   sourceLang: "en",
   targetLang: "bn",
});

console.log(result);
```

### Bengali to English

```javascript
const result = await tarakTranslate({
   text: "তুমি কেমন আছো?",
   email: "your-email@example.com",
   sourceLang: "bn",
   targetLang: "en",
});

console.log(result);
```

## Error Handling

If an error occurs, the function returns an error string.

```javascript
const result = await tarakTranslate({
   text: "Hello",
   email: "your-email@example.com",
   sourceLang: "en",
   targetLang: "bn",
});

if (result.startsWith("-error-->")) {
   console.log("Translation failed:", result);
} else {
   console.log("Translation:", result);
}
```

## Requirements

- Node.js 18 or later.
- Internet connection.

## License

MIT License

## Author

**Taraknath Karan**
