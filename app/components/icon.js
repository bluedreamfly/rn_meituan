import React, { Component } from 'react'

import { Text } from 'react-native'
import iconMap from '../../fonts/map'

export default Icon = ({name, style, ...props}) => {
  
  return <Text style={Object.assign({}, {fontFamily: 'iconfont'}, ...style)}{...props}>
    {String.fromCharCode(iconMap[name])}
  </Text>
}