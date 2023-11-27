import Logo from "@/assets/Teradyne-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-8 text-sm">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Alvin is a self-taught developer challenged by the changes in digital world. <br /> 
            Tenten (Illustrator/daughter) is a budding artist.<br/>
            Current stack - Java/Spring, C#/.NET6, MySQL, React, Google Cloud Platform, Canva.<br/>
            We will be happy to hear from you.
          </p>
          <p>© Teradyne All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">alvinrevis@gmail.com</p>
          <p>(+36) 0917-5263423</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
