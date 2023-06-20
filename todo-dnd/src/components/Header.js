const Header = ({ text,count,darkMode}) => {
    return <div className={darkMode ? "header-list-dark" : "header-list"}>
            {text}
          <div>{count}</div>
          </div>
  }

  export default Header