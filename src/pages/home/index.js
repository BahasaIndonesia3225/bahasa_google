import React, { useState, useEffect } from 'react'
import { Space, Mask, SpinLoading, Modal, Image, Input, Card, Button } from 'antd-mobile';
import { AntOutline, RightOutline } from 'antd-mobile-icons';
import { useNavigate } from 'umi';
import { Base64 } from 'js-base64';
import dayjs from 'dayjs'
import './index.less';

export default () => {
  let navigate = useNavigate();
  let password =  dayjs().format("YYYYMMDD");
  const encode = Base64.encode(password); // 编码

  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => { setVisible(false) }, 500);
  }, [])

  const checkPassword = () => {
    if (value === encode) {
      navigate("/courseList", { replace: false })
    } else {
      Modal.alert({
        content: '登录密钥错误，请联系客服获取',
        onConfirm: () => {},
      })
    }
  }

  const dumpLink = (type) => {
    const link = type === "youtube" ? "https://www.youtube.com/channel/UCNz0CuIKBXpizEmn8akC42w" : "https://v.douyin.com/iNNrghAv/ 8@5.com";
    window.open(link, "_blank")
  }

  return (
    <div className="home">
      <Mask opacity='thick' visible={visible}>
        <div className='overlayContent'>
          <Space direction='vertical'>
            <SpinLoading color='primary' />
            <span>加载中...</span>
          </Space>
        </div>
      </Mask>
      <Image
        className="logoCard"
        src='/bahasaGoogle/image/logo.png'
      />
      <Card
        className="passwordCard"
        title={
          <div style={{ fontWeight: 'normal' }}>
            <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
            密钥每天更新一次，请联系客户获取。
          </div>
        }
        extra={<RightOutline />}
      >
        <div className="content">
          <Input
            placeholder='请输入登录密钥'
            value={value}
            onChange={val => {
              setValue(val)
            }}
          />
        </div>
        <div className="footer">
          <Button
            disabled={!value}
            color='primary'
            onClick={() => checkPassword()}>
            确定
          </Button>
        </div>
      </Card>
      <div className="bahasaindoFooter">
        <div className="friendLink">
          <span onClick={() => dumpLink('youtube')}>东东印尼语YouTube</span>
          <span onClick={() => dumpLink('tiktok')}>东东印尼语抖音</span>
        </div>
        <p>
          D 2019-2024 PT BahasaDona All rights reserved
        </p>
      </div>
    </div>
  )
}
