import React, { Component } from 'react'

import { Text } from 'react-native'
import iconMap from '../../fonts/map'

export default Icon = ({name, style, ...props}) => {
  let styles = [{fontFamily: 'iconfont'}];
  if (Array.isArray(style)) {
    styles.push(...style);
  } else {
    styles.push(style);
  }

  return <Text style={styles}{...props}>
    {String.fromCharCode(iconMap[name])}
  </Text>
}