# Michelle 的個人空間

一個長期使用、持續更新的個人網站，用 [Jekyll](https://jekyllrb.com/) 製作，部署在 GitHub Pages。
沒有後端、沒有資料庫、沒有任何付費服務，也沒有額外的前端框架。

---

## 1. 專案用途

整理「我是誰、正在學什麼、正在做什麼、對什麼有興趣」：關於我、學習歷程、專題與研究、興趣、時間軸與聯絡方式。
**程式（版面）與內容是分開的**：平常更新只需要改 `_data/` 與 `_projects/` 裡的文字檔。

## 2. 專案結構與資料夾用途

```
.
├── _config.yml          網址設定（url、baseurl）與專題集合設定
├── _data/               ★ 內容資料（平常主要改這裡）
│   ├── site.yml           姓名、學校、科系、年級、網站名稱、標語、照片路徑
│   ├── navigation.yml     導覽列文字與順序
│   ├── education.yml      學習歷程的各區塊
│   ├── interests.yml      學術／技術、專題方向、日常興趣（標籤）
│   ├── timeline.yml       時間軸
│   └── contact.yml        聯絡方式
├── _projects/           ★ 每個專題一個 .md 檔，新增檔案就新增專題
├── _templates/          專題範本（不會被網站輸出）
├── _notes/              預留給未來的學習筆記（目前未啟用）
├── pages/               各頁面的文字：about、education、projects、interests、timeline、contact
├── index.html           首頁
├── _layouts/            頁面版型（default、page、about、project）
├── _includes/           共用元件（head、header、footer、標籤、照片、專題列表項目）
├── assets/
│   ├── css/               tokens.css（顏色字體）、base.css、components.css
│   ├── js/                theme.js（深淺色）、nav.js（手機選單）、placeholder.js、reveal.js
│   └── images/            profile/（個人照片）、projects/（專題圖片）、favicon.svg
├── Gemfile              只用於本機預覽
└── README.md            本說明
```

一個簡單的原則：**資料夾名稱以 `_` 開頭的，是給 Jekyll 用的；`assets/` 是會原封不動公開的檔案。**

## 3. 修改個人資料（姓名、學校、科系、年級、網站名稱、標語）

只改 `_data/site.yml`。全站所有地方都從這裡讀取，不需要到別處搜尋取代。

- `site_title`：網站名稱（目前是「Michelle 的個人空間」）。
- `tagline`：個人標語。留空 `""` 就不會顯示。
- `intro_short`：首頁的簡短自我介紹。

## 4. 修改「關於我」

編輯 `pages/about.md`。這是一般 Markdown，直接改文字即可。
`[請在此輸入自我介紹]` 是預留位置，換成你的文字。
文字中的 `{{ s.name }}` 這類符號會自動帶入 `site.yml` 的資料，不用改它。

## 5. 修改「學習歷程」

學校、科系、年級來自 `site.yml`。其他內容改 `_data/education.yml`：

```yaml
  - title: 課程
    placeholder: "[請在此加入想記錄的課程]"
    items:
      - title: 解剖學
        note: 這裡可以寫一句心得（可省略）
```

`items` 有內容時，預留文字會自動消失。要新增區塊，複製一組 `- title: ...` 即可。

## 6. 新增專題

1. 複製 `_templates/project-template.md` 到 `_projects/`，改成英文小寫檔名，例如 `ct-enhancement.md`。
2. 修改最上方的資料：

```yaml
---
title: CT Image Enhancement
order: 2                 # 數字越小越前面，每個專題都要有
status: 進行中
summary: 一句話簡介
tools:
  - Python
---
```

3. `---` 下方用 Markdown 寫內容（簡介、動機、使用方法、結果…）。
4. 存檔、commit、push。專題列表、首頁預覽與專題詳細頁會自動出現，網址是 `/projects/檔名/`。

專題圖片放在 `assets/images/projects/`，在 Markdown 中這樣引用：
`![圖片說明]({{ '/assets/images/projects/mri-01.png' | relative_url }})`
**不要有尚未完成的結果就先寫上去**：沒有資料的段落保留預留文字，或直接刪掉整段。

## 7. 修改時間軸

編輯 `_data/timeline.yml`，由上到下就是顯示順序：

```yaml
  - when: "2025 年 9 月"
    title: 事件標題
    note: 補充說明（可省略）
```

`type: current` 那一項會自動顯示目前的學校、科系、年級，不用手動維護。

## 8. 修改技能與興趣

編輯 `_data/interests.yml`。每個項目是一個標籤，刻意不放百分比或等級。
首頁會顯示 `id: academic` 與 `id: personal` 兩個分類。

## 9. 加入圖片

- **個人照片**：把照片命名為 `profile.jpg`，放到 `assets/images/profile/`。放進去後「關於我」會自動顯示，不用改任何程式。
  若想用其他檔名或 png，請同步修改 `site.yml` 的 `profile_image`，並填寫 `profile_alt`（照片的替代文字）。建議使用 4:5 直式、寬度約 800px 的照片。
- **專題圖片**：放 `assets/images/projects/`。
- **分享預覽圖**：放好圖片後，在 `site.yml` 填 `og_image`。
- **網站圖示**：替換 `assets/images/favicon.svg`。
- 這是公開網站，請確認照片與檔案名稱不含不想公開的資訊。

## 10. 修改網站顏色

打開 `assets/css/tokens.css`。上半部是淺色（米色系）、下半部 `[data-theme="dark"]` 是深色。
每個顏色都有註解說明用途。改文字顏色時，請注意與背景要有足夠的對比。

## 11. 修改字體

同一個檔案 `tokens.css` 的 `--font-sans`（內文）與 `--font-serif`（標題）。
目前使用系統內建字體，載入快、沒有外部依賴。若想用 Google Fonts 的字體，請在 `_includes/head.html` 加入對應的 `<link>`，再把字體名稱寫進這兩個變數。

## 12. 修改導覽列

編輯 `_data/navigation.yml`，順序就是顯示順序，刪除一項就不會顯示。

## 13. 新增頁面

1. 在 `pages/` 新增檔案，例如 `pages/my-page.md`：

```yaml
---
layout: page
title: 頁面標題
permalink: /my-page/
---
這裡開始寫內容。
```

2. 在 `_data/navigation.yml` 加入 `- title: 顯示名稱` 與 `url: /my-page/`。

### 啟用學習筆記（未來）

1. `_config.yml`：取消 `notes:` 三行的註解。
2. 在 `_notes/` 新增 `.md` 檔（含 `layout: page` 與 `title`）。
3. 新增 `pages/notes.md` 當列表頁（可參考 `pages/projects.md`），並加入導覽列。

## 14. 在本機預覽（可選）

不預覽也可以：直接 push 到 GitHub 看線上結果。若想先預覽：

1. 安裝 Ruby（建議 3.x）與 Bundler。
2. 在專案資料夾執行：

```bash
bundle install
bundle exec jekyll serve
```

3. 瀏覽器開啟 `http://localhost:4000`。若 `baseurl` 有設定，網址會是 `http://localhost:4000/你的baseurl/`。

## 15. 部署到 GitHub Pages

1. 在 GitHub 建立新的 Repository（公開）。
   - 想要網址是 `https://帳號.github.io`：Repository 名稱必須是 `帳號.github.io`。
   - 其他名稱也可以，網址會是 `https://帳號.github.io/repository名稱/`。
2. 修改 `_config.yml`：
   - `username.github.io` 型：`url: "https://帳號.github.io"`，`baseurl: ""`
   - 一般 Repository 型：`url: "https://帳號.github.io"`，`baseurl: "/repository名稱"`
3. 把檔案推上去：

```bash
git init
git add .
git commit -m "建立個人網站"
git branch -M main
git remote add origin https://github.com/帳號/repository名稱.git
git push -u origin main
```

4. 到 GitHub 的 Repository → **Settings → Pages**，Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾選 `/ (root)`，按 Save。
5. 等一到兩分鐘，頁面上方會出現網站網址。

之後搬到 GitHub Organization 或改 Repository 名稱，只需要改 `_config.yml` 的 `url` 與 `baseurl`。

## 16. 如何更新網站

```bash
git add .
git commit -m "更新專題內容"
git push
```

push 之後 GitHub Pages 會自動重新建置，通常一兩分鐘內生效。

## 17. 長期維護建議

- **內容放 `_data/` 與 `_projects/`**；除非要改外觀，否則不用碰 `_layouts/`、`_includes/`、`assets/`。
- 頁面上還看得到虛線框的 `[請…]` 文字，代表那裡還沒填。公開前請全部補上或刪掉。
- 公開前檢查：不要放不想公開的個人資訊（地址、電話、私人帳號等）。
- 網站出現問題時，到 Repository 的 **Actions** 頁面看建置錯誤訊息；最常見原因是 YAML 縮排錯誤（用空白，不要用 Tab，冒號後要有空格）。
- 這個網站只使用 GitHub Pages 內建支援的功能，沒有外部插件，所以不太會因為升級而壞掉。

---

## 以後我只需要修改哪些檔案？

| 想做的事 | 改這個檔案 |
|---|---|
| 姓名、學校、科系、年級、網站名稱、標語 | `_data/site.yml` |
| 自我介紹 | `pages/about.md` |
| 學習歷程 | `_data/education.yml` |
| 新增專題 | 在 `_projects/` 新增一個 `.md` |
| 時間軸 | `_data/timeline.yml` |
| 技能與興趣 | `_data/interests.yml` |
| 聯絡方式 | `_data/contact.yml` |
| 個人照片 | 放 `assets/images/profile/profile.jpg` |
| 顏色、字體 | `assets/css/tokens.css` |
| 導覽列 | `_data/navigation.yml` |
| 網址、repository 名稱 | `_config.yml` |
