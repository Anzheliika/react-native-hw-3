import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './LoginScreen.style';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isHiddenPass, setIsHiddenPass] = useState(true);
  const [currentFocused, setCurrentFocused] = useState('');

  const clearUserForm = () => {
    setEmail('');
    setPassword('');
  };

  const onLogin = () => {
    console.log({ email, password });
    clearUserForm();
  };

  const handleFocus = (currentFocusInput = '') => {
    setCurrentFocused(currentFocusInput);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/photo-bg.jpg')}
          style={styles.imageBg}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={-90}
          >
            <View style={styles.form}>
              <Text style={styles.title}>Увійти</Text>

              <TextInput
                style={[
                  styles.input,
                  currentFocused === 'email' && styles.inputFocused,
                ]}
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
                onFocus={() => handleFocus('email')}
              />

              <View>
                <TextInput
                  style={[
                    styles.input,
                    currentFocused === 'password' && styles.inputFocused,
                  ]}
                  placeholder="Пароль"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => handleFocus('password')}
                />
                <TouchableOpacity
                  style={styles.inputTextBtn}
                  onPress={() => {
                    setIsHiddenPass(!isHiddenPass);
                  }}
                >
                  <Text style={styles.passwordText}>
                    {isHiddenPass ? 'Показати' : 'Приховати'}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonTitle}>Увійти</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('RegistrationScreen')}
              >
                <Text style={styles.text}>Немає аккаунту? Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
