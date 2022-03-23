import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import TestScreen from './src/screens/TestScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		List: ListScreen,
		Image: ImageScreen,
		Test: TestScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: "Veilics' App",
		},
	}
);

export default createAppContainer(navigator);
