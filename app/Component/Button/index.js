import React from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'

class Button extends React.Component {
    render() {
        const {
            color,
            onPress,
            disabled,
            testID,
            title
        } = this.props;
        const buttonStyles = [styles.button];
        const textStyles = [styles.text];
        if (color) {
            buttonStyles.push({ backgroundColor: color });
        }
        if (disabled) {
            buttonStyles.push(styles.buttonDisabled);
            textStyles.push(styles.textDisabled);
        }
        const Touchable =
            Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

        const children = title ? <Text style={textStyles} disabled={disabled}>
            {formattedTitle}
        </Text> : this.props.children

        return (
            <Touchable
                testID={testID}
                disabled={disabled}
                onPress={onPress}>
                <View style={buttonStyles}>
                    {children}
                </View>
            </Touchable>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        elevation: 4,
        backgroundColor: '#2196F3',
        borderRadius: 2,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        padding: 8,
        fontWeight: '500',
    },
    buttonDisabled: {
        elevation: 0,
        backgroundColor: '#dfdfdf',
    },
    textDisabled: {
        color: '#a1a1a1',
    },
});

export default Button
