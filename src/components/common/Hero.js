import { View, Text, TouchableOpacity } from 'react-native';

export default function Hero({
  title,
  sub,
  btnText,
  onPress,
  hideButton = false,
}) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>
        {title}
      </Text>

      {sub && (
        <Text style={styles.sub}>
          {sub}
        </Text>
      )}

      {!hideButton && btnText && (
        <TouchableOpacity
          onPress={onPress}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {btnText}
          </Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = {
  container: {
    backgroundColor: '#4338CA',
    marginHorizontal: 18,
    borderRadius: 26,
    padding: 22,
    marginTop: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#fff',
  },

  sub: {
    color: '#E0E7FF',
    marginTop: 10,
    lineHeight: 18,
  },

  button: {
    backgroundColor: '#312E81',
    marginTop: 14,
    paddingVertical: 15,
    borderRadius: 16,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '800',
  },
};