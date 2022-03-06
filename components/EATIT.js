import React from "react";
import userData from "@constants/data";

export default function eatit() {
    return (


        <section class="relative pt-12 bg-blueGray-50">
            <div class="items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." class="max-w-full rounded-lg shadow-lg" src="placeholdertech.png" />
                </div>
                <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div class="md:pr-12">
                        <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                            <i class="fas fa-rocket text-xl"></i>
                        </div>
                        
                        <a href="https://prezi.com/p/nijepwkajhjw/?present=1"> <h3 class="text-3xl font-semibold text-blue-500">EAT IT</h3></a>
                        <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                            Résumé :

                           Application de commandes en restaurant en fonction de la ville après la création d'un compte utilisateur codé en C#.
                        </p>
                        <ul class="list-none mt-6">
                            <li class="py-2">
                                <div class="flex items-center">
                                    <div>
                                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fas fa-fingerprint"></i></span>
                                    </div>
                                    <div>
                                        <h4 class="text-blueGray-500">
                                            Codage de l'aplication en C#
                                        </h4>
                                        
                                    </div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="flex items-center">
                                    <div>
                                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fab fa-html5"></i></span>
                                    </div>
                                    <div>
                                        <h4 class="text-blueGray-500">Création de base de donnée codée en SQL et </h4>
                                    </div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="flex items-center">
                                    <div>
                                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="far fa-paper-plane"></i></span>
                                    </div>
                                    <div>
                                        <h4 class="text-blueGray-500">Utilisation de XAMARIN</h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer class="relative  pt-8 pb-6 mt-8">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                            <div class="text-sm text-blueGray-500 font-semibold py-1">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );

}
