// 生成二维码弹出框
function genQRPopup(value) {
  const sectionNode = document.createElement('section');
  sectionNode.setAttribute('class', 'in_content_container');

  new QRCode(sectionNode, {
    text: value,
    width: 128,
    height: 128,
    colorDark: '#000000',
    colorLight: '#ffffff'
  });
  document.body.append(sectionNode);
  setTimeout(() => {
    document.body.removeChild(sectionNode);
  }, 20000);
}

// 预览

function readPicture(value) {
  $('.jiaran_pic_remove').on('click', function() {
    console.log(1);
    $('.jiaran_pic_container').remove();
  });

  const nodes = `<div class="jiaran_pic_container">
                  <img alt="预览" src=${value} />
                  <div class="jiaran_pic_btn">
                  <button>放大</button>
                  <button>缩小</buton>
                  <button class="jiaran_pic_remove">删除</button>
                  </div>              
  </div> `;
  $('body').append(nodes);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { cmd, value } = request;
  if (cmd === 'shareText') {
    sendResponse(`收到了你的消息 ${value}`);
    genQRPopup(value);
  } else if (cmd === 'test') {
    sendResponse(`收到了你的测试消息`);
  } else if (cmd === 'pic') {
    sendResponse('ok');
    readPicture(value);
  }
});
