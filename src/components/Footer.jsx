function Footer(){

  let myDate = new Date();
  myDate = myDate.getFullYear();

  return(
    <footer className="footer">
      <p>Copyright &copy; {myDate} DecibelTechnologies</p>
    </footer>
  )
}


export default Footer;