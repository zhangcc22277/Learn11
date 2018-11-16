//如果被引用的模块有export default命令导出的数据，在import导入的时候需要自己命名
import {hh} from './b.js';
console.log(hh);

setTimeout(function () {
    console.log(hh);
},2000)