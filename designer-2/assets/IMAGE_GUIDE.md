# OGT! 人才ランディングページ画像ガイド

## 概要
このガイドは、OGT! 人才採用ランディングページ用の高品質で商用利用可能な画像の調達と実装に関する説明を提供します。

## 画像ソース
**O-DAN**（https://o-dan.net/ja/）を使用して、複数の無料ストックフォトサイトから商用利用可能な画像を検索してください。

---

## 必要な画像

### 1. ヒーローセクション背景
**場所**：セクション1（ファーストビュー）
**ファイル名**：`hero-background.webp`
**推奨サイズ**：1920x1080px以上
**検索キーワード（O-DAN）**：
- "diverse business professionals meeting"
- "confident executives modern office"
- "international business team discussion"
- "leadership professionals consulting"
- "corporate team strategy session"

**画像要件**：
- 高品質でプロフェッショナルな環境
- 多様なプロフェッショナルのグループ（様々な年齢、性別、民族）
- モダンで洗練されたオフィス環境
- 自信に満ち、前向きな表情
- プロフェッショナルな服装（ビジネスフォーマル/ビジネスカジュアル）
- 自然光が好ましい
- 落ち着いた洗練されたカラーパレット

**O-DANで推奨されるサイト**：
- Unsplash
- Pexels
- Pixabay

**実装方法**：
```css
.hero-background {
    background-image: url('assets/images/hero-background.webp');
    background-size: cover;
    background-position: center;
}
```

---

### 2. ミッションセクション（オプション背景）
**場所**：セクション2（私たちは誰か）
**ファイル名**：`mission-background.webp`
**推奨サイズ**：1600x900px
**検索キーワード**：
- "business handshake partnership"
- "professional collaboration meeting"
- "team success celebration"
- "corporate vision strategy"

**画像要件**：
- 控えめで、軽いオーバーレイとして使用可能
- プロフェッショナルな雰囲気
- 信頼構築のイメージ
- 不透明度30-40%で使用可能

---

### 3. フォーカスセクションアクセント画像（オプション）
**場所**：セクション3（私たちのフォーカス）
**ファイル名**：
- `senior-professional.webp`
- `female-leader.jpg`
- `young-professional.webp`
- `global-professional.jpg`

**推奨サイズ**：800x800px（正方形）
**カテゴリー別検索キーワード**：

**シニア・ソウル**：
- "senior business executive"
- "experienced professional consultant"
- "mature business leader"

**リーディング・レディズ**：
- "female business leader"
- "professional woman executive"
- "businesswoman leadership"

**トップ・ガンズ**：
- "young business professional"
- "millennial business leader"
- "young entrepreneur confident"

**ランゲージ・ライオンズ**：
- "multilingual business meeting"
- "international business professional"
- "global business team"

---

### 4. プロセスセクションアイコン
**場所**：セクション5（プロセス）
**注意**：現在SVGアイコンを使用（画像不要）

アイコンはSVGでインライン作成されています：
- パフォーマンスの最適化
- スケーラビリティ
- カラーのカスタマイズ
- 追加のHTTPリクエスト不要

---

## 画像最適化ガイドライン

### アップロード前：
1. **適切にリサイズ** - 必要以上に大きい画像を使用しない
2. **圧縮** - TinyPNGやImageOptimなどのツールを使用
3. **フォーマット**：
   - 写真にはJPEG（品質：80-85%）
   - 透過性のあるグラフィックにはPNG
   - モダンブラウザにはWebP（フォールバック付き）

### 推奨画像サイズ：
- ヒーロー背景：1920x1080px、150-300KB
- セクション背景：1600x900px、100-200KB
- プロフィール画像：800x800px、50-100KB
- アイコン：SVG（すでに実装済み）

### 命名規則：
- 小文字を使用
- ハイフンを使用（アンダースコアではなく）
- 説明的に
- 例：`hero-business-meeting.jpg`

---

## ステップバイステップダウンロード手順

### O-DANの使用：

1. **O-DANにアクセス**
   - 訪問：https://o-dan.net/ja/

2. **画像を検索**
   - 日本語または英語で検索キーワードを入力
   - 複数のストックサイトからの結果を確認

3. **画像を選択**
   - 希望の画像をクリック
   - ライセンスを確認（CC0または商用利用可を探す）
   - 画像解像度を確認

4. **ダウンロード**
   - ソースサイトのダウンロードボタンをクリック
   - 利用可能な最高品質を選択
   - `/Users/newgate/vibe-coding/ogt-jinzai-candidate-lp/design3/designer-2/assets/images/`に保存

5. **最適化**
   - 使用前に画像を圧縮
   - 規則に従って名前を変更

6. **実装**
   - CSSまたはHTMLを更新して画像を参照
   - 様々な画面サイズでテスト

---

## CSS実装例

### 背景画像付きヒーローセクション：
```css
.hero {
    background-image:
        linear-gradient(135deg, rgba(10, 22, 40, 0.9) 0%, rgba(26, 40, 69, 0.85) 100%),
        url('assets/images/hero-background.webp');
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* パララックス効果 */
}
```

### 遅延読み込み実装：
```html
<img
    data-src="assets/images/hero-background.webp"
    alt="戦略会議中の多様なプロフェッショナル"
    class="lazy-load"
/>
```

---

## 代替案：CSSグラデーションのみの使用

画像なしの完全にミニマリストなアプローチを好む場合、現在のデザインは洗練されたグラデーションを使用しています：

```css
.hero-background {
    background: linear-gradient(135deg, #0A1628 0%, #1A2845 100%);
}

.hero-background::after {
    background: radial-gradient(
        circle,
        rgba(201, 168, 114, 0.05) 0%,
        transparent 70%
    );
}
```

これにより、高速な読み込み時間と完璧なスケーラビリティを確保しながら、モダンミニマリストの美学を維持します。

---

## アクセシビリティの考慮事項

画像を実装する際：

1. **常にalt textを含める**：
   ```html
   <img src="image.jpg" alt="スクリーンリーダー用の説明テキスト">
   ```

2. **十分なコントラストを確保**：
   - テキストオーバーレイには背景オーバーレイが必要
   - 本文テキストの最小コントラスト比：4.5:1
   - 大きいテキストの最小コントラスト比：3:1

3. **装飾的な画像**：
   - CSS background-imageを使用
   - または空のaltを使用：`alt=""`

4. **重要な画像**：
   - 適切なalt textで`<img>`タグを使用
   - CSSが失敗しても読み込まれることを確認

---

## パフォーマンスチェックリスト

- [ ] 画像を適切なサイズに圧縮
- [ ] 適切なフォーマットを選択（JPEG/PNG/WebP）
- [ ] フォールド以下の画像に遅延読み込みを実装
- [ ] すべてのコンテンツ画像にalt textを提供
- [ ] 必要に応じてsrcsetを使用したレスポンシブ画像
- [ ] 様々な画面サイズで画像をテスト
- [ ] 総ページ重量が2MB未満
- [ ] 必要に応じて重要な画像をプリロード

---

## 法的コンプライアンス

### 画像を使用する前：

1. **ライセンスを確認**
   - CC0、パブリックドメイン、または商用利用可能であることを確認
   - 帰属表示が必要かどうかを確認

2. **帰属表示**
   - 必要な場合は、フッターまたはクレジットページに追加
   - フォーマット：「Photo by [Name] on [Source]」

3. **使用権**
   - 画像が商用ウェブサイトに使用できることを確認
   - 使用制限を確認

4. **記録を保持**
   - 各画像のソースとライセンスを文書化
   - 元のダウンロード日とURLを保存

---

## 現在の実装状況

ランディングページは現在、以下を使用して画像**なし**で美しく動作するように設計されています：
- CSSグラデーション
- SVGアイコン
- タイポグラフィ
- ネガティブスペース
- カラー理論

このアプローチにより以下が保証されます：
- 高速な読み込み時間
- 完璧なスケーラビリティ
- ライセンスの懸念がない
- 一貫した視覚品質

画像はデザインを強化するために追加できますが、プロフェッショナルでモダンな外観には必須ではありません。

---

## 質問の連絡先

画像の実装またはデザインの決定に関する質問については、メインプロジェクトドキュメントを参照するか、デザインチームにお問い合わせください。