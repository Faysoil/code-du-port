import React from "react";
import userData from "@constants/data";
import certifications from "pages/certifications";

export default function Certifications() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Mes certifications
        </h1>
      </div>
      {certifications}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 py-20 pb-40">
          {userData.certifications.map((proj, idx) => (
            <CertificationCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              
              
            />
          ))}
          
        </div>
    
        <section class="max-w-6xl mx-auto px-auto sm:px-auto lg:auto py-0">
         
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src="html.jpg" alt="photo"/>
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">HTML</p>
                <p class="text-base text-gray-400 font-normal">Sololearn</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src="css.jpg" alt="photo"/>
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">CSS</p>
                <p class="text-base text-gray-400 font-normal">Sololearn</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src="php.jpg" alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">PHP</p>
                <p class="text-base text-gray-400 font-normal">Sololearn</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src="Csharp.png" alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">C#</p>
                <p class="text-base text-gray-400 font-normal">Sololearn</p>
              </div>
            </div>
            
           <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src="Python.png" alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Python Pour débutant</p>
                <p class="text-base text-gray-400 font-normal">Sololearn</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src="javascript.png" alt="photo"/>
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Javascript</p>
                <p class="text-base text-gray-400 font-normal">Sololearn</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src="Javagame.jpg" alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Javascript Game Developpement</p>
                <p class="text-base text-gray-400 font-normal">Sololearn</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src="secnum.png" alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">ANSSI Cybersécurité</p>
                <p class="text-base text-gray-400 font-normal">Secnum Académie</p>
              </div>
            </div><div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src="pix.png" alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">PIX</p>
                <p class="text-base text-gray-400 font-normal"></p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src="sql.png" alt="photo"/>
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">SQL</p>
                <p class="text-base text-gray-400 font-normal">Sololearn</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src="respweb.jpg" alt="photo"/>
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Responsive Web Design</p>
                <p class="text-base text-gray-400 font-normal">Sololearn</p>
              </div>
            </div>
           
          </div>

        </section>
        
      </div>
    </section>
  );
}



const CertificationCard = ({ title, link, imgUrl, number }) => {
  
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
          
        </div>
        
        
        
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-green-500 px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
        
      </div>
   
    </a>
    
  );
};
