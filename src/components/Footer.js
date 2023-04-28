const Footer = () => {
  return (
    <>
    <footer  className="flex w-full h-20">
        <div className="w-full">
          <div className="w-1/2 float-left p-16  bg-slate-200">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#" data-testid="footer">Swiggy</a>.
            </p>
          </div>

          <div className=" w-1/2 float-left text-right p-16  bg-slate-200">
              <span><a className="facebook mx-6" href="#"><i className="fa fa-facebook"></i></a></span>
              <span><a className="twitter mx-6" href="#"><i className="fa fa-twitter"></i></a></span>
              <span><a className="dribbble mx-6" href="#"><i className="fa fa-dribbble"></i></a></span>
              <span><a className="linkedin mx-6" href="#"><i className="fa fa-linkedin"></i></a></span>   
          </div>
        </div>
</footer>
    </>
  );
};

export default Footer;
