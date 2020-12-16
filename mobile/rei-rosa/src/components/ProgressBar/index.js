import * as React from 'react';
import {View, Text, Animated, TextInput, StyleSheet} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

export default function Donut({
    percentage = 100,
    radius = 60,
    strokeWidth = 10,
    duration = 3000,
    color = '#000000',
    delay = 0,
    textColor,
    max = 100,
    disabled = false,
    onSpinEnd = () => {}
}) {
    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const circleRef = React.useRef(); // what does useRef means???
    const inputRef = React.useRef();
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;
    const animation = (toValue) => {
        return Animated.timing(animatedValue, {
            toValue,
            duration,
            delay,
            useNativeDriver: true,
        }).start(({ finished }) => {
            onSpinEnd();
        });
    }
    
    // what is useEffect????
    React.useEffect(() => {
        animation(percentage);
        
        animatedValue.addListener(v => {
            if(circleRef?.current){
                const maxPerc = 100 * v.value / max
                const strokeDashoffset = 
                    circleCircumference - (circleCircumference * maxPerc) / 100
                circleRef.current.setNativeProps({
                    strokeDashoffset,
                });
            }

            if(inputRef?.current){
                const seconds = duration/1000;
                const timepercentleft = seconds*(1-v.value/100);
                inputRef.current.setNativeProps({
                    text:`${Math.round(timepercentleft)}`,
                });
            }
        });

        return () => {
            animatedValue.removeAllListeners();
        }

    }, [max, percentage])
    return (
        <View>
            <Svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
                <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
                    <AnimatedCircle
                        ref={circleRef}
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeOpacity={0.2}
                    />
                    <AnimatedCircle
                        ref={circleRef}
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={circleCircumference}
                        strokeLinecap="round"
                    />
                </G>
            </Svg>
            <AnimatedInput
                ref={inputRef}
                underlineColorAndroid="transparent"
                editable={false}
                defaultValue="0"
                style={[
                    StyleSheet.absoluteFillObject,
                    {fontSize: radius / 2, color: textColor ?? color},
                    {fontWeight: '900', textAlign: "center"}
                ]}
            />
        </View>
    );
}