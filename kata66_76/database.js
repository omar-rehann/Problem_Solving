/*

🧠 Problem Title: Language Name Lookup

❓ Problem Statement:  
Write a function that takes a language name in lowercase English (e.g., `"french"`, `"arabic"`) and returns its native name from a predefined database. If the language is not found, return `"English"` as the default.

📥 Input:  
- A string `language` representing the name of a language in lowercase English.

📤 Output:  
- A string representing the native name of the language, or `"English"` if not found.

📌 Example:  
- Input: "arabic"  
  Output: "العربية"  
- Input: "norwegian"  
  Output: "English"

*/
function database(language) {
    const obj = {
        english: "English",
        french: "Français",
        spanish: "Español",
        german: "Deutsch",
        italian: "Italiano",
        arabic: "العربية",
        chinese: "中文",
        japanese: "日本語",
        korean: "한국어",
        russian: "Русский",
        hindi: "हिन्दी",
        turkish: "Türkçe",
        portuguese: "Português",
        dutch: "Nederlands",
        swedish: "Svenska"
    };

    if (obj.hasOwnProperty(language)) {
        return obj[language];
    } else {
        return obj["english"];
    }
}