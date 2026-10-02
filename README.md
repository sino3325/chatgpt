# setup_next_PWA

## 概要

このリポジトリにはNext.jsで使用される一般的なライブラリが既にセットアップされています。  
新しいNext.jsアプリを作成する際にはこのプロジェクトをクローンして利用してください。

## 使用しているライブラリ

- @emotion/react@11.11.1
- @emotion/styled@11.11.0
- @fontsource/roboto@5.0.8
- @mui/icons-material@5.14.19
- @mui/material@5.14.19
- @types/node@20.10.1
- @types/react-dom@18.2.17
- @types/react@18.2.39
- autoprefixer@10.4.16
- eslint-config-next@14.0.3
- eslint-config-prettier@9.0.0
- eslint-plugin-jsx-a11y@6.8.0
- eslint@8.54.0
- next@14.0.3
- postcss@8.4.31
- prettier-plugin-tailwindcss@0.5.7
- prettier@3.1.0
- react-dom@18.2.0
- react@18.2.0
- tailwindcss@3.3.5
- typescript@5.3.2

## 必要に応じて以下のライブラリを追加でインストールしてください

- react-icons
- swr
- react-use
- uuid
- usehooks-ts
- axios

## 使用方法

### 1. クローンを作成

```shell
git clone https://github.com/sino3325/setup_next_PWA [新しいディレクトリ名]
```

### 2. 作成したディレクトリを開きライブラリをインストール

```shell
npm ci
```

### 3. 新しいリモートリポジトリを作成後に以下のコマンドを実行

```shell
git remote set-url origin [新しいリモートリポジトリのURL]
```

### 4. push

```shell
git remote add origin https://github.com/sino3325/[リモートリポジトリ名].git
git branch -M main
git push -u origin main
```

### 5. PWAにするために必要な変更箇所
