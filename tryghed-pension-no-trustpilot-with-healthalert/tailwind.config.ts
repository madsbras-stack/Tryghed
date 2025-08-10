import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { brand: {50:"#e9f2ff",100:"#d7e8ff",200:"#a9caff",300:"#79acff",400:"#3c86ff",500:"#115DFF",600:"#0E4BDD",700:"#0B3BAF",800:"#082C85",900:"#06266E"} }, boxShadow:{brand:"0 10px 30px rgba(17,93,255,.15)"} } },
  plugins: []
}; export default config;
