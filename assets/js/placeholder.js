// 把 [請在此輸入…] 這類預留文字標示成虛線框，讓你一眼看出哪裡還沒填。
// 只改外觀，不影響內容。想停用就把 layouts/default.html 內這支 script 刪掉。
(function () {
  var main = document.getElementById('main');
  if (!main) return;
  var pattern = /\[(?:請[^\]]*|[A-Z][A-Z ]*)\]/g;
  var walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode: function (n) {
      var p = n.parentNode;
      if (!p || /^(SCRIPT|STYLE|CODE|PRE)$/.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
      pattern.lastIndex = 0;
      return pattern.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  var nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(function (node) {
    var frag = document.createDocumentFragment(), text = node.nodeValue, last = 0, m;
    pattern.lastIndex = 0;
    while ((m = pattern.exec(text))) {
      frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      var span = document.createElement('span');
      span.className = 'ph';
      span.textContent = m[0];
      frag.appendChild(span);
      last = m.index + m[0].length;
    }
    frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  });
})();
