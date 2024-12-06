//生成密钥
import dayjs from 'dayjs';
import { Base64 } from 'js-base64';
const dateTime = dayjs().format("YYYYMMDD");
const encryptionKey = Base64.encode(dateTime);

//全局初始状态
export function getInitialState() {
  return { encryptionKey }
}

//路由监听
import { Toast } from 'antd-mobile'
export function onRouteChange({ location, clientRoutes, routes, action, basename, isFirst }) {
  const { pathname } = location;
  if(pathname === '/courseList' || pathname === '/videoPlay') {
    const encryptionKey_ = localStorage.getItem('encryptionKey');
    if (!encryptionKey_ || (encryptionKey_ && encryptionKey_ !== encryptionKey)) {
      Toast.show({
        content: '密钥错误，请联系客服获取',
        afterClose: () => {
          window.location.href = "/#/home";
        }
      })
    }
  }
}
