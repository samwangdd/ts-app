import * as React from 'react';
import WordCloud from './WordCloud.jsx';
// import WordCloudReact from './WordCloudReact.jsx';

import { compose, pipeAsync } from '../utils/function';
import './hello.css';

const sum = pipeAsync(
  (x: number) => x + 1,
  (x: number) =>
    new Promise((resolve) => setTimeout(() => resolve(x + 2), 2000)),
  (x: number) => x + 3,
  (x: number) => x + 4
);

const data = [
  [
    {
      name: '四川长江液压件有限责任公司',
      color: 'gray',
      value: 965,
    },
    {
      name: '凯德（成都）商业置业有限公司',
      value: 6181,
      color: 'black',
    },
    {
      name: '陕西华联置业发展有限公司',
      value: 847,
      color: 'black',
    },
    {
      name: '成都市晋江福源食品有限公司',
      value: 4386,
      color: 'black',
    },
    {
      name: '泸州长江机械有限公司',
      value: 582,
      color: 'black',
    },
    {
      name: '乐山嘉华水泥股份有限公司',
      value: 4055,
      color: 'black',
    },
    {
      name: '四川天视车镜有限责任公司',
      value: 2467,
      color: 'black',
    },
    {
      name: '成都来福士实业有限公司',
      value: 10000,
      color: 'black',
    },
    {
      name: '泸州启航科技有限公司',
      value: 2244,
      color: 'black',
    },
    {
      name: '泸州群煜玻璃有限公司',
      value: 1898,
    },
    {
      name: '海普智联科技股份有限公司',
      value: 1484,
      color: 'black',
    },

    {
      name: '成都嘉润汽车部件有限公司',
      value: 555,
      color: 'gray',
    },
    {
      name: '四川兴利达物业服务有限公司成都分公司',
      value: 550,
      color: 'gray',
    },
    {
      name: '四川民盛特钢锻造有限公司',
      value: 265,
      color: 'gray',
    },
    {
      name: '成都豪能科技股份有限公司',
      value: 1112,
      color: 'black',
    },
  ],
  [
    {
      name: '成都禅德太阳能电力有限公司',
      color: 'gray',
      value: 965,
    },
    {
      name: '四川兴事发门窗有限责任公司',
      value: 6181,
      color: 'black',
    },
    {
      name: '宜宾纸业股份有限公司',
      value: 847,
      color: 'black',
    },
    {
      name: '眉山市彭山永祥饲料有限责任公司',
      value: 4386,
      color: 'black',
    },
    {
      name: '乐山乐通锅炉有限公司',
      value: 582,
      color: 'black',
    },
    {
      name: '嘉华特种水泥股份有限公司嘉华水泥总厂',
      value: 4055,
      color: 'black',
    },
  ],
  [
    {
      name: '四川雄健实业有限公司',
      color: 'gray',
      value: 965,
    },
    {
      name: '宜宾市利豪生物科技有限公司',
      value: 6181,
      color: 'black',
    },
    {
      name: '中江感知粮油有限公司',
      value: 847,
      color: 'black',
    },
    {
      name: '宜宾市沣熠包装有限公司',
      value: 4386,
      color: 'black',
    },
    {
      name: '茂县三合硅业科技发展有限公司',
      value: 582,
      color: 'black',
    },
    {
      name: '四川宜宾江源化工机械制造有限责任公司',
      value: 4055,
      color: 'black',
    },
    {
      name: '四川京都龙泰科技有限公司',
      value: 2467,
      color: 'black',
    },
    {
      name: '乐山新天源太阳能科技有限公司',
      value: 10000,
      color: 'black',
    },
    {
      name: '泸州启航科技有限公司',
      value: 2244,
      color: 'black',
    },
    {
      name: '泸州群煜玻璃有限公司',
      value: 1898,
    },
    {
      name: '海普智联科技股份有限公司',
      value: 1484,
      color: 'black',
    },

    {
      name: '成都嘉润汽车部件有限公司',
      value: 555,
      color: 'gray',
    },
    {
      name: '四川兴利达物业服务有限公司成都分公司',
      value: 550,
      color: 'gray',
    },
    {
      name: '四川民盛特钢锻造有限公司',
      value: 265,
      color: 'gray',
    },
    {
      name: '成都豪能科技股份有限公司',
      value: 1112,
      color: 'black',
    },
  ],
];

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
  listNo: number;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1, listNo: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.listNo >= 2) {
        this.setState({
          listNo: 0,
        });
      } else {
        this.setState({
          listNo: this.state.listNo + 1,
        });
      }
    }, 5000);
  }
  onIncrement = () => {
    this.updateEnthusiasmLevel(this.state.currentEnthusiasm + 1);
  };
  onDecrement = async () => {
    if (this.state.currentEnthusiasm < 1) {
      return;
    }
    this.updateEnthusiasmLevel(this.state.currentEnthusiasm - 1);
    console.log('sum :', await sum(5));
  };

  updateEnthusiasmLevel = (currentEnthusiasm: number) => {
    this.setState({ currentEnthusiasm });
  };
  render() {
    const { enthusiasmLevel = 1 } = this.props;
    const { listNo } = this.state;
    const setMark = compose(getLength, getMark, toUpperCase);

    console.log('setMark :', setMark('1'));
    console.log('listNo :>> ', listNo);
    if (enthusiasmLevel <= 0) {
      throw new Error('you could be a little more enthusiastic. :D');
    }
    return (
      <div>
        <div className="header">Header</div>
        <WordCloud data={data[listNo]}></WordCloud>
        {/* <WordCloudReact data={data[listNo]}></WordCloudReact> */}
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default Hello;

const getLength = (params: number) => {
  console.log('setMark :', 2);
  return new Array(params + 1);
};

const getMark = (params: Array<string>) => {
  console.log('setMark :', 3);
  return params.join('!');
};

const toUpperCase = (params: string) => {
  console.log('setMark :', 1);
  return params.toUpperCase();
};
