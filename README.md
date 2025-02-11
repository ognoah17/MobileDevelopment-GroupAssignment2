# **Mobile Development Group Assignment 2**

This project is an **Expo-based** mobile application that demonstrates a simple **sign-in functionality**, **navigation**, and **city detail pages** using React Native and Expo Router.

---

## **📌 Features**

### **🔐 Sign-In System**
- Users must enter a **valid username and password** to log in.
- **Input validation** ensures:
  - Username must be **at least 5 characters long**.
  - Password must be **at least 8 characters**, containing:
    - At least **one uppercase letter (A-Z)**.
    - At least **one lowercase letter (a-z)**.
    - At least **one digit (0-9)**.
    - At least **one special character (@$!%*?&)**.
- Alerts notify users of **incorrect credentials** or **invalid input**.

### **📂 Data Storage**
- **User credentials** are stored in a **JSON file** (`credentials.json`).
- Authentication checks credentials **against the stored JSON file**.
- ⚠️ **Note:** This is **not secure for production**; it’s for **demonstration purposes only**.

### **🛠 Navigation System**
- **Expo Router** handles **screen transitions** between pages.
- Uses a combination of:
  - **Stack Navigation** for screen management.
  - **Tab Navigation** for structured app sections.

### **🏙 City Pages**
- Dedicated pages for **Calgary and Edmonton**.
- Includes:
  - **High-quality images** of each city.
  - **Brief descriptions** of key attractions.
  - **Clickable links** to external websites for more details.

---

## **🛠 Technology Stack**
- **Frontend:** React Native (with Expo)
- **Routing & Navigation:** Expo Router
- **State Management:** React Hooks (`useState`)
- **Data Storage:** JSON file (local credential storage)
- 
---

## **📌 Task Breakdown & Responsibilities**

### **🛠 Team 1: Setup & Navigation Implementation**
**Tasks:**  
✅ Create a new **Expo project**  
✅ Implement **React Navigation** for screen handling  
✅ Build the **Sign-in form** (username & password fields)  
✅ Ensure form validates user input using regex  
✅ Push updates to GitHub and submit a pull request  

👨‍💻 **Completed by:** @its-nic (Nicholas Simard)  

---

### **🔐 Team 2: Data Storage & Sign-In Logic**
**Tasks:**  
✅ Implement **sign-in logic**:  
- Read the JSON file  
- Verify username and password  
- Display error messages:  
  - Incorrect format  
  - Username not found  
  - Incorrect password  

✅ Ensure successful sign-in navigates to the landing page  
✅ Use regex for password validation (8+ characters, uppercase, lowercase, number, special character)  
✅ Push updates to GitHub and submit a pull request  

👨‍💻 **Completed by:** @jacobJ-TheCreator (Jacob Jobse)  

---

### **📱 Team 3: Landing Page, Tabs & Navigation**
**Tasks:**  
✅ Build a **Landing Page** displaying `"Welcome to My New App"`  
✅ Implement **Bottom Tab Navigation** with two tabs:  
- **Tab 1: Calgary** – Displays an image & link to the Calgary website  
- **Tab 2: Edmonton** – Displays an image & link to the Edmonton website  

✅ Use props to dynamically pass city links  
✅ Create a **separate component** for city information styling  
✅ Push updates to GitHub and submit a pull request  

👨‍💻 **Completed by:** @ognoah17 (Noah Jobse)  

---

## **📌 Development Guidelines**
1. **Code Quality:**  
   - Follow **consistent coding conventions** (React best practices).  
   - Ensure **clean and modular code** for readability.  

2. **GitHub Contribution Policy:**  
   - **Each team member must contribute at least 2 commits.**  
   - The final project must have **at least 3 commits in total**.  
   - Push code to GitHub **regularly** to avoid last-minute conflicts.

---

## **📌 Work Credit**
| Team Member | GitHub Handle | Contribution |
|-------------|--------------|--------------|
| **Nicholas Simard** | @its-nic | Setup & Navigation |
| **Jacob Jobse** | @jacobJ-TheCreator | Data Storage & Sign-In Logic |
| **Noah Jobse** | @ognoah17 | Team Lead, Tabs & Navigation |
