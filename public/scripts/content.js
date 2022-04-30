// 生成二维码弹出框
function genQRPopup(value) {
  const sectionNode = document.createElement('section');
  sectionNode.setAttribute('class', 'in_content_container');
  sectionNode.setAttribute('onclick', "$('.in_content_container').remove()");
  new QRCode(sectionNode, {
    text: value,
    width: 128,
    height: 128,
    colorDark: '#000000',
    colorLight: '#ffffff'
  });
  const pnode = document.createElement('p');
  pnode.innerText = '点击二维码,即可关闭';
  sectionNode.appendChild(pnode);
  document.body.append(sectionNode);
  setTimeout(() => {
    document.body.removeChild(sectionNode);
  }, 20000);
}

// 预览
function readPicture(value) {
  const nodes = `<div class="jiaran_pic_container">
                  <img alt="预览" src=${value} />
                  <div class="jiaran_pic_btn">
                  <button>放大</button>
                  <button>缩小</buton>
                  <button class="jiaran_pic_remove" onclick="$('.jiaran_pic_container').remove()">删除</button>
                  </div>              
  </div> `;
  $('body').append(nodes);
}

function notifications(str, time = 5000) {
  const nodes = `<div class="jiaran_notic_container">
                    <p><span class="jiaran_notic_focus">!</span>${str}</p>
                  </div>              
 `;
  $('body').append(nodes);
  setTimeout(() => {
    $('.jiaran_notic_container').remove();
  }, time);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { cmd, value } = request;

  switch (cmd) {
    case 'shareText':
      sendResponse(`收到了你的消息 ${value}`);
      try {
        genQRPopup(value);
        notifications(`${value.slice(0, 5)}`);
      } catch (err) {
        console.warn(err);
        notifications(`出错, 请尝试一下减少字数`);
      }
      break;

    case 'test':
      sendResponse(`收到了你的测试消息`);
      break;
    case 'pic':
      sendResponse('ok');
      try {
        readPicture(value);
        notifications(`右键另存为图片`);
      } catch (err) {
        console.log(err);
      }
      break;
    default:
      break;
  }
});
