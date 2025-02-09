import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const SignIn = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const validateInputs = () => {
        const validUsername = username.length >= 5;
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

        if (!validUsername) {
            // do error message for username too short here
            return false;
        }
        if (!validPassword) {
            // do error message for incorrect password format here
            return false;
        }
        return true;
    }

    const handleSignIn = () => {
        if (validateInputs()) {
            alert(`Sign in success, ${username}, ${password}`);
            // go to the welcome screen
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Sign In" onPress={handleSignIn} />
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontWeight: 'bold',
        marginBottom: 20,
    }
});