import { Navigate, Outlet, useModel } from 'umi'
import { Toast } from 'antd-mobile'

export default (props) => {
  const { initialState } = useModel('@@initialState');
  const encryptionKey_ = localStorage.getItem('encryptionKey');
  const isLogin = encryptionKey_ && encryptionKey_ === initialState.encryptionKey
  if (isLogin) {
    return <Outlet />;
  } else{
    Toast.show({
      content: '密钥过期，请联系客服获取',
      afterClose: () => {
        console.log('after')
      },
    })
    return <Navigate to="/home" />;
  }
}
