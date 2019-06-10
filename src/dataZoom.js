'use strict';

const clone = require('lodash/defaultsDeep');

exports = module.exports = function (dataZoom) {
  dataZoom = dataZoom || [];
  return dataZoom.map(dz => {
    if (dz.type === 'slider') {
      return clone({
        type: 'slider',
        show: true,
        showDetail: false,
        backgroundColor: '#121A19',
        dataBackground: {
          lineStyle: {
            color: '#193d37',
            width: 1,
            opacity: 1
          },
          areaStyle: {
            color: 'rgba(255,147,0,0.20)'
          }
        },
        fillerColor: 'rgba(255,146,0,0.10)',
        borderColor: 'transparent',
        handleStyle: {
          color: '#193D37'
        }
      }, dz);
    }
    return dz;
  });
};