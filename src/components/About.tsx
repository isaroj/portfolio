
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl my-2">
          Front-end developer with 2 years of experience in developing high-quality web applications. I have experience in HTML, CSS and JavaScript, and I'm also familiar with popular frameworks such as React.js and Vue.js. I have a passion for crafting beautiful and intuitive user interfaces, and strive to create delightful experiences for my users. I pay close attention to detail when creating my applications.
        </p>

        <br />

        <p className="text-xl">
          Currently I am working with a US based public giant on a financial lead geneartion project, where we handle large volume of data on the UI side very efficiently with the help our own built in custom components. I'm the part of that team that do RnD to develop more such reusable UI comps that help user to get insight from the data.  
        </p>
      </div>
    </div>
  );
};

export default About;