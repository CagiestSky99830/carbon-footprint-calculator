import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const SimpleForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can perform further actions with the form data, like sending it to a server
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your age?</Text>
      <Controller
        control={control}
        name="fieldName"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Enter your data"
            // Add other TextInput props as needed
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <Text style={styles.title}>What type of vehicle do you use?</Text>
      <Controller
        control={control}
        name="fieldName"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Enter your data"
            // Add other TextInput props as needed
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <Text style={styles.title}>If you drive a gasoline vehicle, on average, how much miles per gallon do you get?</Text>
      <Controller
        control={control}
        name="fieldName"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Enter your data"
            // Add other TextInput props as needed
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <Text style={styles.title}>If you drive an electric vehicle, on average, how much miles of range do you get at 100% battery capacity?</Text>
      <Controller
        control={control}
        name="fieldName"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Enter your data"
            // Add other TextInput props as needed
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <Text style={styles.title}>If you go on public transport, which method do you use?</Text>
      <Controller
        control={control}
        name="fieldName"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Enter your data"
            // Add other TextInput props as needed
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <Text style={styles.title}>How many people live in your household?</Text>
      <Controller
        control={control}
        name="fieldName"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Enter your data"
            // Add other TextInput props as needed
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <Text style={styles.title}>How much percent of your electricity is your electricity bill is from renewable energy?</Text>
      <Controller
        control={control}
        name="fieldName"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Enter your data"
            // Add other TextInput props as needed
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '70%',
  },
});

export default SimpleForm;