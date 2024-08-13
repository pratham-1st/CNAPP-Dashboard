To run the CNAPP Dashboard project, the essential prerequisites are:

### 1. **Node.js**
   - **Version:** v14 or higher
   - **Purpose:** Node.js is required to run the development server and manage packages. It's essential for executing JavaScript code outside of a browser and is the runtime environment that Vite uses.
   - **Installation:**
     - Download and install from the [official Node.js website](https://nodejs.org/).
     - Verify installation by running:
       ```bash
       node -v
       ```
     - This should return a version number, e.g., `v14.17.0`.

### 2. **npm (Node Package Manager) or yarn**
   - **npm:** Comes bundled with Node.js. Used for managing project dependencies.
   - **Version:** npm v6 or higher, or yarn v1.22 or higher.
   - **Purpose:** npm or yarn is used to install project dependencies listed in the `package.json` file.
   - **Installation:**
     - **npm:** Installed automatically with Node.js.
     - **yarn:** Can be installed via npm:
       ```bash
       npm install -g yarn
       ```
     - Verify installation by running:
       ```bash
       npm -v
       yarn -v
       ```
     - This should return version numbers, e.g., `6.14.13` for npm and `1.22.10` for yarn.
To run the CNAPP Dashboard project locally, follow these steps:

### 3. **Clone the Repository**

If you haven't already cloned the project repository from GitHub, you'll need to do so. Use the following command in your terminal:

```bash
git clone https://github.com/MuJHEMaTMaRO/cnapp-dashboard.git
```

### 4. **Navigate to the Project Directory**

After cloning the repository, navigate to the project directory:

```bash
cd cnapp-dashboard
```

### 5. **Install Dependencies**

Before running the project, you need to install all the required dependencies. Use either `npm` or `yarn` to install them:

```bash
npm install
```

or

```bash
yarn install
```

This command will read the `package.json` file and install all the necessary libraries and dependencies into a `node_modules` folder.

### 6. **Run the Development Server**

Once the dependencies are installed, you can start the development server. This will build and serve the project locally:

```bash
npm run dev
```

or

```bash
yarn dev
```

### 7. **Open the Application in Your Browser**

After running the above command, you should see output in your terminal similar to this:

```bash
VITE v2.5.0  ready in 1234ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Open your web browser and navigate to `http://localhost:3000/`. This will display the CNAPP Dashboard, where you can interact with the widgets and use the interface as intended.


