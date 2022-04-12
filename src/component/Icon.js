import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3314064_xyfzr2a7ftp.js'
});

export default function Icon({ type }) {
  return <IconFont type={type} style={{ fontSize: 'inherit', color: 'inherit' }} />;
}
