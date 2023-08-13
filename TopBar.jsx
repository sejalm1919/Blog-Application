import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img 
          className="topImg"
          src="https://e0.pxfuel.com/wallpapers/781/623/desktop-wallpaper-cat-in-the-ocean-beautiful-pretty-cats-blue-nature-kittens-cute-eyes-thumbnail.jpg"
          alt="" 
          />
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      
    </div>
  )
}
