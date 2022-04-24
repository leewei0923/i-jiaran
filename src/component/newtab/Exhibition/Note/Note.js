import React, { useState } from 'react';
import { Modal, Input, Radio, Form } from 'antd';
import styles from './note.module.less';

const list = [
  {
    id: '1',
    content: '加油,努力',
    date: '04.11',
    state: 'normal'
  },
  {
    id: '2',
    content: '明天会更加精彩',
    date: '04.11',
    state: 'medium'
  },
  {
    id: '1',
    content: '世界因为你而更加精彩',
    date: '04.11',
    state: 'importent'
  },
  {
    id: '1',
    content: '朋友加油努力,相信自己你一定行',
    date: '04.11',
    state: 'medium'
  },
  {
    id: '1',
    content: '未来是属于我们的,只要你愿意付出努力,就会获得很多东西',
    date: '04.11',
    state: 'importent'
  }
];

export default function DateChart() {
  const { TextArea } = Input;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [textValue, setTextValue] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    alert(textValue);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onGetContent = (e) => {
    setTextValue(e.target.value);
  };
  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <p className={styles.appName}>待办事项</p>
        <div className={styles.addIcon} onClick={() => showModal()}>
          <p></p>
        </div>
      </section>
      <hr />

      <section className={styles.mainContent}>
        {list.map((item) => (
          <div className={styles.todolist} key={item.id + item.content}>
            <input type="checkbox" className={styles.checkBox} />
            <input className={styles.content} data-state={item.state} value={item.content} />

            <p className={styles.date}>{item.date}</p>
          </div>
        ))}

        {/* <div className={styles.todolist} key={item.id + item.content}>
          <input type="checkbox" className={styles.checkBox} />
          <p className={styles.content}>今天任务完成了吗?</p>
          <p className={styles.date}>04.22</p>
        </div> */}
      </section>

      <Modal title="待办事项" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form name="addTodolist">
          <Form.Item label="任务内容" name="content">
            <TextArea allowClear showCount placeholder="你今天的任务完成了吗" onChange={onGetContent} maxLength={50} />
          </Form.Item>
          <Form.Item label="任务状态" name="radio">
            <Radio.Group>
              <Radio value="normal" checked>
                普通
              </Radio>
              <Radio value="medium">中等</Radio>
              <Radio value="importent">紧急</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
