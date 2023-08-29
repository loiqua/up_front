import { createContext, useEffect, useState } from "react";
import profilimage from "./y.jpg";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Loic Andriamahaly",
      profilePic:
      <img src={profilimage} alt="" />
    });
  };

  useEffect(() => {
    // Chargez l'image lorsque le composant est monté.
    const loadImage = () => {
      const image = new Image();
      image.src = profilimage;
      image.onload = () => {
        setCurrentUser({
          ...currentUser,
          profilePic: image,
        });
      };
    };
    loadImage();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};