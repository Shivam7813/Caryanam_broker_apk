import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/ui';

export default function Header({ title, subtitle, rightText, onRightPress }) {
  return (
    <View style={{
      paddingHorizontal: 18,
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <View>
        <Text style={{
          fontSize: 26,
          fontWeight: '900',
          color: COLORS.text,
        }}>
          {title}
        </Text>

        <Text style={{ color: COLORS.subText }}>
          {subtitle}
        </Text>
      </View>

      {rightText && (
        <TouchableOpacity
          onPress={onRightPress}
          style={{
            backgroundColor: COLORS.primary,
            padding: 10,
            borderRadius: 14,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '800' }}>
            {rightText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}