chrome.runtime.sendMessage({ todo: "showPageAction" });
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "openGistlog") {
    let divEle = document.getElementsByClassName(
      "d-md-flex d-none flex-items-center flex-md-order-2 flex-order-1 file-navigation-options"
    );
    if (divEle[0]) {
      let newURL = request.url.replace("gist.github.com", "gistlog.co");
      var newButton = `<div class="ml-2" style="margin-right: 1%;">
            <a class="btn btn-sm btn-primary" target="_blank" href=${newURL}>GistLog</a>
          </div> `;
      divEle[0].innerHTML = newButton + divEle[0].innerHTML;
    }
  }
});
