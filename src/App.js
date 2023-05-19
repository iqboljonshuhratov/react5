import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <main>

<header className="bg-black d-flex justify-content-between pe-5 ps-5 align-items-center">
    <p className="text-light fs-4">Start Bootstrap</p>
    <ul className="d-flex">
        <li><a className="text-light" href="#">Home</a></li>
        <li><a className="text-light" href="#">Abuot</a></li>
        <li><a className="text-light" href="#">Contact</a></li>
        <li><a className="text-light" href="#">Blog</a></li>
    </ul>
</header>

<div className="title bg-secondary bg-opacity-10 border border-top w-100 text-center d-flex align-items-center">
    <p className="fw-bold fs-1 ">Welcome to Blog Home!</p>
    <p className="fs-5">A Bootstrap 5 starter layout for your next blog homepage</p>
</div>

<div className="container mt-5 d-flex">
    <div className="imgbox">
        <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt=""/>
        <div className="border text p-3">
            <p>January 1, 2022</p>
            <p className=" fs-3">Featured Post Title</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <button className="btn btn-primary">Read mode</button>
        </div>
    </div>

    <div className="inputBox ms-5 ps-3 pe-3">
        <div className="input1">
            <header className="w-100 border p-2 bg-secondary bg-opacity-10">
                Search
            </header>
            <div className="input-div w-100 p-3 border">
                <div>
                    <input type="text" className="w-100" placeholder="enter search term..."/>
                </div>
                <div>
                    <button className="btn btn-primary m-0">go</button>
                </div>

            </div>
        </div>
        <div className="input1 mt-4">
            <header className="w-100 border p-2 bg-secondary bg-opacity-10">
                Categories
            </header>
            <div className="input-div d-flex w-100 p-3 border input-div2">
                <div>
                    <a className="d-block" href="#">Web Design</a>                            
                    <a className="d-block" href="#">HTML</a>                            
                    <a className="d-block" href="#">Freebies</a>                            
                </div>
                <div>
                    <a className="d-block" href="#">javaScript</a>                            
                    <a className="d-block" href="#">CSS</a>                            
                    <a className="d-block" href="#">Tutorials</a>   
                    
                </div>

            </div>

            
        </div>

        <div className="input1 mt-4">
            <header className="w-100 border p-2 bg-secondary bg-opacity-10">
                Side Widget
            </header>
            <div className="input-div d-flex w-100 p-3 border input-div2">
                <p>You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</p>
            </div>

            
        </div>
    </div>
</div>

<div className="container2 ps-5 ms-5 pb-4 border-bottom">
   <div className="container ">
        <div className="row d-flex justify-content-between">
            <div className="col-6 border p-0 mt-3">
                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt=""/>
                <div className="p-3">
                    <p>January 1, 2022</p>
                    <p>Post Title</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                    <button className="btn btn-primary">Read more </button>
                </div>
            </div>
            <div className="col-6 border p-0 mt-3">
                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt=""/>
                <div className="p-3">
                    <p>January 1, 2022</p>
                    <p>Post Title</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                    <button className="btn btn-primary">Read more</button>
                </div>
            </div>
            <div className="col-6 border p-0 mt-4">
                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt=""/>
                <div className="p-3">
                    <p>January 1, 2022</p>
                    <p>Post Title</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                    <button className="btn btn-primary">Read more</button>
                </div>
            </div>
            <div className="col-6 border p-0 mt-4">
                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt=""/>
                <div className="p-3">
                    <p>January 1, 2022</p>
                    <p>Post Title</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                    <button className="btn btn-primary">Read more </button>
                </div>
            </div>
            
        </div>
   </div>
</div>

<div className="counter p-5">
   <ul className="d-flex">
       <li className="border">Newer</li>  
       <li className="border bg-primary"><a className="text-light" href="#">1</a></li>  
       <li className="border"><a href="#">2</a></li>  
       <li className="border"><a href="#">3</a></li>  
       <li className="border"><a href="#">...</a></li>  
       <li className="border"><a href="#">15</a></li>  
       <li className="border"><a href="#">older</a></li>  
   </ul>
</div>

<div className="futter">
    Copyright © Your Website 2022
</div>
</main>

    </div>
  );
}

export default App;
