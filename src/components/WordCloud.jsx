import React from 'react';
import 'echarts-wordcloud';
import echarts from 'echarts';
import coin from './coin.svg';

class Wordcloudl extends React.Component {
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('wordcloudl'));
    var maskImage = new Image();
    //重点：云彩图片的base64码
    maskImage.src = coin;

    maskImage.onload = function () {
      myChart.setOption({
        backgroundColor: '#fff',
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
        series: [
          {
            type: 'wordCloud',
            gridSize: 1,
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [12, 25],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45

            rotationRange: [0, 0],
            maskImage: maskImage,
            textStyle: {
              normal: {
                color: function () {
                  return (
                    'rgb(' +
                    Math.round(Math.random() * 255) +
                    ', ' +
                    Math.round(Math.random() * 255) +
                    ', ' +
                    Math.round(Math.random() * 255) +
                    ')'
                  );
                },
              },
            },
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: 'center',
            top: 'center',
            right: null,
            bottom: null,
            width: '90%',
            height: '110%',
            data: [
              {
                name: 'Sam S Club',
                value: 10000,
              },
              {
                name: 'Macys',
                value: 6181,
              },
              {
                name: 'Amy Schumer',
                value: 4386,
              },
              {
                name: 'Jurassic World',
                value: 4055,
              },
              {
                name: 'Charter Communications',
                value: 2467,
              },
              {
                name: 'Chick Fil A',
                value: 2244,
              },
              {
                name: 'Planet Fitness',
                value: 1898,
              },
              {
                name: 'Pitch Perfect',
                value: 1484,
              },
              {
                name: 'Express',
                value: 1112,
              },
              {
                name: 'Home',
                value: 965,
              },
              {
                name: 'Johnny Depp',
                value: 847,
              },
              {
                name: 'Lena Dunham',
                value: 582,
              },
              {
                name: 'Lewis Hamilton',
                value: 555,
              },
              {
                name: 'KXAN',
                value: 550,
              },
              {
                name: 'Point Break',
                value: 265,
              },
              {
                name: 'Lewis Hamilton',
                value: 555,
              },
              {
                name: 'KXAN',
                value: 550,
              },
              {
                name: 'Point Break',
                value: 265,
              },
              {
                name: 'Lewis Hamilton',
                value: 555,
              },
              {
                name: 'KXAN',
                value: 550,
              },
              {
                name: 'Point Break',
                value: 265,
              },
              {
                name: 'Lewis Hamilton',
                value: 555,
              },
              {
                name: 'KXAN',
                value: 550,
              },
              {
                name: 'Point Break',
                value: 265,
              },
              {
                name: 'Lewis Hamilton',
                value: 555,
              },
              {
                name: 'KXAN',
                value: 550,
              },
              {
                name: 'Point Break',
                value: 265,
              },
              {
                name: 'Lewis Hamilton',
                value: 555,
              },
              {
                name: 'KXAN',
                value: 550,
              },
              {
                name: 'Point Break',
                value: 265,
              },
              {
                name: 'Lewis Hamilton',
                value: 555,
              },
              {
                name: 'KXAN',
                value: 550,
              },
              {
                name: 'Point Break',
                value: 265,
              },
            ],
          },
        ],
      });
    };
  }
  render() {
    return (
      <div>
        <div id="wordcloudl" style={{ height: 400 }}></div>
      </div>
    );
  }
}
export default Wordcloudl;
