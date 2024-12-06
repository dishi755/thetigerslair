/* Global Reset */* {    margin: 0;    padding: 0;    box-sizing: border-box;}
/* Body and General Styles */body {    font-family: 'Roboto', sans-serif;    background-color: #f8f8f8;    color: #333;}
a {    text-decoration: none;    color: inherit;}
/* Header and Navigation */#header {    background-color: #4b2c89; /* Purple */    padding: 20px;}
.navbar {    display: flex;    justify-content: space-between;    align-items: center;}
.navbar .logo img {    height: 60px;}
.nav-links {    display: flex;    gap: 30px;}
.nav-links li a {    color: #ffffff;    font-weight: bold;    font-size: 18px;    transition: color 0.3s ease;}
.nav-links li a:hover {    color: #ffd700; /* Gold */}
/* Hero Section */#hero {    background-image: url('assets/images/tigers-lair.jpg');    background-size: cover;    background-position: center;    color: #fff;    padding: 120px 20px;    text-align: center;}
#hero h1 {    font-size: 3rem;    margin-bottom: 20px;}
#hero p {    font-size: 1.5rem;    margin-bottom: 30px;}
.cta-button {    padding: 15px 30px;    background-color: #ffd700; /* Gold */    color: #4b2c89; /* Purple */    border-radius: 5px;    font-weight: bold;    font-size: 18px;}
.cta-button:hover {    background-color: #c09c39;}
/* Footer Section */#footer {    background-color: #4b2c89; /* Purple */    color: #fff;    padding: 20px 0;    text-align: center;}
.footer-container p {    font-size: 16px;}
.social-media {    display: flex;    justify-content: center;    gap: 25px;    padding-top: 10px;}
.social-media li a {    color: #fff;    font-size: 20px;}
.social-media li a:hover {    color: #ffd700; /* Gold */}
/* About Section */#about {    background-color: #e6e6e6;    padding: 50px 20px;    text-align: center;}
#about h2 {    font-size: 2.5rem;    margin-bottom: 20px;}
#about p {    font-size: 1.2rem;    margin-bottom: 30px;}
#about .cta-button {    font-size: 1.2rem;}
/* Responsive Design */@media (max-width: 768px) {    .navbar {        flex-direction: column;        text-align: center;    }
    #hero h1 {        font-size: 2rem;    }
    #hero p {        font-size: 1.2rem;    }
    .cta-button {        font-size: 1rem;    }
    #about h2 {        font-size: 2rem;    }
    #about p {        font-size: 1rem;    }}
