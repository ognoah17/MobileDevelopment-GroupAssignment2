import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const validateInputs = () => {
    const validUsername = username.length >= 5;
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!validUsername) {
      alert("Username must be at least 5 characters.");
      return false;
    }
    if (!validPassword) {
      alert("Password must have 8+ characters, uppercase, lowercase, number, and special character.");
      return false;
    }
    return true;
  };

  const handleSignIn = () => {
    if (validateInputs()) {
      router.push("/home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    margin: 6,
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
