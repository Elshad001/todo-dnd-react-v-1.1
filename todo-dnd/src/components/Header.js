const Header = ({ text,count }) => {
    return <div className="header-list">
            {text}
          <div>{count}</div>
          </div>
  }

  export default Header