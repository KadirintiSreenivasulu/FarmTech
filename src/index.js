import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminApp from './AdminApp';
import UserApp from './UserApp';
import StaffApp from './StaffApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
//console.log("User Type : ",sessionStorage.getItem('usertype'));
if(sessionStorage.getItem('usertype')==null){
root.render(  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}
else if(sessionStorage.getItem('usertype').toString()=='admin'){
  root.render(  
    <React.StrictMode>
      <AdminApp />
    </React.StrictMode>
  );
}
else if(sessionStorage.getItem('usertype').toString()=='user'){
  root.render(  
    <React.StrictMode>
      <UserApp />
    </React.StrictMode>
  );
}
else if(sessionStorage.getItem('usertype').toString()=='staff'){
  root.render(  
    <React.StrictMode>
      <StaffApp />
    </React.StrictMode>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
