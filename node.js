# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.17.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(to top, #ffffff, #87CEEB);\
.content {
    text-align: center;
    background-color: #ffffff;
    padding: 30px 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    position: relative;
}
.content {
    text-align: center;
    background-color: #48afce;
    padding: 30px 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    position: relative;
}
.cloud {
    background-color: rgb(126, 200, 243);
    padding: 15px 25px;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
   
}
.background-clip{
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
}
@media (max-aspect-ratio:100/9.9){
    .background-clip{
        width: auto;
        height: 100%;
    }
}    <video autoplay loop muted plays-inline class="background-clip">
<source src="./cloudvideo2.mp4"type="video/mp4">
</video>.login-box input {
            width: 95%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
        }
        
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        
        nav ul li a {
            color: rgb(33, 124, 185);
            text-decoration: none;
            font-weight: bold;
        }