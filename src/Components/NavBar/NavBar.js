import React from 'react';

const NavBar = () => {
    return (
        <div style={{backgroundColor: '#031424'}}>
            <div className='container'>
            <nav class="navbar navbar-expand-lg" style={{backgroundColor: '#031424', color:'#ffffff', fontSize: '12px', fontWeight: '500'}}>
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-lg-0">
        <li class="nav-item">
          <a className="nav-link active text-light px-3" style={{borderRight: '1px solid #BBBBBB'}} aria-current="page" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a className="nav-link text-light px-3" style={{borderRight: '1px solid #BBBBBB'}}  href="#">My Account</a>
        </li>
        <li class="nav-item">
          <a className="nav-link text-light px-3" style={{borderRight: '1px solid #BBBBBB'}}  href="#">Featured Products</a>
        </li>
        <li class="nav-item">
          <a className="nav-link text-light px-3" href="#">Contact</a>
        </li>
      </ul>
      <span class="navbar-text">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a className="nav-link active text-light px-3" aria-current="page" href="#">Order Tracking</a>
        </li>
        <li class="nav-item">
          <a className="nav-link text-light px-3" href="#">English <span style={{color: 'white'}}><i class="fa-solid fa-caret-down"></i></span></a>
          
        </li>
        <li class="nav-item">
          <a className="nav-link text-light px-3" href="#">USD <span><i class="fa-solid fa-caret-down"></i></span></a>
        </li>
      
      </ul>
        
      </span>
    </div>
  </div>
</nav>

<div className='ps-4 pe-3 d-flex flex-wrap justify-content-between py-3'>
    <div style={{position: 'relative', top: '8px'}}>
    <img src="https://i.ibb.co/k4D8Swm/Mask-group.png" className='img-fluid' alt="Mask-group" />

    </div>

    <div className='d-flex'>
        <input
        type='text'
        className='rounded-start'
        style={{height: '59px', width: '584px'}}
        />
        <button className=' rounded-end btn btn-danger px-5'style={{height: '59px'}}>
          <span style={{fontSize: '18px', fontWeight: '500'}}>Search</span>
        </button>
        
    </div>

    <div className='d-flex'>
    <div style={{position: 'relative', top: '11px'}} className='pe-2'>
    <img src="https://i.ibb.co/bNwQ57k/single-01.png" alt="single-01" style={{height: '30px', width: '25px'}}/>
    </div>
    <div className='ps-2'>
        <span style={{fontSize: '16px', fontWeight: '400', color: '#ffffff', opacity: '.65'}}>Sign In</span>
        <br/>
        <span style={{fontSize: '16px', fontWeight: '400', color: '#ffffff'}}>Account</span>
    </div>
    </div>

    <div style={{position: 'relative', top: '11px'}}>
    <img src="https://i.ibb.co/McD3bW8/Group-18263.png"  style={{height: '30px', width: '25px'}} alt="Group-18263" />
    </div>

    <div style={{position: 'relative', top: '11px'}}>
    <img src="https://i.ibb.co/YPXQxzs/Group-18264.png" style={{height: '30px', width: '25px'}} alt="Group-18264"  />
    </div>


</div>

            </div>
            
        </div>
    );
};

export default NavBar;