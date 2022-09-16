import ListProfiles from './ListProfiles';
import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar';
import Form from './Form';
import { useCookies } from 'react-cookie'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';
import OwnerInfo from './OwnerInfo';
import DogInfo from './DogInfo';
import UploadImageToS3WithNativeSdk from './UploadImageToS3';
// import PrivateRoute from './PrivateRoute'
// import { AuthProvider } from './AuthContext'
import ForgotPassword from './ForgotPassword';
import ArticleList from './ArticlesList';


function App(props) {
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState('')
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let navigate = useNavigate()


  useEffect(() => {
    fetch('http://localhost:8100/api/articles/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '66fc618e59bb087207582520492082f02e41895b'
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error))

  }, [])

  const editBtn = (article) => {
    setEditArticle(article)
  }

  const updatedInformation = (article) => {
    const new_article = articles.map(myarticle => {
      if (myarticle.id === article.id) {
        return article
      } else {
        return myarticle
      }
    })
    setArticles(new_article)
  }

  const articleForm = () => {
    setEditArticle({ title: '', description: '' })
  }

  const insertedInformation = (article) => {
    const new_articles = [...articles, article]
    setArticles(new_articles)
  }

  const deleteBtn = (article) => {
    const new_article = articles.filter(myarticle => {
      if (myarticle.id === article.id) {
        return false
      }

      return true
    })
    setArticles(new_article)
  }


  useEffect(() => {
    var user_token = token['mytoken']
    console.log('User token is', user_token)
    if (String(user_token) === 'undefined') {
      navigate('/puppy-love/')
    } else {
      navigate('/puppy-love/')
    }
  }, [token])


  const logoutBtn = () => {
    removeToken(['mytoken'])

  }
}
export default App;
