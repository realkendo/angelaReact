// library imports
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Card from "./components/Card";
import Entry from "./components/Entry";

// objects import
import contacts from "./contacts";
import emojipedia from "./emojipedia";

// Keeper Component
const Keeper = () => {
  return (
    <>
      <Header />
      <div className="">
        {/* Contacts Section */}
        <div className="">
          <h1 className="">Contact Cards</h1>
          <div className="">
            <Note />
            <Note />
            <Card />
          </div>
        </div>

        {/* Emojipedia Section */}
        <div>
          <h1 className="">Emojipedia 😎</h1>
          <div className="">
          <Note />
          <Note />
          <Entry />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};



// truncating the meaning to a maximum of 10 characters
// const newMeaning = emojipedia.map((entryArray) => entryArray.meaning.substring(0,10))
// console.log(newMeaning);


export default Keeper;
