import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery'

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);
$(document).ready(function() {
    $("input[name$='network']").on('change click',function() {
        $("input[name$='network']").not(this).prop('checked', false);
        var test = $(this).val();

        $("div.desc").hide();
        $("#filters" + test).show();
    });
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
