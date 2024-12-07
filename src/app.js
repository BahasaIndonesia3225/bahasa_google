//生成密钥
import dayjs from 'dayjs';
import { Base64 } from 'js-base64';
const dateTime = dayjs().format("YYYYMMDD");
const encryptionKey = Base64.encode(dateTime);

//全局初始状态
export function getInitialState() {
  return { encryptionKey }
}
