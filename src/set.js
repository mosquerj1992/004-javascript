



























const text = 'India';
const mySet = new Set(text); // Set(5) { 'I', 'n', 'd', 'i', 'a' }
mySet.size; // 5
//sensible a mayúsculas y minúsculas y omisión de duplicados
new Set("Firefox"); // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
new Set("firefox"); // Set(6) { "f", "i", "r", "e", "o", "x" }