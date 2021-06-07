/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import welcomescreen from './src/tabnavigation/welcomescreen';
//import list from './src/tabnavigation/list';
AppRegistry.registerComponent(appName, () => welcomescreen);
