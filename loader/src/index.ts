function write(content: string) {
  document.body.appendChild(document.createTextNode(content));
}
write('测试输出内容');
