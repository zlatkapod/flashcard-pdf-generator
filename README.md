# Flashcard PDF Generator

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
    - [Accessing the Project on Local Network](#accessing-the-project-on-local-network)
- [Usage](#usage)
    - [Importing CSV Files](#importing-csv-files)
    - [Generating Flashcard PDFs](#generating-flashcard-pdfs)
- [CSV Format](#csv-format)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Overview

**Flashcard PDF Generator** is a React-based web application that allows users to create personalized flashcards by importing word pairs from a CSV file. Whether you're studying a new language, memorizing vocabulary, or preparing for exams, this tool simplifies the process of generating printable flashcards in PDF format.

---

## Features

- **CSV Import:** Easily import word pairs (e.g., vocabulary and translations) from a semicolon-separated CSV file.
- **Dynamic Parsing:** Efficiently parses and validates CSV data to ensure accuracy.
- **Theme Customization:** Utilize Material-UI's theming capabilities to customize the look and feel.
- **PDF Generation:** Generate well-formatted PDF flashcards ready for printing.
- **Responsive Design:** Accessible on various devices, including desktops, tablets, and smartphones.
- **Local Network Sharing:** Share your development server with teammates or testers over the local network.

---

## Tech Stack

- **Frontend:**
    - [React 18](https://reactjs.org/)
    - [Vite](https://vitejs.dev/) - Fast frontend build tool
    - [Material-UI (MUI)](https://mui.com/) - React UI framework
- **Other Libraries:**
    - [Papaparse](https://www.papaparse.com/) (optional) - For enhanced CSV parsing
- **Development Tools:**
    - [Node.js](https://nodejs.org/) & [npm](https://www.npmjs.com/)

---

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **Git** (optional, for cloning the repository)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/flashcard-pdf-generator.git
   cd flashcard-pdf-generator
   ```

   *Alternatively, you can download the repository as a ZIP file and extract it.*

2. **Install Dependencies**

   Ensure you're in the project's root directory, then run:

   ```bash
   npm install
   ```

   This command installs all necessary packages as specified in `package.json`.

### Running the Project

Start the development server with the following command:

```bash
npm run dev
```

This will launch the application in development mode. By default, it runs on [http://localhost:3000](http://localhost:3000).

### Accessing the Project on Local Network

To allow others on your local network to access the development server, you can expose it using the `--host` flag.

1. **Find Your Local IP Address**

    - **Using Terminal:**

      ```bash
      ipconfig getifaddr en0
      ```

        - Replace `en0` with the appropriate network interface if you're using Ethernet (`en1`, etc.).

        - *Example Output:*

          ```
          192.168.1.100
          ```

2. **Run the Development Server with Host Binding**

   ```bash
   npm run dev -- --host 0.0.0.0
   ```

    - Alternatively, a shorter command:

      ```bash
      npm run dev -- --host
      ```

3. **Access the Project Externally**

   On any device connected to the same local network, open a web browser and navigate to:

   ```
   http://<YOUR_LOCAL_IP>:3000/
   ```

   *Replace `<YOUR_LOCAL_IP>` with your actual local IP address (e.g., `http://192.168.1.100:3000/`)*

4. **Firewall Configuration (macOS)**

    - **Allow Incoming Connections:**
        - Go to **System Settings** > **Network** > **Firewall**.
        - Click on **Firewall Options**.
        - Add your terminal application (e.g., Terminal, iTerm) to the list and set it to **Allow incoming connections**.

    - *Note: Ensure that your firewall settings allow traffic on the specified port (default is `3000`).*

---

## Usage

### Importing CSV Files

1. **Prepare Your CSV File**

    - Ensure your CSV file follows the semicolon-separated format:

      ```
      appel;apple
      neushoorn;rhino
      neus;nose
      nee;no
      ```

    - Each line represents a word and its translation.

2. **Importing the CSV**

    - In the application interface, click on the **"Import CSV"** button.
    - Select your prepared CSV file from your device.
    - The application will parse and display the imported words.

### Generating Flashcard PDFs

1. **Review Imported Words**

    - After importing, verify that all word pairs are correctly listed.

2. **Generate PDF**

    - Click on the **"Generate PDF"** button.
    - The application will compile the flashcards and prompt you to download the PDF file.

3. **Print and Use**

    - Open the downloaded PDF and print your flashcards.
    - Use them for your study sessions!

---

## CSV Format

To ensure seamless import and parsing, adhere to the following CSV structure:

- **Delimiter:** Comma (`,`)
- **Structure:** Each line should contain exactly two fields:
    - **Word:** The term you want to learn.
    - **Translation:** The corresponding translation or definition.