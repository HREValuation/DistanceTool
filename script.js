function convert() {
  var editbox = document.getElementById("editbox");
  var displayMode = document.getElementById("displayMode").value;
  var resultBox = document.getElementById("resultBox");
  var inputData = CSVtoArray(editbox.value, "\n", ",");
  var coor = [];
  var results = [];
  var totalLength = 0.0;

  resultBox.innerHTML = "";

  for (var i = 0; i < inputData.length; ++i) {
    if (inputData[i].length === 2 && !isNaN(inputData[i][0]) && !isNaN(inputData[i][1])) {
      coor.push([parseFloat(inputData[i][0]), parseFloat(inputData[i][1])]);
    }
  }

  for (var i = 0; i < coor.length - 1; i++) {
    var distance = Math.sqrt(
      Math.pow(coor[i + 1][0] - coor[i][0], 2) +
      Math.pow(coor[i + 1][1] - coor[i][1], 2)
    );
    totalLength += distance;
    results.push({
      segment: `段${i + 1}`,
      start: coor[i],
      end: coor[i + 1],
      distance: Math.round(distance * 1000) / 1000,
    });
  }

  if (displayMode === "list") {
    var listOutput = results
      .map(
        (r) =>
          `${r.segment} (${r.start.join(",")} → ${r.end.join(",")}): ${r.distance} 公尺`
      )
      .join("<br>");
    listOutput += `<br>總距離: ${Math.round(totalLength * 1000) / 1000} 公尺`;
    resultBox.innerHTML = listOutput;
  } else if (displayMode === "table") {
    var table = document.createElement("table");
    table.innerHTML = `<tr>
      <th>段數</th>
      <th>起點</th>
      <th>終點</th>
      <th>距離(公尺)</th>
    </tr>`;
    results.forEach((r) => {
      table.innerHTML += `<tr>
        <td>${r.segment}</td>
        <td>${r.start.join(", ")}</td>
        <td>${r.end.join(", ")}</td>
        <td>${r.distance}</td>
      </tr>`;
    });
    table.innerHTML += `<tr>
      <td colspan="3"><strong>加總</strong></td>
      <td><strong>${Math.round(totalLength * 1000) / 1000} 公尺</strong></td>
    </tr>`;
    resultBox.appendChild(table);
  }
}

function CSVtoArray(string, d1, d2) {
  return string.split(d1).map((x) => x.split(d2).map((item) => item.trim()));
}

function exportCSV() {
  var resultBox = document.getElementById("resultBox").querySelector("table");
  if (!resultBox) {
    alert("請先計算距離！");
    return;
  }

  var rows = Array.from(resultBox.rows);
  var csvContent = rows
    .map((row) =>
      Array.from(row.cells)
        .map((cell) => `"${cell.innerText}"`)
        .join(",")
    )
    .join("\n");

  var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "distance_results.csv";
  link.click();
}

function exportExcel() {
  var resultBox = document.getElementById("resultBox").querySelector("table");
  if (!resultBox) {
    alert("請先計算距離！");
    return;
  }

  // 提取表格數據
  var rows = Array.from(resultBox.rows);
  var data = rows.map((row) => {
    return Array.from(row.cells).map((cell) => cell.innerText);
  });

  // 創建工作表和工作簿
  var worksheet = XLSX.utils.aoa_to_sheet(data);
  var workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "距離計算結果");

  // 導出 Excel 文件
  XLSX.writeFile(workbook, "distance_results.xlsx");
}
