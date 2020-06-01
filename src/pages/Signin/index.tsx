import React from 'react';
import {
  Image, View, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';

import {
  Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText,
} from './styles';

const Signin: React.FC = () => {
  const a = 0;
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Input
              name="email"
              icon="mail"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon="lock"
              placeholder="Senha"
            />
            <Button onPress={() => { console.log('deu'); }}>Entrar</Button>
            <ForgotPassword onPress={() => { console.log('eita'); }}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => {}}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default Signin;
