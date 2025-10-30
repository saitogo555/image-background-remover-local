# Image Background Remover Local

ブラウザ上で完結する画像背景除去ツールです。画像をアップロードするだけで、AIが自動的に背景を除去します。

## 特徴

- 🌐 完全ブラウザ内処理（サーバーへのアップロード不要）
- 🔒 プライバシー保護（画像はローカルで処理）
- ⚡ 高速処理
- 📱 レスポンシブデザイン

## 使い方

### 方法1: GitHub Pagesのデモを使う

以下のURLにアクセスして、すぐに使えます：

👉 **[https://saitogo555.github.io/image-background-remover-local/](https://saitogo555.github.io/image-background-remover-local/)**

1. ページにアクセス
2. 画像をドラッグ&ドロップまたはクリックして選択
3. 自動的に背景が除去されます
4. 結果をダウンロード

### 方法2: ローカルで実行する

リポジトリをクローンして、ローカル環境で実行できます。

```bash
# リポジトリをクローン
git clone https://github.com/saitogo555/image-background-remover-local.git
cd image-background-remover-local

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてください。

#### 本番ビルド

```bash
# ビルド
npm run build

# ビルドしたファイルをプレビュー
npm run preview
```
