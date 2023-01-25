import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/operations/contactsThunk';
import { selectContacts } from 'redux/contacts/selectors';
import styles from './App.module.css';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  // const users = useSelector(selectContacts);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <section className={styles.phonebook}>
      <div className={styles.container}>
        {/* <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.container}>
        <h2>Contacts</h2>
          <h3>Your phonebook has {users.length} contacts</h3>
          <Filter />
          <ContactList /> */}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </section>
  );
};
