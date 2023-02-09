# Phonebook

A simple way to keep user's contacts in one place☎

Features:
- Add contacts
- Remove contacts
- Registration and storing the user's own contacts between logins
- Form validation

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

You can find live page
[here](https://veronikanos.github.io/phonebook/)⬅

There is a updated task from [this repository](https://veronikanos.github.io/goit-react-hw-04-phonebook/) and
refactored with Redux toolkit, React Router v6. Styling is done by CSS modules. Contacts are
saved to browser's local storage with persistor so there are saved after the page is refreshed
and after the browser is restarted.

Used backend for this task: [here](https://connections-api.herokuapp.com/docs/). It supports all necessary operations on the contact collection, as well as registering, logging in and user update with JWT. 

Styling is done by CSS modules

Coded by Tlostiuk Veronika.

## PHONE BOOK

#### App's initial view - Home component:

![Screenshot_7](https://user-images.githubusercontent.com/49239848/214679200-69644cc0-ac4f-440d-94a6-879f64ffcea4.png)

#### Register page:

![Screenshot_11](https://user-images.githubusercontent.com/49239848/214679442-f72c52bb-33b7-457a-97e0-025278bc7a63.png)

#### Sign In page:

![Screenshot_19](https://user-images.githubusercontent.com/49239848/214680406-dbc71b0e-d7e6-4935-b735-c39f5fe5c748.png)

#### Registered and logged in user is able to show this page and add new contacts to phone book:

![Screenshot_13](https://user-images.githubusercontent.com/49239848/214679890-5926382a-20ce-45a3-967b-4774f949b703.png)

#### Vanilla validation on input fields without possibility to add an ivalid contact:

![Screenshot_16](https://user-images.githubusercontent.com/49239848/214680196-3cca9956-36da-4eaf-baee-51a88fc504c6.png)

#### All contact's list, allowing the user to delete previously saved contacts:

![Screenshot_17](https://user-images.githubusercontent.com/49239848/214680506-1976934b-f4c7-47f1-b56c-8405c328944a.png)

#### Filter by contact name:

![Screenshot_18](https://user-images.githubusercontent.com/49239848/214680518-5f76dbaf-29c5-4f6e-b212-cc31107680ce.png)

---

### HOW TO RUN THIS PROJECT LOCALLY

Clone this repo:
`git clone https://github.com/Veronikanos/goit-react-hw-08-phonebook.git`

In the project directory, you can run:

#### `npm install`

then

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
