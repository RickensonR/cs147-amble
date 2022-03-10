import { Dimensions} from 'react-native';
import { getInputRangeFromIndexes } from 'react-native-snap-carousel'; // 3.7.2

const SLIDER_WIDTH = Dimensions.get('window').width;
const TRANSLATE_VALUE = Math.round(SLIDER_WIDTH * 0.3 / 4);
const TRANSLATE_VALUE_SMALL = Math.round(SLIDER_WIDTH * 0.3 / 4);

export function scrollInterpolator (index, carouselProps) {
    const range = [1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}


export function animatedStyles (index, animatedValue, carouselProps) {
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
    const translateOrthProp = carouselProps.vertical ? 'translateX' : 'translateY';
    const sizeRef = .5 * (carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth);
    let animatedOpacity = {};
    let animatedTransform = {};

    if (carouselProps.inactiveSlideOpacity < 1) {
        animatedOpacity = {
            opacity: animatedValue.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [carouselProps.inactiveSlideOpacity, 1, carouselProps.inactiveSlideOpacity]
            })
        };
    }

    if (carouselProps.inactiveSlideScale < 1) {
        animatedTransform = {
            transform: [{
                scale: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [.5, 1, .5]
                }),
                rotate: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: ['-20deg', '0deg', '20deg'],
                    extrapolate: 'clamp'
                }),
                [translateOrthProp]: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [
                      .25*sizeRef,
                      0,
                      .25*sizeRef]
                }),
                [translateProp]: animatedValue.interpolate({
                    inputRange: [-2, -1, 0, 1, 2],
                    outputRange: [
                        sizeRef,
                        1.75 * sizeRef,
                        0,
                        -1.75 * sizeRef,
                        -sizeRef,
                    ],
                    extrapolate: 'clamp'
                })
            }]
        };
    }

    return {
        ...animatedOpacity,
        ...animatedTransform,
    };
}
