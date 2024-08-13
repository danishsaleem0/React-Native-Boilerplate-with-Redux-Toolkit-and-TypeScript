import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto'; // Added Fontisto import
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import {IIconProps} from './types';

class Icon extends Component<IIconProps> {
  _getIconType(type: string) {
    switch (type) {
      case 'zocial':
        return ZocialIcon;
      case 'octicon':
        return OcticonIcon;
      case 'font-awesome6':
        return FontAwesome6;
      case 'material':
        return MaterialIcon;
      case 'material-community':
        return MaterialCommunityIcon;
      case 'ionicons':
        return Ionicon;
      case 'foundation':
        return FoundationIcon;
      case 'evilicon':
        return EvilIcon;
      case 'entypo':
        return EntypoIcon;
      case 'font-awesome':
        return FAIcon;
      case 'font-awesome5':
        return FontAwesome5;
      case 'simple-line-icon':
        return SimpleLineIcon;
      case 'ant-design':
        return AntDesign;
      case 'feather':
        return FeatherIcon;
      case 'fontisto':
        return Fontisto;
      case 'octicons':
        return OcticonIcon;
      default:
        return MaterialIcon;
    }
  }

  render() {
    const {size: iconSize, name, color, type, style} = this.props;
    const FontIcon = this._getIconType(type);
    return (
      <FontIcon
        {...this.props}
        name={name}
        style={style}
        size={iconSize}
        color={color}
      />
    );
  }
}

export default Icon;
