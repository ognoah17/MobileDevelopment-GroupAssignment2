//Jacobs Version 17:26 09-02-2025
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import { useRouter } from "expo-router";
import credentialsData from "../../credentials.json"; // ✅ Import JSON

// ✅ Define Type for User Credentials
interface User {
  username: string;
  password: string;
}

// ✅ Ensure correct type for imported JSON data
const users: User[] = credentialsData.users; // ✅ Access "users" array properly

interface SignInProps {
  onSignIn: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  // ✅ Regex validation
  const isValidUsername = (uname: string) => uname.length >= 5;
  const isValidPassword = (pass: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass);

  // ✅ Check credentials against JSON file
  const authenticateUser = () => {
    if (!isValidUsername(username)) {
      Alert.alert("Error", "Username must be at least 5 characters long.");
      return;
    }
    if (!isValidPassword(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    // ✅ Properly check the "users" array from JSON
    const user = users.find((cred) => cred.username === username && cred.password === password);

    if (!user) {
      Alert.alert("Error", "Invalid username or password.");
      return;
    }

    // ✅ Successful sign-in
    onSignIn();
    router.push("/home"); // Navigate to home screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={authenticateUser} />
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
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
