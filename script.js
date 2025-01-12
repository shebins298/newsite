* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background-color: #4CAF50;
    padding: 10px 0;
}

header nav ul {
    list-style-type: none;
    text-align: center;
}

header nav ul li {
    display: inline-block;
    margin: 0 15px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

.hero {
    text-align: center;
    padding: 50px;
    background-color: #333;
    color: white;
}

.about {
    padding: 20px;
    background-color: #fff;
    text-align: center;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #333;
    color: white;
    position: fixed;
    width: 100%;
    bottom: 0;
}

/* Mobile Styles */
@media screen and (max-width: 768px) {
    header nav ul li {
        display: block;
        margin-bottom: 10px;
    }

    .hero {
        padding: 30px;
    }

    .about {
        padding: 15px;
    }
}

/* Smaller Screens (Mobile First) */
@media screen and (max-width: 480px) {
    header nav ul li a {
        font-size: 16px;
    }

    .hero h1 {
        font-size: 24px;
    }

    .about p {
        font-size: 14px;
    }

    footer {
        padding: 5px;
    }
}
