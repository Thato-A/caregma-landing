const cache = {};

export async function autoTranslate(text, targetLang) {
  if (!text) return "";
  if (targetLang === "en") return text;

  const key = `${targetLang}:${text}`;
  if (cache[key]) return cache[key];

  try {
    const response = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        source: "en",
        target: targetLang,
        format: "text",
      }),
    });

    const data = await response.json();
    cache[key] = data.translatedText;
    return data.translatedText;
  } catch (err) {
    console.error("Translation failed:", err);
    return text; // fallback to English
  }
}
