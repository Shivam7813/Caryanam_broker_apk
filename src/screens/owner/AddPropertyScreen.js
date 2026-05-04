import { addProperty, uploadPropertyImages } from '../../api/propertyApi';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import { Platform } from 'react-native';
import {
  StatusBar,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddPropertyScreen({ navigation }) {

  const [form, setForm] = useState({
    title: '',
    rent: '',
    location: '',
    city: '',
    state: '',
    address: '',
    pincode: '',
    mobile: '',
    description: '',
    type: 'Apartment',
  });

  const [images, setImages] = useState({});

  const types = [
    'Apartment',
    'Villa',
    'Independent House',
    'Studio',
  ];

  const imageFields = [
    { key: 'door', label: 'Door' },
    { key: 'hall', label: 'Hall' },
    { key: 'bedroom', label: 'Bedroom' },
    { key: 'balcony', label: 'Balcony' },
    { key: 'kitchen', label: 'Kitchen' },
    { key: 'bath1', label: 'Bathroom 1' },
    { key: 'bath2', label: 'Bathroom 2' },
    { key: 'parking', label: 'Parking' },
    { key: 'soc1', label: 'Society 1' },
    { key: 'soc2', label: 'Society 2' },
  ];

  const update = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const pickImage = (key) => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 0.7 },
      (response) => {
        if (response.didCancel) return;

        if (response.errorCode) {
          Alert.alert('Error', 'Image pick failed');
          return;
        }

        const uri = response.assets?.[0]?.uri;

        if (uri) {
          setImages(prev => ({
            ...prev,
            [key]: uri,
          }));
        }
      }
    );
  };

  const submit = async () => {
    if (
      !form.title ||
      !form.rent ||
      !form.location ||
      !form.city ||
      !form.state ||
      !form.address ||
      !form.pincode ||
      !form.mobile
    ) {
      Alert.alert('Error', 'Fill all required fields');
      return;
    }

    const missing = imageFields.filter(f => !images[f.key]);

    if (missing.length > 0) {
      Alert.alert('Error', 'Upload all images');
      return;
    }

    try {
     const ownerId = Number(await AsyncStorage.getItem('ownerId'));

      console.log('OWNER ID:', ownerId);

      const payload = {
        title: form.title,
        price: Number(form.rent),
        location: form.location,
        city: form.city,
        address: form.address,
        state: form.state,
        pincode: form.pincode,
        description: form.description,
        propertyType: form.type.toUpperCase(),
        mobileNumber: form.mobile,
      };

      const res = await addProperty(ownerId, payload);

     const propertyId = res?.data?.data?.id;

      console.log('PROPERTY ID:', propertyId);

      if (!propertyId) {
        Alert.alert('Error', 'Property created but ID not found');
        return;
      }

      console.log('PROPERTY ID:', propertyId);

    
      const formData = new FormData();

      imageFields.forEach(field => {
        const uri = images[field.key];

       formData.append('files', {
          uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
          name: `${field.key}.jpg`,
          type: 'image/jpeg',
        });
      });

      const uploadRes = await uploadPropertyImages(propertyId, formData);

      console.log('UPLOAD RESPONSE:', uploadRes?.data);

     
      Alert.alert('Success', 'Property + Images Uploaded');

    } catch (error) {
      console.log('API ERROR:', error?.response?.data || error);
      Alert.alert('Error', 'Failed to upload property');
    }
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'left', 'right']} 
    >
      <StatusBar backgroundColor="#F8FAFF" barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll} 
      >

        <View style={styles.card}>

          <Text style={styles.title}>Upload Property</Text>

          {/* PROPERTY TYPE */}
          <View style={styles.row}>
            {types.map(item => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.typeBtn,
                  form.type === item && styles.activeBtn,
                ]}
                onPress={() => update('type', item)}
              >
                <Text style={[
                  styles.typeTxt,
                  form.type === item && styles.activeTxt,
                ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* INPUTS */}
          <TextInput placeholder="Property Title" placeholderTextColor="#64748B" value={form.title} onChangeText={v => update('title', v)} style={styles.input} />
          <TextInput placeholder="Price" placeholderTextColor="#64748B" keyboardType="number-pad" value={form.rent} onChangeText={v => update('rent', v)} style={styles.input} />
          <TextInput placeholder="Location" placeholderTextColor="#64748B" value={form.location} onChangeText={v => update('location', v)} style={styles.input} />
          <TextInput placeholder="City" placeholderTextColor="#64748B" value={form.city} onChangeText={v => update('city', v)} style={styles.input} />
          <TextInput placeholder="State" placeholderTextColor="#64748B" value={form.state} onChangeText={v => update('state', v)} style={styles.input} />
          <TextInput placeholder="Address" placeholderTextColor="#64748B" value={form.address} onChangeText={v => update('address', v)} style={styles.input} />
          <TextInput placeholder="Pincode" placeholderTextColor="#64748B" keyboardType="number-pad" value={form.pincode} onChangeText={v => update('pincode', v)} style={styles.input} />
          <TextInput placeholder="Mobile Number" placeholderTextColor="#64748B" keyboardType="phone-pad" value={form.mobile} onChangeText={v => update('mobile', v)} style={styles.input} />

          <TextInput
            placeholder="Description"
            placeholderTextColor="#64748B"
            value={form.description}
            onChangeText={v => update('description', v)}
            style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
            multiline
          />

          {/* IMAGE GRID */}
          <Text style={styles.imageTitle}>Property Images (All Required)</Text>

          <View style={styles.imageGrid}>
            {imageFields.map(item => (
              <TouchableOpacity key={item.key} style={styles.imageBox} onPress={() => pickImage(item.key)}>
                {images[item.key] ? (
                  <Image source={{ uri: images[item.key] }} style={styles.imagePreview} />
                ) : (
                  <>
                    <Text style={styles.uploadIcon}>⬆</Text>
                    <Text style={styles.imageTxt}>{item.label}</Text>
                  </>
                )}
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.submitBtn} onPress={submit}>
            <Text style={styles.submitTxt}>Preview Property</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFF' },

  card: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 18,
  },

  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  typeBtn: {
    width: '48%',
    padding: 12,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    marginTop: 10,
    alignItems: 'center',
  },

  scroll: {
    paddingBottom: 120, 
  },

  activeBtn: {
    backgroundColor: '#4338CA',
  },

  typeTxt: {
    color: '#334155',
    fontWeight: '800',
  },

  activeTxt: {
    color: '#fff',
  },

  input: {
    marginTop: 10,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 12,
    color: '#0F172A',
  },

  imageTitle: {
    marginTop: 20,
    fontWeight: '800',
    color: '#0F172A',
  },

  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  imageBox: {
    width: '30%',
    height: 90,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#CBD5E1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F1F5F9',
    overflow: 'hidden',
  },

  uploadIcon: {
    fontSize: 18,
    color: '#64748B',
  },

  imageTxt: {
    fontSize: 11,
    color: '#64748B',
  },

  imagePreview: {
    width: '100%',
    height: '100%',
  },

  submitBtn: {
    marginTop: 20,
    backgroundColor: '#4338CA',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  submitTxt: {
    color: '#fff',
    fontWeight: '900',
  },
});