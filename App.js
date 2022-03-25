import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import TestScreen from './src/screens/TestScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import AdjustableColorScreen from './src/screens/AdjustableColorScreen';
import SquareScreenOld from './src/screens/SquareScreenOld';
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		List: ListScreen,
		Image: ImageScreen,
		Test: TestScreen,
		Counter: CounterScreen,
		Color: ColorScreen,
		AdjustableColor: AdjustableColorScreen,
		SquareOld: SquareScreenOld,
		Square: SquareScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: "Veilics' App",
		},
	}
);

export default createAppContainer(navigator);
