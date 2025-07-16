# 基隆聖德診所管理系統 (KeelungShengDe Clinic Management System)

這是一個使用 Angular 17 開發的現代化診所管理系統，提供完整的病患管理、預約排程和醫療記錄功能。

## 功能特色

- 🏥 **病患管理** - 完整的病患資料管理，包含基本資料、病歷記錄和診療歷史
- 📅 **預約系統** - 智能預約排程系統，支援線上預約和時間管理
- 📊 **醫療記錄** - 數位化醫療記錄管理，安全可靠的資料儲存
- 📈 **報表分析** - 詳細的營運報表和數據分析
- ⚙️ **系統設定** - 靈活的系統配置選項

## 技術規格

- **前端框架**: Angular 17
- **UI 樣式**: SCSS
- **路由**: Angular Router (Standalone Components)
- **HTTP 客戶端**: Angular HttpClient
- **開發語言**: TypeScript 5.2+
- **包管理**: npm

## 開始使用

### 先決條件

確保您的系統已安裝以下軟體：

- [Node.js](https://nodejs.org/) (版本 18.x 或更高)
- [npm](https://www.npmjs.com/) (通常隨 Node.js 一起安裝)

### 安裝步驟

1. **複製專案**
   ```bash
   git clone <repository-url>
   cd ShengDeClinic_Project
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **啟動開發伺服器**
   ```bash
   npm start
   ```
   
   或使用 Angular CLI：
   ```bash
   ng serve
   ```

4. **開啟瀏覽器**
   
   導航至 `http://localhost:4200/` 即可看到應用程式運行。

### 可用的指令

- `npm start` - 啟動開發伺服器
- `npm run build` - 建置生產版本
- `npm run build:prod` - 建置最佳化的生產版本
- `npm test` - 執行單元測試
- `npm run watch` - 啟動監控模式建置

## 專案結構

```
src/
├── app/
│   ├── pages/                 # 頁面元件
│   │   ├── dashboard/         # 儀表板頁面
│   │   ├── patients/          # 病患管理頁面
│   │   ├── appointments/      # 預約管理頁面
│   │   ├── reports/           # 報表頁面
│   │   └── settings/          # 設定頁面
│   ├── app.component.*        # 主要應用程式元件
│   ├── app.config.ts          # 應用程式配置
│   └── app.routes.ts          # 路由配置
├── assets/                    # 靜態資源
├── styles.scss                # 全域樣式
├── index.html                 # 主要 HTML 檔案
└── main.ts                    # 應用程式進入點
```

## 開發指南

### 新增頁面

1. 在 `src/app/pages/` 目錄下建立新的資料夾
2. 建立元件檔案 (component.ts, component.html, component.scss)
3. 在 `app.routes.ts` 中新增路由配置
4. 在主選單中新增連結

### 樣式指南

專案使用 SCSS 進行樣式管理：
- 全域樣式定義在 `src/styles.scss`
- 元件特定樣式使用各自的 `.scss` 檔案
- 遵循 BEM 命名規範

## 部署

### 建置生產版本

```bash
npm run build:prod
```

建置完成後，檔案將位於 `dist/keelung-shengde-clinic/` 目錄中，可部署至任何靜態檔案伺服器。

## 貢獻

1. Fork 此專案
2. 建立功能分支 (`git checkout -b feature/新功能`)
3. 提交變更 (`git commit -am '新增某功能'`)
4. 推送至分支 (`git push origin feature/新功能`)
5. 建立 Pull Request

## 授權

此專案採用 MIT 授權條款 - 詳見 LICENSE 檔案。

## 聯絡資訊

如有任何問題或建議，請聯絡開發團隊。

---

© 2024 基隆聖德診所管理系統. 版權所有.
