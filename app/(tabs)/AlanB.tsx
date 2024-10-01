import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4A90E2', dark: '#2C3E50' }}
      headerImage={<Ionicons size={200} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>AlanB</ThemedText>
        <ThemedText style={styles.subtitle}>Desarrollador React Native</ThemedText>
        <Collapsible title="Sobre mí">
          <ThemedText style={styles.text}>
            Soy un apasionado desarrollador de React Native con experiencia en la creación de aplicaciones móviles innovadoras.
          </ThemedText>
        </Collapsible>
        <Collapsible title="Habilidades">
          <ThemedText style={styles.text}>
            • React Native
            • JavaScript/TypeScript
            • Redux
            • UI/UX Design
          </ThemedText>
        </Collapsible>
        <ExternalLink
          style={styles.link}
          href="https://github.com/alanbarbe">
          Visita mi GitHub
        </ExternalLink>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#efb810',
    bottom: -50,
    right: 20,
    position: 'absolute',
  },
  container: {
    padding: 20,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#efb810',
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#efb810',
    lineHeight: 24,
    marginBottom: 10,
  },
  link: {
    marginTop: 20,
    fontSize: 18,
    color: '#efb810',
    textAlign: 'center',
  },
});