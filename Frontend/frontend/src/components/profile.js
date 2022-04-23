import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Edit from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom';

export default function Profile() {
  const [] = useState()
    const user = {
        A1 : ["abc","def"],
        A2 :  ["def"],
        B1 : ["abc"],
        B2 :  ["def"],
        C1 : ["abc"],
        C2 :  ["def"],
        D1: ["abc"],
        D2 : ["def"],
    };
    const donation_drives = ["id1","id2"];
    
    return (
        <div className = "ankit">
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">
          <i class="fa fa-home"></i>
          Home
          <span class="sr-only">(current)</span>
          </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-envelope-o">
            <span class="badge badge-danger">11</span>
          </i>
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">
          <i class="fa fa-envelope-o">
            <span class="badge badge-warning">11</span>
          </i>
          Disabled
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa fa-envelope-o">
            <span class="badge badge-primary">11</span>
          </i>
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <ul class="navbar-nav ">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-bell">
            <span class="badge badge-info">11</span>
          </i>
          Test
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-globe">
            <span class="badge badge-success">11</span>
          </i>
          Test
        </a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<div className = "bb_name">
   Blood Bank Name
</div>
<div>
    <table>
        <tbody>
            <div className="table_data">
        
    <div>
     {
      user.A1.map(el => <tr key = {el}>{el}</tr>)
        
    }  
    </div>
    <div>
    {
      user.A2.map(el => <tr>{el}</tr>)
        
    }
    </div>
    
     
     {
      user.B1.map(el => <tr>{el}</tr>)
        
    }
     {
      user.B2.map(el => <tr>{el}</tr>)
        
    }
     {
      user.C1.map(el => <tr>{el}</tr>)
        
    }
     {
      user.C2.map(el => <tr>{el}</tr>)
        
    }
     {
      user.D1.map(el => <tr>{el}</tr>)
        
    }
     {
      user.D2.map(el => <tr>{el}</tr>)
        
    }
    </div>
    </tbody>

    </table>
    
    
</div>
<div className = "Card_section">
    <div className = "Card">card1</div>
    <div className = "Card">card2</div>
    <div className = "Card">card3</div>
    <div className = "Card">card4</div>
    <div className = "Card">card5</div>
    <div className = "Card">card6</div>
    <div className = "Card">card7</div>
    <div className = "Card">card8</div>
</div>
<div>
    <div>
    Donation Drives
    </div>
{donation_drives.map(el=><tr>{el}</tr>)}
    </div>


    <a href = "/create_donation">Create a donation Drives</a>
    <Link to = {`/user/${user_id}`}>
      user profile
    </Link>

    


</div>

    
    )
}