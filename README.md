# volta + react + next + tailwindcss + jotai template
## 作成日
2022/01/17

## 作成経緯
初代テンプレートが古くなっていたため

## このtemplate作った方法
volta install node@16.13.2
volta install yarn@1.22.17

yarn create next-app --typescript

volta pin node@16.13.2
volta pin yarn@1.22.17

mkdir src

mv pages src/
mv styles src/
mkdir src/types
mkdir src/states
mkdir src/layouts
mkdir src/components

tsconfig.jsonに以下を追加
   "baseUrl": "."

＝＝＝
src/pages/_document.tsxを作成

＝＝＝
index.tsx の整理

＝＝＝
不要なファイルを削除
rm src/styles/Home.module.css
rm src/pages/api

＝＝＝
Tailwind CSS の導入
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
tailwind.config.js の編集
globals.css の編集
yarn add -D eslint-plugin-tailwindcss

＝＝＝
jotaiの導入
yarn add jotai