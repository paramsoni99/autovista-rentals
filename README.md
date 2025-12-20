![Wallpaper Car GIF](https://tenor.com/t9FNnssxWuF.gif)


# 🏎️ AutoVista Rentals

A premium car rental landing page project built to explore the integration of **3D scenes** within modern 2D web layouts. This project serves as a creative playground for learning **React Three Fiber** and advanced animation techniques.

## 🚀 Project Overview
This project is a React-based application designed to showcase a seamless user experience, blending high-quality UI components with an interactive 3D car viewer. The primary focus was learning how to manipulate 3D models, manage WebGL contexts, and create smooth visual transitions.

## 🛠️ Tech Stack
* **Frontend**: React 19 + Vite
* **3D Engine**: Three.js (via `@react-three/fiber` & `@react-three/drei`)
* **Animations**: GSAP (GreenSock Animation Platform)
* **Styling**: Tailwind CSS v4
* **Icons**: Lucide React & React Icons

## ✨ Key 3D Features
* **Interactive 3D Viewer**: A dedicated `ModelViewer` component that handles camera perspective, zoom, and auto-rotation.
* **Auto-Cycling Colors**: The Porsche model features an automated color-transition system that cycles through classic and metallic Porsche finishes every 2 seconds.
* **Smooth Transitions**: Used GSAP to interpolate RGB values, creating a "premium" fade effect between car paints.
* **Stage & Lighting**: Utilizes Drei's `Stage` and `Environment` components to provide realistic "City" lighting and automatic model centering.

## 📂 Project Structure
* `src/components/models/`: Contains the auto-generated JSX components for 3D models (e.g., Porsche 911, Monkey).
* `src/components/ModelViewer.jsx`: The core Canvas wrapper for the 3D experience.
* `src/sections/CTASection.jsx`: A high-conversion section where the 3D model is integrated as a background/hero element.

## 🔧 Setup & Installation
1.  **Clone the repo**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run in development mode**:
    ```bash
    npm run dev
    ```

---
*Developed by [Param Soni](https://paramsoni.me) as a 3D web experimentation project.*