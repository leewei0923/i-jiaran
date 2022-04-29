import { Button } from 'antd';
import QRCode from 'qrcode.react';
import styles from './popJiaran.module.less';

function PopJiaran() {
  return (
    <div className={styles.container}>
      <Button>生成二维码</Button>
      <QRCode
        value="hello" // value参数为生成二维码的链接
        size={200} // 二维码的宽高尺寸
        fgColor="#000000" // 二维码的颜色
      />
    </div>
  );
}

export default PopJiaran;
