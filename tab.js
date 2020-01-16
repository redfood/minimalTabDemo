var tabCnt = 1;

function addTab() {
  tabCnt++;
  var tabName = prompt("New tab name", "untitled.py");
  newTab = document.createElement( 'div' );
  newTab.className  = "tab";
  newTab.innerHTML = `
  <input type="radio" id="tab-${tabCnt}" name="tab-group-1" checked>
  <label for="tab-${tabCnt}">${tabName}</label>
  <div class="content">
    <textarea >
    </textarea>
  </div>
  `;
document.getElementById("tabs").appendChild(newTab);
}
