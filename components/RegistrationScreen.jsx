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
import { Ionicons } from '@expo/vector-icons';
import styles from './RegistrationScreen.style';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isHiddenPass, setIsHiddenPass] = useState(true);
  const [currentFocused, setCurrentFocused] = useState('');

  const clearUserForm = () => {
    setLogin('');
    setEmail('');
    setPassword('');
  };

  const onRegister = () => {
    console.log({ login, email, password });
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
            keyboardVerticalOffset={-150}
          >
            <View style={styles.form}>
              <View style={styles.avatar}>
                <TouchableOpacity>
                  <Ionicons
                    name="add-circle-outline"
                    size={40}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Реєстрація</Text>

              <TextInput
                style={[
                  styles.input,
                  currentFocused === 'login' && styles.inputFocused,
                ]}
                placeholder="Логін"
                value={login}
                onChangeText={setLogin}
                onFocus={() => handleFocus('login')}
              />

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

              <TouchableOpacity style={styles.button} onPress={onRegister}>
                <Text style={styles.buttonTitle}>Зареєструватися</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
              >
                <Text style={styles.text}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
