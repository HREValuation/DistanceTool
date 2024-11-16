# DistanceTool - 多座標點距離計算工具

## 簡介

`DistanceTool` 是一個基於 JavaScript 的靜態網頁工具，設計用於計算多個座標點之間的距離總和，並提供結果匯出為 CSV 或 Excel 的功能。  
此工具適合地理分析、工程測量或任何需要處理座標距離的場景。

---

## 功能

- **輸入座標：** 支援多行座標輸入，格式為 `X,Y`，每行一組座標。
- **距離計算：** 自動計算所有相鄰座標點之間的距離，並顯示每段距離及總距離。
- **顯示選擇：** 支援結果以列表或表格方式顯示。
- **結果匯出：** 提供匯出計算結果為 CSV 或 Excel 文件的功能。

---

## 使用方式

### 輸入方式

1. 在輸入框中，填入座標資料，每行一組座標，格式如下：
   ```
   218666.173,2676198.217
   218666.290,2676169.601
   218666.400,2676150.000
   ```
2. 選擇顯示方式（列表或表格），並點擊 **計算** 按鈕。
3. 若需要保存結果，點擊 **匯出為 CSV** 或 **匯出為 Excel** 按鈕。

---

### 示例輸出

#### 列表模式
```
段1 (218666.173,2676198.217 → 218666.290,2676169.601): 28.616 公尺
段2 (218666.290,2676169.601 → 218666.400,2676150.000): 19.607 公尺
總距離: 48.223 公尺
```

#### 表格模式

| 段數 | 起點 (X, Y)               | 終點 (X, Y)               | 距離 (公尺) |
|------|---------------------------|---------------------------|-------------|
| 段1  | (218666.173, 2676198.217) | (218666.290, 2676169.601) | 28.616      |
| 段2  | (218666.290, 2676169.601) | (218666.400, 2676150.000) | 19.607      |
| 總距離 |                           |                           | 48.223      |

---

## 使用技術

- **前端技術：** 使用 JavaScript 和 HTML/CSS 開發，功能完全基於靜態網頁實現。
- **匯出功能：** 透過 JavaScript 的 `Blob` 生成 CSV，使用 `SheetJS`（`xlsx`）庫生成 Excel 文件。

---

## 安裝與使用

1. 下載此專案的檔案，或直接複製相關 HTML 和 JavaScript 代碼。
2. 打開 `index.html` 文件，直接在瀏覽器中使用。

---

## 英文版本 (English Version)

# DistanceTool - Multi-coordinate Distance Calculation Tool

## Introduction

`DistanceTool` is a JavaScript-based static web tool designed to calculate the total distance between multiple coordinate points and export the results as CSV or Excel files.  
This tool is ideal for geographic analysis, engineering surveys, or any scenario requiring coordinate distance calculations.

---

## Features

- **Coordinate Input:** Supports multi-line coordinate input in the format `X,Y`, one set of coordinates per line.
- **Distance Calculation:** Automatically calculates distances between consecutive points and displays each segment and the total distance.
- **Display Options:** Results can be shown in either a list or table format.
- **Export Results:** Allows exporting calculation results as CSV or Excel files.

---

## How to Use

### Input Method

1. Enter coordinate data in the input box, one set of coordinates per line, in the format:
   ```
   218666.173,2676198.217
   218666.290,2676169.601
   218666.400,2676150.000
   ```
2. Select the display option (list or table) and click the **Calculate** button.
3. To save the results, click the **Export as CSV** or **Export as Excel** button.

---

### Example Output

#### List Mode
```
Segment 1 (218666.173,2676198.217 → 218666.290,2676169.601): 28.616 meters
Segment 2 (218666.290,2676169.601 → 218666.400,2676150.000): 19.607 meters
Total Distance: 48.223 meters
```

#### Table Mode

| Segment | Start Point (X, Y)       | End Point (X, Y)         | Distance (meters) |
|---------|--------------------------|--------------------------|-------------------|
| 1       | (218666.173, 2676198.217)| (218666.290, 2676169.601)| 28.616            |
| 2       | (218666.290, 2676169.601)| (218666.400, 2676150.000)| 19.607            |
| Total   |                          |                          | 48.223            |

---

## Technology Used

- **Frontend Technology:** Built with JavaScript, HTML, and CSS; fully functional as a static web page.
- **Export Features:** Uses JavaScript `Blob` to generate CSV files and `SheetJS (xlsx)` to create Excel files.

---

## Installation and Usage

1. Download the project files or copy the relevant HTML and JavaScript code.
2. Open the `index.html` file in your browser to use the tool.

---

如果需要更多細化的描述，請告訴我，我可以幫助進一步調整！